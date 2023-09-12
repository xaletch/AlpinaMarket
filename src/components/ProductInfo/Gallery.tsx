import React from 'react'

export const Gallery = ( { img, gallery } ) => {
  const [isGallery, setIsGallery] = React.useState<number>(0);

  const handleClickSelectedPhoto = (index: number) => {
    setIsGallery(index);
    console.log(isGallery);
  };


  return (
    <div className='product-info_block-gallery'>
      <div className='product-info_block-gallery-img'>
        <img src={img} alt="" />
        {/* <img src={gallery[isGallery]} alt="" /> */}
      </div>
      <div className='product-info_block-gallery-slide'>
        {gallery && gallery.map((item: any, index: any) => (
          <div className='product-info_block-gallery-slide-item' key={index} onClick={() => handleClickSelectedPhoto(index)} >{item}</div>
        ))}
      </div>
    </div>
  )
}
