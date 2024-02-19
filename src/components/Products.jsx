import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response);
        setproduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="w-full mt-5 flex">
        <div className="flex flex-wrap px-5 py-20 ms-3 justify-center">
          {product.map((items) => (
            <Card
              sx={{ width: 250 }}
              key={items.id}
              className="mb-12 mr-5 ms-5 ">
              <div className="flex justify-center w-fit mx-auto h-64">
                <CardMedia
                  component="img"
                  className="pt-6"
                  alt="green iguana"
                  image={items.image}
                />
              </div>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="h-20">
                  {items.title}
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center ">
                <Button variant="contained" onClick={() => addToCart(items)}>
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
