import styled from "styled-components";
import { useState, useEffect } from "react";
import { useWidth } from "@/hooks/useWidth";
import iconPath from "@/assets/img/switchGalleryIcon.png";

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
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s ease;
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
  const [prevImg, setPrevImg] = useState();
  const [nextImg, setNextImg] = useState();
  const imgs = [mainImage, ...images];
  const width = useWidth();

  const clickHandler = (e) => {
    if (e.target === e.currentTarget) {
      setShowGallery(false);
    }
  };

  const setPrevNextImages = (images, currentIndex) => {
    const lastIndex = images.length - 1;

    if (currentIndex === lastIndex) {
      setPrevImg(images[currentIndex - 1]);
      setNextImg(images[0]);
    } else if (currentIndex === 0) {
      setPrevImg(images[lastIndex]);
      setNextImg(images[currentIndex + 1]);
    } else {
      setPrevImg(images[currentIndex - 1]);
      setNextImg(images[currentIndex + 1]);
    }
  };

  const handleGalleryOpen = (img) => {
    setShowGallery(true);
    setCurrentImg(img);
    const currentIndex = imgs.indexOf(img);
    setPrevNextImages(imgs, currentIndex);
  };

  const handleArrowPress = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentImg(prevImg);
      const currentIndex = imgs.indexOf(prevImg);
      setPrevNextImages(imgs, currentIndex);
    } else if (e.key === "ArrowRight") {
      setCurrentImg(nextImg);
      const currentIndex = imgs.indexOf(nextImg);
      setPrevNextImages(imgs, currentIndex);
    }
  };

  const handleButtonPress = (button) => {
    if (button === "left") {
      setCurrentImg(prevImg);
      const currentIndex = imgs.indexOf(prevImg);
      setPrevNextImages(imgs, currentIndex);
    } else if (button === "right") {
      setCurrentImg(nextImg);
      const currentIndex = imgs.indexOf(nextImg);
      setPrevNextImages(imgs, currentIndex);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      handleArrowPress(e);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleArrowPress]);

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
                onClick={() => handleGalleryOpen(img)}
              />
            ))}
          </div>
        )}
        <MainImage
          src={mainImage}
          alt="main photo"
          onClick={() => handleGalleryOpen(mainImage)}
        />
      </div>
      {showGallery && (
        <GalleryWrapper onClick={clickHandler}>
          <CloseButton onClick={() => setShowGallery(false)}>X</CloseButton>
          <button
            onClick={() => handleButtonPress("left")}
            style={{
              backgroundColor: "rgba(0, 0, 0, .3)",
              position: "absolute",
              left: "2rem",
              transform: "rotate(180deg)",
            }}
          >
            <img src={iconPath} alt="switch icon" width={60} />
          </button>
          <MainGalleryImage src={currentImg} alt="main photo" />
          <div>
            {imgs.map((img) => (
              <GalleryDot
                isActive={img === currentImg}
                key={img}
                onClick={() => handleGalleryOpen(img)}
              />
            ))}
          </div>
          <button
            onClick={() => handleButtonPress("right")}
            style={{
              position: "absolute",
              right: "2rem",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <img src={iconPath} alt="switch icon" width={60} />
          </button>
        </GalleryWrapper>
      )}
    </>
  );
};
