import Carousel from 'react-bootstrap/Carousel';
import "../style.css";

export default function Banner() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.luxe.digital/media/20220311181946/proper-cloth-review-luxe-digital-1200x600.jpg.webp"
                    alt="First slide"
                />
                <Carousel.Caption className="bannerCaption">
                <h4>Update your wardrobe. Welcome to Moirai.</h4>
                    
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hips.hearstapps.com/ell.h-cdn.co/assets/16/07/1455824618-elle-menswear-index.jpg"
                    
                    alt="Second slide"
                />

                <Carousel.Caption className="bannerCaption">
                <h4 className="bannerText">Scroll down for outfit ideas, click a card to see details</h4>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0012/7339/7332/files/Style_Hacks-_How_to_Look_Taller_for_Men_Without_Gaining_Actual_Height-8_60447230-571a-437e-a616-4b2f3fd48dcf_2048x2048.jpg?v=1544096554"
                    alt="Third slide"
                />

                <Carousel.Caption className="bannerCaption">
                    <h4 className="bannerText">Have an idea? Create your own outfit above</h4>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}