type Props = {
  button1: string;
};

export function ButtonContainer({ button1 }: Props) {
  return (
    <div>
      <button>{button1}</button>
    </div>
  );
}
