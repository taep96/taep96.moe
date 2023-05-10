import { globSync } from "glob";

const date = new Date();
const pageNames = globSync("./src/app/**/page.tsx", { nodir: true }).map(
  (file) =>
    // gets rid of `./src/app/` and `/page.tsx`
    file.slice(8, -9)
);

export default function sitemap() {
  return pageNames.map((pageName) => {
    return {
      url: `https://taep96.moe/${pageName}`,
      lastModified: date,
    };
  });
}
