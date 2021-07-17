
/*
- Write a React component that fetches the data from the link below 
and shows a gallery of cats in various moods.
- When the start or end is reached, the gallery should cycle to the 
opposite end.
- The left and right buttons should trigger a sliding animation to the 
next/previous image 
(example: https://raw.githubusercontent.com/farzadso/Bootstrap-Carousel/master/preview.gif)
- The preview panel at the bottom should move one image to the left or 
right when the buttons are clicked.
- The gallery can have a maximum width of 500 but should be responsive 
if the window is made smaller.
*/

import React from 'react';
import './App.css';

import CatGallery from './components/cat-gallery-component/CatGalleryComponent';

const CatGalleryApp = () => {
  return <CatGallery />;
}

export default CatGalleryApp;