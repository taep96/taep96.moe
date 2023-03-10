import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  SITE_URL: z.string().url(),
});

export const env = schema.parse(process.env);

export const isDev = () => {
  return env.NODE_ENV === "development";
};
