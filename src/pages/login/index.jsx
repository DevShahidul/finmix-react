import React from 'react'
import {Button,Input,Checkbox} from "../../component";
import Logo from "../../assets/img/logo.png";
import { EmailIcon, EyeIcon, ProfileIcon } from '../../icons';
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
                  <Input type="email" label="Email" icon={< EmailIcon />} name="email" id="email" placeholder="Enter email address"  />
                  <div className="relative">
                    <Input type="password" label="Password" icon={<ProfileIcon />} name="password" id="password" placeholder="Enter password"  />
                    <button className="absolute right-4 mt-4 top-1/2 -translate-y-1/2" type="button">
                      <EyeIcon />
                    </button>
                  </div>
                  <Checkbox />
                  <Button />
                </from>
            </div>
        </div>
    </div>
  )
}

export default Login;