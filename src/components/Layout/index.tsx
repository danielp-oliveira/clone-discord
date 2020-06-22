import React from 'react'

import { Grid } from './styles'

import {
  ServerList,
  ServerName,
  ChannelInfo,
  ChannelList,
  ChannelData,
  UserInfo,
  UserList
} from '..'

const Layout: React.FC = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
    <ChannelData />
    <UserList />
  </Grid>
)

export default Layout
