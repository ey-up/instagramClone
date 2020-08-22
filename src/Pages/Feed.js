import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {getCharacters } from '../Actions/index';
import AsyncStorage from '@react-native-community/async-storage';

const Feed = (props) => {

  useEffect(() => {
    props.getCharacters();
    
  }, [])

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text> {item.name}</Text>
    </View>
  );


  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={props.list}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 12,
    paddingTop: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#e1e6e2',
    flex: 1,
  },
  topic: {
    paddingRight: 25,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  definition: {
    fontSize: 17,
    marginTop: 15,
    marginBottom: 15,
    paddingRight: 23,
    paddingLeft: 23,
  },
  miniLogo: {
    height: 21,
    width: 21,
    marginLeft: 15,
  },
  separatedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  miniLogo2: {
    height: 21,
    width: 21,
    marginRight: 15,
  },
});

const mapStateToProps = (state) => {
  const {list} = state.ListResponse;
  return {list};
};

export default connect(mapStateToProps, { getCharacters})(Feed);
