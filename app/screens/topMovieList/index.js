import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as getMoviesActions from '../../action/movieListActions';

import HeaderUi from '../../components/HeaderUi'
import Styles from './style'

const TopMovieList = () => {
  const dispatch = useDispatch();
  const moviesResult = useSelector(state => state.movieListReducer.responseData);
  const isMoviesLoading = useSelector(state => state.loadingReducer.isMovieListLoading);
  useEffect(() => {
    dispatch(getMoviesActions.requestMovies());
  }, []);
  return (
    <View>
      <HeaderUi
        title="Top Films"
      />
      {isMoviesLoading ? <View style={Styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> : null}
      <ScrollView style={{ marginBottom: 60 }}>
        {
          Object.keys(moviesResult).length !== 0
          ?
            moviesResult.feed.results.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Card
                  image={{ uri: item.artworkUrl100 }}
                  imageStyle={Styles.imageStyle}
                  containerStyle={Styles.cardContainerStyle}
                />
                <ListItem.Content>
                  <ListItem.Title style={Styles.titleTextStyle}>{item.name}</ListItem.Title>
                  <ListItem.Subtitle style={Styles.subTitleStyle}>Artist Name : {item.artistName}</ListItem.Subtitle>
                  <ListItem.Subtitle style={Styles.subTitleStyle}>Release date : {item.releaseDate}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            )) : null
        }
      </ScrollView>
    </View>
  );
};
export default TopMovieList;