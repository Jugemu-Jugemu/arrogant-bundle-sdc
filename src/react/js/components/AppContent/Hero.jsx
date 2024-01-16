import { useState, useRef, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import HeroCarousel from './HeroCarousel';
import '../../../css/hero.css';
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs";

const Hero = ({ productData }) => {
    console.log('inside', productData);
    
    const {
        cartItem,
        handleCartItem,
        addTo,
        wishlistCount
    } = useContext(ShoppingCartContext);

    const [currentIndex, setCurrentIndex] = useState(0); //carousel index
    

    const {
        title, 
        thumbnail_link: thumbs, 
        price, 
        humble_choice_savings: savings,
        gameplay_image_links: images,
        platforms
        } = productData;


    // const shopClick = () => {
    //     console.log('shop clicked')
    // }

    // const wishClick = () => {
    //     console.log('wishList clicked')
    // }

    return (
        //TODOSSSSSS
        // Go component by component
        // FIND IMAGES
    <>
        <div id='hero'>
                <div id="hero-content">
                    {/* title works */}
                <div className="product-title"><h2>{title}</h2></div>
                    
                    <div id='product-hero'>
                        
                        <div className="main-img">
                            {/* need to find image */}
                        <img src={`https://hb.imgix.net/4c76342c14754a096938b682a0ae56b4339034d2.jpg?auto=compress,format&fit=crop&h=425&w=741&s=5ea8a89585bbd2c51bf5bd3c3ef6252e`} className="main-carousel-img" />
                        </div>
                        
                        <div id='mini-product'>
                            
                        <div className='thumbnail-ctn'>
                            <img src={`https://hb.imgix.net/3a436c67488d5404a065fb2d037d8b84406a65ad.jpg?auto=compress,format&fit=crop&h=353&w=616&s=39af199944429be574c1f8c2069e65b9`} alt={title} className="thumbnail" />
                        </div>
                        
                            {/* <div className="product-showcase">
                                
                                <div className="logoPrice">
                                    
                                    <div className="itemlogo-ctn">
                                        <img src={`${platforms[0].image_link}`} className="itemlogo" />
                                    </div>
                                        
                                    <div className="price">
                                        ${price}
                                    </div>
                                    
                                </div>
                                
                                <div className="savings">
                                    SAVE UP TO <span className="humble-green">${(savings).toFixed(2)} </span>
                                    MORE WITH <span className="humble-gold">HUMBLE CHOICE</span>
                                </div>
                                
                                <div id='checkoutBtn' onClick={handleCartItem}><span><FaShoppingCart/> </span>{cartItem > 0 ? 'CHECKOUT' : 'ADD TO CART'} </div>
                                <div id='wishListBtn' onClick={addTo}><span><TbStarFilled/> </span>{wishlistCount > 0 ? 'ON WISHLIST' : 'ADD TO WISHLIST'}</div>
                            </div> */}
                        
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