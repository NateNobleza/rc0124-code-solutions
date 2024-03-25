function Indicators({ itemCount, currentIndex }) {
  const indicatorButtons = [];

  for (let i = 0; i < itemCount; i++) {
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
