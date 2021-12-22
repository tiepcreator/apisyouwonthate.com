// Install gray-matter and date-fns
import { join } from 'path';

import {
  getAllContentFromDirectory,
  getContentBySlug,
} from './contentTypeLoader';

const videosDirectory = join(process.cwd(), 'src', 'content', 'videos');
const POST_CONTENT_TYPE = 'video';

export const getVideoBySlug = async (slug) => {
  const post = await getContentBySlug(slug, videosDirectory, POST_CONTENT_TYPE);

  return post;
};

export const getAllVideos = async () => {
  const allBooks = await getAllContentFromDirectory(
    videosDirectory,
    POST_CONTENT_TYPE,
    false
  );

  return allBooks;
};
