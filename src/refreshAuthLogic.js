import { useDispatch } from "react-redux";
import { setAccessToken, userlogout } from "./redux/tokenSlice";
import axios from "axios";
// function RefreshAuthLogic() {
export const refreshAuthLogic = failedRequest => axios.post('http://localhost:3300/refresh_token', null, { withCredentials: true }).then(tokenRefreshResponse => {
    const dispatch = useDispatch()
    dispatch(setAccessToken(tokenRefreshResponse.data.accessToken))
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
    return Promise.resolve();
}).catch((err) => {
    // dispatch(userlogout())
    window.location.reload();
    alert("Your refresh Token is expired. Try to login again!!!")
});
// }
// export default RefreshAuthLogic.refreshAuthLogic