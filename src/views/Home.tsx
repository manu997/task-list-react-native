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
          const obj = item.data();
          const newObj = {
            id: item.id,
            items: obj,
          };
          item.data().isCompleted
            ? completedLists.push(newObj)
            : pendingLists.push(newObj);
        });
        setPendingLists(pendingLists);
        setCompletedLists(completedLists);
      });
  }, [pendingLists]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="PendingLists" options={{title: "Tareas pendientes"}}>
        {props => (
          <List {...props} elements={pendingLists}>
            <Pressable
              className="bg-sky-900 absolute bottom-20 right-10 w-1/3 h-20 flex justify-center items-center rounded-2xl"
              onPress={() => navigation.navigate("NewList")}
            >
              <Text className="text-white text-xl px-5">Añadir tareas</Text>
            </Pressable>
          </List>
        )}
      </Tab.Screen>
      <Tab.Screen name="CompletedLists" options={{title: "Tareas completadas"}}>
        {props => <List {...props} elements={completedLists} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Home;
