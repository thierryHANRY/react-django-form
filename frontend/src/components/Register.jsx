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



 const Register = () => {

    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()

    const submission = (data) => {
        AxiosInstance.post('/register/' , {
            email : data.email,
            password : data.password,
        })
        .then(() => {
            navigate('/')
        })
    }

  return (
    <div className='myBackground'>

        <form onSubmit={handleSubmit(submission)}>

        <Box className='whiteBox'>
            
            <Box className={"itemBox"}>
                <Box className={"title"}> User Register </Box>
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
                <MyPassField
                label={"Confirm Password"}
                name={"Password2"}
                control={control}
                />
            </Box>
            <Box className={"itemBox"}>
                 <MyButField
                    type={"submit"}
                    label={"Register"}
                 />
            </Box>
            <Box className={"itemBox"}>
                <Link to={"/"}>Already registered? please Login</Link>
            </Box>

        </Box>
     </form>

    </div>
  )
}

export default Register