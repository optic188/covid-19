import React, {useEffect, useState} from 'react'
import {Layout, Row, Col, Table, Alert} from 'antd';
import {useHistory} from "react-router-dom";
import {getStatistics, getHistory} from '../api';
import {Header,SelectComponent, Calendar, Search} from '../Components';
import {TableConfig} from '../utils';
import {Moment} from "moment";

const SearchPage: React.FC = () => {
    const {Content} = Layout;
    const history = useHistory();
    const [typeRequest, setTypeRequest] = useState('statistic');
    const [dateRequest, setDateRequest] = useState('2020-08-02');
    const [countries, setcountries] = useState([]);
    const [countryName, setcountryName] = useState('ukraine');
    const [isError, setError] = useState(false);


    const showDetails = (data: any) => {
        history.push(
            {
                pathname: '/details',
                state: {details: data.data, typeRequest}
            }
        )
    };
    const onSearch = (value: any) => {
        setcountryName(value)
    };
    const handleChange=(e:any)=> {
        setTypeRequest(e)
    };
    const dateChange = (value: Moment| null, dataString:string) => {
        setDateRequest(dataString);
    };
    useEffect(() => {
        typeRequest === 'statistic' ? getStatistics(countryName, setcountries, setError) : getHistory(countryName, setcountries, setError, dateRequest)

    }, [countryName, dateRequest]);

    return (
        <Layout>
            {isError && < Alert message="Can't get statistic" type="error"/>}
            <Header/>
            <Content className="content">
                <Row>
                    <Col className="gutter-row" span={2}></Col>
                    <Col span={20}>
                        <br/>
                        <p>Type in the country name in which u want to see the COVID-19 statistic</p>
                        <p> Change the select value to see the COVID-19 statistic history</p>
                        <SelectComponent handleChange={handleChange}/>
                        <Search onSearch={onSearch} />
                        {typeRequest === 'history' && <Calendar handleChange={dateChange}/>}
                        <p>COVID-19 in <b>{countryName}</b> country statistics</p>
                    </Col>
                    <Col className="gutter-row" span={2}></Col>
                </Row>
                <Row>
                    <Col className="gutter-row" span={2}></Col>
                    <Col span={20}>
                        <Table
                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: event => {
                                        showDetails(record)
                                    }
                                };
                            }}
                            columns={TableConfig.searchTableColumns}
                            dataSource={countries}
                        />
                    </Col>
                    <Col className="gutter-row" span={2}></Col>
                </Row>
            </Content>
        </ Layout>
    )
};

export default SearchPage