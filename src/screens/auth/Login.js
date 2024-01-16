import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from "@env"

const bgAuth = require('../../assets/bg_auth.jpeg');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (inputText) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(inputText);
  };

  async function validasiLogin() {
    if (email === "") {
      alert('Email cannot be empty')
    } else if (password === "") {
      alert('Password cannot be empty')
    } else if (!validateEmail(email)) {
      alert('Please enter the correct email!')
    } else {
      handleLoginAPI();
    }
  }

  async function handleLoginAPI() {
    const apiUrl = "https://3a49-223-255-229-76.ngrok-free.app"
    console.log("API URL = " + API_URL);
    try {
      const response = await fetch(apiUrl + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.statusCode == 404) {
        alert('Account not found!');
      } else if (data.statusCode == 400) {
        alert('Password is wrong!');
      } else if (response.ok) {
        if (data.data.name === " ") {
          navigation.replace('SelectProfile', {
            email: data.data.email,
          });
        } else {
          await AsyncStorage.setItem('dataUser', JSON.stringify({
            'email': data.data.email,
            'name': data.data.name,
            'image': data.data.image
          }));

          navigation.replace('Home');
        }

      } else {
        alert('There seems to be an error, please try again later');
      }
    } catch (error) {
      alert('There seems to be an error, please try again later');
    }
  }
  return (
    <View style={styles.container}>

      <View style={styles.overlay}>

        <Image source={bgAuth} style={styles.backgroundImage} resizeMode="cover" />
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            style={styles.textInput}
            placeholder="Email or phone number"
            placeholderTextColor="white"
            cursorColor="white"
            selectionColor="white"
            color="white"
          />
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
            cursorColor="white"
            selectionColor="white"
            color="white"
          >
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={validasiLogin}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 100 }}>
            <Text style={{ color: 'white' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: 'red', paddingLeft: 5 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.15,
    padding: 0
  },
  textInputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    right: 50,
  },
  textInput: {
    borderColor: '#B90020',
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: 'white'
  },
  button: {
    backgroundColor: '#B90020',
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  logo: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 8,
    margin: 5
  }
});

export default Login;
