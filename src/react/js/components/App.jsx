import Banner from "./Banner.jsx"
import CurtainModal from "./CurtainModal.jsx"
import Navbar from "./Navbar.jsx"
import Hero from "./AppContent/Hero.jsx"
import ProductDetails from "./AppContent/ProductDetails.jsx"
import ProductDescription from "./AppContent/ProductDescription.jsx"
import CriticalReception from "./AppContent/CriticalReception.jsx"
import PopularCarousel from "./AppContent/PopularCarousel/PopularCarousel.jsx"
import SystemReq from "./AppContent/SystemReq.jsx"
import Footer from "./Footer.jsx"
import ShoppingCartContext from "./ShoppingCartContext/ShoppingCartContext.mjs"
import React, { useState, useEffect, useContext } from "react"
import getProductData from "../api.js"
import { createClient } from '@supabase/supabase-js'
import Bundle from "./Bundle.jsx"
import Store from "./Store.jsx"
import About from "./About.jsx"
import { useSupabase } from './SupabaseContext.jsx';

// TODO put the div containers into their own components
// TODO Context API for all app images and text content?
const App = () => {
    const supabase = useSupabase();
    const {
        cartDisplay,
        bundleDisplay
    } = useContext(ShoppingCartContext)

    const [isLoading, setIsLoading] = useState(true)
    const [productData, setProductData] = useState({})

    //get
    useEffect(() => {
        async function fetchProduct() {
            
            try {
                let { data: productData, error } = await supabase
                    .from('products')
                    .select('*')
                    .eq('id', 2)
                    console.log('Yerrrr')
                // console.log(productData, 'the fuck is this');
                if (error) {
                    console.log("Yup. Here")
                    throw error;
                }
                // console.log(productData, 'this 1')
                setProductData(productData[0]);
                // console.log(productData[0], 'logging logging');
                setIsLoading(false);
            } catch (error) {
                // console.log("Error down here")
                console.error('Error fetching product:', error)
            }
        }
        fetchProduct();
        //setProductData(productData[0]);

    }, [supabase])

    console.log(productData, `before if`);

    if (!isLoading) {
        console.log(productData, `after if`);
        return (
            <>
                {cartDisplay && <CurtainModal productData={productData} setProductData={setProductData} />}
                <Banner />
                <Navbar />
                <div className='body ctn'>
                    <div className="app-content ctn">
                        <Hero productData={productData} />
                        {/* <ProductDetails platforms={productData.platforms} publisher={productData.publisher} operatingSystems={productData.operating_systems} links={productData.links} rating={productData.rating} /> */}
                        {/* <ProductDescription /> */}
                        {/* <CriticalReception criticalReceptions={productData.critical_receptions} /> */}
                        {/* <PopularCarousel productData={productData}/> */}
                        {/* <SystemReq systemRequirements={productData.system_requirements} /> */}
                    </div>
                </div>
                <Footer />
            </>
        )

    
    }
}
    

export default App