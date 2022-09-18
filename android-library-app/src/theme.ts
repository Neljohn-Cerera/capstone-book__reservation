import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

//DEVICE WIDTH
export const WIDTH = Dimensions.get('window').width;

//ANDROID BODY HEIGHT - THE HEADE
const height = Dimensions.get('window').height;
const loginHeaderHeight = 68;
export const BODY_HEIGHT =
  height - (StatusBar.currentHeight as any) - loginHeaderHeight;

//FONT COLOR
export const FONT_COLOR = '#2699FB';
export const PLACEHOLDER_COLOR = '#78BDF7';
export const TEXTBOX_BACKGROUND = '#F0F8FF';
export const BUTTON_PRIMARY = '#2699FB';
export const BORDER_COLOR = '#BCE0FD';
export const CIRCLE_BACKGROUND = '#2699FB';

export const DROPDOWN_BACKGROUND = '#2699FB';
export const DROPDOWN_ITEMS_BACKGROUND = '#78BDF7';

// BLUE THEME
export const BlueTheme = {
  colors: {
    //drawer
    drawerTextColor: '#1E3A8A', //bg-blue-900
    drawerIconColor: '#374151', //bg-gray-700
    drawerTitleColor: '#374151', //bg-gray-700
    //header
    headerIconColor: '#ffffff',
    //screen
    screenIconColor: '#2699FB', //bg-gray-400

    title: '#1E3A8A', //bg-blue-900
    description: '#1E40AF', //bg-blue-800
    author: '#60A5FA', //bg-blue-400
    authorNames: '#2563EB', //bg-blue-600
    border: 'rgb(199, 199, 204)',
    headerTitle: '#BFDBFE', //bg-blue-200
  },
  background: {
    //drawer
    drawerBackground: '#ffffff', //WHITE
    //header
    headerBackground: '#2699FB', //bg-blue-500
    //screen
    screenBackground: '#ffffff', //white
    //flatlist
    flatlistBackground: '#F3F4F6', //bg-gray-100
  },
};

// DARK THEME
export const darkTheme = {
  colors: {
    //drawer
    drawerTextColor: '#D1D5DB', //bg-gray-300
    drawerIconColor: '#9CA3AF', //bg-gray-400
    drawerTitleColor: '#9CA3AF', //bg-gray-400
    //header
    headerIconColor: '#9CA3AF', //bg-gray-400
    //screen
    screenIconColor: '#4B5563', //bg-gray-400

    title: '#DBEAFE', //bg-blue-100
    description: '#9CA3AF', //bg-gray-400
    author: '#D1D5DB', //bg-gray-300
    authorNames: '#D1D5DB', //bg-gray-300
    border: 'rgb(199, 199, 204)',
    headerTitle: '#E5E7EB', //bg-gray-200
  },
  background: {
    //drawer
    drawerBackground: '#1F2937', //bg-gray-800
    //header
    headerBackground: '#1F2937', //bg-gray-800
    //screen
    screenBackground: '#D1D5DB', //bg-gray-300
    //flatlist
    flatlistBackground: '#E5E7EB', //bg-gray-200
  },
};
