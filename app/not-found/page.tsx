/** Next.js currently doesn't have support
 *  for unmatched route pages in `app` directory,
 *  so this page will only show on request to
 * `/not-found` and won't return HTTP 404.
 */

import Kaomoji from "./kaomoji";

export const metadata = {
  title: `Page not found`,
};

export default function Page() {
  return (
    <>
      <h1 className="after:animate-cursor after:bg-fennel after:text-fennel after:content-['-']">
        404 <Kaomoji />
      </h1>
      <p>
        Couldn&apos;t find the page you were looking for -{" "}
        <a href="/">go home?</a>
      </p>
    </>
  );
}
