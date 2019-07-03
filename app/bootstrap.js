import EStyleSheet from 'react-native-extended-stylesheet';
import defaultTheme from './themes/defaultTheme';

export default bootstrap = () => {
    EStyleSheet.build(defaultTheme);
}