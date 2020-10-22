import React, {useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Header from "../header";
import {IShoppingItem, constructItem, mockItems} from "../../types/shopping-item";
import ListItem from "../list-item";
import AddItem from "../add-item";

interface IListItemProps {
  item: IShoppingItem;
}

const App = () => {   

  const [items, setItems] = useState<IShoppingItem[]>(mockItems)
  const deleteItem = (item: IShoppingItem) => {
     const newItems = items.filter( it => it.id!==item.id);
     setItems(newItems);
  };
  const addItem = (txt: string) => {
    const it: IShoppingItem = constructItem(txt);
    const newItems = [it, ...items];
    setItems(newItems);
  }
  return (
          <SafeAreaView style={styles.app}>
            <Header title="Shopping Lis1t"/>
            <AddItem addItem={(txt: string) => addItem(txt)}/>
            <FlatList data={items} renderItem={ 
              (listProps: IListItemProps) => (
                  <ListItem 
                    item={listProps.item} 
                    deleteItem={() => deleteItem(listProps.item)}
                  />
              )
            }/>
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column"
  }, 
});

export default App;
