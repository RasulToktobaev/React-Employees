import React, {useState} from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/customInput";
import {PasswordInput} from "../../components/passwordInput/input";
import {CustomButton} from "../../components/customButton";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useRegisterMutation} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/isErrorWithMessage";
import {ErrorMessage} from "../../components/ErrorMessage";
import {User} from "@prisma/client";

type RegisterD = Omit<User, 'id'> & { confirmPassword: string }

export const Register = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [error, setError] = useState('');
    const [registerUser] = useRegisterMutation();

    const register = async (data: RegisterD) => {
        try {
        await registerUser(data).unwrap();

        navigate('/')

        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Неизвестная ошибка')
            }
        }
    }
return (
    <Layout>
        <Row align="middle" justify="center">
            <Card title="Зарегистрируйтесь" style={{width: '30rem'}}>
                <Form onFinish={register}>
                    <CustomInput name='name' placeholder="Имя"/>
                    <CustomInput type="email" name='email' placeholder="Email"/>
                    <PasswordInput name="password" placeholder="Пароль"/>
                    <PasswordInput name="confirmPassword" placeholder="Повторите пароль"/>
                    <CustomButton type="primary" htmlType="submit">
                        Зарегистрироваться
                    </CustomButton>
                </Form>
                <Space direction='vertical' size='large'>
                    <Typography.Text>
                        Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
                    </Typography.Text>
                    <ErrorMessage message={error}/>
                </Space>
            </Card>
        </Row>
    </Layout>
);
}
;

