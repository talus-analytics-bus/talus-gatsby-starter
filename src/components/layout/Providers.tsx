import React from 'react'

import CMS from '@talus-analytics/library.airtable-cms'
import FigmaProvider from '../../figma/FigmaProvider'

import useIconsQuery from '../../cmsHooks/useIconsQuery'
import useSiteMetadataQuery from '../../cmsHooks/useSiteMetadataQuery'
import getTrackingId from '../../utilities/trackingId'

// site-wide contexts for themes, icons, and metadata
const Providers = ({ children }: { children: React.ReactNode }) => {
  const icons = useIconsQuery()
  const siteMetadata = useSiteMetadataQuery()
  // get GA tracking ID
  const trackingId = getTrackingId()

  return (
    <CMS.IconProvider data={icons}>
      <CMS.SiteMetadataProvider data={siteMetadata} trackingId={trackingId}>
        <FigmaProvider>{children}</FigmaProvider>
      </CMS.SiteMetadataProvider>
    </CMS.IconProvider>
  )
}

export default Providers
