// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const usernameRef = React.useRef(null)
  const [usernameError, setUsernameError] = React.useState(null)

  function handleChange(event) {
    const {
      target: { value },
    } = event
    const valueContainsUppercaseCharacter = value.toLowerCase() !== value

    if (valueContainsUppercaseCharacter) {
      setUsernameError('Username must be lower case')
    } else {
      setUsernameError(null)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const {
      current: { value: username },
    } = usernameRef

    onSubmitUsername(username)
  }

  const hasError = !!usernameError

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          onChange={handleChange}
        />
        {usernameError && <p>Error: {usernameError}</p>}
      </div>
      <button type="submit" disabled={hasError}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
