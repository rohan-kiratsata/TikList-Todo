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

// Components
import FloatingButton from "../components/FloatingButton";
import AppBar from "../components/AppBar";

const Dashboard = () => {
  return (
    <NativeBaseProvider>
      <Box flex="1">
        <AppBar />
        <Box flex="1" safeArea px="5" pt="5">
          <FloatingButton />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Dashboard;
