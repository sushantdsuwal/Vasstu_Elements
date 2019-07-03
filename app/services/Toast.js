import Toast from 'react-native-simple-toast';

export default ToastAlert = {
    Long: (message) => {
        Toast.show(message, Toast.LONG);
    },
    Short: (message) => {
        Toast.show(message);
    },
    LongCenter: (messege) => {
        Toast.showWithGravity(messege, Toast.LONG, Toast.CENTER)
    }
};