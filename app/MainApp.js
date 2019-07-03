import React, { Component } from 'react';
import App from "./App";
import { StatusBar } from 'react-native';
import { defaultTheme } from './themes';
import bootstrap from './bootstrap'
import { Container, } from './components';
//redux
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createStore from './store/store';
import { SafeAreaView } from 'react-navigation';


const { persistor, store } = createStore();
const onBeforeLift = () => { };
bootstrap(defaultTheme); //Theme

export default class MainApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    reac
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar translucent barStyle="default" animated showHideTransition="fade" />
                        <Container>
                            <App />
                        </Container>
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        );
    }
}