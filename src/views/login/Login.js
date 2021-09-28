import React from 'react'
// import { Form, Input } from 'antd'
import { Form, Input, Checkbox } from 'antd';

function Login() {

    return (

        <div className="Background">
          
            <center>  <div className="h1">

            <div className="makecenter">
            <h1>เข้าสู๋ระบบ</h1>

            <Form>

            <Form.Item label="E-mail" >
            <Input placeholder="E-mail" />
            </Form.Item>
            <Form.Item
            label="รหัสผ่าน"

            >
            <Input placeholder="รหัสผ่าน" />

            </Form.Item>

            <p> <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>จดจำรหัสผ่าน</Checkbox>
            </Form.Item></p>
            </Form>

            <p> <div type ="primary" block><a href={"/page16"}>เข้าสู่ระบบแอดนมิน </a></div></p>
            {/* <p><div type ="primary" block><a href={"/page16"}>เข้าสู่ระบบสมาคมฟุตบอล</a></div></p>
            <p><div type ="primary" block><a href={"/"}>เข้าสู่ระบบเจ้าหน้าที่ </a></div></p>
            <p> <div type ="primary" block><a href={"/Page27"}>เข้าสู่ระบบทุกภาคส่วน </a></div></p> */}



        {/* <div><Button block>Default</Button></div>
                <div><Button type="dashed" block>
                    Dashed
                </Button></div>
                <div><Button type="link" block>
                    Link
                </Button></div> */}
            </div>
            </div></center>
        </div>

    )
}

export default Login
