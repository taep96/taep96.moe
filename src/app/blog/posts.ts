import { compareDesc } from "date-fns";
import { globSync } from "glob";
import matter from "gray-matter";

export function getPostBySlug(slug: string) {
  const postMatter = matter.read(`src/posts/${slug}.mdx`);

  if (!postMatter.data.date) throw new Error(`${slug} is missing a date`);
  if (!postMatter.data.title) throw new Error(`${slug} is missing a title`);
  if (!postMatter.data.description)
    throw new Error(`${slug} is missing a description`);

  return {
    slug,
    date: postMatter.data.date as Date,
    title: postMatter.data.title as string,
    description: postMatter.data.description as string,
    content: postMatter.content,
  };
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
