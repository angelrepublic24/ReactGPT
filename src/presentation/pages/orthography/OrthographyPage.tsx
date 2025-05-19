import React, { useState } from "react";
import {
  GPTMessage,
  MyMessage,
  TextMessageBox,
  TextMessageBoxFile,
  TextMessageBoxSelect,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGPT: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async(text: string) => {
    setIsLoading(true)
    setMessages((prev) => [...prev, {text: text, isGPT: false}]);

    // useCase


    setIsLoading(false);
  }
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Welcome */}
          <GPTMessage text={"Welcome, you can write your text here"} />

          {messages.map((message, index) =>
            message.isGPT ? (
              <GPTMessage key={index} text="This is Open IA" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Text whatever you desire"
        disableCorrections
      />
      {/* <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Text whatever you desire"
      /> */}
      {/* <TextMessageBoxSelect
        onSendMessage={handlePost}
        placeholder="Text whatever you desire"
        options={[{id:"1", text: "Hola"}, {id:"2", text: "Mundo"}]}
      /> */}
    </div>
  );
};
