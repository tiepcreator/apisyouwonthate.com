// Install gray-matter and date-fns
import { join } from 'path';

import {
  getAllContentFromDirectory,
  getContentBySlug,
} from './contentTypeLoader';

const postsDirectory = join(process.cwd(), 'src', 'content', 'books');
const POST_CONTENT_TYPE = 'book';

export const getBookBySlug = async (slug) => {
  const post = await getContentBySlug(slug, postsDirectory, POST_CONTENT_TYPE);

  return post;
};

export const getAllBooks = async () => {
  const allBooks = await getAllContentFromDirectory(
    postsDirectory,
    POST_CONTENT_TYPE
  );

  return allBooks;
};

export const getAllBooksByTag = async (tag) => {
  const books = await getAllBooks();

  return books.filter((book) => book?.frontmatter?.tags?.includes(tag)) || [];
};
