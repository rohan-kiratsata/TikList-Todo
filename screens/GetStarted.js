import { Image } from "react-native";
import {
  NativeBaseProvider,
  Box,
  VStack,
  Text,
  Center,
  Heading,
  Button,
  extendTheme,
} from "native-base";
import { StatusBar } from "native-base";

const GetStarted = ({ navigation }) => {
  const navigateToWelcome = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <NativeBaseProvider>
      {/* <StatusBar backgroundColor='#181818' /> */}
      <Box flex="1" safeArea px="5" pt="5">
        <VStack space={4}>
          <Heading
            size="2xl"
            pb="10"
            style={{ fontFamily: "Poppins-Regular" }}
            color="blue.500"
          >
            TikList
          </Heading>
          <Text fontSize="5xl" style={{ fontFamily: "Poppins-Medium" }}>
            <Text color="blue.500">Track</Text> &{" "}
            <Text color="blue.500">Manage </Text>your daily tasks easily.
          </Text>
          <Box>
            <Button colorScheme="blue" size="lg" onPress={navigateToWelcome}>
              Get Started
            </Button>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default GetStarted;
