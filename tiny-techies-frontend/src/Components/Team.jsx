import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TrainerContainer from './TrainerContainer'
import "../css/Team.css"


function Team() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
       
        onClick={onClick}
        src="Images/arrow-right-solid.svg"
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
     
        onClick={onClick}
        src="Images/arrow-left-solid.svg"
      />
    );
  }
  var settings = {
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

    <div  className="team-carousel">
              
               <h1 className="OurTrainers" >Our trainers</h1>
          


        

            <Slider {...settings}>
              
           


                <TrainerContainer/>
              


                <TrainerContainer/>


                <TrainerContainer/>
            

            
                <TrainerContainer/>


                  
                <TrainerContainer/>

                  
                <TrainerContainer/>

              
            </Slider>
           
    </div>
  );
}

export default Team;
