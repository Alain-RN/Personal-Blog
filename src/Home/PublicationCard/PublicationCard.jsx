import React, { useEffect, useRef, useState } from 'react'

function PublicationCard({ title, picture, description }) {
  const [more, setMore] = useState(true)

  const handleChangeMoreOrLess = () => {
    setMore(!more)
  }

  const textDescription = useRef(null)
  const moreOrLess = useRef(null)

  const [height, setHeight] = useState(0)
  useEffect(() => {
    // Vérifie si la référence est définie
    if (textDescription.current) {
      // Récupère la hauteur du div
      setHeight(textDescription.current.clientHeight);
    }
  }, []);
  return (
    <div className='publication text-white' >

      <h3 className='title' >Title : {title}</h3>

      <div className="description" onClick={handleChangeMoreOrLess} style={{height:(more)?"21px":"auto"}}>

        <div ref={textDescription}>
          <p className='textDescription'>{description}</p>
        </div>

        {(more) && (height>21) && <div className='flouSpan'>
          <span className="moreOrLess" ref={moreOrLess} >see more . . .</span>
        </div>}

      </div>

      <div className='imgContainer'>
        <img src={picture} alt="" className='imagepub' />
      </div>

    </div>
  )
}

export default PublicationCard