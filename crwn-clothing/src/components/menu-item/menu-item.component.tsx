import React from 'react';
import './menu-item.styles.scss';

type MenuItemProps = {
  title: string,
  imageUrl: string,
  size?: string,
}

const MenuItem = (props: MenuItemProps) => (
  <div className={`${props.size} menu-item`}>
    <div className='background-image' style={{backgroundImage: `url(${props.imageUrl})`}}/>
    <div className='content'>
      <h1 className='title'>{props.title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;