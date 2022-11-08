import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const textDirectory = path.join(process.cwd(), 'text');

export async function getFileContent(filename: string, subdir: string = '') {
  const fullPath = path.join(textDirectory, subdir, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  return processedContent.toString();
}