import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native'

export default styles = EStyleSheet.create({
  container: {
    height: EStyleSheet.hairlineWidth,
    backgroundColor: '$dividerColor',
    marginVertical: '$dividerVerticalMargin',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 2,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
