import './Bestsellers.scss';
import { articles } from '../../data';

const Bestsellers = () => {
  return (
    <>
      <section className="best-sellers">
        <div className="best-sellers-header">
          <div className="best-sellers-line"></div>
          <div className="best-sellers-title">
            <h4>BEST SELLERS</h4>
          </div>
          <div className="best-sellers-line"></div>
        </div>
      </section>
      <section className="best-sellers-slider">
        <div className="slider-container">
          {articles.map((article, index) => {
            const { img, like, title, brand, price } = article;
            return (
              <article key={index} className="slider-product">
                <img className="product-image" src={img} alt={brand} />
                <img className="product-like" src={like} alt="like" />
                <div className="product-info">
                  <h5 className="product-title">{title}</h5>
                  <h5 className="product-brand">{brand}</h5>
                  <h5 className="product-price">{price}</h5>
                  <button className="product-shopnow-btn">
                    <h4 className="shopnow-btn-title">SHOP NOW</h4>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <button className="slider-btns prev-btn">
          <span className="slider-btn-icon">&lsaquo;</span>
        </button>
        <button className="slider-btns next-btn">
          <span className="slider-btn-icon">&rsaquo;</span>
        </button>
      </section>
    </>
  );
};

export default Bestsellers;
