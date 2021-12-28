// Install gray-matter and date-fns
import { join } from 'path';

import {
  getAllContentFromDirectory,
  getContentBySlug,
} from './contentTypeLoader';

const booksDirectory = join(process.cwd(), 'src', 'content', 'books');
const POST_CONTENT_TYPE = 'book';

export const getBookBySlug = async (slug) => {
  const book = await getContentBySlug(slug, booksDirectory, POST_CONTENT_TYPE);

  return book;
};

export const getAllBooks = async () => {
  const allBooks = await getAllContentFromDirectory(
    booksDirectory,
    POST_CONTENT_TYPE
  );

  return allBooks;
};
