import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { parseISO, compareDesc } from 'date-fns';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(filterByTag: string | null = null, limit: number = -1) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.reduce((allPosts, fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);

    // filter by tag if param present
    if (filterByTag) {
      if (frontMatter.tags.includes(filterByTag)) {
        return [
          {
            slug,
            ...frontMatter,
            content
          },
          ...allPosts,
        ]
      } else {
        return allPosts;
      }
    } else {
      return [
        {
          slug,
          ...frontMatter,
          content
        },
        ...allPosts,
      ]    
    }
  }, []);

  // Sort posts by last updated in reverse chronological order
  const sortedPosts = allPostsData.sort((a, b) => {
    const aDateString = a.updated ? a.updated : a.created;
    const bDateString = b.updated ? b.updated :  b.created;

    const aDate = parseISO(aDateString);
    const bDate = parseISO(bDateString);

    return compareDesc(aDate, bDate);
  });
  return (limit === -1 ? sortedPosts : sortedPosts.slice(0, limit));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  return {
    frontMatter,
    content
  };
}

export function getAllTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allTags = {}; 

  fileNames.map((postSlug) => {
    const source = fs.readFileSync(path.join(postsDirectory, postSlug), 'utf8');
    const { data } = matter(source);
    data.tags.forEach((tag: string) => (tag in allTags ? allTags[tag] += 1 : allTags[tag] = 1));
  })
  return allTags;
}