import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    defaultContainer: {
        backgroundColor: '$defaultBackgroundColor',
        flex: 1
    },
    accentContainer: {
        backgroundColor: '$accentBackgroundColor',
        flex: 1
    },
    paddCoontainer: {
        padding: '$globalPadding'
    }
});

export default styles;