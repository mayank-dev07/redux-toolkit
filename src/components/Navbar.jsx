import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AlignLeft } from "lucide-react";
import Count from "./Count";

export default function Navbar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AlignLeft />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="px-4">
            <h1>Dashboard</h1>
          </Typography>
          <Link to={"/cart"}>
            <Button color="inherit">Bag {cartProducts.length}</Button>
          </Link>
          {/* <Link to={"/form"}>
            <Button color="inherit">Login</Button>
          </Link> */}
          <Count />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
