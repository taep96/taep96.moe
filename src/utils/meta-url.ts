import { metadata as rootmeta } from "~/app/layout";

export default function metaUrl(url: string) {
  return {
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...rootmeta.openGraph,
      url,
    },
  };
}
