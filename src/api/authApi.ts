import { axiosApi } from "."

export const checkEmail = async (email) => {
  try {
    const response = await axiosApi.get(`public/stores/email-check/${email}`)
    if (response.status === 200) {
      const confirm = window.confirm("이메일이 사용 가능합니다. 사용하시겠습니까?")
      if (confirm) {
        console.log(email)
      }
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
