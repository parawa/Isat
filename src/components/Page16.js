import React, { useState } from 'react'
import '../css/Page16.css'
import { Layout, Avatar, Menu, Dropdown, Button } from 'antd';
import Title from 'antd/lib/typography/Title'
import { Row, Col, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
// const style = { background: '#F0EFF4', padding: '10px 20px' };



function Page16() {
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [visible, setVisible] = useState(false);
    const onSelect = name => {
        setSelectedPlayer(name);
        setVisible(true);
    }
    const ViewProfileButton = ({ name }) => {
        return <Button type='dashed' style={{ float: 'right' }} onClick={() => onSelect(name)}> View Full Profile </Button>
    }

    const onClose = () => setVisible(false);
    return (
        <div className="App">
            <Layout>
                < Sider className="box1">


                    <div> <button><a href={"/Page16"}>แดชบอร์ด</a></button></div>
                    <div><button><a href={"/Page3"}>การประเมินผลสัมฤทธิ์</a></button></div>
                    <div> <button><a href={"/Page51"}>จัดการผู้ใช้</a></button></div>



                </Sider>

                <Layout>

                    <Header className="App-header">
                        <div> <Avatar style={{ float: 'right' }} src='./d.png' /></div>
                        <Title style={{ color: 'white' }} level={3}> แดชบอร์ด   
                        </Title>

  {/* <Dropdown overlay={Menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Cascading menu <DownOutlined />
    </a>
   
  </Dropdown> */}

    


                    </Header>

                    <Content style={{ padding: '50px', backgroundColor: 'white' }}>
                       
                        <Title style={{ color: '#2A2866' }} level={3}>ภาพรวมทั้งหมด </Title>
                        <Row gutter={[12, 12]}>
                            <Col span={12}>
                                <div className="gutter-row">ฟุตบอล</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">กอล์ฟ</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">เจ็ตสกี</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">วอลเลย์บอล</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">ตะกร้อ</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">โบว์ลิ่ง</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">จักรยานยนต์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">จักรยาน</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">รถยนต์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">สนุกเกอร์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">แบตมินตัน</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">เทนนิส</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">บาสเกตบอล</div>
                            </Col>
                        </Row>

                      
                    </Content>



                </Layout>
            </Layout>
        </div>
    );
}

export default Page16;
