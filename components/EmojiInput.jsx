import React, { useState } from "react";
import punycode from "punycode/";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiInput = () => {
  const [emoji, setEmoji] = useState([]);
  const [encoded, setEncoded] = useState([]);
  const [decoded, setDecoded] = useState([]);

  const handleSelect = (selectedEmoji) => {
    let emojiCharacter = selectedEmoji.native;
    setEmoji((oldArray) => [...oldArray, emojiCharacter]);
    let encodedEmoji = punycode.toASCII(emojiCharacter);
    setEncoded((oldArray) => [...oldArray, encodedEmoji]);
    setDecoded((oldArray) => [...oldArray, punycode.toUnicode(encodedEmoji)]);
  };

  const domain = `${decoded.join("")}.stark`;

  return (
    <div>
      <Picker data={data} onEmojiSelect={handleSelect} />
      <p>Selected Emojis: {emoji.join(" ")}</p>
      <p>Encoded: {encoded.join(", ")}</p>
      {/* <p>Decoded: {decoded.join(" ")}</p> */}
      <p>Domain: {domain}</p>
    </div>
  );
};

export default EmojiInput;
