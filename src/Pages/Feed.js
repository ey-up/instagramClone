import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {getCharacters} from '../Actions/index';
const {width, height} = Dimensions.get('window');

const Feed = (props) => {
  useEffect(() => {
    props.getCharacters();
  }, []);

  // Feed
  const renderItem = ({item}) => (
    <View style={{flex: 1}}>
      <View style={styles.FeedContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.miniImage} source={{uri: item.image}}></Image>
          <View style={{flexDirection: 'column', marginLeft: 7}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
            <Text>Address</Text>
          </View>
        </View>
        <Image
          style={{height: 20, width: 20, marginRight: 15}}
          source={require('../image/more2.png')}></Image>
      </View>

      <View style={styles.Feed}>
        <Image
          style={{height: height / 2.2, width: width}}
          source={{uri: item.image}}
        />

        <View
          style={{
            width: width,
            height: height / 13,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.Icons}
              source={require('../image/heartt.png')}
            />
            <Image
              style={{height: 50, width: 50, marginLeft: 15}}
              source={require('../image/comment.jpg')}
            />
            <Image style={styles.Icons} source={require('../image/send.png')} />
          </View>
          <Image
            style={styles.Icons}
            source={require('../image/bookmark.png')}
          />
        </View>
        <Text style={{fontWeight: 'bold', marginLeft: 14, fontSize: 16}}>
          1017 Beğenme
        </Text>
      </View>
    </View>
  );

  //Stories
  const renderItem2 = ({item}) => {
    return (
      <View style={styles.StoriesContainer}>
        <Image style={styles.StoriesImage} source={{uri: item.image}}></Image>
        <Text style={{fontSize: 12}}> {item.name} </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* UPPER SECTION */}
      <View style={styles.UpperSectionContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={[styles.UPImg, {marginLeft: 17}]}
            source={require('../image/instagramLogo.png')}></Image>
          <Image
            style={{margin: 7}}
            source={require('../image/insta.png')}></Image>
        </View>
        <Image
          style={styles.UPImg}
          source={require('../image/send.png')}></Image>
      </View>

      {/* STORIES */}
      <View
        style={{
          flex: 2,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.2,
        }}>
        <FlatList
          style={{flex: 1}}
          horizontal={true}
          data={props.list}
          renderItem={renderItem2}
          keyExtractor={(item) => item._id}
        />
      </View>

      {/*FEED*/}
      <View style={{flex: 8.5, backgroundColor: '#ffffff'}}>
        <FlatList
          style={{flex: 1}}
          data={props.list}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Feed: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
  },
  FeedContainer: {
    backgroundColor: 'white',
    height: height / 11,
    width: width,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miniImage: {
    height: 45,
    width: 45,
    borderRadius: 30,
    marginLeft: 11,
  },
  Icons: {
    height: 30,
    width: 30,
    marginLeft: 15,
  },
  StoriesContainer: {
    backgroundColor: 'white',
    borderLeftWidth: 2,
    borderLeftColor: 'white',
    alignItems: 'center',
  },
  StoriesImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  UpperSectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
  },
  UPImg: {
    height: 33,
    width: 33,
    margin: 7,
  },
});

const mapStateToProps = (state) => {
  const {list} = state.ListResponse;
  return {list};
};

export default connect(mapStateToProps, {getCharacters})(Feed);
