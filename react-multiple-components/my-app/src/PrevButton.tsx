type NextButtonProps = {
  onClick: () => void;
}

function NextButton({ onClick }: NextButtonProps) {
  return <button onClick={onClick}>Next</button>;
}

export default NextButton;
