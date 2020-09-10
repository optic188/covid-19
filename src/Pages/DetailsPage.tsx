import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Col, Layout, Row, Table, Tabs} from 'antd';
import Header from '../Components/Header';
import {TableConfig} from '../utils';


const DetailsPage: React.FC<RouteComponentProps> = (props) => {
    // @ts-ignore
    const {details, typeRequest} = props.location.state;
    const {TabPane} = Tabs;
    const {Content} = Layout;
    console.log(props.location.state);
    return (
        <Layout>
            <Header/>
            <Content className="content">
                <Row>
                <Col className="gutter-row" span={2}></Col>
                <Col span={20}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tests" key="1">
                            <Table
                                columns={TableConfig.testTableColumns}
                                dataSource={[details.tests]}
                            />
                        </TabPane>
                        {typeRequest === 'history' &&(<TabPane tab="Cases" key="2">
                            <Table
                                columns={TableConfig.CasesTableColumns}
                                dataSource={[details.cases]}
                            />
                        </TabPane>)}
                        <TabPane tab="Death" key="3">
                            <Table
                                columns={TableConfig.deathTableColumns}
                                dataSource={[details.deaths]}
                            />
                        </TabPane>

                    </Tabs>
                </Col>
                <Col className="gutter-row" span={2}></Col>
                </Row>
            </Content>
        </Layout>
    )
};

export default withRouter(DetailsPage)