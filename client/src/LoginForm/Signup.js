import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import toast from 'react-hot-toast'
import { Routes, Route, useNavigate } from 'react-router-dom'



const initialState = {
  customer_name: "",
  username: "",
  password: "",
  password_confirm: "",
}
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [user, setUser] = React.useState(initialState)
  const [open, setOpen] = React.useState(true)
  const { customer_name, username, password, password_confirm } = user
  const navigate = useNavigate();


  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
    console.log(user);
  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.usename == "" || user.customer_name == "" || user.password == "" || user.password_confirm == "") {
      toast.error("Bạn vui lòng nhập đầy đủ thông tin")
    } else {
      if (user.password != user.password_confirm) {
        toast.error("Mật khẩu không trùng khớp")
      } else {
        const res = await axios.post(`http://localhost:3002/account/check-username/${user.username}`)
        if (res.data.check == "false") {
          const dataUser = {
            username: user.username,
            password: user.password,
            decen: 0,
            status: 1
          }

          const dataCus = {
            username: user.username,
            customer_name: user.customer_name,
          }
          console.log(dataUser);
          axios.post(`http://localhost:3002/account/add-account/`,dataUser)
          axios.post(`http://localhost:3002/customer/add-customer/`,dataCus)
          toast.success("Thêm thành công")
        } else {
          toast.error("Địa chỉ email đã tồn tại !");
        }
      }

    }



  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký tài khoản
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="customer_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Tên đầy đủ của bạn"
                  value={customer_name}
                  autoFocus
                  onChange={handleChangeInput}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Địa chỉ Email"
                  name="username"
                  autoComplete="email"
                  value={username}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirm"
                  label="Nhập lại mật khẩu"
                  type="password"
                  id="password"
                  value={password_confirm}
                  autoComplete="new-password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" onClick={() => setOpen(!open)} />}
                  label="Tôi chấp nhận các điều khoản !"

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={open}
              onClick={handleSubmit}
            >
              ĐĂNG KÝ
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Bạn đã có tài khoản, quay về đăng nhập ?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}