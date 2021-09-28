import React, { useState } from 'react'
import '../css/Page16.css'
import Football from '../img/Football.svg';
import badminton from '../img/badminton.svg';
import bas from '../img/basketball.svg';
import boat from '../img/boat.svg';
import bowling from '../img/bowling.svg';
import car from '../img/car.svg';
import Golf from '../img/Golf.svg';
import motorcycle from '../img/motorcycle.svg';
import muzzle from '../img/muzzle.svg';
import snooker from '../img/snooker.svg';
import tennis from '../img/tennis.svg';
import volleyball from '../img/volleyball.svg';
import bicyle from '../img/bicycle.svg'


import { Layout, Avatar, Menu, Dropdown, Button, Image } from 'antd';
import Title from 'antd/lib/typography/Title'
import { Row, Col, Divider } from 'antd';

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

                    <Header className="App-header1">
                        {/* <div className="App-header"> */}
                        {/* <div className="App-header2"> <Avatar style={{ float: 'right' }} src='./d.png' /></div> */}

                      
                     
                        <h1 className="h1">แดชบอร์ด</h1>
                        <p className="h0">แอดมิน</p>
                      
                        {/* <div className ="h1" > แอดมิน </div> */}
                        {/* </div> */}

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

                                <div className="gutter-row">
                                    <img width={30} src={Football} />
                                    ฟุตบอล</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={Golf} />
                                    กอล์ฟ</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={boat} />
                                    เจ็ตสกี</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={volleyball} />
                                    วอลเลย์บอล</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={muzzle} />
                                    ตะกร้อ</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={bowling} />
                                    โบว์ลิ่ง</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={motorcycle} />
                                    จักรยานยนต์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={bicyle} />
                                    จักรยาน</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={car} />
                                    รถยนต์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={snooker} />
                                    สนุกเกอร์</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={badminton} />
                                    แบตมินตัน</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={tennis} />
                                    เทนนิส</div>
                            </Col>
                            <Col span={12}>
                                <div className="gutter-row">
                                    <img width={30} src={bas} />
                                    บาสเกตบอล</div>
                            </Col>
                        </Row>


                    </Content>



                </Layout>
            </Layout>
        </div>
    );
}

export default Page16;
