import React, { useState, useEffect } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Footer from "../components/Footer";
const Details = ({
  nameD,

  image,
  priceD,
  starsD,
  url,
  productId,
  setProductId,
  setDescriptionD,
  descriptionD,
  setStarsD,
  setPriceD,
  setImage,
  setNameD,
  setUrl,
  pos,
  setPos,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FF9900");

  setPos("static");
  const fetchData = async () => {
    const apiUrl =
      await `https://jr-amazon-scraper.herokuapp.com/products/${productId}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        //check if data is undefined
        if (data.length === 0) {
          alert("No results found");
          navigate("/");
        } else {
          setDescriptionD(data.small_description.slice(0, 300));
          setNameD(data.name);
          setStarsD(data.average_rating);
          setPriceD(data.pricing);

        }
      });
    setLoading(false).catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  });
  useEffect(() => {
    const localId = window.localStorage.getItem("productId");
    const localImage = window.localStorage.getItem("image");
    const localUrl = window.localStorage.getItem("url");

    setProductId(JSON.parse(localId));
    setImage(JSON.parse(localImage));
    setUrl(JSON.parse(localUrl));
  }, [setProductId]);

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-screen">
          <PulseLoader color={color} loading={loading} size={75} />
        </div>
      ) : (
        <>
          <div className="flex justify-center mt-8  text-stone-800 font-sans font-bold text-3xl md:text-5xl">
            <BiLeftArrowAlt
              className="text-3xl mt-2 md:mt-3  mx-8 cursor-pointer "
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            />
            Product Details
          </div>

          <div className="productJc flex justify-center">
            <div className="productDetailsCard shadow-lg shadow-slate-500 mb-16 rounded-xl bg-slate-200 border border-slate-800 mt-12  mx-8 w-[1100px]">
              <div className="imageTitle   mx-8">
                <div className="imageTitle text-xl md:text-2xl mt-2 font-bold">
                  {nameD}
                </div>
                <img
                  src={image}
                  alt="ProductImage"
                  className="productImage   mt-10"
                />
              </div>
              <div className="info  mx-12">
                <div className="description font-semibold mt-4 text-lg md:text-xl">
                  Description:
                  <div className="descriptionText mt-2 font-normal ">
                    {`"${descriptionD}..."`}
                  </div>
                </div>
                <div className="price font-semibold mt-4 text-lg md:text-xl">
                  Price: {priceD}
                </div>
                <div className="rating font-semibold mt-4 text-lg md:text-xl">
                  Rating: {starsD}⭐
                </div>
                <div className="url font-semibold mt-4 mb-4 text-lg md:text-xl">
                  Link:
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-500 underline mx-2  text-lg md:text-xl"
                  >
                    Click Here.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer pos={pos} />
        </>
      )}
    </>
  );
};

export default Details;
