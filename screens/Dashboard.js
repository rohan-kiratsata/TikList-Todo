import React from "react";
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

const Dashboard = () => {
  return (
    <NativeBaseProvider>
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
          <Text fontSize="xl">Hello</Text>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Dashboard;
