import React from 'react'
import {Row, Col, Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userAction'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css';


function Login (){
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)
    }


    return (
        <div className='login d-flex justify-content-center'  >
            {loading && (<Spinner />)}
                <Form layout='vertical' className='login-form' onFinish={onFinish}>
                    <h1>Login</h1>
                    <hr/>
                    <Form.Item name='username' label="Username" rules = {[{required:true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label="Password" rules = {[{required:true}]}>
                        <Input />
                    </Form.Item>

                    <button className='btn1 mb-4'>Login</button>
                    <br/>
                    <Link to='/register'>Click here to Register </Link>
                </Form>
        </div>
    )
}

export default Login