import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    h1: {
        fontWeight: '900',
        fontSize: '$h1FontSize',
        fontFamily: '$h1FontFamily',
        color: '$h1FontColor'
    },
    h2: {
        fontWeight: '700',
        fontSize: '$h2FontSize',
        fontFamily: '$h2FontFamily',
        color: '$h2FontColor'
    },
    h3: {
        fontWeight: '500',
        fontSize: '$h3FontSize',
        fontFamily: '$h3FontFamily',
        color: '$h3FontColor'
    },
    h4: {
        fontWeight: '300',
        fontSize: '$h4FontSize',
        fontFamily: '$h4FontFamily',
        color: '$h4FontColor'
    },
    inverseTextColor: {
        color: '$inverseTextColor'
    },
    selectedText: {
        color: '$selecedTextColor'
    }
})