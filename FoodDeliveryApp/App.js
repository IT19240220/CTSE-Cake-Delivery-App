import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login';
import ViewCakes from './app/seller/ViewCakes';
import AddCake from './app/seller/AddCake';
import SignUp from './app/SignUp';

//Buyer
import ViewFoodsCustomer from './app/buyer/ViewFoodsCustomer';
import AddCustomerDetails from './app/buyer/AddCustomerDetails';
import ViewCustomerOrder from './app/buyer/ViewCustomerOrder';
import UpdateCustomerDetails from './app/buyer/UpdateCustomerDetails';

import AdminTabs from './app/admin/components/AdminTabs';
import AddCake from './app/seller/AddCake';
import ViewCakes from './app/seller/ViewCakes';
import UpdateCakes from './app/seller/UpdateCakes';

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
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Create Account' }}
        />

        {/* Customer */}
        <Stack.Screen
          name="ViewFoodsCustomer"
          component={ViewFoodsCustomer}
          options={{ title: 'Add Item' }}
        />

        <Stack.Screen
          name="AddCustomerDetails"
          component={AddCustomerDetails}
          options={{ title: 'Add Delivery Details' }}
        />

        <Stack.Screen
          name="ViewCustomerOrder"
          component={ViewCustomerOrder}
          options={{ title: 'My Orders' }}
        />

        <Stack.Screen
          name="UpdateCustomerDetails"
          component={UpdateCustomerDetails}
          options={{ title: 'Update Details' }}
        />

        {/* advertisement */}
        <Stack.Screen
          name="AdminTabs"
          component={AdminTabs}
          options={{
            headerShown: false,
          }}
        />

        {/* seller */}
        <Stack.Screen
          name="AddCake"
          component={AddCake}
          options={{ title: "Add Cake" }}
        />

        <Stack.Screen
          name="ViewCakes"
          component={ViewCakes}
          options={{ title: "View Cakes" }}
        />

        <Stack.Screen
          name="UpdateCakes"
          component={UpdateCakes}
          options={{ title: "Update Cakes" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
