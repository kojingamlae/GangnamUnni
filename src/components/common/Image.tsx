interface PropsType {
  width: string;
  height: string;
  src: string;
  alt: string;
  cursor?: "pointer" | "none";
}

const Image = ({ width, height, src, alt, cursor = "none" }: PropsType) => {
  return <img src={src} style={{ width, height, cursor }} alt={alt} />;
};
export default Image;
