import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default styles = EStyleSheet.create({
    containerStyle: {
        width: width,
        height: height,
        borderBottomWidth: 1,
    },
    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '$globalPadding',
        zIndex: 99
    }
});
