import React from 'react';
import { Layout } from "antd";
import { Link } from "react-router-dom";

const Header = ()=> {
    const { Header } = Layout;
    return (
        <Header className="header">
            <Link to="/"><h1>COVID-19 statistics</h1></Link>
        </Header>
    )
};

export default Header