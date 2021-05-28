import { Card, Row, Col, Container } from "react-bootstrap";

import Movies from "./movie.json";
import ScrollContainer from "react-indiana-drag-scroll";
let movies = [...Movies];
// <Carousel.Item interval={1000}>
//   <img className="d-block w-100" src={props.img} alt={props.title} />
//   <Carousel.Caption>
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </Carousel.Caption>
// </Carousel.Item>
function selectMovie(e) {
  const element = e.currentTarget;
  element.classList.toggle("selectedCard");
}
// function onWheel() {
//     return((
//   e.preventDefault();
//   const container = document.getElementById("movieRow");
//   const containerScrollPosition = document.getElementById("movieRow")
//     .scrollLeft;
//   container.scrollTo({
//     top: 0,
//     left: containerScrollPosition + e.deltaY,
//     behaviour: "smooth",
//   })
//     );
//     )
// }

function CarouselItem() {
  return (
    <Container className="scroll-container mb-5 mt-2">
      <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
        {movies.slice(0, 12).map((movie) => (
          <Col>
            <Card
              onClick={selectMovie}
              className="h-100 text-center card-block "
            >
              <Card.Img variant="cover" src={movie.Poster} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { selectMovie };
export default CarouselItem;
