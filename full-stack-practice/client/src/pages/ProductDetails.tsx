import { useEffect, useState } from 'react';
// import { readProduct } from '../lib';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { toDollars } from '../lib';
export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProduct(productId: number): Promise<void> {
      try {
        const response = await fetch(`/api/products/${productId}`); //pulling the single product that matches the id
        if (!response.ok) {
          throw new Error(`fetch error ${response.status}`);
        }
        const product = await response.json();
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) fetchProduct(Number(productId));
  }, [productId]);
  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Product {productId}: {''}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, price, shortDescription, longDescription, imageUrl } = product;
  function handleClick() {
    alert(`Added ${name} to cart`);
    navigate('/');
  }
  return (
    <div className="prod-card-container">
      <div className="prod-card">
        <div className="prod-row">
          <div className="prod-column-third">
            <Link className="prod-text" to="/">
              &lt; Back to Catalog
            </Link>
            <img src={imageUrl} alt={name} className="prod-image" />
          </div>
          <div className="prod-column-two-third">
            <div className="prod-title">
              <h2>{name}</h2>
            </div>
            <div className="prod-price">
              <h3>{toDollars(price)}</h3>
            </div>
            <div className="prod-shortDescription">
              <p>{shortDescription}</p>
            </div>
          </div>
        </div>
        <div className="prod-longDescription">
          <p>{longDescription}</p>
        </div>
        <button className="prod-button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
