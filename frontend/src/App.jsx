import Banner from "./Banner.jsx";
import { Box } from "@chakra-ui/react";
import Body from "./Body.jsx";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const googleAuthenticate = async () => {
    try {
      
      req = await axios.get("127.0.0.1:80/login");

      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <Box backgroundColor={"#F0F0F0"} h={"100vh"} minWidth={"1200px"}>
      <Banner username="User" />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <Body />
    </Box>
  );
}

export default App;
