import { globSync } from "glob";

import { getAllPosts } from "/src/app/blog/posts";

const date = new Date();
const pageNames = globSync("src/app/**/page.tsx", { nodir: true }).map((file) =>
  // gets rid of `src/app/` and `/page.tsx`
  file.slice(8, -9)
);

export default function sitemap() {
  const pages = pageNames
    .filter((pageName) => !pageName.startsWith("blog/"))
    .map((pageName) => {
      return {
        url: `https://taep96.moe/${pageName}`,
        lastModified: date,
      };
    });

  const posts = getAllPosts().map((post) => {
    return {
      url: `https://taep96.moe/blog/${post.slug}`,
      lastModified: date,
    };
  });

  return pages.concat(posts);
}
