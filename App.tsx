import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [measurementSystem, setMeasurementSystem] = useState('SI');
  const [bmi, setBMI] = useState('');

  const toggleMeasurementSystem = () => {
    if (measurementSystem === 'SI') {
      setMeasurementSystem('Metric');
    } else {
      setMeasurementSystem('SI');
    }
  };

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = measurementSystem === 'SI' ? parseFloat(height) / 100 : parseFloat(height) * 0.0254;
      const bmiValue = weightInKg / (heightInM * heightInM);
      setBMI(bmiValue.toFixed(2));
    }
  };

  const placeholderText = measurementSystem === 'SI' ? 'Height in cm' : 'Height in inches';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BMI Calculator</Text>
      <Image source={require('./assets/vector.png')} style={styles.image} />
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          placeholder={placeholderText}
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          placeholder="Weight in kg"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <TouchableOpacity onPress={toggleMeasurementSystem} style={styles.button}>
        <Text style={styles.buttonText}>
          Toggle System ({measurementSystem === 'SI' ? 'Metric' : 'SI'})
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={calculateBMI} style={styles.button}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {bmi !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36393f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 200,
    height: 150,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#7289da',
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
