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
          <img src={gallery[isGallery]} alt={img} />
        ) : (
          <img src={img} alt={img} />
        )}
      </div>
      <div className='product-info_block-gallery-slide'>
        {gallery && gallery.map((item: any, index: any) => (
          <div className='product-info_block-gallery-slide-item' style={isGallery === index ? {border: '1px solid #000'} : {}} key={index} onClick={() => handleClickSelectedPhoto(index)} >
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
