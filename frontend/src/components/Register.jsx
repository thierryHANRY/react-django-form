import React from 'react'
import '../App.css'
import {Box} from '@mui/system'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButField from './forms/MyButField'
import { Link } from 'react-router-dom'
 const Register = () => {
  return (
    <div className='myBackground'>
        <Box className='whiteBox'>
            
            <Box className={"itemBox"}>
                <Box className={"title"}> User Register </Box>
            </Box>
            <Box className={"itemBox"}>
                <MyTextField   
                label={"Email"}
                />
            </Box>
            <Box className={"itemBox"}> 
                <MyPassField
                label={"Password"}
                />
            </Box>
            <Box className={"itemBox"}> 
                <MyPassField
                label={"Confirm Password"}
                />
            </Box>
            <Box className={"itemBox"}>
                 <MyButField
                 label={"Register"}
                 />
            </Box>
            <Box className={"itemBox"}>
                <Link to={"/"}>Already registered? please Login</Link>
            </Box>

        </Box>

    </div>
  )
}

export default Register