import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Form(props){
    const screenWidth = Math.round(Dimensions.get('window').width);
    const [textField, setTextField] = useState("asd");


    const addEvent= ()=>{
        props.addTodo({title: textField, done: false})
    }

    return(
        <View style={styles.formStyle}>
            <Input 
                placeholder='Enter Todo...'
                containerStyle={{width: screenWidth-110}}
                onChangeText={text=>setTextField(text)}
            />
            <Button
                icon={
                <Icon
                    name="plus"
                    size={15}
                    color="white"
                />
                }
                title="add"
                buttonStyle={styles.buttonStyle}
                onPress={addEvent}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    formStyle:{
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10
    },
    buttonStyle:{
      width: 100
    }
  });