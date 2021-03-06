import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Guilherme Rodz'
            date='21/06/2020'
            content='Hoje é o meu aniversário!'
          />
        ))}

        <ChannelMessage
          author='Diego Fernandes'
          date='21/06/2020'
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
