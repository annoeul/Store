import * as React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import EmailIcon from "@mui/icons-material/Email"

export default function UserInfoForm() {
  const [email, setEmail] = React.useState("")
  const [isEmailValid, setIsEmailValid] = React.useState(true)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setIsEmailValid(true) // Reset validation when email changes
  }

  const handleDuplicateCheck = () => {
    // Implement duplicate check logic here
    console.log("Duplicate check button clicked")
  }
  return (
    <React.Fragment>
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
            value={email}
            onChange={handleEmailChange}
            error={!isEmailValid}
            helperText={!isEmailValid ? "이미 사용 중인 이메일입니다." : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={handleDuplicateCheck}>중복 확인</Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="password" variant="standard" name="password" label="비밀번호" fullWidth />
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
        <Grid item xs={12}>
          <TextField required id="call" name="call" variant="standard" label="휴대폰번호" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="name" name="name" variant="standard" label="이름" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
