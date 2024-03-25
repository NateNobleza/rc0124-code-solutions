interface IndicatorsProps {
  count: number;
  currentIndex: number;
}

function Indicators({ count, currentIndex }: IndicatorsProps) {
  const indicatorButtons = [];

  for (let i = 0; i < count; i++) {
    indicatorButtons.push(
      <button
        key={i}
        className={i === currentIndex ? 'indicator active' : 'indicator'}>
        {i}
      </button>
    );
  }

  return <div className="indicators">{indicatorButtons}</div>;
}

export default Indicators;
