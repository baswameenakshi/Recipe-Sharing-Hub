// About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Recipes Hub</h1>
      <p>Hello all, I am Meenakshi, Welcome to Recipes Hub, a community-driven platform where users can share their favorite recipes!</p>
      <p>At Recipes Hub, users can:</p>
      <ul>
        <li>Share their recipes by adding title, ingredients, instructions, and image URL.</li>
        <li>Save their favorite recipes to easily access them later.</li>
        <li>Delete recipes they no longer like or use.</li>
        <li>Search for any recipe based on title or ingredients.</li>
        <li>View their saved recipes in a convenient list.</li>
        <li>Explore Featured recipes and Cooking Tips.</li>
      </ul>
    </div>
  );
};

export default About;
