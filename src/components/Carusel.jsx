import Carousel from "react-bootstrap/Carousel";

function Carusel() {
	return (
		<Carousel className="carousel-header">
			<Carousel.Item>
				<img src="img/captura21-3.jpg" alt="" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src="img/images.jpg" alt="" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src="img/Menus-cocina-vital-banner.jpg" alt="" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Carusel;
