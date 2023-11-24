// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const allCollection = defineCollection({
  type: 'data',
});
const homeCollection = defineCollection({
  type: 'data',
});
const aboutCollection = defineCollection({
  type: 'data',
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'all': allCollection, // 'all' is the name of the directory inside 'src/content
  'home': homeCollection,
  'about': aboutCollection,
};