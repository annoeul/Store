import { axiosApi } from "."
import { emailValid } from "../utils/validEmail"

export const checkEmail = async (email: string) => {
  try {
    const useEmail = emailValid(email)
    if (useEmail) {
      const response = await axiosApi.get(`public/stores/email-check/${email}`)
      if (response.status === 200) {
        const confirm = window.confirm("이메일이 사용 가능합니다. 사용하시겠습니까?")
        if (confirm) {
          console.log(email)
          return true
        }
      }
    } else {
      alert("이메일 형식으로 입력해주세요.")
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message
    alert(` ${errorMessage} 다른 이메일을 사용해주세요.`)
    throw error
  }
}

export const doSignUp = async (data) => {
  try {
    const response = await axiosApi.post("/public/stores", data)
    return response.data
  } catch (error) {
    console.error("Error during signUp:", error)
    throw error
  }
}

export const doLogin = async (data) => {
  try {
    const response = await axiosApi.post("public/auth", data)
    return response.data
  } catch (error) {
    console.error("Error during signUp:", error)
    throw error
  }
}
