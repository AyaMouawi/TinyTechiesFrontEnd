import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TrainerContainer from './TrainerContainer';
import "../css/Team.css";

function Team() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/trainers/getAllTrainers`)
      .then(response => {
        setTrainers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
    dots: false,
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
    <div className="team-carousel">
      <h1 className="OurTrainers">Our trainers</h1>
      <Slider {...settings}>
        {trainers.map(trainer => (
          <TrainerContainer
            key={trainer.User_id}
            TrainerName={trainer.UserFullName}
            TrainerImage={trainer.TrainerImage}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Team;
