import React from 'react';
import styles from './index.module.css'
import {Button, Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Button type="link">Click</Button>
            </Space>
        </Layout.Header>

    );
};

