import React from 'react';
import PropTypes from 'prop-types';
import { View, } from 'react-native';
import styles from './styles';

const Container = props => {
    const {
        children,
        containerStyle,
        refProps,
        accent,
        padd,
        ...attributes
    } = props;
    return (
        <View ref={refProps}
            style={[
                styles.defaultContainer,
                accent && styles.accentContainer,
                padd && styles.paddCoontainer,
                containerStyle && containerStyle
            ]}
            {...attributes}
        >
            {children}
        </View>
    )
};

Container.propTypes = {
    containerStyle: PropTypes.any,
    children: PropTypes.any,
    refProps: PropTypes.any,
    accent: PropTypes.bool,
    padd: PropTypes.bool
};

export default Container;