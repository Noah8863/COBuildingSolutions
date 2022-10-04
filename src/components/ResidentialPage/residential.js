import React from "react";
import './residential.scss';

import img1 from "../../images/homePt1.jpg";
import img2 from "../../images/homePt2.jpg";
import img3 from "../../images/homePt3.jpg";
import img4 from "../../images/homePt4.jpg";
import img5 from "../../images/residentialPt1.jpg";
import img6 from "../../images/residentialPt2.jpg";

function Residential() {
  return (
    <main>
      <h1 className="Headers">RESIDENTIAL GALLERY</h1>
      <div className="Container">
        <div className="box">
          <img className="images" src={img1} alt={img1} />
        </div>
        <div className="box">
          <img className="images" src={img2} alt={img2} />
        </div>
        <div className="box">
          <img className="images" src={img3} alt={img3} />
        </div>
        <div className="box">
          <img className="images" src={img4} alt={img4} />
        </div>
        <div className="box">
          <img className="images" src={img5} alt={img5} />
        </div>
        <div className="box">
          <img className="images" src={img6} alt={img6} />
        </div>
      </div>
      <div className="TextContainer">
        <h1 className="Headers">WORKING WITH US</h1>
        <p>
          With Colorado Building Solutions we... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Morbi sit amet nunc augue. Proin sit amet
          suscipit tortor. Nunc augue turpis, efficitur ultricies nisi ut,
          mattis ultrices ex. Ut eu elit egestas felis interdum mattis. Nullam
          quis dignissim nulla, ut tincidunt tortor. Nulla cursus massa eget
          nunc rutrum tincidunt
        </p>
        <h1 className="Headers">WHAT WE PROVIDE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet nunc augue. Proin sit amet suscipit tortor. Nunc augue turpis,
          efficitur ultricies nisi ut, mattis ultrices ex. Ut eu elit egestas
          felis interdum mattis. Nullam quis dignissim nulla, ut tincidunt
          tortor. Nulla cursus massa eget nunc rutrum tincidunt
        </p>
      </div>
      <h1 id="feedBackHeader">FEEDBACK</h1>
      <div className="feedbackContainter">
        <p>
          “If you’re looking for a reliable, efficient, and trustworthy
          contractor, you’ve definitely come to the right place. Colorado
          Building Solutions is the absolute best and really knows how to
          deliver. You won’t be let down!”
        </p>

        <p>
          “I was very impressed at how the final result turned out. The team at
          Colorado Building Solutions is really talented, with the skills and
          expertise to get the job done right. Highly recommended!”
        </p>

        <p>
          “I’m so happy I chose to work with Colorado Building Solutions. From
          the initial consultation all the way through the project’s conclusion,
          the service I received was impeccable and the end result really
          brought my vision to life.”
        </p>
      </div>
    </main>
  );
}
export default Residential;
