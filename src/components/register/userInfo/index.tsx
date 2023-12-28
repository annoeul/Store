import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import useInput from "../../../hooks/useInput"
import { useDispatch } from "react-redux"
import { checkEmail } from "../../../api/authApi"
import { ChangeEvent } from "react"
import { UserInfo } from "../../../model/userInfo"
import { setUserInfo } from "../../../store/slice/userInfo"

export default function UserInfoForm() {
  const dispatch = useDispatch()

  const { userInput, onChange } = useInput<UserInfo>({
    email: "",
    password: "",
    call: "",
    ownerName: "",
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    dispatch(setUserInfo(userInput))
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        회원 정보 입력
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="이메일"
            fullWidth
            variant="standard"
            value={userInput.email}
            onChange={handleOnChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={() => checkEmail(userInput.email)}>중복 확인</Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ownerName"
            name="ownerName"
            variant="standard"
            label="이름"
            fullWidth
            value={userInput.ownerName}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="call"
            name="call"
            variant="standard"
            label="휴대폰번호"
            fullWidth
            value={userInput.call}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            variant="standard"
            name="password"
            value={userInput.password}
            onChange={handleOnChange}
            label="비밀번호"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="checkPassword"
            variant="standard"
            name="checkPassword"
            label="비밀번호 확인"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  )
}
