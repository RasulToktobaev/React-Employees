import React from 'react';
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../customInput";
import {ErrorMessage} from "../ErrorMessage";
import {CustomButton} from "../customButton";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T

}


export const EmployeeForm = ({
                                 onFinish,
                                 title,
                                 error,
                                 btnText,
                                 employee

                             }: Props<Employee>) => {
    return (
        <Card title={title} style={{width:'30rem'}}>
            <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
                <CustomInput type='text' name="firstName" placeholder="Имя"/>
                <CustomInput type='text' name="lastName" placeholder="Фамилия"/>
                <CustomInput type='number' name="age" placeholder="Возраст"/>
                <CustomInput type='text' name="address" placeholder="Адрес"/>
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton htmlType="submit">
                        {btnText}
                    </CustomButton>
                </Space>
            </Form>
        </Card>
    );
};

