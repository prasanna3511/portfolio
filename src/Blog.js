import React from "react";
import "./Blog.css";
import Blog1 from './img/savarkar.jpg';
import Blog2 from './img/Dhoni1.jpg';
import Blog3 from './img/bill.png';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Motivators</h1>
        <p className="heading p__color">
          Here are some legends inspired me
        </p>
        <p className="heading p__color">
          i try to follow there path.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         {/* <h5 className="project__text">Development</h5> */}
                         <h4 className="project__text">Indian freedom fighter</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         {/* <h5 className="project__text">Development</h5> */}
                         <h4 className="project__text">Successfull Cricketer</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         {/* <h5 className="project__text">Development</h5> */}
                         <h4 className="project__text">Businessman</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
