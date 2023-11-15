import React from 'react'
import {Button,Input,Checkbox} from "../../component";
import Logo from "../../assets/img/logo.png";
import { ProfileIcon } from '../../component/icons';
const Login = () => {
  return (
    <div className=' container'>
        <div className="flex items-center w-full">
            <div >
                <img src={Logo} alt="LogoImage" />
            </div>
            <div>
                <h1>Login</h1>
                <p>Log back in below to see your business's financial health.</p>
                <from>
                  <Input type="email" label="Email" icon={<ProfileIcon width="24" height="24" />} name="email" id="email" placeholder="Enter email address"  />
                  <Input type="password" label="Password" name="password" id="password" placeholder="Enter password"  />
                  
                  <Checkbox />
                  <Button />
                </from>
            </div>
        </div>
    </div>
  )
}

export default Login;