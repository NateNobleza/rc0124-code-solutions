import './NotFound.css';

type Props = {
  onDone: () => void;
};

export function NotFound({ onDone }: Props) {
  return (
    <div className="Header-content">
      <div className="row">
        <div onClick={onDone} className="col text-center text-muted mb-5">
          <h3>Uh oh, we could not find the page you were looking for!</h3>
          Return to the Dashboard
        </div>
      </div>
    </div>
  );
}
