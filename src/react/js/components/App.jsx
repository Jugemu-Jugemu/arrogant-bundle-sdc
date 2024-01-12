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

    // useEffect(() => {

    //     const f = async () => {
    //         const productData = await getProductData(1)
    //         setProductData(productData)
    //         setIsLoading(false)
    //         console.log(productData)
    //     }

    //     f()

    // }, [])

    //get
    useEffect(() => {
        async function fetchProduct() {
            try{
                let { data: productData, error} = await supabase
                    .from('products')
                    .select('*')
                    .eq('id', 2) 
                if(error) {
                    console.log("Yup. Here")
                    throw error;
                }
                console.log(productData[0])
                setProductData(productData[0]);
            } catch (error) {
                console.log("Error down here")
                console.error('Error fetching product:', error)
            }
        }
        fetchProduct();
    }, [supabase])

    if (!isLoading) {
        return (
            <>
                {cartDisplay && <CurtainModal productData={productData} setProductData={setProductData} />}
                <Banner />
                <Navbar />
                <div className='body ctn'>
                    <div className="app-content ctn">
                        <Hero productData={productData} />
                        <ProductDetails platforms={productData.platforms} publisher={productData.publisher} operatingSystems={productData.operating_systems} links={productData.links} rating={productData.rating} />
                        <ProductDescription />
                        <CriticalReception criticalReceptions={productData.critical_receptions} />
                        <PopularCarousel productData={productData}/>
                        <SystemReq systemRequirements={productData.system_requirements} />
                    </div> {/* end app-content ctn */}
                </div> {/* end body ctn */}
                <Footer />
            </>
        )
    }
}

export default App