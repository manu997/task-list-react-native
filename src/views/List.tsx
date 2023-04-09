import {useEffect, useState} from "react";
import {Text} from "react-native";
import {View} from "react-native";
import ElementList from "./ElementList";
import Element from "../components/Element";

type List = {
  elements: any[];
  navigation?: any;
  route?: any;
};

const List = ({elements, navigation, route}: List) => {
  return (
    <View className="h-full w-screen mr-6">
      {elements.map(item => {
        return <Element name={item.name} isCompleted={item.isCompleted} />;
      })}
    </View>
  );
};

export default List;
