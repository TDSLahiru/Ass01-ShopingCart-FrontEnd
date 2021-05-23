import * as React from "react";
import axios from "axios";
import "../../src/App.css";
import Cart from "./Cart";
import { TextField } from "@material-ui/core";

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {},
      cart: {},
      lastId: 0,
    };

    this.onhandleQty = this.onhandleQty.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8086/cart/getAllProducts").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  onAddToCart = async (id, key) => {
    const { qty, Carton_name } = this.state.products[key];
    // const { units,price,cartons,Carton_name } = this.state.cart[key];

    const check = Object.values(this.state.cart).find((data, key) => {
      return data.id == id;
    });

    await axios
      .get(
        "http://localhost:8086/cart/productPriceDetailsById/" +
          id +
          "?qty=" +
          qty +
          ""
      )
      .then((res) => {
        if (!check) {
          let modi = { ...res.data, Carton_name, id };
          this.setState({
            cart: {
              ...this.state.cart,
              [this.state.lastId]: modi,
            },
            lastId: this.state.lastId + 1,
          });
        } else {
          let modi = { ...res.data, Carton_name, id };
          this.setState({
            cart: {
              ...this.state.cart,
              [key]: modi,
            }
          });
        }
      });
  };

  onhandleQty = (key) => {
    return (e) => {
      var arr = this.state.products[key];
      this.setState({
        products: {
          ...this.state.products,
          [key]: {
            id: arr.id,
            Carton_name: arr.Carton_name,
            carton_price: arr.carton_price,
            carton_size: arr.carton_size,
            carton_discount: arr.carton_discount,
            qty: e.target.value,
          },
        },
      });
    };
  };

  render() {
    return (
      <div className="App">
        <h3>Store</h3>
        <table>
          <thead>
            <tr>
              <th>Carton Name</th>
              <th>Carton Price</th>
              <th>Carton Size</th>
              <th>Carton Discount</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(this.state.products).map((data, key) => {
              return [
                <tr key={key}>
                  <td>{data.Carton_name}</td>
                  <td>{data.carton_price}</td>
                  <td>{data.carton_size}</td>
                  <td>{data.carton_discount}</td>
                  <td>
                    <TextField type="number" onChange={this.onhandleQty(key)} />
                  </td>
                  <td>
                    <button onClick={this.onAddToCart.bind(this, data.id, key)}>
                      <th>Add to Cart</th>
                    </button>
                  </td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
        <br />
        <Cart products={this.state.cart} />
      </div>
    );
  }
}

export default Store;
