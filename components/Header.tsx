import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
  Heading,
  DrawerFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Spacer,
  SimpleGrid,
  RadioGroup,
  Stack,
  Radio,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import logo from "../images/logo_1.png";
import search from "../images/search.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  FormEvent,
  HtmlHTMLAttributes,
  useRef,
  useState,
} from "react";
import createUser from "../api/createUser";
import signinUser from "../api/signinUSer";
import axios from "axios";
const Header: React.FC<{}> = () => {
  const [afterlogin, setAfterlogin] = useState(false);
  const [afterLogindata, setLginafterdata] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: open, onOpen: onopen, onClose: onclose } = useDisclosure();
  const [logout, setrLogout] = useState(false);
  const {
    isOpen: openlog,
    onOpen: onopenLog,
    onClose: oncloseLog,
  } = useDisclosure();
  const btnref = useRef<HTMLInputElement>();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [task, setTask] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [signinuser, setSigninUser] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleChangeSignin = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>
  ) => {
    setSigninUser({ ...signinuser, [e.target.name]: e.target.value });
  };
  const handleSubmitSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("singin user", signinuser);
    if (signinuser.email !== "" && signinuser.password !== "") {
      const SigninAPI = `http://localhost:3000/cars/signin`;
      fetch(`${SigninAPI}`, {
        method: 'POST',
        body: JSON.stringify(signinuser),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (res) => {
        if(res.status === 201) {
          setAfterlogin(true)
          toast({
            title: "Login Successfull.",
            description: "logged in",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          const uerDataLogin = await axios.get(`http://localhost:3000/cars?email=${signinuser.email}`);
          console.log('Login data', uerDataLogin)
          const fullname = uerDataLogin.data[0].firstname + uerDataLogin.data[0].lastname;
          setLginafterdata(fullname)
          
          navigate("/home");
        }else{
          setAfterlogin(false)
          toast({
            title: "Login not Successfull.",
            description: "Oops ! Not logged in",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
    })
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    const obj = {
      firstname: task.firstname,
      lastname: task.lastname,
      gender: task.gender,
      email: task.email,
      password: task.password,
      confirmpassword: task.confirmpassword,
    };

    console.log("task obj", obj);
    if (obj.password === obj.confirmpassword) {
      createUser(obj);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Oops! Account not created.",
        description: "We've not able to created your account for you.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const Links = ["HOME", "ABOUT", "CARS", "ACCESSORIES", "TESTIMONIALS"];

  console.log("value of gender", value);
  const handleLogout = () => {
    setrLogout(true);
  }
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Image src={logo} width={70} height={70} />
        </Box>
        <Center>
          <Image src={search} width={50} height={50} />
        </Center>
        <Center>
          {
            afterlogin && logout===false?   
          <ButtonGroup>
            {/* <Button onClick={onopen}>Signup</Button> */}
            <Heading size={"sm"}>Hello🖐️, {afterLogindata}</Heading>
            <Button onClick={handleLogout}>LogOut</Button>
            <Button ref={btnref} onClick={onOpen}>
              ☰
            </Button>
          </ButtonGroup>
          : 
          <ButtonGroup>
              <Button onClick={onopen}>Signup</Button>
              <Button onClick={onopenLog}>Login</Button>
              <Button ref={btnref} onClick={onOpen}>
                ☰
              </Button>
            </ButtonGroup>
          }
        </Center>
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={".1rem"}>Go To &rarr;</DrawerHeader>
          <DrawerBody>
            {Links.map((links: string) => {
              return (
                <>
                  <Stack direction={'column'}>
                    <Link to={`/${links.toLowerCase()}`}>{links}</Link>
                  </Stack>
                </>
              );
            })}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Modal
        size={"xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={open}
        onClose={onclose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  name="firstname"
                  ref={initialRef}
                  placeholder="First name"
                  width={"95%"}
                  onChange={handleChange}
                />
              </FormControl>
              <Spacer></Spacer>
              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                  name="lastname"
                  placeholder="Last name"
                  width={"95%"}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>

            <RadioGroup
              onChange={setValue}
              onClick={handleChange}
              value={value}
              mt={4}
            >
              <SimpleGrid columns={3} spacing={"40px"}>
                <Radio name="gender" value="Male" colorScheme="teal">
                  Male
                </Radio>
                <Radio name="gender" value="Female" colorScheme="teal">
                  Female
                </Radio>
                <Radio name="gender" value="Others" colorScheme="teal">
                  Others
                </Radio>
              </SimpleGrid>
            </RadioGroup>

            <SimpleGrid columns={1} mt={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Please enter Email"
                  onChange={handleChange}
                />
                <InputRightAddon>@gmail.com</InputRightAddon>
              </InputGroup>
            </SimpleGrid>

            <Flex mt={4}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  ref={initialRef}
                  placeholder="Password..."
                  width={"95%"}
                  onChange={handleChange}
                />
              </FormControl>
              <Spacer></Spacer>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password..."
                  width={"95%"}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onclose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={openlog}
        onClose={oncloseLog}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                ref={initialRef}
                placeholder="Enter your Email"
                onChange={handleChangeSignin}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                placeholder="Enter Password"
                onChange={handleChangeSignin}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmitSignin}>
              Login
            </Button>
            <Button onClick={oncloseLog}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Outlet />
    </>
  );
};

export default Header;
