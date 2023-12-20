import Carousel from "react-bootstrap/Carousel";

function Carusel() {
    return (
        <Carousel className="carousel-header">
            <Carousel.Item>
                <img src="img/pexels-10.jpg" alt="" />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/pexels-12.jpg" alt="" />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/pexels-11.jpg" alt="" />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;
