import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, image, price, stars, productId, url }) => {
  const navigate = useNavigate();

  return (
    <div className=" shadow-lg shadow-slate-500 rounded-lg mb-40 sm:mb-20 mt-20 w-[300px] h-[420px] my-4 bg-gray-100 border border-stone-900">
      <div className="productTitle flex justify-center text-2xl mt-2 font-sans">
        {name}
      </div>
      <div className="productImage flex justify-center">
        <img src={image} alt="ProductImage " className=" mt-6 mb-8 h-36" />
      </div>
      <div className="productPrice flex justify-start mb-4 mx-5">
        Price: {price} $
      </div>
      <div className="productStar flex justify-start mb-4 mx-5">
        Stars: {stars}⭐
      </div>
      <div className="productStar flex justify-start mb-4 mx-5">
        ID: {productId}{" "}
      </div>

      <div className="productButton flex justify-center mt-2 mb-4 mx-5  ">
        <button
          onClick={() => navigate(`/products/${productId}`)}
          className="px-5 py-1 rounded-xl border border-2  font-semibold  shadow-lg shadow-slate-500 border-slate-800 hover:bg-yellow-500 bg-yellow-400"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
