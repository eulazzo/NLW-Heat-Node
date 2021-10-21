import styles from './styles.module.scss' ;
import logoImage from '../../assets/logo.svg';
import {api} from '../../services/api';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

type Message = {
  id: string;
  text:string;
  user: {
    name:string;
    avatar_url:string
  };
}

const messageQueue:Message[] = []

const socket = io('http://localhost:4000');
socket.on('new_message',(newMessage:Message) =>{
  messageQueue.push(newMessage)
  
})

export const MessageList = ()=> {
  const [messages, SetMessages] = useState<Message[]>([])


  useEffect(()=>{
     setInterval(()=>{

      if(messageQueue.length>0){
        SetMessages(prevState=>[
          messageQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))
        messageQueue.shift()
      }

    },3000)
  },[])

  useEffect(()=>{
    const getMessage = async()=>{
     const {data}= await api.get<Message[]>('messages/last3')  
      SetMessages(data)
    }
    getMessage()
  },[])  

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImage} alt="Do while 2021" />
     
      <ul className={styles.messageList}>
        {messages?.map(({id,text,user})=>(
          <li key={id} className={styles.message}>
            <p className={styles.messageContent}>{text}</p>
            <div className={styles.messageUser}> 
              <div className={styles.userImage}>
                <img src={user.avatar_url} alt="Lázaro" />
              </div>
              <span>{user.name}</span>
            </div>
          </li>
        ))}
         
      </ul>
    </div>

    
  )
}
