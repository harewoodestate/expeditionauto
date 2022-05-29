import styled from "styled-components";
import General from "./General";

const Widgets = styled.div`
  display: flex;
  height: 50vh;
  gap: 2em;
  margin: 1em;
  justify-content: space-evenly;
`;

const FirstWidget = styled.div`
  flex: 1;
  width: 20%;
  height: 100%;
`;

const SecondWidget = styled.div`
  flex: 1;
  width: 20%;
  height: 100%;
`;

const ThirdWidget = styled.div`
  flex: 1;
  width: 20%;
  height: 100%;
`;

const FourthWidget = styled.div`
  flex: 1;
  width: 20%;
  height: 100%;
`;

const BottomPane = styled.div`
  flex: 4;
  width: auto;
  height: 80em;
  margin: 2em 1em 1em 1em;
`;

const DashboardLayout = ({ children }) => {
  const [widgetOne, widgetTwo, widgetThree, widgetFour] = children;

  return (
    <>
      <Widgets>
        <FirstWidget>{widgetOne}</FirstWidget>
        <SecondWidget>{widgetTwo}</SecondWidget>
        <ThirdWidget>{widgetThree}</ThirdWidget>
        <FourthWidget>{widgetFour}</FourthWidget>
      </Widgets>
      <BottomPane>
        <General></General>
      </BottomPane>
    </>
  );
};

export default DashboardLayout;
