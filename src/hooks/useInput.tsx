import { ChangeEvent, useState } from "react"
import { UserInfo } from "../model/userInfo"

function useInput(initialState) {
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
