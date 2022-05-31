import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2em 0 0 2em;
`;

const QuestionImage = ({ imageNumber }) => {
  return (
    <Image
      src={`/image${imageNumber}-min.jpg`}
      alt={`Question ${imageNumber} image`}
    />
  );
};

export default QuestionImage;
