import Account from "../components/Account";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import { useState } from "react";
import Todo from "../components/Todo";

export default function Dashboard({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  function onClose() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="navbar flex justify-end mt-4">
        <Button onClick={() => setIsOpen(true)}>Settings</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Account Settings</ModalHeader>
            <Account session={session}></Account>
          </ModalContent>
        </Modal>
      </div>
      <div className="todo w-5/4 my-4 p-4 bg-white flex justify-center  rounded-xl min-h-full text-black">
        <Todo></Todo>
      </div>
    </>
  );
}
