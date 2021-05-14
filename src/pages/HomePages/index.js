import React from 'react';
import Banner from '../../components/Banner';
import KitchenBox from '../../components/KitchenBox';
import ProductItems from '../../components/ProductItems';

function HomePages(props) {
    return (
        <div>
            <Banner></Banner>
            <KitchenBox></KitchenBox>
            <ProductItems></ProductItems>
        </div>
    );
}

export default HomePages;