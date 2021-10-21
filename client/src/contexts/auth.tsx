import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User ={
  id:string;
  name:string;
  login:string;
  avatar_url:string
}

type AuthContextData = {
  user:User | null;
  signInUrl:string;
  signOut:()=>void;
}

export const AuthContext = createContext({} as AuthContextData)
type AuthProvider ={children:ReactNode}

type AuthReponse = {
  token:string;
  user:{
    id:string;
    avatar_url:string;
    name:string;
    login:string
  }
}

export const AuthProvider = (props:AuthProvider)=>{

  const [user,setUser] = useState<User | null>(null)
  const signInUrl = `http://github.com/login/oauth/authorize?scope=user&client_id=3548e299e69dcd04bb99`

  const signIn = async(githubCode:string)=>{
     
    const response = await api.post<AuthReponse>('authenticate',{code:githubCode})
    const {token,user} = response.data
    localStorage.setItem('@doWhile:token',token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    
    setUser(user)
  }
 

  const signOut = ()=>{
    setUser(null)
    localStorage.removeItem("@doWhile:token")
  }

  useEffect(()=>{
    const token = localStorage.getItem("@doWhile:token")

    if(token){
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const getProfile = async()=>{
       const response = await api.get<User>('profile')
       setUser(response.data)
      }
      getProfile()
    }
  },[])

  useEffect(()=>{
    const url = window.location.href
    const hasGitHubCode = url.includes('?code=')

    if(hasGitHubCode){
      const [urlWithouCode, githubCode] = url.split('?code=')

      window.history.pushState({},'',urlWithouCode)
      console.log(githubCode);
      
      signIn(githubCode)
    }
    
  },[])


  return (
    <AuthContext.Provider value={{signInUrl,user,signOut}}>
      {props.children}
    </AuthContext.Provider>

  )
}