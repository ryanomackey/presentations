import React from 'react'
import styled from 'styled-components'

const Default = styled.div({
  width: '100vw',
  height: '100vh',
  '& > div': {
    marginLeft: '2rem',
  }
})

export default props => <Default {...props} />