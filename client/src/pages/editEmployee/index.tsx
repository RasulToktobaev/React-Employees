import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEditEmployeeMutation, useGetEmployeeQuery} from "../../app/services/employees";
import {Layout, Row} from "antd";
import {EmployeeForm} from "../../components/employeeForm";
import {Employee} from "@prisma/client";

export const EditEmployee = () => {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const [error, setError] = useState('');
    const {data, isLoading} = useGetEmployeeQuery(params.id || '');
    const [editEmployee] = useEditEmployeeMutation();

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    const handleEditUser = async (employee: Employee) => {

    }

    return (
        <Layout style={{marginTop:'40px'}}>
            <Row align="middle" justify="center">
                <EmployeeForm
                    error={error}
                    employee={data}
                    onFinish={handleEditUser}
                    btnText="Редактировать"
                    title="Редактировать сотрудника"/>

            </Row>
        </Layout>
    );
};
