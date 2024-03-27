import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { StyledSectionList } from '@/components/SectionList';
import App from '@/components/bouton';
import React from 'react';
import {Card} from '@/components/card';
import { SimpleForm } from '@/components/form';
import { Counter } from '@/components/counter';
import ThreeScreen from '@/components/useReducer';
import ThemeSelector from '@/components/themeSelection';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        {/* <App></App> */}
        <SimpleForm></SimpleForm>
        <ThemeSelector></ThemeSelector>
        <Counter></Counter>
        {/* <ThreeScreen></ThreeScreen> */}
        <Text key="0">Devin</Text>
        <Text key="1">Gabe</Text>
        <Text key="2">Kim</Text>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
