import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from "../../app/services/employees";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";


export  const Employee = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const params = useParams<{id: string}>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {data, isLoading} = useGetEmployeeQuery(params.id || "");
    const [removeEmployee] = useRemoveEmployeeMutation();
    const user = useSelector(selectUser);
    return (
        <div>
            Employee
        </div>

    );
};

