const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('울산');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
          setResult('정답');
          setWord(value);
          setValue('');
          inputRef.current.focus();
        } else {
          setResult('땡');
          setValue('');
          inputRef.current.focus();
        };
      };
    
// const onChangeInput = (e) => {
//         setValue(e.target.value);
//       };

      return (
        <>
          <div>{word}</div>
          <form onSubmit={onSubmitForm}>
            <label htmlFor="wordInput">여기에 입력하세요.</label>
            <input 
            id='wordInput' 
            className='wordInput' 
            ref={inputRef} 
            value={value} 
            onChange={(e) => setValue(e.currentTarget.value)} 
            />
            <button>입력</button>
            <h1>it's is work!</h1>
          </form>
          <div>{result}</div>
        </>
      )
  }

module.exports = WordRelay;