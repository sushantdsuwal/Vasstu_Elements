import { createStackNavigator, createAppContainer } from "react-navigation";
import {
    ComponentScreen,
} from "../screens";
import { navConfigs } from "./config/config";

const ComponentStack = createStackNavigator({
    Component: ComponentScreen,
}, navConfigs)

export default createAppContainer(ComponentStack);