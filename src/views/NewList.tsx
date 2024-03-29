import React, {useState} from "react";
import {Pressable, Text, TextInput, View} from "react-native";
import firestore from "@react-native-firebase/firestore";

const NewList = ({navigation}: any) => {
  const [name, setName] = useState("");
  const [elementItem, setElementItem] = useState<string>("");
  const [elements, setElements] = useState<any[]>([]);

  const newList = () => {
    const db = firestore();
    const batch = db.batch();

    elements.forEach(item => {
      var docRef = db.collection("listas").doc(); //automatically generate unique id
      batch.set(docRef, item);
    });

    batch.commit();

    navigation.navigate("Home")
  };

  const newElement = () => {
    if (elementItem !== "") {
      setElements([
        ...elements,
        {
          name: elementItem,
          isCompleted: false,
        },
      ]);
      setElementItem("");
    }
  };

  return (
    <View className="flex flex-col w-screen h-full text-left items-center">
      {elements.map(item => {
        return (
          <Text className="text-sky-900 text-lg self-start ml-10">
            {item.name}
          </Text>
        );
      })}
      <View className="flex flex-row my-4 justify-between w-80">
        <TextInput
          className="p-3 border-sky-900 border-2 text-sky-900 rounded-lg text-lg w-3/4"
          placeholder="Nuevo elemento"
          placeholderTextColor="#374151"
          onChangeText={text => setElementItem(text)}
          value={elementItem}
        />
        <Pressable
          className="bg-sky-900 flex justify-center items-center rounded-lg w-1/5"
          onPress={newElement}
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
