import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Pane = styled.div`
  width: 50vw;
  flex: 1;
`;

const QuestionLayout = ({ children }) => {
  const [left, right] = children;

  return (
    <Layout>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Layout>
  );
};

export default QuestionLayout;
