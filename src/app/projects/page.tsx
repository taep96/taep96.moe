import Image from "next/image";
import Link from "next/link";
import { Octokit } from "octokit";
import Columns from "react-auto-columns";
import { Star } from "react-feather";

import metaUrl from "~/utils/meta-url";

// Projects that aren't worth showing
const blacklist = ["taep96"];

// Revalidate projects every 24 hours
export const revalidate = 60 * 60 * 24;

export const metadata = {
  title: "projects",
  ...metaUrl(),
};

export default async function Page() {
  const octokit = new Octokit();

  const { data } = await octokit.rest.repos.listForUser({ username: "taep96" });
  const projects = data
    .filter((project) => !project.fork && !blacklist.includes(project.name))
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-violet">Projects</h1>
      <p>Stuff I made</p>
      <Columns
        className="flex  gap-2"
        columnClassName="flex flex-col gap-2 flex-1 max-w-md"
        // Tailwind lg breakpoint
        columns={{ 1024: 2 }}
      >
        {await Promise.all(
          projects.map(async (project) => (
            <div className="rounded bg-interface" key={project.id}>
              <Image
                src={await getOgImage(project.html_url)}
                alt={project.name}
                width={1200}
                height={600}
              />
              <div className="flex flex-col gap-2 p-4 pt-3">
                <Link
                  className="text-xl font-bold text-violet hover:underline"
                  href={project.html_url}
                  target="_blank"
                >
                  {project.name}
                </Link>
                <p>{project.description}</p>
                <p className="flex items-center gap-4">
                  <span
                    style={{
                      color:
                        languageColors[
                          project.language as keyof typeof languageColors
                        ],
                    }}
                  >
                    {project.language}
                  </span>
                  {!!project.stargazers_count && (
                    <span className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-salmon text-salmon" />
                      {project.stargazers_count}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))
        )}
      </Columns>
    </main>
  );
}

async function getOgImage(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  const match = text.match(/<meta property="og:image" content="(.+?)"/);

  return match && match[1] ? match[1] : "";
}

const languageColors = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Rust: "#DEA584",
};
