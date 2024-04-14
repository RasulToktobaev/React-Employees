import React from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row} from "antd";

export const Login = () => {
    return (
        <Layout>
        <Row align="middle" justify="center">
        <Card title="Войдите" style={{width:'30rem'}}>
            <Form onFinish={() => null}>

            </Form>
        </Card>
        </Row>
        </Layout>

    );
};

