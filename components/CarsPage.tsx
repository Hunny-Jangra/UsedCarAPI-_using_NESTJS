import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const CarsPage: React.FC<{}> = () => {
  const [arr, setArr] = useState([]);
  const URL = `http://localhost:3000/cars/all/carsdata`;
  const fetchdata = async () => {
    const getdataofCardsusers = await axios.get(`${URL}`);
    const data = getdataofCardsusers.data;
    setArr(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Heading textAlign={"center"}>Info - Related Car</Heading>
      <SimpleGrid columns={3} spacing={"40px"}>
        {arr &&
          arr.length > 0 &&
          arr.map((arobj, index) => {
            return (
              <>
                <Card
                  maxW={"sm"}
                  backgroundColor={"blackAlpha.300"}
                  width={"700rem"}
                >
                  <CardBody>
                    <Image
                      src={arobj.image_of_Car}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      width={"100%"}
                      height={200}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading>{arobj.name}</Heading>
                      <Text color="blue.600">Model - {arobj.model}</Text>
                      <Text color="blue.600">Make - {arobj.make}</Text>
                      <Heading size={"xs"}>Year - {arobj.year}</Heading>
                      <Divider />
                      <Button>View Details</Button>
                    </Stack>
                  </CardBody>
                </Card>
              </>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default CarsPage;
