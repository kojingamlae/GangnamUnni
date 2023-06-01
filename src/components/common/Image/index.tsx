interface PropsType {
  width: string;
  height: string;
  src: string;
  alt: string;
  cursor?: "pointer" | "default" | "none";
}

const Image = ({ width, height, src, alt, cursor = "default" }: PropsType) => {
  return <img src={src} style={{ width, height, cursor }} alt={alt} />;
};
export default Image;
