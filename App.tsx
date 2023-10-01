import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      // Convert weight to kilograms and height to meters
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;

      // Calculate BMI
      const bmiValue = weightInKg / (heightInM * heightInM);

      // Update the BMI state with two decimal places
      setBMI(bmiValue.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BMI Calculator</Text>
      <Image source={require('./assets/vector.png')} style={styles.image} />
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Height</Text>
          <TextInput
            placeholder="Enter height in centimeters"
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            placeholder="Enter weight in kilograms"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity onPress={calculateBMI} style={styles.calculateButton}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {bmi !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36393f', // Discord app color
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 40,
  },
  image: {
    width: 200, // Set the width and height as needed
    height: 150,
    position: 'absolute',
    top: 90,
  },
  inputContainer: {
    alignItems: 'center',
  
  },
  labelContainer: {
    flexDirection: 'column', // Stack label and input vertically
    alignItems: 'center',
    marginBottom: 10,    
    width: 300,
    height:80
  },
  label: {
    color: 'white',
    fontSize:18,
    fontWeight: 'bold',
    paddingBottom:15

  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  calculateButton: {
    backgroundColor: '#7289da', // Discord app purple color
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 350,
    alignItems: 'center',


  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
