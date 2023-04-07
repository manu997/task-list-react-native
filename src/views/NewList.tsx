import React, {useState} from "react";
import {Pressable, Text, TextInput, View} from "react-native";
import lists from "../../generated.json";
import uuid from 'react-native-uuid';


const NewList = ({navigation}: any) => {
  const [name, setName] = useState("");
  const [elementItem, setElementItem] = useState("");
  const [elements, setElements] = useState<string[]>([]);
  const newList = () => {
    const element = {
      _id: uuid.v4().toString(),
      name: name,
      elements: elements,
    };
    lists.push(element);
    navigation.navigate("Home");
  };
  return (
    <View className="flex flex-col w-screen h-full text-left items-center">
      <TextInput
        className="p-3 border-sky-900 border-2 text-sky-900 my-4 rounded-lg text-lg w-80"
        placeholder="Nombre de la lista"
        placeholderTextColor="#374151"
        onChangeText={setName}
        value={name}
      />
      <View className="bg-sky-900 h-0.5 w-full mb-2" />
      {elements.map(item => {
        return (
          <Text className="text-sky-900 text-lg self-start ml-10">{item}</Text>
        );
      })}
      <View className="flex flex-row my-4 justify-between w-80">
        <TextInput
          className="p-3 border-sky-900 border-2 text-sky-900 rounded-lg text-lg w-3/4"
          placeholder="Nuevo elemento"
          placeholderTextColor="#374151"
          onChangeText={text => setElementItem(text)}
        />
        <Pressable
          className="bg-sky-900 flex justify-center items-center rounded-lg w-1/5"
          onPress={() =>
            elementItem !== "" ? setElements([...elements, elementItem]) : ""
          }
        >
          <Text className="text-white text-sm">Añadir</Text>
        </Pressable>
      </View>
      <Pressable
        className="bg-sky-900 absolute bottom-20 right-10 w-20 h-20 flex justify-center items-center rounded-2xl"
        onPress={newList}
      >
        <Text className="text-white text-7xl pt-2">+</Text>
      </Pressable>
    </View>
  );
};

export default NewList;
function uuidv4() {
  throw new Error("Function not implemented.");
}
