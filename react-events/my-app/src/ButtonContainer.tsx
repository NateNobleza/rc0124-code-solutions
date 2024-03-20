type Props = {
  buttonText: string;
  onNextButtonClick: () => void;
};

export function ButtonContainer({ buttonText, onNextButtonClick }: Props) {
  const handleClick = () => {
    onNextButtonClick();
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
