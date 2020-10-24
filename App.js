import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import Navbar from './src/components/nav'
import Form from './src/components/Form'
import TodoList from './src/components/TodoList'

export default function App() {

  const [todos, setTodos] = useState([
    
    {
      title: "maglalaba",
      done: false
    },
    {
      title: "mag gagala",
      done: true
    },
    {
      title: "mag tratrabaho",
      done: false
    }
  ])

const addTodo = (newTodo)=>{
  setTodos([newTodo].concat(todos))

}

  return (
    <ThemeProvider>
      <Navbar title="TODO APP2"/>
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>

    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    width: 100
  }
});
