import Link from "next/link";
import { format } from "date-fns";

import { getAllPosts } from "./posts";

export const metadata = {
  title: "blog",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-violet">Blog</h1>
      <p>Stuff I wrote</p>
      <ul className="divide-y divide-soft text-sm">
        <li className="flex px-1 py-2 text-soft">
          <div className="w-[14ch]">Date</div>
          <div>Title</div>
        </li>
        {getAllPosts().map((post) => (
          <li className="px-1 transition hover:bg-interface" key={post.slug}>
            <Link className="flex py-2" href={`/blog/${post.slug}`}>
              <div className="w-[14ch] shrink-0 whitespace-nowrap">
                <time dateTime={post.date.toISOString()}>
                  {format(new Date(post.date), "dd MMM, yyyy")}
                </time>
              </div>
              <div className="line-clamp-1 max-w-[46ch] break-all">
                {post.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
