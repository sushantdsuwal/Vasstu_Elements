import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import { NavigationService } from "../../services";

import Text from '../text/Text';
import Icon from "../icon/Icon";
import styles from './styles';

const ToolBar = (props) => {
    const { navClose, title, centerTitle, titleStyle, children, transparent, containerStyle } = props;
    return (
        <View style={[
            styles.toolBar,
            transparent && styles.transparent,
            containerStyle && containerStyle
        ]}>
            <View style={styles.left}>
                <TouchableOpacity onPress={() => NavigationService.back()}>
                    <View style={styles.toolBarItem}>
                        <Icon type="Ionicons"
                            name={navClose ? "md-close" : "md-arrow-back"}
                            color={transparent ? "#000" : "#fff"} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.toolBarItem, { justifyContent: 'flex-start', flex: 1, marginLeft: 20 }]}>
                <Text h1
                    style={[
                        centerTitle && { textAlign: 'center' },
                        titleStyle && titleStyle]}
                >
                    {title}
                </Text>
            </View>

            <View style={[styles.toolBarItem]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {children}
                </View>
            </View>
        </View>
    )
};


ToolBar.propTypes = {
    children: PropTypes.any,
    containerStyle: PropTypes.any,
    navClose: PropTypes.bool,
    title: PropTypes.string,
    centerTitle: PropTypes.string,
    titleStyle: PropTypes.string,
    transparent: PropTypes.bool
};

export default withNavigation(ToolBar);
