import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import FigmaProvider from '../figma/FigmaProvider'
import Main from '../components/layout/Main'

interface IndexPageData {
  allAirtable: {
    edges: {
      node: {
        data: {
          Name: string
          Notes: string
          Status: string
          url: string
        }
      }
    }[]
  }
}

const IndexPage = (): JSX.Element => {
  const data: IndexPageData = useStaticQuery(graphql`
    query indexQuery {
      allAirtable {
        edges {
          node {
            data {
              Name
              Notes
              Status
              url
            }
          }
        }
      }
    }
  `)

  const airtableData = data.allAirtable.edges[0].node.data

  return (
    // all pages should be wrapped in the FigmaProvider
    <FigmaProvider>
      <Main>
        <h1>Talus Analytics Gatsby Starter</h1>
        <p>
          {airtableData.Notes.trim()}, from{' '}
          <a href={airtableData.url}>this table.</a>
        </p>
      </Main>
    </FigmaProvider>
  )
}

export default IndexPage
