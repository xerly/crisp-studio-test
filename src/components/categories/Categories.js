import './Categories.scss';
import { categories } from '../../data';

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        const { title, img } = category;
        return (
          <div key={index} className="grid-item">
            <img src={img} alt={title} />
            <div className="grid-text">
              <h2 className="grid-text-title">{title}</h2>
              <h4 className="grid-text-btn">SHOP THE LOOK &rsaquo;</h4>
            </div>
            <div className="overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
