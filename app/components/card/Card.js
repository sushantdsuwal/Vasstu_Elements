import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Platform,
  Image,
  ImageBackground,
  Text as NativeText,
} from 'react-native';
import Text from '../text/Text';
import Divider from '../divider/Divider';
import Avatar from "../avatar/Avatar";
import styles from './styles';

const Card = props => {
  const {
    children,
    flexDirection,
    containerStyle,
    wrapperStyle,
    imageWrapperStyle,
    title,
    titleStyle,
    featuredAvatar,
    featuredTitle,
    featuredTitleStyle,
    featuredSubtitle,
    featuredSubtitleStyle,
    dividerStyle,
    image,
    imageStyle,
    fontFamily,
    imageProps,
    rounded,
    overlayStyle,
    ...attributes
  } = props;

  return (
    <View
      {...attributes}
      style={[
        styles.container,
        image && { padding: 0 },
        rounded && styles.rounded,
        containerStyle && containerStyle,
      ]}
    >
      <View
        style={[
          styles.wrapper,
          wrapperStyle && wrapperStyle,
          flexDirection && { flexDirection },
        ]}
      >

        {title === '' ||
          (title &&
            title.length > 0 &&
            <View>
              <Text
                style={[
                  styles.cardTitle,
                  image && styles.imageCardTitle,
                  titleStyle && titleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {title}
              </Text>
              {!image &&
                <Divider
                  style={[styles.divider, dividerStyle && dividerStyle]}
                />}
            </View>)}
        {image &&
          <View style={imageWrapperStyle && imageWrapperStyle}>
            <ImageBackground
              resizeMode="cover"
              style={[{ width: null, height: 150 }, imageStyle && imageStyle]}
              source={image}
              {...imageProps}
            >
              {(featuredAvatar || featuredTitle || featuredSubtitle) &&
                <View style={[styles.overlayContainer,]}>
                  <View style={[styles.featuredContainer, overlayStyle && overlayStyle]}>
                    {featuredAvatar &&
                      <Avatar
                        large
                        rounded
                        source={featuredAvatar}
                      />
                    }
                    <View style={{ marginLeft: 15 }}>
                      {featuredTitle &&
                        <Text
                          style={[
                            styles.featuredTitle,
                            featuredTitleStyle && featuredTitleStyle,
                          ]}
                        >
                          {featuredTitle}
                        </Text>}
                      {featuredSubtitle &&
                        <Text
                          style={[
                            styles.featuredSubtitle,
                            featuredSubtitleStyle && featuredSubtitleStyle,
                          ]}
                        >
                          {featuredSubtitle}
                        </Text>}
                    </View>
                  </View>
                </View>}
            </ImageBackground>
            <View style={[{ padding: 10 }, wrapperStyle && wrapperStyle]}>
              {children}
            </View>
          </View>}
        {!image && children}
      </View>
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  flexDirection: PropTypes.string,
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  overlayStyle: PropTypes.any,
  title: PropTypes.string,
  titleStyle: NativeText.propTypes.style,
  featuredTitle: PropTypes.string,
  featuredTitleStyle: Text.propTypes.style,
  featuredSubtitle: PropTypes.string,
  featuredSubtitleStyle: Text.propTypes.style,
  dividerStyle: PropTypes.any,
  image: Image.propTypes.source,
  imageStyle: PropTypes.any,
  imageWrapperStyle: PropTypes.any,
  fontFamily: PropTypes.string,
  imageProps: PropTypes.object,
};

export default Card;