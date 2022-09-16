import { StatusBar, Box, HStack, IconButton, Text, Heading } from "native-base";
import Icon from "react-native-vector-icons/Feather";
const AppBar = () => {
  return (
    <>
      <StatusBar backgroundColor="#3b82f6" />
      <Box safeAreaTop shadow="9" />
      <HStack
        shadow="9"
        alignItems="center"
        bg="blue.500"
        px="5"
        py="3"
        justifyContent="space-between"
        w="100%"
      >
        <HStack alignItems="center">
          <Heading size="md" color="white">
            TikList
          </Heading>
        </HStack>
        <HStack alignItems="center">
          <IconButton
            icon={<Icon name="settings" color="white" size={20} />}
            color="white"
            borderRadius="full"
          />
        </HStack>
      </HStack>
    </>
  );
};

export default AppBar;
