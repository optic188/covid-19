import React from 'react';
import { Select } from 'antd';

type SelectProps = {
    handleChange: (arg:string)=>void,
}

const SelectComponent = ({handleChange}:SelectProps) => {
    const { Option } = Select;
    return (
        <Select defaultValue="statistic"  style={{width:'200px'}} onChange={(e)=>handleChange(e)}>
            <Option value="statistic">Statistic</Option>
            <Option value="history">History</Option>
        </Select>
    )
};

export default SelectComponent