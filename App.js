import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { useFonts } from "expo-font";

// Screens Import
import GetStarted from "./screens/GetStarted";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

// React
import { useState, useEffect } from "react";

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  const [onboarded, setOnboarded] = useState();
  //Method to store session data
  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem("ONBOARDED");
    setOnboarded(JSON.parse(onboarded));
  };

  //First Onboarding Session Screen
  useEffect(() => {
    getStorage();
  }, []);

  // Loading Custom Fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Custom Font Theme
  const theme = extendTheme({
    fontConfig: {
      Poppins: {
        100: "Poppins-Thin",
        200: "Poppins-ExtraLight",
        300: "Poppins-Light",
        400: "Poppins-Regular",
        500: "Poppins-Medium",
        600: "Poppins-SemiBold",
        700: "Poppins-Bold",
        800: "Poppins-ExtraBold",
        900: "Poppins-Black",
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
    components: {
      Input: {
        variants: {
          primary: {
            borderColor: "blue.500",
            bg: "blue.500",
          },
        },
      },
    },
  });

  // useState

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={onboarded ? "Dashboard" : "Get-Started"}
        >
          <Stack.Screen
            name="Get-Started"
            component={GetStarted}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false, title: "TikList" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
