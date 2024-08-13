import React from 'react'
import PublicationCard from '../PublicationCard/PublicationCard'

import pubExemple from '../PublicationCard/PostAsset/pubEx.jpg'

function Post() {
  return (
    <div className='containerPost d-flex justify-content-center '>
        <div className='post bg-dark'>
          <div className='containerpost' >
            {/* All pub */}
            <PublicationCard title={"test title"} picture={pubExemple} description={"Asvbsjb ew w eh sn  dfisfhe"}/>
            <PublicationCard title={"test title"} picture={pubExemple} 
                description={"Asvbsjb ew wfd gf rt rrt tj ytjt jtyrt jrtjrjrtr eh sn"+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "+
                  "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "
                }
            />
          </div>

        </div>
    </div>

  )
}

export default Post