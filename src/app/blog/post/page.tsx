import metaUrl from "~/utils/meta-url";

export const metadata = {
  title: "Blog post",
  ...metaUrl(),
};

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-9xl font-bold">This is a blog post.</h1>
    </main>
  );
}
