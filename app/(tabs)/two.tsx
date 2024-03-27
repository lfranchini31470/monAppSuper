import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Card } from '@/components/card';
import { StyledSectionList } from '@/components/SectionList';
import App2 from '@/components/bouton';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator}  />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      {/* <App2></App2> */}
      <StyledSectionList></StyledSectionList>
      <Card error={true} loading={undefined} title={undefined} />
      <Card loading={true} error={undefined} title={undefined} />
      <Card loading={false} title="Title" error={undefined} />
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
