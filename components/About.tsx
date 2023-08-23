import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const About: React.FC<{}> = () => {
  return (
    <>
      <br />
      <br />
      <Box textAlign={"center"}>
        <Heading>About page</Heading>
        <br />
        <br />
        <Avatar bg="teal.500" size={"2xl"} src="https://bit.ly/broken-link" />
        <br />
        <Heading size={"sm"}>Who we are</Heading>
        <br /><br />
        <Text as="i" lineHeight={"2.9rem"}>
          "XYZ.com is a leading digital marketplace and solutions provider for
          the automotive industry that connects car shoppers with sellers.
          Launched in 1998 and headquartered in Chicago, the Company empowers
          shoppers with the data, resources and digital tools needed to make
          informed buying decisions and seamlessly connect with automotive
          retailers. In a rapidly changing market, Cars.com enables dealerships
          and OEMs with innovative technical solutions and data-driven
          intelligence to better reach and influence ready-to-buy shoppers,
          increase inventory turn and gain market share. In 2018, Cars.com
          acquired Dealer Inspire®, an innovative technology company building
          solutions that future-proof dealerships with more efficient
          operations, a faster and easier car buying process, and connected
          digital experiences that sell and service more vehicles. Cars.com
          properties include DealerRater®, Dealer Inspire®, Auto.com™,
          PickupTrucks.com® and NewCars.com®. For more information, visit
          www.Cars.com."
        </Text>
      </Box>
      <br /><br />
      <Footer />
    </>
  );
};

export default About;
