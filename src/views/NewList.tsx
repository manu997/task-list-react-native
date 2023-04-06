import React, { useState } from "react";
import {Pressable, Text, TextInput, View} from "react-native";

const NewList = ({navigation}: any) => {
  const [name, setName] = useState("")
  const newList = () => {

    navigation.navigate("Home")
  }
  return (
    <View className="flex flex-col items-center w-screen h-full">
      <TextInput
        className="p-3 border-sky-900 border-2 text-sky-900 my-4 rounded-lg text-lg w-80"
        placeholder="Nombre de la lista"
        placeholderTextColor="#374151"
        onChangeText={setName}
        value={name}
      />
      <View className="bg-sky-900 h-0.5 w-full" />
      <TextInput
        className="p-3 border-sky-900 border-2 text-sky-900 my-4 rounded-lg text-lg w-80"
        placeholder="Nuevo elemento"
        placeholderTextColor="#374151"
      />
      <Pressable
        className="bg-sky-900 flex justify-center items-center rounded-lg w-60 py-2 mb-4"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white text-lg">Añadir elemento</Text>
      </Pressable>
      <Pressable
        className="bg-sky-900 absolute bottom-20 right-10 w-20 h-20 flex justify-center items-center rounded-2xl"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white text-7xl pt-2">+</Text>
      </Pressable>
    </View>
  );
};

export default NewList;
