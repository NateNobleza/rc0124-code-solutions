type PrevButtonProps = {
  onClick: () => void;
}

function PrevButton({ onClick }: PrevButtonProps) {
  return <button onClick={onClick}>Prev</button>;
}

export default PrevButton;
