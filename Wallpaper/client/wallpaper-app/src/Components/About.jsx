import React from 'react';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    textAlign: 'center'
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  }
};

export const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.text}>
        Welcome to Wallpaper World, the ultimate destination for high-quality wallpapers
        for your desktops and mobile devices! Whether you're looking to refresh your
        workspace or brighten up your home screen, we have something for everyone.
      </p>
      <p style={styles.text}>
        Our mission is to provide beautiful, inspiring, and unique wallpapers that
        enhance your daily digital experiences. Each wallpaper is carefully curated
        and chosen to ensure it meets our high standards of aesthetics and resolution.
      </p>
      <p style={styles.text}>
        Wallpaper World started in 2022 with a vision to bring stunning visual art
        directly into people’s everyday devices. We collaborate with artists and
        photographers from around the globe to bring their incredible work into your life.
      </p>
      <p style={styles.text}>
        We hope you enjoy your experience here. Explore our vast collection, find your
        perfect wallpaper, and transform your screen with just a few clicks!
      </p>
    </div>
  );
};
