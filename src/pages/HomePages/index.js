import React from 'react';
import Banner from '../../components/Banner';
import KitchenBox from '../../components/KitchenBox';
import Products from '../../components/Products';
import ProductsSale from '../../components/ProductsSale';

function HomePages(props) {
    return (
        <div>
            <Banner></Banner>
            <KitchenBox></KitchenBox>
            <ProductsSale></ProductsSale>
            <Products></Products>
        </div>
    );
}

export default HomePages;