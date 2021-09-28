import React from 'react'
import '../css/Page51.css'
import { Avatar } from 'antd';
import {  DownOutlined } from '@ant-design/icons';






function Page51() {
    return (
        <div className="Background">
            
            <div className="h7">
                <form>

                    <div> ค้นหา</div> 
                    <input type="text" name="search" placeholder="Search.."></input>
                    <button class="button button2">ค้นหา</button>
                    <button class="button button3">รีเซ็ต</button>
                </form>
            </div>

            <div className="h1">
                {/* <div className="h6"></div>
                <div className="h6"></div> */}

                <div className="h5">
                {/* <div>จัดการผู้ใช้</div> */}
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
                <h1>รายการจัดการผู้ใช้ 
                <button class="button button4">+เพิ่มบทบาท</button>
                </h1>
                <table id="customers">
                    <tr>
                        <th>ลำดับ</th>
                        <th>ประเภท</th>
                        <th>สถานะ</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>สนามฟุตบอล</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>สนามกอล์ฟ</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>สนามเจ็ตสกี</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>สนามวอลเลย์บอล</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>สนามตะกร้อ</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>เจ้าหน้าที่</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>ทุกภาคส่วน</td>
                        <td></td>
                    </tr>

                </table>



            </div>
        </div>



    )
}

export default Page51