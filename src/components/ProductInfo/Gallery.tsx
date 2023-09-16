import React from 'react'

export const Gallery = ( { img, gallery } ) => {
  const [isGallery, setIsGallery] = React.useState<number>(0);

const handleClickSelectedPhoto = (index: number) => {
  setIsGallery(index);
  // console.log(`картинка: ${gallery[index]}`);
};


  return (
    <div className='product-info_block-gallery'>
      <div className='product-info_block-gallery-img'>
        {gallery && gallery.length > 0 ? (
          <img className='home__best--offer__card--img' src={gallery[isGallery]} alt={img} />
        ) : (
          <img className='home__best--offer__card--img' src={img} alt={img} />
        )}
      </div>
      <div className='product-info_block-gallery-slide'>
        {gallery && gallery.map((item: any, index: any) => (
          <div className='product-info_block-gallery-slide-item' key={index} onClick={() => handleClickSelectedPhoto(index)} >
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
