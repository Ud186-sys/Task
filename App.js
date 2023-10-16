import { StyleSheet, View } from "react-native";
import MyStack from "./src/mainStackNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <MyStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
