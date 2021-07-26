import './Koiski.scss';
import { koiski } from '../../data';

const Koiski = () => {
  return (
    <section className="koiski">
      {koiski.map((image, index) => {
        return (
          <div key={index} className="grid-item">
            <img src={image} alt="SHOP THE LOOK" />
            <div className="grid-text">SHOP THE LOOK &rsaquo;</div>
            <div className="overlay"></div>
          </div>
        );
      })}
      <div className="koiski-title">
        <span>#KOISKI</span>
      </div>
    </section>
  );
};

export default Koiski;
