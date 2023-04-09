import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import {Bars3Icon, CheckIcon} from "react-native-heroicons/outline";

type Item = {
  name: string;
  isCompleted: boolean;
  elements?: any[];
  navigation?: any;
};

const Element = ({name, isCompleted, elements, navigation}: Item) => {
  const [completed, setCompleted] = useState(true);
  return (
    <Pressable
      onPress={() => {
        if (elements !== undefined) {
          elements.map(item => {
            console.log(item);
          });
          navigation.navigate({
            name: "List",
            params: {
              name: name,
              itemList: elements,
            },
          });
        }
      }}
    >
      <View className="bg-sky-400 h-11 mx-5 my-2 px-2 rounded-lg flex justify-between items-center flex-row">
        <Text className="text-sky-950 text-xl pl-5">{name}</Text>
        <TouchableOpacity
          onPressIn={() => setCompleted(completed ? false : true)}
        >
          <View className="bg-sky-950 h-7 w-7 rounded-full">
            {isCompleted ? <CheckIcon size={30} color="#FFFFFF" /> : ""}
          </View>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default Element;
