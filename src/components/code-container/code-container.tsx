import React, { useState } from "react";
import Preview from "../preview/preview";
import CodeEditor from "../code-editor/code-editor";
import bundle from "../../bundler";
import Resizable from "../resizable/resizable";
import "./code-container.css";

function CodeContainer() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div className="wrapper">
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={"const a = 1;"}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
}

export default CodeContainer;
