import React from 'react';

function CartTotal(props) {

    const { carts } = props;

    // ================ Tính tổng tiền ===================== // 

    const showTotalAmount = (carts) => {
        console.log(carts);
        var result = null;
        if (carts.length > 0) {
            var total = 0;
            for (var i = 0; i < carts.length; i++) {
                total += carts[i].product.price * carts[i].quantity - carts[i].product.sale;
            }
            result = total;
        }
        return result;
    }
    // ===================================================== //


    return (
        <tr>
            <td colSpan="4"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền : </strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong> {showTotalAmount(carts)} $</strong>
                </h4>
            </td>
        </tr>
    );
}

export default CartTotal;