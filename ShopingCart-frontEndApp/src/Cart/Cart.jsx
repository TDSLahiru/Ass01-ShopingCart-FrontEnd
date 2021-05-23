import React, { useState, useEffect } from "react";

function Cart(props) {
  let tot = 0;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalPrice();
  }, [props.products]);

  const totalPrice = () => {
    let tot = 0;
    Object.values(props.products).map((data, key) => {
      tot = tot + parseFloat(data.price);
      setTotal(tot);
    });
  }

  return (
    <div>
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>No of Units</th>
            <th>No of Cartons</th>
            <th>Price</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {Object.values(props.products).map((data, key) => {
            return [
              <tr key={key}>
                <td>{data.Carton_name}</td>
                <td>{data.units}</td>
                <td>{data.cartons}</td>
                <td>{data.price}</td>
              </tr>,
            ];
          })}
          <td style={{ backgroundColor: "yellow" }}>Total</td>
          <td style={{ backgroundColor: "yellow" }}></td>
          <td style={{ backgroundColor: "yellow" }}></td>
          <td style={{ backgroundColor: "yellow" }}>{total}</td>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
