interface BannerProps {
  currentItem: string;
}

function Banner({ currentItem }: BannerProps) {
  return <div>{currentItem}</div>;
}

export default Banner;
