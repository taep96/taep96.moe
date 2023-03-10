import NextImage, { type ImageProps } from "next/image";

export default function Image(Props: ImageProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NextImage placeholder="blur" {...Props} />;
}
