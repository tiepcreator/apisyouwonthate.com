// Install gray-matter and date-fns
import { join } from 'path';

import { getAllContentFromDirectory } from './contentTypeLoader';

const authorsDirectory = join(process.cwd(), 'src', 'content', 'authors');
const AUTHOR_CONTENT_TYPE = 'author';

export const getAllAuthors = async () => {
  const allAuthors = await getAllContentFromDirectory(
    authorsDirectory,
    AUTHOR_CONTENT_TYPE
  );

  return allAuthors;
};

export const getAuthorByName = async (authorName) => {
  const authors = await getAllAuthors();

  console.log(allAuthors.length);

  const [author] = authors.find(
    (author) => author.frontmatter.name === authorName
  );

  return author;
};
