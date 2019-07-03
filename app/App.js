import React, { Component } from 'react';

import Navigator from './routes/MainNav';
import { NavigationService } from "./services";

export default class App extends Component {

    state = {
        isTokenReady: false,
    }


    render() {
        const { isTokenReady } = this.state;
        return (
            <Navigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}