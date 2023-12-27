import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Paper from "@mui/material/Paper"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import UserInfoForm from "./userInfo"
import StoreInfoForm from "./storeInfo"
import { useState } from "react"
import { useSelector } from "react-redux"
import { doSignUp } from "../../api/authApi"

const steps = ["회원정보", "가게정보"]

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <UserInfoForm />
    case 1:
      return <StoreInfoForm />
    case 2:
      return <>Success</>
    default:
      throw new Error("Unknown step")
  }
}

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0)
  const userInfo = useSelector((state) => state.userInfo)

  const handleNext = async () => {
    setActiveStep(activeStep + 1)
    if (activeStep === 1) {
      try {
        console.log(userInfo)
        await doSignUp(userInfo)
        // doSignUp 함수가 완료된 후에 이 부분이 실행됨
      } catch (error) {
        // doSignUp 함수에서 에러가 발생한 경우 처리
        console.error("Error during handleNext:", error)
        // 에러 처리 로직 추가
      }
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            회원가입
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will send you an update when
                your order has shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? "가입하기" : "다음"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </>
  )
}
