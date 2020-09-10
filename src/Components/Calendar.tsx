import React from 'react';
import { DatePicker, Space } from 'antd';
import { Moment } from 'moment';
type SelectProps = {
    handleChange: (value: Moment| null, dataString:string)=>void,
}

const Calendar = ({handleChange}:SelectProps)=> {
    return (
        <Space direction="vertical">
            <DatePicker onChange={handleChange} />
        </Space>
    )
};

export default Calendar