import { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import HeroCarousel from './HeroCarousel';
import '../../../css/hero.css';

const Hero = ({productData}) => {

    const [currentIndex, setCurrentIndex] = useState(0); //carousel index
    const imageRef = useRef(null)

    const {title, 
        thumbnail_link: thumbs, 
        price, 
        humble_choice_savings: savings,
        gameplay_image_links: images,
        platforms,
    } = productData;

    const shopClick = () => {
        console.log('shop clicked')
    }

    const wishClick = () => {
        console.log('wishList clicked')
    }

    return (
    <>
        <div id='hero'>
            <div id="hero-content">
                <div className="product-title">
                        <h2>{title}</h2>
                </div>
                <div id='product-hero'>
                    <div className="main-img">
                        <img src={`https://arrogant-bundle.onrender.com/${images[currentIndex]}`} className="main-carousel-img"
                        ref={imageRef}
                        />
                    </div>
                    <div id='mini-product'>
                        <div className='thumbnail-ctn'>
                            <img src={`https://arrogant-bundle.onrender.com/${thumbs}`} alt={title} className="thumbnail" />
                        </div>
                        
                        <div className="product-showcase">
                            <div className="logoPrice">
                                <div className="itemlogo-ctn">
                                    <img src={`https://arrogant-bundle.onrender.com${platforms[0].image_link}`} className="itemlogo" />
                                </div>
                                <div className="price">
                                    ${price}
                                </div>
                            </div>
                            <div className="savings">
                                SAVE UP TO <span className="humble-green">${(savings).toFixed(2)} </span>
                                MORE WITH <span className="humble-gold">HUMBLE CHOICE</span>
                            </div>
                            <div id='checkoutBtn' onClick={()=>shopClick()}><span><FaShoppingCart/> </span>CHECKOUT</div>
                            <div id='wishListBtn' onClick={()=>wishClick()}><span><TbStarFilled/> </span>ADD TO WISHLIST</div>
                        </div>
                        
                    </div>
                </div>
                <div id='hero-carousel'>
                    <HeroCarousel 
                    images={images} 
                    setCurrentIndex={setCurrentIndex} 
                    currentIndex={currentIndex}/>
                </div>
            </div> {/* end hero-content */}
        </div> {/* end hero div */}
    </>

    )
}

export default Hero