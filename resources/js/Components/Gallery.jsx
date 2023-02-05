import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  width: 100px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 45rem;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const GalleryWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const MainGalleryImage = styled.img`
  width: 400px;
`;

const AdditionalPhotos = styled.img`
  width: 100px;
  margin: 15px;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "0.5" : "1")};
`;

const CloseButton = styled.button`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 20px;
  top: 3rem;
  right: 3rem;
`;

export const Gallery = ({ images, mainImage }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImg, setCurrentImg] = useState();
  const imgs = [...images, mainImage];
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {images.map((img) => (
            <Image
              src={img}
              key={img}
              alt="photo"
              onClick={() => {
                setShowGallery(true);
                setCurrentImg(img);
              }}
            />
          ))}
        </div>
        <MainImage
          src={mainImage}
          alt="main photo"
          onClick={() => {
            setShowGallery(true);
            setCurrentImg(mainImage);
          }}
        />
      </div>
      {showGallery && (
        <GalleryWrapper>
          <CloseButton onClick={() => setShowGallery(false)}>X</CloseButton>
          <MainGalleryImage src={currentImg} alt="main photo" />
          <div style={{ display: "flex", margin: "20px" }}>
            {imgs.map((img) => (
              <AdditionalPhotos
                src={img}
                key={img}
                alt="photo"
                isActive={img === currentImg}
                onClick={() => setCurrentImg(img)}
              />
            ))}
          </div>
        </GalleryWrapper>
      )}
    </>
  );
};
