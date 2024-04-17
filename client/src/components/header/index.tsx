import React from 'react';
import styles from './index.module.css'
import {Layout, Space, Typography} from "antd";
import {Link, useNavigate} from 'react-router-dom'
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomButton} from "../customButton";
import {Paths} from "../../paths";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

export const Header = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type="link">
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            {
                user ? (
                    <CustomButton type="link" icon={<LoginOutlined />} onClick={onLogoutClick}>
                        Выйти
                    </CustomButton>
                ) : (
                    <Space>
                        <Link to={Paths.register}>
                            <CustomButton type="link" icon={<UserOutlined />}>Зарегистрировать</CustomButton>
                        </Link>
                        <Link to={Paths.login}>
                            <CustomButton type="link" icon={<LoginOutlined />}>Войти</CustomButton>
                        </Link>
                    </Space>
                )
            }
        </Layout.Header>
    );
};

