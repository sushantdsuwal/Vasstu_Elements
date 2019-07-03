import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default Device = {
    "DeviceId": DeviceInfo.getDeviceId(),
    "Platform": Platform.OS === 'ios' ? 'ios' : 'android',
    "Version": DeviceInfo.getVersion(),
    "isTablet": DeviceInfo.isTablet(),
    "hasNotch": DeviceInfo.hasNotch(),
    "APILevel": Platform.OS === 'android' && DeviceInfo.getAPILevel(),
}