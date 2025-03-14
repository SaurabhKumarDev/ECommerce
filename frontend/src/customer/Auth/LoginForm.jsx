import { Grid, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../State/Auth/Action';

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store);

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(login(userData))
        console.log("UserData : ", userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField required id='email' name='email' label='Email' fullWidth autoComplete='email' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id='password' name='password' type='password' label='Password' fullWidth autoComplete='new-password' />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='bg-[#9155FD] w-full' type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0" }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 items-start flex'>
                    <p>If you have already account ?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
