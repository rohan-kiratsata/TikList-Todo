import {
  Pressable,
  Center,
  Select,
  Box,
  Text,
  Menu,
  HStack,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const menuItem = [
  {
    name: "Priority 1",
    iconColor: "#e11d48",
  },
  {
    name: "Priority 2",
    iconColor: "#f97316",
  },
  {
    name: "Priority 3",
    iconColor: "#16a34a",
  },
];

const PrioritySelect = () => {
  const [flgClr, setFlgClr] = useState();

  return (
    <Menu
      shadow={2}
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Icon name="flag" size={24} color={flgClr} />
          </Pressable>
        );
      }}
    >
      {menuItem.map((item) => {
        return (
          <Menu.Item
            key={uuidv4()}
            value={item.name}
            onPress={() => setFlgClr(item.iconColor)}
          >
            <HStack space="2" alignItems="center">
              <Icon name="flag" size={20} color={item.iconColor} />
              <Text>{item.name}</Text>
            </HStack>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default PrioritySelect;
