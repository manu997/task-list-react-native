import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React from "react";
import ElementList from "./ElementList";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PendingLists" options={{title: 'Listas pendientes',}} component={ElementList} />
      <Tab.Screen name="CompletedLists" options={{title: 'Listas completadas'}} component={ElementList} />
    </Tab.Navigator>
  );
};

export default Home;
