import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Center,
  Container,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { GetData, CreateContact, SearchData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import TableRows from "../components/TableRows";
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");
  const [d, setD] = useState(false);
  const { data } = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  // console.log("data from Home", data);
  const handleSubmit = () => {
    let obj = {
      name: fullName,
      email,
      phone,
      label: tag,
      booked_slots: [],
    };
    // console.log(obj);
    dispatch(CreateContact(obj));
    onClose();
  };

  const handleSearch = () => {
    setD(!d);
  };

  useEffect(() => {
    dispatch(SearchData(search));
  }, [d]);

  useEffect(() => {
    dispatch(GetData());
  }, []);

  return (
    <>
      <Box>
        <Button colorScheme="cyan" onClick={onOpen}>
          Add Contact
        </Button>
      </Box>

      {/* Contact Model Start */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New your Contacts</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel> Select tag</FormLabel>
              <Select
                placeholder="Select option"
                value={tag}
                onChange={(e) => setTag(e.target.value)}>
                <option value="work">work</option>
                <option value="school">school</option>
                <option value="friends">friends</option>
                <option value="family">family</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Contact Model End*/}

      {/* Contact Serch Start */}
      <Center m={5}>
        <Container maxW="md">
          <InputGroup>
            <InputRightElement>
              <Search2Icon color="green.500" />
            </InputRightElement>
            <Input
              placeholder="Search by Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Button onClick={handleSearch}>Submit</Button>
        </Container>
      </Center>
      {/* Contact Serch End */}

      {/* Contact Table Start */}

      <TableContainer>
        <Table variant="simple">
          <TableCaption>Contact List</TableCaption>
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <TableRows key={item.name} {...item} />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Action</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {/* Contact Table End*/}
    </>
  );
};

export default Home;
