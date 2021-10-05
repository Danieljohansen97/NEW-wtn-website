import React, { useState } from 'react'
// Bootstrap imports
import Carousel from "react-bootstrap/Carousel";

const CarouselFP = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={ index } onSelect={ handleSelect }>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=."
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Prøv treningen!</h3>
                    <p>Call to action in this slide maybe?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=."
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Noe spennende</h3>
                    <p>Something interesting in this slide</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselFP;
