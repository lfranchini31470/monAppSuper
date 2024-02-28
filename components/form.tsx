import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24 }}>Simple Form</Text>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
        style={{ height: 40, borderColor: 'white', borderWidth: 1, marginBottom: 12, padding: 8, color: 'white'}}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
        style={{ height: 40, borderColor: 'white', borderWidth: 1, marginBottom: 12, padding: 8, color: 'white' }}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        style={{ height: 40, borderColor: 'white', borderWidth: 1, marginBottom: 12, padding: 8, color: 'white' }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};