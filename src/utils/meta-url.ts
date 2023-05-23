import { metadata as rootmeta } from "~/app/layout";

export default function metaUrl() {
  // __filename returns a location inside the .next which is not ideal but it works
  const page = __filename
    .replace(`${process.cwd()}/.next/server/app/`, "")
    .replace("/page.js", "");

  return {
    alternates: {
      canonical: page,
    },
    openGraph: {
      ...rootmeta.openGraph,
      page,
    },
  };
}
