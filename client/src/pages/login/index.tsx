import React, {useState} from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/customInput";
import {PasswordInput} from "../../components/passwordInput/input";
import {CustomButton} from "../../components/customButton";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/isErrorWithMessage";
import {ErrorMessage} from "../../components/ErrorMessage";

export const Login = () => {
    const navigate = useNavigate();
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('');

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate("/")

        } catch (err) {
            const maybeError = isErrorWithMessage(err);

            if (maybeError) {
                setError(err.data.message);
            } else {
                    setError('Неизвестная ошибка');
            }
        }
    }

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{width: '30rem'}}>
                    <Form onFinish={login}>
                        <CustomInput
                            type="email"
                            name='email'
                            placeholder="Email"
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Пароль"
                        />
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                        >
                            Войти
                        </CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
                        </Typography.Text>
                        <ErrorMessage message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>

    );
};

