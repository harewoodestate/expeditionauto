import styled from "styled-components";

const Layout = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  align-self: flex-end;
`;

const LeftPane = styled.div`
  width: 35vw;
  flex: 1;
  background-color: #ffffff;
  border-radius: 2em 0 0 2em;
`;

const RightPane = styled.div`
  display: flex;
  justify-content: center;
  width: 35vw;
  flex: 1;
  background-color: #ffffff;
  border-radius: 0 2em 2em 0;
`;

const QuestionLayout = ({ children }) => {
  const [left, right] = children;

  return (
    <Layout>
      <LeftPane>{left}</LeftPane>
      <RightPane>{right}</RightPane>
    </Layout>
  );
};

export default QuestionLayout;
