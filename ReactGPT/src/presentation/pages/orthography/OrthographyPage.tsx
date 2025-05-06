import React, { useState } from 'react'
import { GPTMessage, MyMessage, TextMessageBox, TypingLoader } from '../../components'


interface Message {
  text: string;
  isGPT: boolean;
}

export const OrthographyPage = () => {
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  return (
    <div className='chat-container'>
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Welcome */}
          <GPTMessage text={'Welcome, you can write your text here'}/>

          {
            messages.map((message, index) => (
              message.isGPT
              ? (
                <GPTMessage text="This is Open IA"/>
              )
              : (
                <GPTMessage text={message.text} />
              )
            ))
          }

          <TypingLoader className="fade-in" />
          
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeholder='Text whatever you desire'
        disableCorrections
      />
    </div>
  )
}
