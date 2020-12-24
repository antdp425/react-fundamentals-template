// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const test = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(test.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={test} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
