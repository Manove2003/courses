import Slider from "react-slick";
import EventCard from "./EventCard";

const EventSlider = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-6">
      <Slider {...settings}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            imgSrc={event.imgSrc}
            tag={event.tag}
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
