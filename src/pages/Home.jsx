import "./Home.css";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredinfo/featuredInfo";
import { userData } from "../components/Dummydata";
import Widgetsm from "../components/widgets/Widgetsm";
import Widgetlg from "../components/widgets/Widgetlg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
}
