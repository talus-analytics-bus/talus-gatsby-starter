import React from 'react'

import FigmaProvider from '../figma/FigmaProvider'
import Main from '../components/layout/Main'

import useIndexPageData from '../cmsHooks/useIndexPageData'
import AirtableCMSText, { getCMSText } from '../airtable-cms/AirtableCMSText'

const IndexPage = (): JSX.Element => {
  const data = useIndexPageData()

  return (
    // all pages should be wrapped in the FigmaProvider
    <FigmaProvider>
      <Main>
        <h1>
          <AirtableCMSText name="H1" data={data} />
        </h1>
        <p>
          <AirtableCMSText name="Example Text" data={data} />
          <a href={getCMSText(data, 'Airtable URL')}>this table.</a>
        </p>
      </Main>
    </FigmaProvider>
  )
}

export default IndexPage
