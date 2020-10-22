import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
 
interface IProps {
    title: string;
}

const Header = (props: IProps) => {
  return (
          <View style={styles.header}>
            <Text style={styles.headerText}>
                {props.title}
            </Text>             
          </View>
  );
};

const styles = StyleSheet.create({
  header: {
      height: 60,
      padding: 15,
      backgroundColor: "darkslateblue"
  },

  headerText: {
    color: "white",
    fontSize: 23,
    textAlign: "center"
  },

})

export default Header;
