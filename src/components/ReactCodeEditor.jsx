import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useEffect } from 'react';

const codeEditorStyles = {
  fontSize: 16,
  backgroundColor: "black",
  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
}

const stringNormalizer = (initialString) => initialString.replace(/\s/g,"");

function ReactCodeEditor({initialValue = '', language, placeholder, correctAnswer, elementToStyle }) {
  const [code, setCode] = React.useState(initialValue);


  // console.log(element)
  useEffect(()=>{
    window.responseStyles = stringNormalizer(code)
    // console.log(element)
    if (code !== '')  {
      document.getElementById(elementToStyle).setAttribute('style', code)
    }
    // handleTextChange()
    answerChecker(stringNormalizer(code))
  }, [code, elementToStyle])

  // useEffect(()=>{
  //   setElement(document.getElementById(elementToStyle))
  // }, [])

  const handleChange = (e) => {
    setCode(e.target.value)
    window.responseStyles = stringNormalizer(e.target.value)
    // onChange(e.target.value)
    answerChecker(stringNormalizer(e.target.value))
  }

  const answerChecker = (answer) => {
    if(answer === correctAnswer){
      console.log("Respuesta correcta")
    } else {
      console.log("Sigue intentando")
    }
  }
  return (
    <CodeEditor
      value={code}
      language={language}
      placeholder={placeholder}
      onChange={(e) => setCode(e.target.value)}
      padding={15}
      style={codeEditorStyles}
    />
  );
}

export default ReactCodeEditor