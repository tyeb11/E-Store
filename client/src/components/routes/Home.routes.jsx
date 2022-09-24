import Box from "@mui/material/Box";
import { ReactComponent as Hero } from "../../assets/hero.svg";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Typography variant="h5" component="h2" sx={{ marginTop: "20px" }}>
        To Access over Store please Sign in ;)
      </Typography>
      <Hero style={{ width: "75vw", height: "75vh" }} />
    </Box>
  );
}

export default Home;
