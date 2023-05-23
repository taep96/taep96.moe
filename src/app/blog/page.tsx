import metaUrl from "~/utils/meta-url";

export const metadata = {
  title: "blog",
  ...metaUrl(),
};

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-salmon">
        <i>🚧 // TODO: Blog 🚧</i>
      </h1>
    </main>
  );
}
