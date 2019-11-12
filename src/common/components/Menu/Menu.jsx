import React from 'react'
import { Icon, Menu } from 'antd'

import logo from '../../../assets/images/logo.png'
import '../scss/Menu.scss'
import { SITE_NAME } from '../../constants'
// import Search from '../../../ui-kit/Search/Search'

const { SubMenu } = Menu

export default () => {
  return (
    <div className="menu__wrapper">
      <div className="menu__container">
        <div className="menu__container-logo">
          <img src={logo} alt={SITE_NAME} />
        </div>
        <Menu className="ui-kit__menu" mode="horizontal" theme="dark">
          <Menu.Item key="gallery">
            <Icon type="picture" />
            Gallery
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="video-camera" />
            Video
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="appstore" />
                Other
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
      {/* <Search /> */}
    </div>
  )
}