import { useEffect, useState } from "react";
import "../../scss/Gallery.scss";
import {listOfArtworks} from '../../listOfArtworks'


function Gallery() {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  useEffect(() => {
    let result: any = [];
    for (let i = 3; i > 0; i--) {
      result.push(
        listOfArtworks.splice(0, Math.ceil(listOfArtworks.length / i))
      );
    }
    setRow1(result[0]);
    setRow2(result[1]);
    setRow3(result[2]);
  }, []);

  return (
    <section className="gallery-section">
      <div className="col">
        {row1
          ? row1.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
      <div className="col">
        {row2
          ? row2.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
      <div className="col">
        {row3
          ? row3.map((item: any) => (
              <a href="" className="img-card" key={item.key}>
                <div className="img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <p className="img-text">{item.text}</p>
                </div>
              </a>
            ))
          : null}
      </div>
    </section>
  );
}

export default Gallery;
