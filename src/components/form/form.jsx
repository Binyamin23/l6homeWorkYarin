import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // email,password,confirm password,fullname,birthdate

    const onSub = (_bodyData) => {
        console.log(_bodyData)
    }

    return (
        <div className='d-flex justify-content-center'>
            {/* handleSubmit => מאזין לטופס ובודק שאין לו שגיאות , אם יש ארור לא ישלח את הטופס */}
            <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-4 col-8 mt-5 shadow p-3 rounded-5'>
                {/* האנדל סבמיט מחזיר לתוך האון סאב את כל הדטה של הטופס */}
                <h1>Sign Up</h1>
                <label className='mt-2'>FullName:</label>
                <input {...register('fullName', { required: true, minLength: 2, maxLength: 20 })} className='form-control' type="text" />
                {/* register =>  מייצר קי בנוסף לג'ואי כביכול שהוא מייצר */}
                {errors.fullName && <span className='d-block text-danger'>Invalid Full Name...</span>}
                <label className='mt-2'>Email:</label>
                <input {...register('email', { required: true, pattern: emailReg })} className='form-control' type="text" />
                {/* pattern => חייב להכיל רק מהתווים שיש שם ב-emailReg*/}
                {errors.email && <span className='d-block text-danger'>Email Invalid...</span>}
                <label className='mt-2'>Password:</label>
                <input {...register('password', { required: true, minLengh: 4, maxLengh: 20 })} className='form-control' type="password" />
                {errors.password && <span className='d-block text-danger'>Password Invalid...</span>}
                <label className='mt-2'>Confirm Password:</label>
                <input {...register('confirmPassword', { required: true, validate: (item) => getValues('password') === item })} className='form-control' type="password" />
                {/* getValues => מחזיר איזה ווליו שאני ארצה מהטופס */}
                {errors.confirmPassword && <span className='d-block text-danger'>Password Not Match...</span>}
                <label className='mt-2'>Birthdate:</label>
                <input {...register('birthdate', { required: true })} className='form-control text-center' type="date" />
                {errors.birthdate && <span className='d-block text-danger'>Birthdate Is Required...</span>}
                <button className='btn btn-primary mt-3 px-4 py-2'>Sign Up</button>
            </form>

        </div>
    )
}

export default Form