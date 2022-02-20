import Search from "./container/Search";
import Products from "./container/Products";
import Details from "./container/Details";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stars, setStars] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [productId, setProductId] = useState("");

  const [priceD, setPriceD] = useState("");
  const [starsD, setStarsD] = useState("");
  const [nameD, setNameD] = useState("");
  const [urlD, setUrlD] = useState("");
  const [descriptionD, setDescriptionD] = useState("");

  //fix footer postion
  const [pos, setPos] = useState("fixed");
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Search pos={pos} setPos={setPos} query={query} setQuery={setQuery} />
        }
      />
      <Route
        path="/search/:searchQuery"
        element={
          <Products
            query={query}
            setQuery={setQuery}
            image={image}
            setImage={setImage}
            price={price}
            setPrice={setPrice}
            stars={stars}
            setStars={setStars}
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
            productId={productId}
            setProductId={setProductId}
            pos={pos}
            setPos={setPos}
          />
        }
      />
      <Route
        path="/products/:productId"
        element={
          <Details
            query={query}
            setQuery={setQuery}
            image={image}
            setImage={setImage}
            priceD={priceD}
            setPriceD={setPriceD}
            starsD={starsD}
            setStarsD={setStarsD}
            nameD={nameD}
            setNameD={setNameD}
            urlD={urlD}
            setUrlD={setUrlD}
            productId={productId}
            setProductId={setProductId}
            descriptionD={descriptionD}
            setDescriptionD={setDescriptionD}
            url={url}
            setUrl={setUrl}
            pos={pos}
            setPos={setPos}
          />
        }
      />
    </Routes>
  );
}

export default App;
