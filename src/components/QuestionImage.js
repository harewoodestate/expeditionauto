import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

Image.defaultProps = {
  src: "/image1.jpg",
};

const QuestionImage = () => {
  return <Image />;
};

export default QuestionImage;
