type ItemsProps = {
  items: string[];
  index?: boolean;
}

function Items({ items }: ItemsProps) {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>No matching items found.</li>
      )}
    </ul>
  );
}

export default Items;
