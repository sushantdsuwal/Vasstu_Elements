import jwt_decode from "jwt-decode";
import {
    Api,
    AppUrl,
    DeviceStorage,
    Toast
} from "../services";

export default AppConfig = {
    getAppToken: async () => {
        const id_token = await DeviceStorage.getKey("id_token");
        const current_time = new Date().getTime() / 1000;
        if (id_token == null) {
            const data = await Api.postData(AppUrl.GetAppToken);
            if (data) {
                await DeviceStorage.saveKey("id_token", data.token.Value);
                return true
            } else {
                return false
            }
        } else {
            try {
                const jwt = jwt_decode(id_token);
                if (current_time > jwt.exp) {
                    //GENERATE NEW TEMPORARY TOKEN IF EXPIRED
                    const data = await Api.postData(AppUrl.GetAppToken);
                    await DeviceStorage.saveKey("id_token", data.token.Value);
                    return true;
                } else {
                    //IF TEMPORARY TOKEN IS NOT EXPIRED
                    return true
                }
            } catch (error) {
                return false
            }
        }

    },
    onLoggedOut: async () => {
        try {
            const data = await Api.postData(AppUrl.GetAppToken, modelData);
            if (data) {
                await DeviceStorage.clearAllKey();
                await DeviceStorage.saveKey("id_token", data.Value);
                return true;
            }
        } catch (error) {
            Toast.Short("no internet connection");
            return false;
        }
    }
}