import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import heroLogo from "../images/hero logo.png";
import {ArrowDownIcon} from "@chakra-ui/icons";
const Hero: React.FC<{}> = () => {
  return (
    <>
      <Flex>
        <Box marginTop={"9rem"}>
          
            <Box>
              <Heading>The latest new car releases and expert reviews</Heading>
            </Box>

            <Box marginTop={".9rem"}>
              <p>
                Get our experts' honest take on new makes and models.
                <br />
                Whether you're shopping for a new car or selling your current
                one, the next step in your journey starts here. <br />
                Explore the possibilities.
              </p>
            </Box>
            <Box marginTop={".9rem"}>
              <Button colorScheme="teal">Get Explore <ArrowDownIcon/></Button>
            </Box>
          
        </Box>
        <Spacer></Spacer>
        <Box>
          <Image src={heroLogo} width={500} height={400} />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
