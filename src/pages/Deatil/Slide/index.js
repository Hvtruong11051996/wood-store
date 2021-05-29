import React, { useEffect, useState } from 'react';
import SlideDeatil from './SlideDeatil';

function Slide(props) {

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
            <SlideDeatil products={products}></SlideDeatil>
        </div>
    );
}

export default Slide;