import React from 'react'
import PublicationCard from '../PublicationCard/PublicationCard'

import pubExemple from '../PublicationCard/PostAsset/pubEx.jpg'

function Post() {
  return (
    <div className='containerPost d-flex justify-content-center '>
        <div className='text-primary post bg-dark overflow-auto'>
          <div className='containerpost ' >
            {/* All pub */}
            <PublicationCard title={"test title"} picture={pubExemple} description={"Asvbsjb ew w eh sn  dfisfhe"}/>
            <PublicationCard title={"test title"} picture={pubExemple} description={"Asvbsjb ew w eh sn  dfisfhe"}/>
          </div>

        </div>
    </div>

  )
}

export default Post