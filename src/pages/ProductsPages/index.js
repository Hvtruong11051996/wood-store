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
  console.log(products);
  const fiterItem = useSelector(state => state.filterProduct)
  const sortName = useSelector(state => state.sortName)
  const sortPrice = useSelector(state => state.sortPrice)
  const sortStatus = useSelector(state => state.sortStatus)
  console.log(sortStatus);


  useEffect(() => {
    async function callProduct() {
      try {
        const requestUrl = "https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        // ==================== Lọc dữ liều tìm kiếm =========================== //
        if (fiterItem.name) {
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

  useEffect(() => {
    async function callProduct() {
      try {
        const requestUrl = "https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        // ==================== Sắp xếp dữ liệu =========================== //
        if (sortName.by) {
          if (sortName.by === 'name') {

            const listSortName = data.sort((a, b) => {
              if (a.name > b.name) return sortName.value;
              else if (a.name < b.name) return -sortName.value;
              else return 0;
            })

            setProduct(listSortName);
          } else {
            setProduct(data);
          }
        }
        // =============================================================== //

      } catch (error) {
        console.log(error.message);
      }

    }
    callProduct();

  }, [sortName])

  useEffect(() => {
    async function callProduct() {
      try {
        const requestUrl = "https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        // ==================== Sắp xếp dữ liệu =========================== //
        if (sortPrice.by) {

          if (sortPrice.by === 'price') {
            const listsortPrice = data.sort((a, b) => {
              if (a.price > b.price) return sortPrice.value;
              else if (a.price < b.price) return -sortPrice.value;
              else return 0;
            })

            setProduct(listsortPrice);
          } else {
            setProduct(data);
          }
        }
        // =============================================================== //

      } catch (error) {
        console.log(error.message);
      }

    }
    callProduct();

  }, [sortPrice])

  useEffect(() => {
    async function callProduct() {
      try {
        const requestUrl = "https://my-json-server.typicode.com/Hvtruong11051996/api-woody/db";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data } = responseJSON;

        // ==================== Sắp xếp dữ liệu =========================== //
        if (sortStatus.by) {

          if (sortStatus.by === 'status') {
            const listsortStatus = data.filter(product => product.status === true)

            setProduct(listsortStatus);
          } else {
            setProduct(data);
          }
        }
        // =============================================================== //

      } catch (error) {
        console.log(error.message);
      }

    }
    callProduct();

  }, [sortStatus])



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