export default {
  font: '"IBM Plex Sans", sans-serif',
  monospace: '"IBM Plex Mono", monospace',
  fontSizes: ['0.75rem', '1rem', '1.5rem', '2rem', '3rem'],
  colors: {
    text: '#f3f3f3',
    background: '#171717'
  },
  css: {
    fontSize: '16px',
    textAlign: 'left',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
    'li > ul, li > ol': {
      fontSize: 'inherit',
    },
    'li > p': {
      fontSize: 'inherit',
      margin: 0,
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  },
  ol: {
    textAlign: 'left',
  },
  ul: {
    textAlign: 'left',
  },
}
