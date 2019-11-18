import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title="Deck" onPress={() => navigation.navigate('Deck')} />
      <Button title="Ball" onPress={() => navigation.navigate('Ball')} />
    </View>
  )
};

export default Home;
