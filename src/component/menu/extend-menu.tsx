import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import styled from '@emotion/styled';

import styles from './index.sass';

interface ExtendMenuProps {
  className?: string;
  mode?: MenuProps['mode'];
  style?: React.CSSProperties;
  items?: MenuProps['items'];
  extended?: React.ReactElement;
  defaultSelectedKeys?: MenuProps['defaultSelectedKeys'];
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExtendMenu = ({
  mode,
  style,
  items,
  className,
  extended,
  defaultSelectedKeys,
}: ExtendMenuProps) => {
  return (
    <Div
      style={{
        borderBottom: mode === 'horizontal' ? '1px solid #f0f0f0' : 'none',
      }}
    >
      <Menu
        defaultSelectedKeys={defaultSelectedKeys}
        className={className}
        mode={mode}
        style={{ ...style, borderBottom: 'none' }}
        items={items}
      />
      <div className={styles['menu-extended']}>{extended}</div>
    </Div>
  );
};

export default ExtendMenu;
