import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const onClick = () => {
    console.log(input)
  }

  return (
    <div>
      <textarea value={input} onChange={onChange}></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

export default App;
