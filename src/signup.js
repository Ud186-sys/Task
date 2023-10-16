import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const users = [
    { email: "user1@example.com", password: "password1", name: "User 1" },
    { email: "user2@example.com", password: "password2", name: "User 2" },
  ];

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    const user = { name, email, password };
    const users = (await AsyncStorage.getItem('users')) || '[]';
    const parsedUsers = JSON.parse(users);
    parsedUsers.push(user);
    await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));
    navigation.navigate('Login');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={name}
          placeholder="Name"
          placeholderTextColor="#fff"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          value= {password}
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP / Register</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 42,
    color: "#fff",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3E3364",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 14,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#1E1A3C",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "#fff",
  },
});
export default SignUpScreen;
