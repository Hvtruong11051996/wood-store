import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import HeaderTop from '../../components/Header/HeaderTop';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';
import './product.css';
import Sort from './Sort';

function ProductsPages(props) {

  const [products, setProduct] = useState([]);
  const fiterItem = useSelector(state => state.filterProduct)

  useEffect(() => {
    async function callProduct() {
      try {
        const requestUrl = "https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        if (fiterItem) {
          const listFilter = data.filter((product) => {
            return product.name.toLowerCase().indexOf(fiterItem.name) !== -1;
            // indexOf "Trả về vị trí xuất hiện lần đầu tiên của một giá trị được tìm thấy trong chuỗi"
          })
          setProduct(listFilter);
        } else {
          setProduct(data);
        }

      } catch (error) {
        console.log(error.message);
      }

    }
    callProduct();

  }, [fiterItem])

  // ============================= Lọc dữ liệu =====================//
  // if (fiterItem) {
  //   if (fiterItem.name) {
  //     const listFilter = products.filter((product) => {
  //       return product.name.toLowerCase().indexOf(fiterItem.name) !== -1;
  //       // indexOf "Trả về vị trí xuất hiện lần đầu tiên của một giá trị được tìm thấy trong chuỗi"
  //     })
  //     // console.log(listFilter);
  //     setListFilter(listFilter)
  //   }
  //   // products = products.filter((product) => {
  //   //   if (fiterItem.status === -1) {
  //   //     return product;
  //   //   } else {
  //   //     return product.status === (fiterItem.status === 1 ? true : false)
  //   //   }
  //   // })
  // }
  // ============================================================== //


  return (
    <div className="pages-products">
      <HeaderTop></HeaderTop>
      <Sort></Sort>
      <Products products={products}></Products>
      <Pagination></Pagination>
      <Footer></Footer>
    </div>
  );
}

export default ProductsPages;