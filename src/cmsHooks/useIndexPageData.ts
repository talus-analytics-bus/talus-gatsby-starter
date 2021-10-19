import { useStaticQuery, graphql } from 'gatsby'
import { AirtableCMSData } from '../airtable-cms/types'

const useIndexPageData = () => {
  const { cmsContent }: { cmsContent: AirtableCMSData } =
    useStaticQuery(graphql`
      query cmsContentQuery {
        cmsContent: allAirtable(filter: { table: { eq: "Table 1" } }) {
          nodes {
            data {
              Name
              Text
            }
          }
        }
      }
    `)

  return cmsContent
}

export default useIndexPageData
