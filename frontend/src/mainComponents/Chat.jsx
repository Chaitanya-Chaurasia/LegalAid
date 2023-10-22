import { Flex, Input, Center } from "@chakra-ui/react";
import Response from "../chatComponents/Response";
import { useState } from "react";
import axios from "axios";
import Actions from "./Actions";

function Chat({ setActions, setViolations, setLaws }) {
  const [message, setMessage] = useState(""); // initialize response state variable
  const [resp, setResponse] = useState("");

  const fetchMessage = async () => {
    let res =
      "I am sorry that you had to face such a situation. However, worry not! ";

    let laws = "The following laws are enforced : \n";

    let violations = [];

    try {
      const response = await axios.get(
        `http://127.0.0.1/response?situation=${message}`
      );

      response["data"]["recommendations"].map((r) => {
        r ? (res += r + " ") : "";
      });

      // response["data"]["laws"].map((l) => {
      //   // l ? (laws += l + " ") : "";
      //   for (const property in l) {
      //     l ? (laws += l + l[property]) : (laws += "");
      //   }
      // });

      response["data"]["charges"].map((c) => {
        c ? violations.push(c) : violations.push("");
      });

      res +=
        "Please refer to the right columns for more information on rights and violations.";

      laws += "Please refer to a legal advisor for acurate information.";
    } catch (err) {
      console.log(err);
    }

    setResponse(res);

    setActions(res);
    setLaws(laws);
    console.log(violations);
    setViolations(violations);
    setFirst(true);
  };

  const onChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      fetchMessage();
    }
  };

  return (
    <Flex
      width={"50%"}
      height={"95%"}
      backgroundColor={"#E0E0E0"}
      borderRadius={"20px"}
      p={"30px"}
      pr={"15px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex
        height={"calc(100% - 60px)"}
        width={"100%"}
        flexDirection={"column"}
        overflowY={"scroll"}
        gap={"15px"}
        pr={"15px"}
      >
        {resp && <Response key={resp} message={resp} setActions={setActions} />}
      </Flex>
      <Center height={"60px"} width={"100%"}>
        <Input
          placeholder="Ask a question!"
          backgroundColor={"#F0F0F0"}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </Center>
    </Flex>
  );
}

export default Chat;
