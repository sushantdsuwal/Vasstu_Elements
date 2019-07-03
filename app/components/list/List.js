import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Text from '../text/Text';
import Icon from '../icon/Icon';
import styles from './styles';

const List = (props) => {
    const { title, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.containerStyle}>
                <Text h2>{title}</Text>
                <Icon type="MaterialIcons" name="chevron-right" color="#fff" />
            </View>
        </TouchableOpacity>
    )
}

export default List
