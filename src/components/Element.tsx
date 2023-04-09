import {firebase} from "@react-native-firebase/firestore";
import React, {useEffect, useState} from "react";
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import firestore from "@react-native-firebase/firestore";
import {Bars3Icon, CheckIcon} from "react-native-heroicons/outline";

type Item = {
  id: string;
  name: string;
  isCompleted: boolean;
  elements?: any[];
  navigation?: any;
};

const Element = ({id, name, isCompleted, elements, navigation}: Item) => {
  const [completed, setCompleted] = useState(isCompleted);
  useEffect(() => {
    firestore().collection("listas").doc(id).update({isCompleted: completed});
  }, [completed]);
  return (
    <View className="bg-sky-400 h-11 mx-5 my-2 px-2 rounded-lg flex justify-between items-center flex-row">
      <Text className="text-sky-950 text-xl pl-5">{name}</Text>
      <TouchableOpacity
        onPressIn={() => setCompleted(completed ? false : true)}
      >
        <View className="bg-sky-950 h-7 w-7 rounded-full">
          {completed ? <CheckIcon size={30} color="#FFFFFF" /> : ""}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Element;
