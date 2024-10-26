import React, { useState } from 'react'
import './SingIn.css'
import { Paper, FormControl, FormLabel, TextField } from '@mui/material'

const SignIn = () => {

    const [user,setUser] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleSumit = (e: Event) =>{
        e.preventDefault();
    }

  return (
    <div>
        <Paper sx={{width: '300px', height: '300px'}}>
            <h2>Iniciar sesión</h2>
            <FormControl>
                <FormLabel htmlFor='username'>Usuario</FormLabel>
                <TextField id='name' name='username'/>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='password'>Contraseña</FormLabel>
                <TextField id='password' name='password' type='paswoord'/>
            </FormControl>
        </Paper>
    </div>
  )
}

export default SignIn