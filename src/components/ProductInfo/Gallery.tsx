import React from 'react'

export const Gallery = ( { img, gallery } ) => {
  return (
    <div className='product-info_block-gallery'>
      <div className='product-info_block-gallery-img'>
        <img src={img} alt="" />
      </div>
      <div className='product-info_block-gallery-slide'>
        {gallery && gallery.map((item: any, index: any) => (
          <div className='product-info_block-gallery-slide-item' key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}
