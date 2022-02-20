import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Footer from "../components/Footer";

const Products = ({
  query,
  image,
  setImage,
  price,
  setPrice,
  stars,
  setStars,
  name,
  setName,
  productId,
  setProductId,
  url,
  setUrl,
  setQuery,
  pos,
  setPos,
}) => {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FF9900");
  const navigate = useNavigate();
  setPos("static");
  //function to fetch data

  const fetchData = async () => {
    const apiUrl =
      await `https://jr-amazon-scraper.herokuapp.com/search/${query}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        //check if data is undefined
        if (data.results.length === 0) {
          alert("No results found");
          navigate("/");
        } else {
          //set image to data.results[0].image
          setImage(data.results[0].image);
          //set price to data.results[0].price
          setPrice(data.results[0].price);
          //set stars to data.results[0].stars
          setStars(data.results[0].stars);
          //set name to data.results[0].name
          setName(data.results[0].name.slice(0, 20));
          //set productId to data.results[0].productId
          setProductId(data.results[0].productId);
          //set url to data.results[0].url
          setUrl(data.results[0].url);

          console.log([url]);
        }
      })
      .then(setLoading(false))

      .catch((err) => console.log(err));
  };

  //function to check if data is undefined

  useEffect(() => {
    fetchData();

    window.localStorage.setItem("productId", JSON.stringify(productId));
    window.localStorage.setItem("image", JSON.stringify(image));
    window.localStorage.setItem("url", JSON.stringify(url));

  });
  useEffect(() => {
    const localQuery = window.localStorage.getItem("query");

    setQuery(JSON.parse(localQuery));
  }, [setQuery]);

  function subStrAfterChars(str, char, pos) {
    if (pos == "b") return str.slice(str.indexOf(char));
    else if (pos == "a") return str.slice(0, str.indexOf(char) + 4);
    else return str;
  }

  const afterDp = subStrAfterChars(url, "/dp/", "a");

  const beforeRef = subStrAfterChars(url, "/ref", "b");
  const combined = afterDp + beforeRef;
  const sameUrl = subStrAfterChars(url, combined);

  var sliceAfterRef = sameUrl.replace(beforeRef, "");

  setProductId(sliceAfterRef.replace(afterDp, ""));

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-screen">
          <PulseLoader color={color} loading={loading} size={75} />
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-8 text-stone-800 font-sans font-bold text-3xl   md:text-5xl">
            <BiLeftArrowAlt
              className="text-2xl md:text-3xl mt-2 md:mt-3 mx-4 cursor-pointer "
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            />
            Top Result
          </div>

          <div className="   flex justify-center">
            <ProductCard
              name={name}
              image={image}
              price={price}
              stars={stars}
              url={url}
              productId={productId}
            />
          </div>
          <Footer pos={pos} />
        </div>
      )}
    </>
  );
};

export default Products;
