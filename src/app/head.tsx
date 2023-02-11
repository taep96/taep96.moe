export default function Head() {
  const title = "taep96's epic website";
  const description = "Hey there! I'm taep96!";
  const embedImagePath = "apple-touch-icon.png";
  const embedImageSize = "summary";
  const { host: domain, href: canonical } = new URL(
    `https://${process.env.VERCEL_URL!}/`
  );

  return (
    <>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content="#202231" />
      <link rel="canonical" href={canonical} />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={canonical + embedImagePath} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={embedImageSize} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={canonical + embedImagePath} />
    </>
  );
}
