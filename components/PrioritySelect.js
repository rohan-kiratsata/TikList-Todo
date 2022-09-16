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

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const menuItem = [
  {
    name: "Priority 1",
    iconColor: "",
  },
  {
    name: "Priority 2",
    iconColor: "",
  },
  {
    name: "Priority 3",
    iconColor: "",
  },
];

const PrioritySelect = () => {
  return (
    <Menu
      shadow={2}
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Icon name="flag" size={24} />
          </Pressable>
        );
      }}
    >
      {menuItem.map((item) => {
        return (
          <Menu.Item key={uuidv4()}>
            <HStack space="2" alignItems="center">
              <Icon name="flag" color={item.iconColor} />
              <Text>{item.name}</Text>
            </HStack>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default PrioritySelect;
