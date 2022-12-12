import React from 'react'
import {useForm} from "react-hook-form"

const LoginForm = () => {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const onSub = (_bodyData) =>{
        console.log(_bodyData)
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-4 col-8 mt-5 shadow p-3 rounded-5'>
                <h1>Login</h1>
                <label className='mt-2'>Email</label>
                <input {...register('email' , {required:true , pattern:emailReg})} className='form-control' type="text" />
                {errors.email && <span className='d-block text-danger'>Email Invalid...</span>}
                <label className='mt-2'>Password</label>
                <input {...register('password' , {required:true ,  minLength: 4, maxLength: 20})} className='form-control' type="password" />
                {errors.password && <span className='d-block text-danger'>password Invalid...</span>}
                <button className='btn btn-success px-4 py-2 mt-3'>sign up</button>
            </form>
        </div>
    )
}

export default LoginForm