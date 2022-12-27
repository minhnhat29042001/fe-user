import userSlice from "../store/user.slice"
import {useDispatch, useSelector} from 'react-redux'
import authSlice from "../store/auth.slice"
 
const useUserSlice = () => {
  const data = useSelector((state: any) => state)

  const dispatch = useDispatch()
  return {
    saveUserInformation: (data: any) => dispatch(userSlice.actions.saveUserInformation(data)) ,
    setToggleLogin: (data: any) => dispatch(authSlice.actions.setToggleLogin(data)) ,
    user: data?.user,
    actions: userSlice.actions,
    token: data?.auth?.accessToken,
    errorLogin: data.auth?.errorLogin,
    errorRegister: data.auth?.errorRegiste,
    isLoggedIn: data.auth?.isLoggedIn,
    toggleLogin: data.auth?.toggleLogin
  }
}
export default useUserSlice