import {useEffect, useState} from "react";
import {Text} from "react-native";
import {View} from "react-native";
import Element from "../components/Element";

type List = {
  elements: any[];
  navigation?: any;
  route?: any;
  children: any;
};

const List = ({elements, navigation, route, children}: List) => {
  return (
    <View className="h-full w-screen mr-6">
      {elements.map(item => {
        return (
          <Element
            name={item.name}
            elements={item.elements}
            isCompleted={item.isCompleted}
            navigation={navigation}
          />
        );
      })}
      {children}
    </View>
  );
};

export default List;
