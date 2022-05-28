import styled from "styled-components";

const Layout = styled.div``;

const TopLeftPane = styled.div``;

const TopRightPane = styled.div``;

const BottomRightPane = styled.div``;

const BottomLeftPane = styled.div``;

const DashboardLayout = ({ children }) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = children;

  return (
    <Layout>
      <TopLeftPane>{topLeft}</TopLeftPane>
      <TopRightPane>{topRight}</TopRightPane>
      <BottomRightPane>{bottomRight}</BottomRightPane>
      <BottomLeftPane>{bottomLeft}</BottomLeftPane>
    </Layout>
  );
};

export default DashboardLayout;
