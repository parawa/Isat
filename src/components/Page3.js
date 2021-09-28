import React from 'react'
// import "./Page3.css"
import { Avatar } from 'antd';
import { mockdata } from './mockdata';
import { Card, Button, Icon } from 'antd';
import { DribbbleOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';




function Page3() {
    return (
        <div className="Background">
            {/* <div className="h7">
              
            </div> */}

            <div className="h1">
                {/* <div className="h6"></div>
                <div className="h6"></div> */}

                <div className="h5">
                    <div class="dropdown">
                        {/* <Avatar className= "img"  src='./jimin.jpg' /> */}
                        <button class="dropbtn">User <DownOutlined /></button>

                        <div class="dropdown-content">
                            <a href={"/"}>โปรไฟล์</a>
                            <a href={"/"}>ออกจากระบบ</a>


                        </div>

                    </div>


                </div>


                <div className="box1">
                    
                    <div> <button><a href={"/Page16"}>แดชบอร์ด</a></button></div>
                    <div><button><a href={"/Page3"}>การประเมินผลสัมฤทธิ์</a></button></div>
                    <div> <button><a href={"/Page51"}>จัดการผู้ใช้</a></button></div>


                </div>

            </div>

            <div className="h2">
                {mockdata.map((data, key) => {
                    return (
                        <div key={key}>
                            <Stock
                                key={key}
                                company={data.company}
                            />
                        </div>
                    );
                })}

            </div>
        </div>



    )
}
const Stock = ({ company }) => {
    if (!company) return <div />;
    return (
        <div>
            <Card className="crad"
                style={{
                    margin: -10,
                }}>
                <h5 className="textbox"
                    style={{
                        margin: 10,
                    }}>{company}</h5>
                {/* <Icon style={{ fontSize: '20px' }} type="UsbFilled" theme="filled" /> */}
            </Card>
            {/* <Button className="cradgrid" type="primary"
                style={{
                    // margin: 10,
                }} />   */}
        </div>
    );
};
export default Page3
