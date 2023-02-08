import styled from "styled-components";
import { useState } from "react";
import { useWidth } from "@/hooks/useWidth";

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
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const GalleryWrapper = styled.div`
  position: fixed;
  z-index: 1000;
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
  div {
    display: flex;
  }
`;

const MainGalleryImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const AdditionalPhotos = styled.img`
  width: 100%;
  max-width: 100px;
  margin: 10px;
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

const GalleryDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.mainColor : theme.colors.white};
  margin: 20px;
  cursor: pointer;
`;

export const Gallery = ({ images, mainImage }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImg, setCurrentImg] = useState();
  const imgs = [...images, mainImage];
  const width = useWidth();

  return (
    <>
      <div style={{ display: "flex" }}>
        {width >= 576 && (
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
        )}
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
          <div>
            {imgs.map((img) =>
              width >= 576 ? (
                <AdditionalPhotos
                  src={img}
                  key={img}
                  alt="photo"
                  isActive={img === currentImg}
                  onClick={() => setCurrentImg(img)}
                />
              ) : (
                <GalleryDot
                  isActive={img === currentImg}
                  onClick={() => setCurrentImg(img)}
                />
              )
            )}
          </div>
        </GalleryWrapper>
      )}
    </>
  );
};
