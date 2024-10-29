import React from 'react'

import Header from '../../Components/Header'
import headerImage from '../../Assets/header_bg_3.jpg'

import './gallery.css'

const Gallery = () => {

  const galleryLenght = 15;
  const images = []

  for(let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../Assets/gallery${i}.jpg`))
  }  console.log(images);

  return (
    <>
      <Header title="Our gallery" image={ headerImage }>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Laudantium, unde?
      </Header>
      <section className="gallery">
        <div className="container gallery-container">
          {
            images.map((image, index) => {
              return <article key={index}>
                  <img src={image} alt={`Gallery Images ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery