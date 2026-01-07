import React from 'react'
import '../App.css'
import {Box} from '@mui/system'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButField from './forms/MyButField'
import { Link } from 'react-router-dom'
 const Login = () => {
  return (
    <div className='myBackground'>
        <Box className='whiteBox'>
            
            <Box className={"itemBox"}>
                <Box className={"title"}> Login for auth app </Box>
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
                 <MyButField
                 label={"Login"}
                 />
            </Box>
            <Box className={"itemBox"}>
                <Link to={"/register"}>No account yet? please register</Link>
            </Box>

        </Box>

    </div>
  )
}

export default Login