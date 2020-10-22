import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {IShoppingItem} from "../../types/shopping-item";
import {Icon} from "react-native-elements";

interface IProps {
  item: IShoppingItem;
  deleteItem: () => void;
}

const ListItem = (props: IProps) => {   
  
  return (
    <TouchableOpacity style={listItemStyle.touchable}>
      
      <View style={listItemStyle.view}>
        <Text style={listItemStyle.text}>
          {props.item.text}
        </Text>
        <Icon 
          type='font-awesome'
          name='remove'
          color="firebrick"
          onPress={ () => props.deleteItem()} 
        />
      </View>      
      
    </TouchableOpacity>    
  );
};

 
const listItemStyle = StyleSheet.create({
  touchable: {
    padding: 15,
    backgroundColor: "#eeeeee",
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontWeight: "bold"
  }, 
});

export default ListItem;
