import React, { useEffect, useRef, useState } from 'react'

function PublicationCard({ title, picture, description }) {
  const Description = useRef(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    // Vérifie si la référence est définie
    if (Description.current) {
      // Récupère la hauteur du div
      const divHeight = Description.current.clientHeight;
      setHeight(divHeight);
    }
  }, []);
  return (
    <div className='publication text-white'>
      <h2>title :{title}{height}</h2>
      <div className="description" style={{ position: "relative", textAlign: "justify", height: "24px" }} >
        {/* <p className='textDescription'></p> */}
        <p ref={Description}>{description}</p>
        <div className='flouSpan' style={{ position: "absolute", right: "0", top: "0", zIndex:"2"}}>
          <span className="" style={{marginLeft:"50px"}}>see more . . .</span>
        </div>
      </div>
      <img src={picture} alt="" className='imagepub w-100' />

    </div>
  )
}

export default PublicationCard