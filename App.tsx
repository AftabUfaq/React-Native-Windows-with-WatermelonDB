/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { saveWeight } from './data/helper';
import { observeWeights, Weight, LastWeights } from './data/helper';

const handleSavePress = async () => {
  try{
    await saveWeight({weight: "30", note: "slkdfj"});
  }
  catch(err){
      console.error(err)
  }
 

}


function App(): React.JSX.Element {

  return (
    <Button onPress={handleSavePress} title="save note"/>
  );
}
export default App;
