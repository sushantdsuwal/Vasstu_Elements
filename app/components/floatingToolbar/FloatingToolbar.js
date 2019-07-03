import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import Icon from "../icon/Icon";
import styles from './styles';
import { NavigationService } from "../../services";

const FloatingToolbar = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.arrowIcon}>
            <TouchableOpacity onPress={() => NavigationService.back()}>
                <Icon type="Ionicons" name="md-arrow-round-back" color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(FloatingToolbar)
