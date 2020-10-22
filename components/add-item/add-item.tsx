import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from "react-native-elements";

interface IProps {
  addItem: (txt: string) => void;
}

const AddItem = (props: IProps) => {   
  const [input, setInput] = useState<string>("");
  const addItem = () => {
    if(input) {
      props.addItem(input);
      setInput("");
    }
  }
  let buttonStyle=addItemStyle.buttonInactive;
  let buttonIconStyle=addItemStyle.buttonIconInactive;
  let buttonTextStyle=addItemStyle.buttonTextInactive;
  let buttonDisabled=true;

  if(input) {
    buttonStyle=addItemStyle.buttonActive;
    buttonIconStyle=addItemStyle.buttonIconActive;
    buttonTextStyle=addItemStyle.buttonTextActive;
    buttonDisabled=false;
  }
  return (
          <View style={addItemStyle.view}>
            <TextInput 
              placeholder="Enter item..."
              style={addItemStyle.input}
              value={input}
              onChangeText = {(txt: string) => setInput(txt)}
            />
            <TouchableOpacity 
              style={buttonStyle} 
              onPress = {() => addItem()}
              disabled={buttonDisabled}
            >              
              <Icon 
                type="font-awesome" 
                name="plus" 
                style={buttonIconStyle}
              />
              <Text 
                style={buttonTextStyle}
              > 
                Add Item
              </Text>   
            </TouchableOpacity>
          </View>
  );
};

const addItemStyle = StyleSheet.create({
  view: {
    alignItems: "stretch",    
    flexDirection: "column",
    padding: 2
  }, 
  input: {
    padding: 8,
    fontSize: 16,
    height: 60      
  },
  buttonActive: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextActive: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10
  },
  buttonIconActive: {
    color: "darkslateblue"
  },

  buttonInactive: {
    backgroundColor: "lightgray",
    padding: 9,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextInactive: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10
  },
  buttonIconInactive: {
    color: "gray"
  }
});

export default AddItem;
