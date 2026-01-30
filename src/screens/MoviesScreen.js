
import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import Card from '../components/Card';

export default function MoviesScreen({ navigation }) {
  const [data,setData] = useState([]);

  function addMovie(){
    const item = {
      id: Date.now().toString(),
      name:"فيلم جديد",
      image:"https://via.placeholder.com/300",
      desc:"وصف"
    };
    setData([...data,item]);
  }

  return (
    <View style={{flex:1,padding:10}}>
      <Button title="+" onPress={addMovie}/>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <Card
            item={item}
            onPress={()=>navigation.navigate("Detail",{item})}
          />
        )}
      />
    </View>
  );
}
