import { Icon } from '@iconify/react'
import { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './LoginForm.scss'

interface LoginFormData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Minimum 6 characters')
        .required('Password is required'),
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({ resolver: yupResolver(schema) })

    const onSubmit = (data: LoginFormData) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <div>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <input {...register('email')} type='text' className='input' placeholder="Email address" />
                </div>
                <div>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <div className="input-wrapper">
                        <input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            className="input"
                            placeholder="Password"
                        />
                        <span
                            className="input-wrapper__icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} />
                        </span>
                    </div>
                </div>
                <button className="btn btn--primary" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;