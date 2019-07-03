import EStyleSheet from 'react-native-extended-stylesheet';

export const tranConfigs = {
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [
                    index - 1,
                    index - 0.99,
                    index,
                    index + 0.99,
                    index + 1
                ],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            return { opacity, transform: [{ translateX }] };
        }
    }),
    headerMode: 'none',
};

export const navConfigs = {
    headerMode: 'none',
};

export const bottomTabConfig = {
    tabBarPosition: "bottom",
    // lazy: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: '#242A37',
            elevation: 20
        },
        indicatorStyle: { backgroundColor: '#242A37' },
        labelStyle: { fontSize: 12 },
        labelStyle: { fontSize: 14 },
    }
};