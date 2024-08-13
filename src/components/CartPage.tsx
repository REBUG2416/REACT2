import React, { useState } from "react";
import Nav from "./Nav";
import "./CartPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
interface cartProps {
  data: [Products: ProductItem[] | null, isPending: boolean];
}

type ProductItem = {
  id: number;
  name: string;
  description: string;
  image_URL: string;
  product_Type: productType[];
  price: number;
};

type productType = {
  id: number;
  name: string;
  description: string;
};



const CartPage = (props:cartProps) => {
  const { data } = props;
const [Products,isPending] = data;

  const cart = [
    { id: 1, count: 3 },
    { id: 4, count: 3 },
    { id: 5, count: 3 },
  ];

  const [installno, setInstallno] = useState(1);
  const buttons = Array.from({ length: installno }, (_, i) => i + 1);
  
const [installmentInfo, setInstallmentInfo] = useState(false);

  return (
    <>
      <Nav />
      <div className="content">
                  <div className="mobile-section-container">
        {isPending && (
          <div className="Loader" id="Loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
                  </div>

        {Products && <div className="cartPage-container">
          <div className="cart-details">
            <span className="cart-details-header">.</span>
            <span className="cart-details-header">Product</span>
            <span className="cart-details-header">Price</span>
            <span className="cart-details-header col4">Quantity</span>
            <span className="cart-details-header">Subtotal</span>
            <span className="cart-details-header">.</span>
            {Products!
                .filter((item) => {
                  return cart.some((obj) => obj.id === item.id);
                })
                .map((item) => (
                  <>
                    <img
                      src={"http://pretiosusadmin.gibsonline.com/Product_Images/"+item.image_URL}
                      className="cart-item-icon"
                      alt=""
                    />
                    <span>{item.description}</span>
                    <span>&#8358;{item.price}</span>
                    <span className="col4">
                      {cart.find((tem) => tem.id === item.id)?.count}
                    </span>
                    <span>&#8358;{cart.find((tem) => tem.id === item.id)?.count!*item.price}</span>
                    <img
                      src="\src\assets\Vector.png"
                      alt=""
                      className="delete-icon"
                    />
                  </>
                ))}
          </div>
          <div className="cart-totals-container">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>Rs.250,000.00</span>
              </div>
              <div className="cart-subtotal">
                <span>Shipping</span>
                <span>Rs.250,000.00</span>
              </div>
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="cart-total">Rs.250,000.00</span>
              </div>
            </div>
            <div className="cart-total-buttons">
              <button
                onClick={() => {
                  setInstallmentInfo(!installmentInfo);
                }}
              >
                Installment
              </button>
              <Link to={"/Checkout"}>
                <button>Check Out</button>
              </Link>
            </div>
          </div>
        </div>}
        {installmentInfo && (
          <>
            <div
              className="blur"
              onClick={() => {
                setInstallmentInfo(!installmentInfo);
              }}
            ></div>
            <div className="installment-info">
              <p>Select Payment Method</p>
              <div className="installoptions">
                <button
                  onClick={() => {
                    setInstallno(20);
                  }}
                >
                  Weekly
                </button>
                <button
                  onClick={() => {
                    setInstallno(3);
                  }}
                >
                  Monthly
                </button>
                <button
                  onClick={() => {
                    setInstallno(1);
                  }}
                >
                  Once
                </button>
              </div>
              <p>Select the number installments</p>
              <div className="installno">
                {buttons.map((item, index) => (
                  <button key={index}>{item}</button>
                ))}
              </div>
              <p>Include Insurance?</p>
              <div className="installoptions">
                <button>Yes</button>
                <button>No</button>
              </div>
              <div className="install-summary">
                You Will be paying N0000 Weekly For 4 consecutives Weeks. You
                can receive your item(s) at the mid point of your installment
                period between Saturday, September 21, 2024 and Sunday October
                6, 2024
              </div>
              <Link to={"/Checkout"}>
                <button>Proceed</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};
 
export default CartPage;