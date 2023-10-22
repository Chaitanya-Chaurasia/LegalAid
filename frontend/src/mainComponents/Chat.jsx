import { Flex, Input, Center } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect
import Message from "../chatComponents/Message";

function Chat() {
  const [message, setMessage] = useState(""); // State to store the input value
  const [messages, setMessages] = useState([]); // State to store messages
  const chatContainerRef = useRef(null); // Reference to the chat container

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      // Check if Enter key is pressed and the input is not empty
      setMessages([...messages, message]);
      setMessage(""); // Clear the input field
    }
  };

  return (
    <Flex
      width={'50%'}
      height={'95%'}
      backgroundColor={'#E0E0E0'}
      borderRadius={'20px'}
      p={'30px'}
      pr={'15px'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Flex
        ref={chatContainerRef}
        height={'calc(100% - 60px)'}
        width={'100%'}
        flexDir={'column'}
        overflowY={'scroll'}
        gap={'15px'}
        pr={'15px'}
      >
        {messages.map((msg, index) => (
          <Message key={index} msg={msg} />
        ))}
      </Flex>
      <Center height={'60px'} width={'100%'}>
        <Input
          placeholder='Type a message and press Enter'
          backgroundColor={'#F0F0F0'}
          value={message}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />
      </Center>
    </Flex>
  );
}

export default Chat;
