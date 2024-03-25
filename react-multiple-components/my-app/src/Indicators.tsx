type IndicatorsProps = {
  count: number;
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

function Indicators({count, currentIndex, onIndicatorClick,}: IndicatorsProps) {
  const indicatorButtons = [];

  for (let i = 0; i < count; i++) {
    indicatorButtons.push(
      <button
        key={i}
        className={i === currentIndex ? 'indicator active' : 'indicator'}
        onClick={() => onIndicatorClick(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="indicators">{indicatorButtons}</div>;
}

export default Indicators;
