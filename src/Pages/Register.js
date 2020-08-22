import {Input, Button} from '../Components';
import React, {useState} from 'react';

import {
  View,
  Alert,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {registerAction} from '../Actions';

const {width, height} = Dimensions.get('window');
const Register = (props) => {
  const [email, setEmail] = useState('hey@test.com');
  const [password, setPassword] = useState('1234');
  const [first, setFirst] = useState('heyo');
  const [last, setLast] = useState('heys');

  return (
    <SafeAreaView style={styles.subContainer}>
      <Input
        placeholder="Email"
        style={{marginTop: 20}}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="Password"
        style={{marginTop: 11}}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Input
        placeholder="first Name"
        style={{marginTop: 11}}
        value={first}
        onChangeText={(value) => setFirst(value)}
      />
      <Input
        placeholder="Last Name"
        style={{marginTop: 11}}
        value={last}
        onChangeText={(value) => setLast(value)}
      />
      <Button
        style={{height: height * 0.07, marginTop: 11}}
        text={'Register'}
        onPress={() => {
            const params={
                email,
                password,
                firstName:first,
                lastName:last,
            }
            props.registerAction(params);
          props.navigation.navigate('TabNav');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  subContainer: {alignItems: 'center', justifyContent: 'center'},
});


const mapStateToProps = (state) => {
  const {loading, user} = state.AuthResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {registerAction})(Register);
