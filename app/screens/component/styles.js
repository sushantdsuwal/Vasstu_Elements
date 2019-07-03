import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    arrowIcon: {
        position: 'absolute',
        top: 50,
        left: 15,
        right: 0,
        bottom: 0
    },
    bodyContent: {
        flex: 2,
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        lineHeight: 50,
        fontWeight: '400'
    },
    note: {
        lineHeight: 25,
        fontWeight: '400',
        marginTop: 20
    },
    buttonWrapper: { flex: 1, justifyContent: 'center' },
    buttonContainerStyle: {
        marginLeft: 0,
        marginRight: 0,
    }
});
