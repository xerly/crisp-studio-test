import './NewIn.scss';
import { products } from '../../data';

console.log(document.offsetWidth);

const NewIn = () => {
  // // display products
  // const container = document.querySelector('.slider-container');
  // const nextBtn = document.querySelector('.next-btn');
  // console.log(nextBtn);
  // const prevBtn = document.querySelector('.prev-btn');

  // // Slide
  // const startSlider = (type) => {
  //   const active = document.querySelector('.active');
  //   const last = document.querySelector('.last');
  //   let next = active.nextElementSibling;
  //   active.classList.remove(['active']);
  //   last.classList.remove(['last']);
  //   next.classList.remove(['next']);

  //   active.classList.add('last');
  //   last.classList.add('next');
  //   next.classList.add('active');
  // };

  return (
    <>
      <section className="new-in">
        <div className="new-in-header">
          <div className="new-in-line"></div>
          <div className="new-in-title">
            <h4>NEW IN</h4>
          </div>
          <div className="new-in-line"></div>
        </div>
      </section>
      <section className="new-in-slider">
        <div className="slider-container">
          {products.map((product, index) => {
            const { img, like, title, brand, price } = product;
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

export default NewIn;
