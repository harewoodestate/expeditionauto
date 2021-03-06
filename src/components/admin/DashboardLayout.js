import styled from "styled-components";
import General from "./General";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #282c34;
  height: 4em;
`;

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
  height: 18em;
  margin: 2em 1em 1em 1em;
`;

const DashboardLayout = (props) => {
  const [widgetOne, widgetTwo, widgetThree, widgetFour] = props.children;

  return (
    <>
      <Header>
        <Link className={`nav-button`} to="/">
          {`<< To Survey`}
        </Link>
        <Link className={`nav-button`} to="/data">
          {`View Data`}
        </Link>
      </Header>
      <Widgets>
        <FirstWidget>{widgetOne}</FirstWidget>
        <SecondWidget>{widgetTwo}</SecondWidget>
        <ThirdWidget>{widgetThree}</ThirdWidget>
        <FourthWidget>{widgetFour}</FourthWidget>
      </Widgets>
      <BottomPane>
        <General
          surveyData={props.surveyData}
          targetablesAndFuel={props.targetablesAndFuel}
          targetablesNotRWD={props.targetablesNotRWD}
          averageCarsByFamily={props.averageCarsByFamily}
        ></General>
      </BottomPane>
    </>
  );
};

export default DashboardLayout;
