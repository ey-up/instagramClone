import React, { Component,useState } from 'react';
import {
  View, Text, Image, SafeAreaView, Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {Input, Button, CheckBox  } from '../Components'

const Home = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setisShowPassword] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        {/* Logo Image */}
        <View style={[styles.subContainer, {flex: 1.5}]}>
          <Image source={require('../image/logo.png')} style={styles.logo} />
        </View>

        {/* Form */}
        <View style={[styles.subContainer, {flex: 3}]}>
          <Input
            placeholder={'Phone number, username or email'}
            value={username}
            onChangeText={(value) => setUsername(value)}
          />

          <Input
            placeholder={'Password'}
            secureTextEntry={isShowPassword}
            keyboardType={'numeric'}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginBottom: 40,
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <CheckBox
              text="Hide Password"
              status={isShowPassword}
              onPress={() => setisShowPassword( !isShowPassword)}
            />

            <TouchableOpacity>
              <Text style={[styles.blueText, {fontSize: 16, marginLeft: 15}]}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            text={'Login'}
            onPress={() => {
              console.log('State Değerleri ', username, ' ', password);
              props.navigation.navigate('TabNav')
            }}
          />

          <View
            style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
            <View style={styles.line} />
            <Text style={{fontSize: 20, color: 'gray', margin: 20}}>OR</Text>
            <View style={styles.line} />
          </View>
        </View>

        {/* Login With Facebook */}
        <View style={[styles.subContainer, {flex: 1.5, flexDirection: 'row'}]}>
          <Image
            source={require('../image/facebook.png')}
            style={styles.facebook}
          />
          <Text style={[styles.blueText, {fontSize: 20, marginLeft: 15}]}>
            Log In with Facebook
          </Text>
        </View>

        {/* Bottom */}
        <View
          style={[
            styles.subContainer,
            {flex: 0.5, borderTopWidth: 0.5, borderTopColor: 'gray'},
          ]}>
          <Text style={styles.mainText}>
            Don't have an account?
            <Text style={styles.blueText}> Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = {
  mainText: { color: 'gray' },
  blueText: { color: '#4495cb', fontWeight: 'bold' },
  subContainer: { alignItems: 'center', justifyContent: 'center', },
  logo: { width: 200, height: 100, },
  facebook: { width: 30, height: 30 },
  line: { width: '35%', height: 0.5, backgroundColor: 'gray' }

}
export default Home;

