import React from 'react'

import CMS from '@talus-analytics/library.airtable-cms'
import FigmaProvider from '../../figma/FigmaProvider'

import useIconsQuery from '../../cmsHooks/useIconsQuery'
import useSiteMetadataQuery from '../../cmsHooks/useSiteMetadataQuery'

// site-wide contexts for themes, icons, and metadata
const Providers = ({ children }: { children: React.ReactNode }) => {
  const icons = useIconsQuery()
  const siteMetadata = useSiteMetadataQuery()

  return (
    <CMS.IconProvider data={icons}>
      <CMS.SiteMetadataProvider data={siteMetadata}>
        <FigmaProvider>{children}</FigmaProvider>
      </CMS.SiteMetadataProvider>
    </CMS.IconProvider>
  )
}

export default Providers
