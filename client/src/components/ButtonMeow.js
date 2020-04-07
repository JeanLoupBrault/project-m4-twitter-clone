import React from 'react';
import styled from 'styled-components';


// const CommentContext = React.createContext(null);



export const PostComment = (() => {

  // const [inputField, setInputField]= useState('')
  // <input value={inputField} onChange={()=>setInputField(event.target.value)}>

  // useEffect(() => {
  //   fetch('/api/tweet/1209791721099411456r1')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log('currentTweet', data);
  //       setCurrentTweet(data);
  //       setStatus('idle');
  //     })
  // }, [])

  return (
    <>
      <Form>
        <InputComment />

        <ButtonMeow>Meow</ButtonMeow>

      </Form>
      {/* <CommentContext.Provider value={{ currentTweet, status }}>
        {children}
      </CommentContext.Provider> */}
    </>
  );

});


const ButtonMeow = styled.button`
z-index: 1;
  display: flex;
  justify-content: flex-end;
   text-align: center;
   font-size: 24px;
   color: white;
   background: purple;
   box-sizing: border-box;
   border: 10px 5px solid black 1px;
   border-radius: 10px;
 `;

const Form = styled.form`
   width: 600px;
   height: 100px;
   box-sizing: border-box;
   border: 1px solid black;
 `;

const InputComment = styled.input`
   width: 600px;
   height: 100px;

 `;

export default PostComment;
