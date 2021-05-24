import React, { useEffect, useState } from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import './product.css';
import Footer from '../../components/Footer';

function ProductsPages(props) {

  const [click, setClick] = useState(false)
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

  const handleClick = () => setClick(!click)

  return (
    <div className="pages-products">
      <HeaderTop></HeaderTop>
      <div className="pages-products__sort container">
        <input
          type="text"
          className="form-control"
          name="filterName"
          placeholder="Tìm kiếm nhanh ..."
        />
        <div className="pages-products__filter">
          <div className={click ? 'dropdown' : ''} onClick={handleClick}>
            <div>
              <button type="button" className="btn btn-primary">
                Sắp Xếp
              <span className="fa fa-caret-square-o-down ml-5"></span>
              </button>
              <div className="sort-list">
                <ul>
                  <li>
                    <a>
                      <span className="fa fa-sort-alpha-asc pr-5">
                        Sắp xếp theo tên sản phẩm
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-sort-alpha-asc pr-5">
                        Sắp xếp theo giá sản phẩm
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="fa fa-sort-alpha-asc pr-5">
                        Sắp xếp theo trạng thái
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products products={products}></Products>
      <Pagination></Pagination>
      <Footer></Footer>
    </div>
  );
}

export default ProductsPages;