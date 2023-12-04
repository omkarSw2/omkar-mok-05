import React, { useState } from "react";
import {
  Tr,
  Td,
  HStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { DeleteContact, GetData, PatchContact } from "../redux/action";
const TableRows = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullName, setFullName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [tag, setTag] = useState(props.label);
  const dispatch = useDispatch();
  const handleUpdata = () => {
    let obj = {
      name: fullName,
      email,
      phone,
      label: tag,
    };
    dispatch(PatchContact(props._id, obj));
    //  dispatch(GetData());
    // console.log(obj);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(DeleteContact(props._id));
    // dispatch(GetData());
  };
  return (
    <>
      <Tr key={props._id}>
        <Td>{props.name}</Td>
        <Td>{props.email}</Td>
        <Td>{props.phone}</Td>
        <Td>
          <HStack>
            <Button colorScheme="green" onClick={onOpen}>
              Edit
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleDelete(props._id);
              }}>
              Delete
            </Button>
          </HStack>
        </Td>
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New your Contacts</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
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
            <Button colorScheme="blue" mr={3} onClick={handleUpdata}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableRows;
