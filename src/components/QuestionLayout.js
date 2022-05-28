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

const QuestionLayout = ({ left: Left, right: Right }) => {
  return (
    <Layout>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Layout>
  );
};

export default QuestionLayout;
