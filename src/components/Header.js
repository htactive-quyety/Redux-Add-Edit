import React from 'react'
import { Menu, Row, Col } from 'antd'
import '../asset/css/header.css'
import logo from '../asset/image/logoheader.png'

const Header = () => {
    return (
        <div> <div className='menuHeader'>
            <Row>
                <Col span={2}></Col>
                <Col span={6}>
                    <img id='logoheader' src={logo} alt="logoheader" />
                    <p>Luôn Bên Bạn :)))</p>
                </Col>
                <Col span={4}></Col>
                <Col span={10}>
                    <Menu mode='horizontal'>
                        <Menu.Item>HOME</Menu.Item>
                        <Menu.Item>SERVICE</Menu.Item>
                        <Menu.Item>PORTFOLIOS</Menu.Item>
                        <Menu.Item>BLOGS</Menu.Item>
                        <Menu.Item>CONTACT</Menu.Item>
                    </Menu>
                </Col>
                <Col span={2}></Col>
            </Row>

        </div></div>
    )
}
export default Header;