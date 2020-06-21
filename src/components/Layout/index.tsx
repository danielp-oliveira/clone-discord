import React from 'react'

import { Grid } from './styles'

import { ServerList, ServerName, ChannelInfo, ChannelList, UserInfo } from '..'

const Layout: React.FC = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
  </Grid>
)

export default Layout
