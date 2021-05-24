import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';
import KitchenBox from '../../components/KitchenBox';
import MenuMobile from '../../components/MenuMobile';
import OurStore from '../../components/OurStore';
import Products from '../../components/Products';
import ProductsSale from '../../components/ProductsSale';

function HomePages(props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        async function callProduct() {

            try {
                const requestUrl = 'https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const { data } = responseJSON;
                setProduct(data);
            } catch (error) {
                console.log(error.message);
            }

        }

        callProduct();
    }, [])


    return (
        <div>
            <MenuMobile></MenuMobile>
            <Banner></Banner>
            <KitchenBox></KitchenBox>
            <ProductsSale></ProductsSale>
            <Products products={products}></Products>
            <OurStore></OurStore>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
}

export default HomePages;