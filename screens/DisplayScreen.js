import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Modal, Button, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window')
const DisplayTask = ({ route }) => {
  const { taskList, setTaskList } = route.params;
  const [tasks, setTasks] = useState(taskList);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [updatedTodoTitle, setUpdatedTodoTitle] = useState("");

  const handleDelete = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks)
    setTaskList(newTasks);
    console.log(newTasks);
  };

  const openModal = (id, title) => {
    setSelectedTodoId(id);
    console.log(selectedTodoId)
    setUpdatedTodoTitle(title);
    console.log(updatedTodoTitle)
    setModalVisible(true);
  };

  const handleUpdate = () => {
    const updatedList = tasks.map((item) =>
      item.id === selectedTodoId ? { ...item, title: updatedTodoTitle } : item
    );
    setTasks(updatedList);
    setTaskList(updatedList);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Text style={styles.title}>No Task Found</Text>
      ) : (
        <Text style={styles.title}>All Tasks</Text>
      )}
      {tasks.length === 0 ? (
        <View style={styles.imageContainer}>
          <Image source={require('../assets/noTask.png')} style={styles.image} />
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Icon name="trash" size={30} color="#900" style={styles.iconMargin} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openModal(item.id, item.title)}>
                  <Icon name="pencil" size={30} color="#900" style={styles.iconMargin} />
                </TouchableOpacity>
              </View>
            </View>
          )
          }
          keyExtractor={item => item.id}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ width: '80%', backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
            <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Update Todo</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="times" size={30} color="#900" style={styles.iconMargin} />
              </TouchableOpacity>
            </View>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 6,
                padding: 10,
                marginBottom: 10
              }}
              placeholder="Enter new title"
              value={updatedTodoTitle}
              onChangeText={(text) => setUpdatedTodoTitle(text)}
            />
            <Button title="Update" onPress={handleUpdate} />
          </View>
        </View>
      </Modal>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8, // 80% of the screen width
    height: height * 0.6, // 60% of the screen height
    borderColor: 'black',
    resizeMode: 'contain',
  },
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconMargin: {
    marginRight: 10,
  }
});

export default DisplayTask;
