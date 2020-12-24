// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const userInput = React.useRef()
  const [userName, setUserName] = React.useState('')
  // Uncontrolled Form
  // const [errorMessage, setErrorMessage] = React.useState()

  function validateInput() {
    // Uncontrolled Form
    // setErrorMessage(isLowerCase ? null : "You may only use lowercase letters")
  }

  function handleUserNameChange(){
    setUserName(userInput.current.value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    // onSubmitUsername(event.target[0].value)
    // with Ref
    onSubmitUsername(userInput.current.value)
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <>
    {/* Used for Uncontrolled Form */}
      {/* <small style={{color: 'red'}}>{errorMessage}</small> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            onChange={handleUserNameChange}
            ref={userInput}
            value={userName}
            type="text"
          />
        </div>
        {/* Untrolled Form */}
        {/* <button disabled={!!errorMessage} type="submit"> */}
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
