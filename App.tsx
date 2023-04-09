import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/views/Home";
import NewList from "./src/views/NewList";
import List from "./src/views/List";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Mis listas",
            headerTitleStyle: {
              fontSize: 30,
              color: "#0c4a6e",
            },
          }}
          component={Home}
        />
        <Stack.Screen
          name="NewList"
          options={{
            title: "Nueva lista",
            headerTitleStyle: {
              fontSize: 30,
              color: "#0c4a6e",
            },
          }}
          component={NewList}
        />
        <Stack.Screen
          name="List"
          options={({route}) => ({
            title: route.params.name,
            headerTitleStyle: {
              fontSize: 30,
              color: "#0c4a6e",
            },
          })}
        >
          {props => <List {...props} elements={props.route.params.itemList} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
