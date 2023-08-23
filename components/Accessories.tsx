import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
const Accessories: React.FC<{}> = () => {
  const [dataArr, setdataArr] = useState([]);
  const URL = `http://localhost:3000/cars/all/accessories`;
  const fetchData = async () => {
    const data = await axios.get(`${URL}`);
    const res = data?.data;
    setdataArr(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <br />
      <br />
      <Heading textAlign={"center"}>Shop by Categories</Heading>
      <br />
      <br />
      {dataArr &&
        dataArr.length > 0 &&
        dataArr.map((arrobj, index) => {
          return (
            <>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={arrobj.image_of_Parts}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{arrobj.name}</Heading>

                    <Text py="2">
                    XYZ.com is an automotive classified website focused on the United States that launched in June 1998 and now is the second largest automotive classified site. Its headquarters are located in Chicago, Illinois. A 2003 Library Journal survey of automobile-related websites described cars.com
                    </Text>
                    <Divider/>
                    <Text>Price - {arrobj.price}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="teal">
                      Read More
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </>
          );
        })}
    </>
  );
};

export default Accessories;
