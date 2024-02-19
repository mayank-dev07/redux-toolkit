import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const Product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="w-full mt-5 flex justify-center">
        <div className="flex flex-wrap px-5 py-20 ms-3 justify-center">
          {Product.length == 0 ? (
            navigate(-1)
          ) : (
            <>
              {Product.map((items) => (
                <Card
                  sx={{ width: 250 }}
                  key={items.id}
                  className="mb-12 mr-5 ms-5">
                  <div className="flex justify-center w-fit mx-auto h-64">
                    <CardMedia
                      component="img"
                      className="pt-6"
                      alt="green iguana"
                      image={items.image}
                    />
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {items.title}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex justify-center">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeFromCart(items.id)}>
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
