import React from 'react';
import {Layout} from "../../components/layout";
import {CustomButton} from "../../components/customButton";
import {PlayCircleOutlined} from "@ant-design/icons";

export  const Employees = () => {
    return (
       <Layout>
           <CustomButton type="primary" onClick={() => null} icon={<PlayCircleOutlined/>}>
               Добавить
           </CustomButton>
       </Layout>
    );
};

