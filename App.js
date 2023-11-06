import React, { useState } from "react"; 
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 

  const createTask = () => { 
    setTasks([...tasks, task]);
    setTask("")
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks]; 
    updatedTasks.splice(index, 1); 
    setTasks(updatedTasks); 
  };

  const clearTasks = () => {
    setTasks([]); 
  };

  const displayTask = ({ item, index }) => ( 
    <View style={styles.task}> 
        <Text style={styles.task_name}>{item}</Text> 
        <TouchableOpacity 
            onPress={() => deleteTask(index)}> 
            <Text style={styles.task_del}>Done</Text>
        </TouchableOpacity>
    </View> 
  ); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TextInput 
          style={styles.input}
          placeholder="Enter task"
          value={task} 
          onChangeText={(text) => setTask(text)} 
        />
        <TouchableOpacity 
          style={styles.create_btn} 
          onPress={createTask}> 
          <Text style={styles.create_btn_text}>Create</Text> 
        </TouchableOpacity>
        <FlatList 
          data={tasks}
          renderItem={displayTask}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity 
          style={styles.clear_btn} 
          onPress={clearTasks}> 
          <Text style={styles.clear_btn_text}>Clear List</Text> 
        </TouchableOpacity>
    </View>
  );
}

const csc_colour = "#1482e3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: { 
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 7,
    color: csc_colour,
    alignSelf: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 3, 
    borderColor: csc_colour, 
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 18,

  },
  create_btn: {
    backgroundColor: csc_colour,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  create_btn_text: {
    color: "white",
    alignContent: "center",
    fontSize: 18,
    alignSelf: "center",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    paddingLeft: 40,
    paddingRight: 40,
  },
  task_name: {
    fontSize: 24,
  },
  task_del: {
    backgroundColor: csc_colour,
    color: "white",
    fontSize: 14,
    padding: 5,
    borderRadius: 10,
  },
  clear_btn: {
    backgroundColor: "red",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  clear_btn_text: {
    color: "white",
    alignContent: "center",
    fontSize: 18,
    alignSelf: "center",
  },
});
