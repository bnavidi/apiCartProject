import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/1200/400",
      title: "Slide 1",
      description: "Welcome to our store",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/112/1200/400",
      title: "Slide 2",
      description: "Welcome to our Products",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/137/1200/400",
      title: "Slide 3",
      description: "Best Deals",
    },
  ];

  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.title}
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
