import Image, { type ImageProps } from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import imageSize from "image-size";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { getAllPosts, getPostBySlug } from "../posts";
import { Pre } from "./client";

export function generateStaticParams() {
  return getAllPosts().map((post) => post.slug);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug) || notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug) || notFound();

  return (
    <main className="flex max-w-[65ch] flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-violet">{post.title}</h1>
          <time className="text-soft" dateTime={post.date.toISOString()}>
            {format(new Date(post.date), "dd MMMM, yyyy")}
          </time>
        </div>
        <p className="">{post.description}</p>
      </div>
      <article className="prose">
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm] },
          }}
          components={{
            // @ts-expect-error - async component
            img: Img,
            pre: Pre,
          }}
        />
      </article>
    </main>
  );
}

interface ImgProps extends ImageProps {
  src: string;
}

async function Img({ src, alt, ...props }: ImgProps) {
  let width: number | undefined, height: number | undefined, imageSrc: string;

  if (src?.startsWith("http")) {
    const res = await fetch(src);
    const buffer = await res.arrayBuffer();
    const size = imageSize(Buffer.from(buffer));

    imageSrc = src;
    width = size.width || 0;
    height = size.height || 0;
  } else {
    const size = imageSize(`public/${src || ""}`);

    imageSrc = `/${src || ""}`;
    width = size.width || 0;
    height = size.height || 0;
  }

  return (
    <div className="my-6">
      <Image
        className="mb-0 rounded"
        src={imageSrc}
        alt={alt || ""}
        width={width}
        height={height}
        {...props}
      />
      <div className="mx-auto mt-2 text-center text-soft">{alt}</div>
    </div>
  );
}
