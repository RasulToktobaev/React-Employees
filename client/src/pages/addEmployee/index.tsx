import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employeeForm";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useAddEmployeeMutation} from "../../app/services/employees";

export const AddEmployee = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [addEmployee] = useAddEmployeeMutation();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user]);
    const handleAddEmployee = () => {

    }

    return (
        <Layout>
            <Row align="middle" justify='center'>
                <EmployeeForm
                    title='Добавить сотрудника'
                    btnText='Добавить'
                    onFinish={handleAddEmployee}
                    error={error}
                />
            </Row>
        </Layout>
    );
};

