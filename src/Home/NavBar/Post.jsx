import React from 'react'
import PublicationCard from '../PublicationCard/PublicationCard'

import pubExemple from '../PublicationCard/PostAsset/pubEx.jpg'

function Post() {
  return (
    <div className='containerPost d-flex justify-content-center px-6 '>
      <div className='post bg-dark'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero voluptate aperiam veritatis minus tenetur id sequi, maiores mollitia esse.
        <div className='allPosts'>
          {/* All pub */}
          <PublicationCard title={"title 1"} picture={pubExemple} description={"Asvbsjb ew w eh sn  dfisfhe"} />
          <PublicationCard title={"title 2"} picture={pubExemple}
            description={"Asvbsjb ew wfd gf rt rrt tj ytjt jtyrt jrtjrjrtr eh sn" +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf " +
              "dfisfhefsbrwhr  34y er dfhd hdfhdf  h fdh rthr htrh rth rt hrthfgbcbf "
            }
          />
          <PublicationCard title={"title 3"} picture={pubExemple}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing el
              it. Ipsam libero voluptate aperiam veritatis minus tenetur id sequi, m
              aiores mollitia esse.`
            }
          />
        </div>

      </div>
    </div>

  )
}

export default Post