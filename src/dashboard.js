import React, { useState, useEffect } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import ItemInputField from "./ItemInputField";
import DashboardItem from "./itemList";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const DashBoardScreen = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item == null) return;
    setItems([...items, item]);
    Keyboard.dismiss();
  };

  const deleteItem = (deleteIndex) => {
   setItems(items.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard Item List</Text>
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <DashboardItem
                index={index + 1}
                task={item}
                deleteTask={() => deleteItem(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <ItemInputField addItem={addItem} />
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  itemContainer: {
    marginTop: 20,
  },
});
