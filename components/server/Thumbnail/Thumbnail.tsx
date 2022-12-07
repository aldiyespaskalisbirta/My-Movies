import Image from "next/image";
// Image

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => (
  <Image
    fill
    sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 20vw"
    src={imgUrl}
    alt="Thumbnail"
    className="object-contain"
  />
);

export default Thumbnail;
