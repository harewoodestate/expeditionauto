import styled from "styled-components";

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/image${(props) => props.imageNumber}-min.jpg");
  background-repeat: no-repeat;
  background-size: 35vw 100vh;
  object-fit: contain;
  border-radius: 2em 0 0 2em;
`;

const QuestionImage = ({ imageNumber }) => {
  return <Image imageNumber={imageNumber} />;
};

export default QuestionImage;
