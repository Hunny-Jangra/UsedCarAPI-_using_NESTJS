import { Box, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import {CiFacebook} from "react-icons/ci";
import {FiGithub, FiInstagram} from "react-icons/fi";
import {BsSnapchat} from "react-icons/bs";

const Footer: React.FC<{}> = () => {
  return (
    <>
      <br />
      <br />
      <SimpleGrid columns={4} spacing={"150px"}>
        <Box>
          <Heading size={"sm"}>Buying & Selling</Heading>
          <br />
          <Text>Find a car</Text>
          <br />
          <Text>Find a Dealer</Text>
          <br />
          <Text>Listings by City</Text>
          <br />
          <Text>Car Payment calculators</Text>
          <br />
          <Text>Certified by - preowend</Text>
          <br />
          <Text>Sell your Car</Text>
        </Box>
        <Box>
          <Heading size={"sm"}>Explore Our Brand</Heading>
          <br />
          <Text>NewCar.com</Text>
          <br />
          <Text>DealerCars.com</Text>
          <br />
        </Box>
        <Box>
          <Heading size={"sm"}>Our Company</Heading>
          <br />
          <Text>About Cars.com</Text>
          <br />
          <Text>Contact Cars.com</Text>
          <br />
          <Text>Investors Relations</Text>

        </Box>
        <Box>
          <Heading size={"sm"}>Our Mobile App</Heading>
          <br />
          <Text>Doenload the app Today</Text>
          <br />
          <SimpleGrid columns={4} spacing={"9px"}>
            <CiFacebook fontSize={"1.4rem"}/>
            <FiGithub fontSize={"1.4rem"}/>
            <FiInstagram fontSize={"1.4rem"}/>
            <BsSnapchat fontSize={"1.4rem"}/>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
