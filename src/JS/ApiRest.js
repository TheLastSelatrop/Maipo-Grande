import { ZaapAxios } from "./Api/Zaap.mjs";

export const LoginAuth = () => {
    return async(dispatch, getState) => {
        const resp = await ZaapAxios.get('/clientes');
        console.log(resp);
    }
}