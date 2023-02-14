import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";
import ExerciseDetails from "./containers/ExerciseDetails";
import "./App.css";

function App() {
  return (
    <Box width={400} sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
