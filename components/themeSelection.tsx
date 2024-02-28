import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Liste des thèmes disponibles
const themes = ['light', 'dark', 'blue'];

// const ThemeSelector: React.FC = () => {
export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Fonction pour changer le thème
  const changeTheme = async (theme: string) => {
    try {
      // Stockage du thème dans AsyncStorage
      await AsyncStorage.setItem('themeName', theme);
      // Appliquer le thème à l'application
      setSelectedTheme(theme);
    } catch (error) {
      console.error('Erreur lors du changement de thème : ', error);
    }
  };

  return (
    <View>
      <Text style={{ color: 'green' }}>Sélectionnez un thème :</Text>
      {/* Affichage de la liste des thèmes */}
      {themes.map((theme, index) => (
        <TouchableOpacity key={index} onPress={() => changeTheme(theme)}>
          <Text style={{ fontSize: 18, marginVertical: 5, color: 'green' }}>{theme}</Text>
        </TouchableOpacity>
      ))}
      {/* Affichage du thème actuellement sélectionné */}
      {selectedTheme && (
        <Text style={{ marginTop: 10, color: 'green' }}>Thème actuel : {selectedTheme}</Text>
      )}
    </View>
  );
};

//export default ThemeSelector;