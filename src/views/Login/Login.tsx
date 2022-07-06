import React, { useContext, useState } from 'react'
import { isNumeric } from '../../utils/utils'
import api from "../../API/api.queries";
import "./Login.css"
import { authContext } from '../../providers/ContextProviders';




function Login() {

  const [identifire, setIdentifire] = useState<string>("testing_email@example.com")
  const [password, setPassword] = useState<string>("password")
  const { setAuth } = useContext(authContext);


  const login = async (e: any, identifire: string, password: string) => {
    e.preventDefault()
    if (!identifire || !password) return
    if (isNumeric(identifire)) {
      const login = await api.login_by_phone({ user: { country_code: "+20", phone_number: identifire, password }, device: { uid: "3", token: "i" } })
      if (login?.message === "Success") {
        const token = login?.data.user.access_token;
        if (token){
          localStorage.setItem("token",token)
          setAuth({ token });
        }
      } else {
        alert("خطاء  !");
      }
    } else {
      const login = await api.login_by_email({
        user: {
          email: "testing_email@example.com",
          password: "password"
        },
        device: { "uid": "3", "token": "i" }
      })
      if (login?.message === "Success") {
        const token = login?.data.user.access_token;
        if (token){
          localStorage.setItem("token",token)
          setAuth({ token });
        }
      } else {
        alert("خطاء  !");
      }
    }

  }

  return (
    <div>
      <form className='flex' onSubmit={(e) => { login(e, identifire, password) }}>
        <label htmlFor="identifire">
          username or phone
          <input type="text" value={identifire} onChange={(e) => { setIdentifire(e.target.value) }} required />
        </label>
        <label htmlFor="password">
          password
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login