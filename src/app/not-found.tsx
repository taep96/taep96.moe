import Link from "next/link";

import { Kaomoji } from "./client";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        404 <Kaomoji />
        <span className="animate-cursor bg-violet text-violet">-</span>
      </h1>
      <p>
        Couldn&apos;t find the page you were looking for -{" "}
        <Link className="text-violet hover:underline" href="/">
          go home?
        </Link>
      </p>
    </main>
  );
}
