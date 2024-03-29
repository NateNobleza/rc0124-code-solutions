import './ImageContainer.css';

type Props = {
  starryImage: string;
};

export function ImageContainer({ starryImage }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={starryImage} alt="space-image" />
      </div>
    </div>
  );
}
