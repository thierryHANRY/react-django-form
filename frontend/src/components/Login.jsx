import React from 'react'
import '../App.css'
import {Box} from '@mui/system'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButField from './forms/MyButField'
import { Link } from 'react-router-dom'
import {useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'



 const Login = () => {
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()

     const submission = (data) => {
        AxiosInstance.post('/login/' , {
            email : data.email,
            password : data.password,
        })
        .then((Response) => {
            console.log(Response)
            localStorage.setItem('Token', Response.data.token)
            navigate('/home')
        })
        .catch((error) => {
            console.error("error during login", error)
        })
    }

  return (
    <div className='myBackground'>

    <form onSubmit={handleSubmit(submission)}>
        <Box className='whiteBox'>
            
            <Box className={"itemBox"}>
                <Box className={"title"}> Login for auth app </Box>
            </Box>
            <Box className={"itemBox"}>
                <MyTextField   
                label={"Email"}
                name={"email"}
                control={control}
                />
            </Box>
            <Box className={"itemBox"}> 
                <MyPassField
                label={"Password"}
                name={"password"}
                control={control}
                />
            </Box>
            <Box className={"itemBox"}>
                 <MyButField
                 label={"Login"}
                 type={"submit"}
                 />
            </Box>
            <Box className={"itemBox"}>
                <Link to={"/register"}>No account yet? please register</Link>
            </Box>

        </Box>
        </form>

    </div>
  )
}

export default Login