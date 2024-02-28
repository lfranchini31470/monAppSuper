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

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StyledSectionList></StyledSectionList>
      {/* <Card error={true} loading={undefined} title={undefined} />
      <Card loading={true} error={undefined} title={undefined} />
      <Card loading={false} title="Title" error={undefined} /> */}
      <App></App>
      {/* <Counter></Counter> */}
      <SimpleForm></SimpleForm>
      {/* <ThreeScreen></ThreeScreen> */}
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
