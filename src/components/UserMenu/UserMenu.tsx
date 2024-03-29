import React, {FC} from 'react';
import {ControlOutlined, DownOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Dropdown, Space, Button, Avatar} from 'antd';
import s from './UserMenu.module.css';

type PropsType = {
  userLogout: () => void
}



const UserMenu: FC<PropsType> = (props) => {
  const logoutHandler = () => {
    props.userLogout();
  };

  const items: MenuProps['items'] = [
    {
      label: <a href="/profile"><UserOutlined style={{marginRight: '5px'}}/>Profile</a>,
      key: '0',
    },
    {
      label: <a href="/settings"><ControlOutlined style={{marginRight: '5px'}}/>Settings</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <Button type="primary"
                     onClick={logoutHandler}><LogoutOutlined rotate={180}/>Logout</Button>,
      key: '3',
    },
  ];
  return (
    <Dropdown

      menu={{items}}
      trigger={['click']}>
      <a href={''} onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar className={s.avatar}>{props.children?.toString().charAt(0).toUpperCase()}</Avatar>
          {props.children}
          <DownOutlined/>
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserMenu;