import ScrollContainer from "react-indiana-drag-scroll";
import CarouselItem from "./CarouselItem.jsx";

// getData = async (movies) => {
//     const url = "http://www.omdbapi.com/";
//     const APIkey ="b35b3d1f"
//     cosnt resp = await fetch(url + "key")

// Single Carousel Component
// TO rework into Bootsrap- react

function MyCarousel() {
  return (
    <ScrollContainer className="scroll-container">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </ScrollContainer>
  );
}

export default MyCarousel;
