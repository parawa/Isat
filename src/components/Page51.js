import React, { useState } from 'react';
import '../css/Page51.css';
import { Layout, Avatar, Button, Tabs,Switch,chacked } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Row, Col, Divider } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
// const style = { background: '#ffff', padding: '200px 0' };
function Page51() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({ name }) => {
    return <Button type='dashed' style={{ float: 'right' }} onClick={() => onSelect(name)}> View Full Profile  </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        < Sider className="box1">

          <ul>
            <li><a href={"/Page16"}>แดชบอร์ด</a></li>
            <li><a href={"/Page3"}>การประเมินผลสัมฤทธิ์</a></li>
            <li><a href={"/Page51"}>จัดการผู้ใช้</a></li>
            {/* <li><a href="#about">About</a></li> */}
          </ul>

        </Sider>

        <Layout>

          <Header style={{ padding: 10 }}>
            <Avatar style={{ float: 'right' }} src='./dp.png' />
            <Title style={{ color: 'white' }} level={3}>จัดการผู้ใช้</Title>

            {/* <Tabs defaultActiveKey="1">
          <TabPane tab="ผู้ใช้" key="1" />
          <TabPane tab="สิทธิ์การเข้าถึง" key="2" />
        </Tabs> */}

          </Header>
         <Content style={{ padding: '0 50px' }}>
         <div> <Row gutter={[12, 12]}>

              <Col span={24}>

                <div className="gutter-row1">

                </div>
              </Col>
              <Col span={24}>

                <div className="gutter-row1">
                <Title style={{ color: 'back' }} level={4}>รายการจัดการผู้ใช้</Title>
               <table id="customers">
                    <tr>
                        <th>ลำดับ</th>
                        <th>ประเภท</th>
                        <th>สถานะ</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>สนามฟุตบอล</td>
                        <td> <Switch defaultChecked /> </td>
                     
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>สนามกอล์ฟ</td>
                        <td> <Switch defaultChecked /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>สนามเจ็ตสกี</td>
                        <td>  <Switch defaultChecked /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>สนามวอลเลย์บอล</td>
                        <td> <Switch defaultChecked /></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>สนามตะกร้อ</td>
                        <td> <Switch defaultChecked /></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>เจ้าหน้าที่</td>
                        <td> <Switch defaultChecked /></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>ทุกภาคส่วน</td>
                        <td> <Switch defaultChecked /></td>
                    </tr>

                </table>


                </div>
              </Col>

            </Row></div>





            

          </Content>


        </Layout>
      </Layout>
    </div>
  );
}

export default Page51;
