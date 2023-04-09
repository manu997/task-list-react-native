import React, {useEffect, useState} from "react";
import {Pressable, Text, View} from "react-native";
import Element from "../components/Element";

import {GestureHandlerRootView} from "react-native-gesture-handler";

type ElementList = {
  list: any[];
  navigation?: any;
};

const ElementList = ({list, navigation}: ElementList) => {
  return (
    <GestureHandlerRootView>
      <View className="h-full w-screen mr-6">
        {list.map(item => {
          return (
            <Element
              name={item.name}
              elements={item.elements}
              isCompleted={item.isCompleted}
              navigation={navigation}
            />
          );
        })}
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
