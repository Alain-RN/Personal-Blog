import React from 'react'

function PublicationCard({title,picture,description}) {
  return (
    <div className='publication bg-white text-left'>
        <h1>title :{title}</h1>
        <img src={picture} alt="" className='w-100'/>
        <div className="description">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default PublicationCard