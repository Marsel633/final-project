import React from 'react';
import styles from './Title.module.scss';

const Title = ({ text, padding, color }) => {
  const titleStyle = {
    paddingBottom: padding,
    color: color,
  };

  return <h3 style={titleStyle} className={styles.title}>{text}</h3>;
};

export default Title;
