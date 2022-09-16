import {
  Fab,
  Modal,
  Input,
  KeyboardAvoidingView,
  IconButton,
  HStack,
  Box,
} from "native-base";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import PrioritySelect from "./PrioritySelect";

const FloatingButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Fab
        renderInPortal={false}
        shadow={2}
        backgroundColor="blue.500"
        icon={<Icon color="white" name="plus" size={24} />}
        onPress={() => {
          setShowModal(true);
        }}
      />
      <KeyboardAvoidingView>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          avoidKeyboard={true}
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Add Task</Modal.Header>
            <Modal.Body>
              <Input
                placeholder="Task name"
                size="lg"
                color="blue.500"
                backgroundColor="gray.100"
                borderWidth={0}
                _focus={{
                  backgroundColor: "blue.50",
                  borderWidth: 0,
                }}
              />
              <HStack marginY={2}>
                <Box>
                  <PrioritySelect />
                </Box>
              </HStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </KeyboardAvoidingView>
    </>
  );
};

export default FloatingButton;
