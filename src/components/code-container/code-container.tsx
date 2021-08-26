import React, { useState, useEffect } from 'react';
import Preview from '../preview/preview';
import CodeEditor from '../code-editor/code-editor';
import bundle from '../../bundler';
import Resizable from '../resizable/resizable';
import './code-container.css';

function CodeContainer() {
  const [input, setInput] = useState('');
  const [err, setErr] = useState('')
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div className='wrapper'>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={'const a = 1;'}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} bundlingErr={err} />
      </div>
    </Resizable>
  );
}

export default CodeContainer;
