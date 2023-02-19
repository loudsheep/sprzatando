import IconPath from "../assets/img/UploadIcon.png";
import {
  StyledSubTitle,
  StyledPhotoBox,
  ImageSection,
  UploadedImgWrapper,
  DeleteButton,
  ErrorMessage,
  ErrorWrapper,
} from "../Pages/page-styles/AddOffer.styles";

export const OfferImages = ({
  photos,
  errors,
  handlePhotoUpload,
  handleDeletePhoto,
}) => {
  return (
    <ErrorWrapper>
      <StyledSubTitle error={errors.photos}>Dodaj zdjęcia</StyledSubTitle>
      <ImageSection>
        {photos &&
          photos.map((photo, i) => (
            <ErrorWrapper key={i}>
              <UploadedImgWrapper error={errors[`photos.${i}`]}>
                <DeleteButton
                  type="button"
                  onClick={() => handleDeletePhoto(photo)}
                >
                  x
                </DeleteButton>
                <img
                  src={photo && URL.createObjectURL(photo)}
                  alt="uploaded photo"
                />
              </UploadedImgWrapper>
              <ErrorMessage>
                {errors[`photos.${i}`] && errors[`photos.${i}`]}
              </ErrorMessage>
            </ErrorWrapper>
          ))}

        <UploadedImgWrapper>
          <StyledPhotoBox htmlFor="input-file">
            <img src={IconPath} alt="add photo icon"/>
          </StyledPhotoBox>
        </UploadedImgWrapper>
        <input
          type="file"
          id="input-file"
          accept="image/png, image/jpeg"
          onChange={handlePhotoUpload}
        />
      </ImageSection>
      {errors.photos && <ErrorMessage>{errors.photos}</ErrorMessage>}
    </ErrorWrapper>
  );
};
