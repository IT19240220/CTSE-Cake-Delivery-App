import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Login";
import ViewFoods from "./app/seller/ViewFoods";
import UpdateFood from "./app/seller/UpdateFood";
import AddFood from "./app/seller/AddFood";
import SignUp from "./app/SignUp";

//Buyer
import ViewFoodsCustomer from "./app/buyer/ViewFoodsCustomer";
import AddCustomerDetails from "./app/buyer/AddCustomerDetails";
import ViewCustomerOrder from "./app/buyer/ViewCustomerOrder";
import ViewCustomerDetails from "./app/buyer/ViewCustomerDetails";
import UpdateCustomerDetails from "./app/buyer/UpdateCustomerDetails";

import AdminTabs from "./app/admin/components/AdminTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Create Account" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
