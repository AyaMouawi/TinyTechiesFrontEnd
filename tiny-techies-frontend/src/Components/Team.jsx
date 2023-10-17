import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Team() {

  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (          

    <section className="section-white">
              
              <h2 >Our trainers</h2>
              


              <div className="carousel">

            <Slider {...settings}>
              
           


                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>
              


                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>


                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>
            

            
                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>


                  
                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>


                  
                  <div className="team-item">
                    <img
                      src="Images/Trainer.png"
                      className="team-img"
                      alt="pic"
                    />
                    <h3>Trainer </h3>
                    <p className="pslider">Description</p>
                  </div>

              
            </Slider>
            </div>
    </section>
  );
}

export default Team;
