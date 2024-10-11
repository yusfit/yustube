import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../assets/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'lightblue', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h1>YUSTUBE</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;