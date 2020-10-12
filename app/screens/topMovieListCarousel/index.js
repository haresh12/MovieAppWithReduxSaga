import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-elements';

import Carousel from 'react-native-snap-carousel';
import HeaderUi from '../../components/HeaderUi'
import Styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import * as getMoviesActions from '../../action/movieListActions';


const TopMovieList = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState([])
  const refss = useRef(null);

  const moviesResult = useSelector(state => state.movieListReducer.responseData);
  const isMoviesLoading = useSelector(state => state.loadingReducer.isMovieListLoading);

  useEffect(() => {
    dispatch(getMoviesActions.requestMovies());
  }, []);

  const renderItem = ({ item, index }) => {
    if (Object.keys(item).length !== 0) {
      return (
        <View style={Styles.carousel}>
          <Card
            image={{ uri: item.artworkUrl100 }}
            imageStyle={Styles.imageStyle}
            containerStyle={Styles.cardContainerStyle}
          />
          <Text style={Styles.titleTextStyle}>{item.name}</Text>
          <Text style={Styles.subTitleStyle}>{item.genres[0].name}</Text>
        </View>

      )
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <HeaderUi
        title="Top Films"
      />
      <View style={Styles.carouselContainer}>
        {
          Object.keys(moviesResult).length !== 0 ?
            <Carousel
              layout={"default"}
              ref={refss}
              data={moviesResult.feed.results}
              sliderWidth={300}
              itemWidth={300}
              activeSlideOffset={100}
              enableSnap={false}
              renderItem={(item, index) => renderItem(item, index)}
              onSnapToItem={(index) => setActiveIndex(index)}
            /> : null
        }
      </View>
      {isMoviesLoading ? <View style={Styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View> : null}
    </SafeAreaView>
  );
}
export default TopMovieList