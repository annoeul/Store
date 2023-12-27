import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export default function StoreInfoForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        가게 정보 입력
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="가게명" name="가게명" label="가게명" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="address" name="address" label="주소" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="crn" name="crn" label="사업자 등록 번호" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
