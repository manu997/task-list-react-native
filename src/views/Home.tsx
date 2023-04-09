import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React, {useEffect, useState} from "react";
import ElementList from "./ElementList";
import firestore from "@react-native-firebase/firestore";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
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
        {props => <ElementList {...props} list={pendingLists} />}
      </Tab.Screen>
      <Tab.Screen name="CompletedLists" options={{title: "Listas completadas"}}>
        {props => <ElementList {...props} list={completedLists} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Home;
