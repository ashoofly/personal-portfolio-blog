import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
 
const postsDirectory = path.join(process.cwd(), 'pages/blog/posts');

export function getSortedPostsData(filterByTag: string | null = null, limit: number = -1) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.reduce((allPosts, fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // filter by tag if param present
    if (filterByTag) {
      if (matterResult.data.tags.includes(filterByTag)) {
        return [
          {
            id,
            ...matterResult.data,
          },
          ...allPosts,
        ]
      } else {
        return allPosts;
      }
    } else {
      return [
        {
          id,
          ...matterResult.data,
        },
        ...allPosts,
      ]    
    }
  }, []);

  // TODO: Actually sort posts by date
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  return (limit === -1 ? sortedPosts : sortedPosts.slice(0, limit));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; created: string; updated: string; tags: string }),
  };
}

export function getAllTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allTags = new Set<string>(); 

  fileNames.map((postSlug) => {
    const source = fs.readFileSync(path.join(postsDirectory, postSlug), 'utf8')
    const { data } = matter(source)

    data.tags.forEach((tag: string) => allTags.add(tag))
  })
  return Array.from(allTags)
}