import React from "react";
import { Icon } from "react-native-elements";
import Colors from '../constants/Colors'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import TopMoviesList from "../screens/topMovieList/index";
import TopMoviesListCarousel from "../screens/topMovieListCarousel/index";

const Tab = createBottomTabNavigator();

const BottomBarNavigator = ({ navigation }) => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.dark,
            inactiveTintColor: Colors.cloudyBlue,
            showLabel: false,
            style: {
                height: 60,

            }
        }
        }
        backBehavior={false}
    >
        <Tab.Screen
            name="CreateItem"
            component={TopMoviesListCarousel}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name='view-carousel'
                        type="MaterialIcons"
                        size={50}
                        color={color}
                    />

                )
            }}
        />
         <Tab.Screen
            name="Home"
            component={TopMoviesList}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        type='Feather'
                        name='list'
                        size={50}
                        color={color}
                    />
                )
            }
            }
        />
    </Tab.Navigator>
);
export default BottomBarNavigator;
