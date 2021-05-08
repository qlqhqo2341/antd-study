import React from 'react'
import { Button, Divider, Layout, Menu } from 'antd'
import type { SelectInfo } from 'rc-menu/lib/interface'

function AppLayout () {
  const { Header, Content, Footer, Sider } = Layout
  const alerting: React.MouseEventHandler<HTMLElement> = (event) => {
    console.log(event)
    alert('hi!')
  }

  const selectFunction = (event: SelectInfo) => {
    console.log('occur event', event.selectedKeys)
  }

  return (
    <div className="layout">
      <Layout className="layout">
        <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onSelect={selectFunction}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider>sider</Sider>
          <Content>content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <Divider />

      <Button onClick={alerting}>버튼!

            </Button>
    </div>
  )
}

export default AppLayout
