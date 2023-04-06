import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import {Bars3Icon, CheckIcon} from "react-native-heroicons/outline";

type Item = {
  _id: string;
  index: number;
  name: string;
};

const Element = ({item, drag, isActive}: RenderItemParams<Item>) => {
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <ScaleDecorator>
      <View className="bg-sky-400 h-11 mx-5 my-2 px-2 rounded-lg flex justify-between items-center flex-row">
        <Bars3Icon
          color="#082f49"
          size={42}
          delayLongPress={1.5}
          onLongPress={drag}
        />
        <Text className="text-sky-950 text-2xl" disabled={isActive}>
          {item.name}
        </Text>
        <TouchableOpacity
          onPress={() => setIsCompleted(isCompleted ? false : true)}
        >
          <View className="bg-sky-950 h-7 w-7 rounded-full">
            <CheckIcon size={40} color="#FFFFF"/>
          </View>
        </TouchableOpacity>
      </View>
    </ScaleDecorator>
  );
};

export default Element;
