import { SectionList } from 'react-native';
import {Text, TextProps, View} from './Themed';
const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto']
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimp']
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer']
    },
  ];
export function StyledSectionList() {
    return <>
    <SectionList sections={DATA} keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View>
          <Text style={{ color: 'white' }}>{item}</Text>
        </View>
      )}
      ></SectionList></>
}


