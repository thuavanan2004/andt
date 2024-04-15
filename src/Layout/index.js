import { Layout, Menu } from "antd";
import logo from "../images/logo.png";
import logoFold from "../images/logo-fold.png";
import {MenuUnfoldOutlined, SearchOutlined, DashboardOutlined, AppstoreOutlined, BorderOutlined, BorderTopOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import "./layoutDefault.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Notify from "../Notify";
const { Sider, Content } = Layout;


function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false);
    const handleClick = () => {
        setCollapsed(!collapsed);
    };
    const items = [
    { 
        key: "menu-1",
        label: "Dashboard",
        icon: <DashboardOutlined />,
        children: [
            {
                key:"1",
                label: <Link to="/" > Default </Link>,
            },
            {
                key:"2",
                label: "CRM",
            },
            {
                key:"3",
                label: "E-commerce",
            },
            {
                key:"4",
                label: "Projects",
            }
        ]
    },
    {   
        key: "menu-2",
        label: "App",
        icon: <AppstoreOutlined />,
        children: [
            {
                key:"5",
                label: "Default",
            },
            {
                key:"6",
                label: "CRM",
            },
            {
                key:"7",
                label: "E-commerce",
            },
            {
                key:"8",
                label: "Projects",
            }
        ]
    },
    { 
        key: "menu-3",
        label: "Compenents",
        icon: <BorderOutlined />,
        children: [
            {
                key:"9",
                label: "Default",
            },
            {
                key:"10",
                label: "CRM",
            },
            {
                key:"12",
                label: "E-commerce",
            },
            {
                key:"13",
                label: "Projects",
            }
        ]
    },
    { 
        key: "menu-5",
        label: <Link to="book-room" > Book Room </Link>,
        icon: <BorderTopOutlined />
    },
    { 
        key: "menu-6",
        label: <Link to="create-room" > Create Room </Link>,
        icon: <PlusOutlined />
    },
    { 
        key: "menu-7",
        label: <Link to="list-room" > List Room </Link>,
        icon: <UnorderedListOutlined />
    },

    ]
    return (
        
        <Layout className="layout-default">
            <header className="header"> 
                
                {collapsed ?  (
                    <div className="header__logo-fold"><img src={logoFold} alt="logo-fold"/></div>
                    ) : (
                        <div className="header__logo"> <img src={logo} alt="logo"/></div>
                    )}
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__nav-left--collapsed"><MenuUnfoldOutlined onClick={handleClick}/> </div>
                        <div className="header__nav-left--search"><SearchOutlined />  </div>
                    </div>
                    <div className="header__nav-notify"><Notify/></div>
                </div>

            </header>
            <Layout>
                <Sider className="sider" collapsed={collapsed} width={280} theme="light">
                    <Menu items={items} mode="inline" defaultOpenKeys={["menu-1"]} defaultSelectedKeys={['2']} multiple={true} />
                </Sider>
                <Content className="content"> <Outlet/> </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutDefault;