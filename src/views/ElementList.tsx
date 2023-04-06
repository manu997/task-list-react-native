import React, {useState} from "react";
import {Pressable, Text, View} from "react-native";
import Element from "./Element";

import lists from "../../generated.json";
import DraggableFlatList from "react-native-draggable-flatlist";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const ElementList = ({navigation}: any) => {
  const [data, setData] = useState(lists);

  return (
    <GestureHandlerRootView>
      <View className="h-full w-screen mr-6">
        <DraggableFlatList
          data={data}
          renderItem={Element}
          keyExtractor={item => item._id}
          onDragEnd={({data}) => setData(data)}
        />
        <Pressable
          className="bg-sky-900 absolute bottom-20 right-10 w-20 h-20 flex justify-center items-center rounded-2xl"
          onPress={() => navigation.navigate("NewList")}
        >
          <Text className="text-white text-7xl pt-2">+</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
};

export default ElementList;
