import React, { useState } from 'react'
import { Button, Divider, Layout, Menu } from 'antd'
import type { SelectInfo } from 'rc-menu/lib/interface'
import Home from './fragment/home'
import Netdata from './fragment/netdata'

const { Header, Content } = Layout

function AppLayout () {
  const [nav, setNav] = useState<string>('home')

  const alerting: React.MouseEventHandler<HTMLElement> = (event) => {
    console.log(event)
    alert('hi!')
  }

  const selectFunction = (event: SelectInfo) => {
    const selected = event.selectedKeys || ['home']
    console.log('occur event', selected)
    setNav(selected[0] as string)
  }

  return (
    <div className="layout">
      <Layout className="layout">
        <Header className="header" >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[nav]} onSelect={selectFunction}>
            <Menu.Item key="home">홈</Menu.Item>
            <Menu.Item key="menu">메뉴</Menu.Item>
          </Menu>
        </Header>
        <Content>
          { (nav === 'home') ? <Home /> : <Netdata /> }
        </Content>
      </Layout>
      <Divider />

      <Button onClick={alerting}>버튼!</Button>
    </div>
  )
}

export default AppLayout
