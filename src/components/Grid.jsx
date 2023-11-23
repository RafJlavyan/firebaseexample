import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { getDocs, collection, orderBy, query, where } from "firebase/firestore";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Sort from "./Sort";
import Filter from "./Filter";

const Grid = () => {
  const productList = collection(db, "products");
  const [products, setProducts] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);

  const sortProducts = async (order) => {
    let ordering = orderBy("price", order);
    let q = query(productList, ordering);
    let items = await getDocs(q);
    updateProducts(items);
  };

  const getProducts = async () => {
    let items = await getDocs(productList);
    updateProducts(items);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    (async () => {
      let condition = where("price", ">=", currentValue);
      let q = query(productList, condition);
      let data = await getDocs(q);
      updateProducts(data);
    })();
  }, [currentValue]);

  const updateProducts = (items) => {
    setProducts(
      items.docs.map((elm) => {
        return {
          id: elm.id,
          ...elm.data(),
        };
      })
    );
  };
  return (
    <div>
      <h3>Products {products.length}</h3>
      <Sort fn={sortProducts} />
      <Filter
        currentValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <ImageList sx={{ width: 500 }}>
        {products.map((elm) => {
          return (
            <ImageListItem key={elm.id}>
              <img src={elm.photo} />
              <ImageListItemBar title={"$" + elm.price} subtitle={elm.model} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
};

export default Grid;
