import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './styles';

const TextElement = props => {
  const { style, children, h1, h2, h3, h4, fontFamily, inverseText, selectedText, ...rest } = props;

  return (
    <Text
      style={[
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        inverseText && styles.inverseTextColor,
        selectedText && styles.selectedText,
        fontFamily && { fontFamily },
        style && style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

TextElement.propTypes = {
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  inverseText: PropTypes.bool,
  fontFamily: PropTypes.string,
  children: PropTypes.any,
  selectedText: PropTypes.bool
};

export default TextElement;