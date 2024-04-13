import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.todoText}>
        <Text style={styles.todoText2}>Welcome to Todo App</Text>
      </View>
      <View style={styles.fullScreenImage}>
        <Image source={require('../assets/todo.jpg')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.touchableopacity} onPress={() => navigation.push("Add Task")}>
        <Image source={require('../assets/plus_icon.png')} style={styles.floatingBtn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoText: {
    marginTop: height * 0.05, // 5% from the top of the screen
  },
  todoText2: {
    fontSize: width * 0.06, // 6% of the screen width
    textAlign: "center",
    color: "red"
  },
  fullScreenImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8, // 80% of the screen width
    height: height * 0.6, // 60% of the screen height
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    resizeMode: 'cover',
  },
  touchableopacity: {
    position: "absolute",
    width: width * 0.15, // 15% of the screen width
    height: width * 0.15, // 15% of the screen width
    alignItems: "center",
    justifyContent: "center",
    bottom: height * 0.05, // 5% from the bottom of the screen
    right: width * 0.05, // 5% from the right of the screen
  },
  floatingBtn: {
    resizeMode: "contain",
    width: "100%", // 100% of the parent's width
    height: "100%", // 100% of the parent's height
  }
});

export default HomeScreen;
