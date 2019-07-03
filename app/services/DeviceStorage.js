import { AsyncStorage } from 'react-native';

const deviceStorage = {
    saveKey: async (key, valueToSave) => {
        try {
            await AsyncStorage.setItem(key, valueToSave);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    getKey: async (key) => {
        return await AsyncStorage.getItem(key)
            .then((response) => response)
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.error(error);
            });
    },

    deleteKey: async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    clearAllKey: async () => {
        try {
            AsyncStorage.clear();
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }


};

export default deviceStorage;