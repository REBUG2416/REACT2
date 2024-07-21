import React from "react";
import "./ShopPage.css";
import { Link} from "react-router-dom";
interface shopProps {
    data: [
  forYouData: CategoryItem[],
  categoriesItems: Categories,
  categoriesNames: CategoryKey[],
    ];
};

type CategoryItem = {
  id: Number;
  title:string;
  Image: string;
  Label: string;
  Price: string;
};

type CategoryKey = "Clothing" | "Shoes" | "Phones" | "Cars";

type Categories = {
  [key in CategoryKey]: CategoryItem[];
};



const ShopPage = (props: shopProps) => {
const {data} = props;
const [forYouData, categoriesItems, categoriesNames] = data;


  return (
    <>
      <div className="mobile-shop-page">
        <div className="Hero-image">
          <div className="update-alert">
            <span>New Arrival</span>
            <h1>
              Discover Our <br></br>New Collection
            </h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </span>
            <button>Buy Now</button>
          </div>
        </div>
        <section className="content">
          <div className="mobile-section-header">
            <h3>Categories</h3>
            <div>
              <span>See All</span>
              <Link to={"/Search"} className="seeAllBtn">
                <img src="\src\assets\Arrow.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="mobile-section-container">
            {categoriesNames.map((category) => (
              <Link
                to={`/categories/${category}`}
                key={category}
                className="mobile-categories-card"
              >
                <div>
                  {categoriesItems[category].map((item, index) => (
                    <img key={index} src={item.Image} alt={item.Label} />
                  ))}
                </div>
                <span>{category}</span>
              </Link>
            ))}
            <Link to={"/Search"} className="seeAllBtn pc">
              See All
            </Link>
          </div>

          <div className="mobile-section-header">
            <h3 className="foryou-heading">Just For You</h3>
            <div>
              <span>See All</span>
              <button className="seeAllBtn">
                <img src="\src\assets\Arrow.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="mobile-section-container">
            {forYouData.map((item, index) => (
              <Link
                key={index}
                className="mobile-product-card"
                to={`/Product/${item.id}`}
              >
                <div className="image-holder">
                  <img src={item.Image} alt={item.Label} />
                </div>
                <div className="product-details">
                  <h4>{item.title}</h4>
                  <span>{item.Label}</span>
                  <b>{item.Price}</b>
                </div>
              </Link>
            ))}
            <Link to={"/Search"} className="seeAllBtn pc">
              Show More
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopPage;