import React, {useState} from 'react';
import {Input,AutoComplete} from 'antd';
import { getCountries} from '../api';
type SearchProps = {
    onSearch: (arg:string)=>void,
}


const Search = ({onSearch}:SearchProps)=> {
    const [options,setOptions]=useState([{value: ''}]);

    const handleSearch = (value:any) => {
        getCountries(value, convertCountries,(e)=>{console.log(e)});
    };

    const convertCountries = (arg:Array<string>)=> {

        let newArr  = arg.map((elem)=>{
            return {value:elem}
        });
        setOptions(newArr)
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 300,
                top:-5,
            }}
            options={options}
            onSelect={onSearch}
            onSearch={handleSearch}

        >
            <Input.Search size="large" placeholder="Ukraine..." enterButton />
        </AutoComplete>
    )
};
export default Search