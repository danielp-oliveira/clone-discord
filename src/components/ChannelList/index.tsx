import React from 'react'

import { Container, Category, AddCategoryIcon } from './styles'

import { ChannelButton } from '..'

const ChannelList: React.FC = () => (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>
    <ChannelButton channelName='chat-livre' />
    <ChannelButton channelName='trabalho' />
    <ChannelButton channelName='lolzinho' />
    <ChannelButton channelName='cssgo' />
    <ChannelButton channelName='valorant' />
  </Container>
)

export default ChannelList
