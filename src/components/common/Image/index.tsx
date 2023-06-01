interface PropsType {
  width: string;
  height: string;
  src: string;
  alt: string;
  cursor?: "pointer" | "default" | "none";
  borderRadius?: string;
}

const Image = ({
  width,
  height,
  src,
  alt,
  cursor = "default",
  borderRadius,
}: PropsType) => {
  return (
    <img src={src} style={{ width, height, cursor, borderRadius }} alt={alt} />
  );
};
export default Image;
