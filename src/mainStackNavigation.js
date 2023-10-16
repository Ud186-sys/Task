import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import DashBoardScreen from "./dashboard";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./signup";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
