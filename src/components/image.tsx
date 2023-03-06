import NextImage, { type ImageProps } from "next/image";

export default function Image(Props: ImageProps) {
  return <NextImage placeholder="blur" {...Props} />;
}
