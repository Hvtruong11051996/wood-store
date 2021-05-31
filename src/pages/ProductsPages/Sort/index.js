import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actFiterProduct, actSortByName, actSortByPrice, actSortByStatus } from '../../../actions';
import './sort.css';

function Sort(props) {

  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const [listItem, setListItem] = useState({
    filterName: '',
    filterStatus: -1
  })

  const handleClick = () => setClick(!click)

  const onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    var filter = {
      name: name === 'filterName' ? value : listItem.filterName,
      status: name === 'filterStatus' ? value : listItem.filterStatus
    }
    const action = actFiterProduct(filter);
    dispatch(action);

    setListItem({
      [name]: value
    })
  }

  const onHandleSortByName = (sortBy, sortValue) => {
    const action = actSortByName({
      by: sortBy,
      value: sortValue
    });
    dispatch(action);
  }

  const onHandleSortByPrice = (sortBy, sortValue) => {
    const action = actSortByPrice({
      by: sortBy,
      value: sortValue
    });
    dispatch(action);
  }

  const onHandleSortByStatus = (sortBy, sortValue) => {
    const action = actSortByStatus({
      by: sortBy,
      value: sortValue
    });
    dispatch(action);
  }


  return (
    <div className="pages-products__sort container">
      <input
        type="text"
        className="form-control"
        name="filterName"
        placeholder="Tìm kiếm nhanh ..."
        // value={filterName}
        onChange={onHandleChange}
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
                <li onClick={() => onHandleSortByName('name', 1)}>
                  <a>
                    <span className="fa fa-sort-alpha-asc pr-5">
                      Sắp xếp theo tên sản phẩm
                      </span>
                  </a>
                </li>
                <li onClick={() => onHandleSortByPrice('price', 2)}>
                  <a>
                    <span className="fa fa-sort-alpha-asc pr-5">
                      Sắp xếp theo giá sản phẩm
                      </span>
                  </a>
                </li>
                <li onClick={() => onHandleSortByStatus('status', 3)}>
                  <a>
                    <span className="fa fa-sort-alpha-asc pr-5">
                      Sắp xếp theo trạng thái (Còn Hàng)
                      </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;