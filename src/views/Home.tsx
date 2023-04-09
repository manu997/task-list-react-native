import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React, {useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import {Pressable, Text} from "react-native";
import List from "./List";

const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}: any) => {
  const [pendingLists, setPendingLists] = useState<any[]>([]);
  const [completedLists, setCompletedLists] = useState<any[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection("listas")
      .get()
      .then(lists => {
        const pendingLists: any[] = [];
        const completedLists: any[] = [];
        lists.forEach(item => {
          item.data().isCompleted
            ? completedLists.push(item.data())
            : pendingLists.push(item.data());
        });
        setPendingLists(pendingLists);
        setCompletedLists(completedLists);
      });
  }, [pendingLists]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="PendingLists" options={{title: "Listas pendientes"}}>
      {props => (
          <List {...props} elements={pendingLists}>
            <Pressable
              className="bg-sky-900 absolute bottom-20 right-10 w-20 h-20 flex justify-center items-center rounded-2xl"
              onPress={() => navigation.navigate("NewList")}
            >
              <Text className="text-white text-7xl pt-2">+</Text>
            </Pressable>
          </List>
        )}
      </Tab.Screen>
      <Tab.Screen name="CompletedLists" options={{title: "Listas completadas"}}>
        {props => (
          <List {...props} elements={completedLists}>
            <Pressable
              className="bg-sky-900 absolute bottom-20 right-10 w-20 h-20 flex justify-center items-center rounded-2xl"
              onPress={() => navigation.navigate("NewList")}
            >
              <Text className="text-white text-7xl pt-2">+</Text>
            </Pressable>
          </List>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Home;
