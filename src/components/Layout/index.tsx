import React from 'react'

import { Grid } from './styles'

import { ServerList, ServerName, ChannelInfo } from '..'

const Layout: React.FC = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
  </Grid>
)

export default Layout
