import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from '../components/form/loginForm'
import Form from '../components/form/form'
import Home from '../components/home'
import Layout from '../layout/layout'

const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='/signUp' element={<Form />} />
                    <Route path='/login' element={<LoginForm />} />

                </Route>
                <Route path='/*' element={<h1>not found 404</h1>} />
            </Routes>

        </Router>
    )
}

export default AppRouters