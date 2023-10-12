import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy } from "lucide-react";
import randomcolor from "randomcolor";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Gradient = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());
  const [output, setOutput] = useState("");

  useEffect(() => {
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setOutput(gradient);
  }, [color1, color2])


  const handleChangeColor: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === 'color1') {
      setColor1(value);
    } else if (name === "color2") {
      setColor2(value);
    }
  }

  const handleRandomClick = () => {
    setColor1(randomcolor());
    setColor2(randomcolor());
  }

  return (
    <div className="gradient">
      <h1>Create you own gradient!</h1>
      <div className="colorPicker">
        <input
          type="color"
          name='color1'
          value={color1}
          onChange={handleChangeColor}
        />
        <input
          type="color"
          name='color2'
          value={color2}
          onChange={handleChangeColor}
        />
      </div>
      <button className="btnRandom"
        onClick={handleRandomClick}
      >Generate random gradient!</button>
      <div className="output">
        <SyntaxHighlighter language="css" style={docco}>
          {output}
        </SyntaxHighlighter>
        <span className="btnCopy" title="Copy to clipboard">
          <CopyToClipboard text={`background: ${output}`}>
            <Copy style={{ cursor: "pointer", fontSize: "25px" }} />
          </CopyToClipboard>
        </span>

      </div>
    </div>
  )
}

export default Gradient
