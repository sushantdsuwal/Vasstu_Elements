import React from 'react';
import { ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ImageGradient = (props) => {
    const { source, children } = props;
    return (
        <ImageBackground
            source={source}
            style={styles.containerStyle}
        >
            <LinearGradient
                style={styles.overlayContainer}
                colors={[
                    EStyleSheet.value('$rgbaGradientStart'),
                    EStyleSheet.value('$rgbaGradientEnd')
                ]}
            >
                {children}
            </LinearGradient>
        </ImageBackground>
    )
}

export default ImageGradient;


