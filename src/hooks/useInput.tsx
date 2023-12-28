import { ChangeEvent, useState } from "react"

function useInput<T>(initialState: T) {
  const [userInput, setUserInput] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return { userInput, onChange }
}

export default useInput
