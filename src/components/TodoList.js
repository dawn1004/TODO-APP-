import React, {useState} from 'react';
import { CheckBox, Text, View, Dimensions } from 'react-native';
import { Button, Input, ListItem, Icon  } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';


export default function TodoList(props){
    const deleteTodo = (target)=>{
        const updatedTodo = []
        
        props.todos.forEach((todo, i)=>{
            if(i !== target){
                updatedTodo.push(todo)
            }
        })

        props.setTodos(updatedTodo)
    }

    const changeVal = (target, oldValue)=>{
        const updatedTodos = []
        props.todos.forEach((todo,index)=>{
            if(index === target){
                // todo.done = !oldValue;
                updatedTodos.push({title: todo.title, done: !oldValue})
            }else{
                updatedTodos.push(todo)
            }
        })
        props.setTodos(updatedTodos)
    }

    
    return(
        <View style={{paddingHorizontal: 10}}>
            
            {
                props.todos.map((todo, index)=>{
                    return (<ListItem key={index} bottomDivider>
                                <ListItem.Content style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <CheckBox 
                                        value={todo.done}
                                        style={{ marginRight: 7}}
                                        onChange={()=>{changeVal(index, todo.done)}}
                                        />
                                        <ListItem.Title style={todo.done?
                                            {textDecorationLine: "line-through"}:
                                            {textDecorationLine: "none"}
                                            }> 
                                            {todo.title}
                                        </ListItem.Title>
                                    </View>
                                    <ListItem.Subtitle >
                                        <Icon name="delete"  
                                        color="grey" 
                                        onPress={()=>{deleteTodo(index)}}/>
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>)
                })
            }

        </View>
    )
}
