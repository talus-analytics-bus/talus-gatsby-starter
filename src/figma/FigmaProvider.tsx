import React from 'react'
import { ThemeProvider } from 'styled-components'

import { semanticStyles } from './semanticStyles.module.scss'

import './fonts.css'

// inline webpack require because it's easier that way in gatsby
const figmaStyles = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./styles.scss')

const FigmaProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => (
  <ThemeProvider theme={figmaStyles}>
    <div className={semanticStyles}>{children}</div>
  </ThemeProvider>
)

export default FigmaProvider
