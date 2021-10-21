import styles from './styles.module.scss'
import {VscGithubInverted} from 'react-icons/vsc'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export const LoginBox = ()=> {
  const {signInUrl} = useContext(AuthContext) 

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInwithGithub}>
        <VscGithubInverted size="24px"/>
        Entrar com Github
      </a>
    </div>
  )
}
