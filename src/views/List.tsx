import {useEffect, useState} from "react";
import {Text} from "react-native";
import {View} from "react-native";
import Element from "../components/Element";

type List = {
  elements: any[];
  navigation?: any;
  route?: any;
  children?: any;
};

const List = ({elements, navigation, route, children}: List) => {
  return (
    <View className="h-full w-screen mr-6">
      {elements.map(item => {
        return (
          <Element
            id={item.id}
            name={item.items.name}
            elements={item.items.elements}
            isCompleted={item.items.isCompleted}
            navigation={navigation}
          />
        );
      })}
      {children}
    </View>
  );
};

export default List;
