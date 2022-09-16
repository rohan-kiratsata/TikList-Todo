import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NativeBaseProvider,
  Box,
  VStack,
  Text,
  Center,
  Heading,
  Container,
  Button,
  extendTheme,
  Input,
  FormControl,
} from "native-base";

import { useEffect, useState } from "react";
// import { auth } from "../firebase";

const Welcome = ({ navigation }) => {
  const navigateToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");

  // const saveUsername = async () => {
  //   try {
  //     await AsyncStorage.setItem("usernameData", username);

  //     console.log("Saved to Storage");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const getUsername = async () => {
  //   try {
  //     const name = await AsyncStorage.getItem("usernameData");
  //     setUsername(name);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getUsername();
  // }, []);

  return (
    <NativeBaseProvider>
      <Box flex="1" safeArea px="5" pt="5">
        <Container>
          <Heading
            size="2xl"
            color="blue.500"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            TikList
          </Heading>
        </Container>
        <VStack space="5" pt="10">
          <Heading size="lg" style={{ fontFamily: "Poppins-Bold" }}>
            Tell me about yourself!
          </Heading>
          <FormControl isRequired>
            <Container>
              <FormControl.Label>What do I call you?</FormControl.Label>
              <Input
                placeholder="Rick"
                size="lg"
                variant="outline"
                color="blue.500"
                _focus={{
                  borderColor: "blue.500",
                  backgroundColor: "blue.100",
                }}
                value={username}
                onChangeText={(task) => setUsername(task)}
              />
              {console.log(username)}
            </Container>
            <Container marginTop="2">
              <Text color="gray.600" fontSize="md" pb="2">
                What's your daily tasks goal?
              </Text>
              <Input
                placeholder="5"
                size="lg"
                variant="outline"
                color="blue.500"
                keyboardType="number-pad"
                maxLength={3}
                _focus={{
                  borderColor: "blue.500",
                  backgroundColor: "blue.100",
                }}
                value={task}
                onChangeText={(task) => setTask(task)}
              />
              {console.log(task)}
            </Container>
          </FormControl>
          <Text>Name : {username}</Text>
          <Button
            colorScheme="blue"
            size="lg"
            w="80%"
            onPress={() => {
              navigateToDashboard();
              saveUsername();
            }}
          >
            Let's Goooo!
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Welcome;
