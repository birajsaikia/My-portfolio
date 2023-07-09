import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../Content/data.json";
// import "../Style/work.scss"
import "../Content/Work.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsGithub } from "react-icons/bs";
const Work = () => {
  return (
    <div id="head">
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img className="image" src={i.imgSrc} alt={i.title} width={100}/>
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <div>
                    <a href={i.url} target="blank">
                      View Demo
                    </a>
                    <a href={i.git} target="blank">
                      <BsGithub />
                      Github
                    </a>
                  </div>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
    </div>
  );
};

export default Work;