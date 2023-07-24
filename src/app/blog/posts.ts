import fs from "fs";
import path from "path";
import { compareDesc } from "date-fns";
import matter from "front-matter";
import { globSync } from "glob";

type Post = {
  date: Date;
  title: string;
  description: string;
};

export function getPostBySlug(slug: string) {
  const post = fs.readFileSync(
    path.join(process.cwd(), `src/posts/${slug}.mdx`),
    "utf-8"
  );
  const {
    attributes: { date, title, description },
    body,
  } = matter<Post>(post);

  if (!date) throw new Error(`${slug} is missing a date`);
  if (!title) throw new Error(`${slug} is missing a title`);
  if (!description) throw new Error(`${slug} is missing a description`);

  return { slug, date, title, description, body };
}

export function getAllPosts() {
  return globSync("src/posts/*.mdx")
    .map((file) =>
      // gets rid of `src/posts/` and `.mdx`
      file.slice(10, -4)
    )
    .flatMap((slug) => getPostBySlug(slug))
    .sort((a, b) => compareDesc(a.date, b.date));
}
