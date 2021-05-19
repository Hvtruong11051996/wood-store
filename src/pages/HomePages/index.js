import React from 'react';
import Banner from '../../components/Banner';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';
import KitchenBox from '../../components/KitchenBox';
import OurStore from '../../components/OurStore';
import Products from '../../components/Products';
import ProductsSale from '../../components/ProductsSale';

function HomePages(props) {

    return (
        <div>
            <Banner></Banner>
            <KitchenBox></KitchenBox>
            <ProductsSale></ProductsSale>
            <Products></Products>
            <OurStore></OurStore>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
}

export default HomePages;