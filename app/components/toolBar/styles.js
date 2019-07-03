import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    toolBar: {
        height: '$barHeight',
        backgroundColor: '$toolbarColor',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    transparent: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    left: {
        justifyContent: 'flex-start'
    },
    center: {
        justifyContent: 'center'
    },
    toolBarItem: {
        flexDirection: 'column'
    },
    iconStyle: {
        color: 'gray'
    }

});

export default styles;