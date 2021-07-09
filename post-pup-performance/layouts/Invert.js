import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const Invert = styled.div(
  {
    width: '100vw',
    height: '100vh',
    '& a': {
      color: 'inherit',
    },
    '& > div': {
      marginLeft: '2rem',
    }
  },
  color
)

Invert.defaultProps = {
  color: 'background',
  bg: 'text',
}

export default props => <Invert {...props} />