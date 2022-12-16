import { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Week from "../components/Week";
import getWeekMenu, { WeekMenu } from "../utils/getWeekMenu";

const Home: NextPage<{ menu: WeekMenu | null }> = ({menu}) => {
  return (
      <>
        <Navbar/>
        <div className={"content"}>
          <Week menu={menu}/>
        </div>
        <Footer/>
      </>
  );
}


Home.getInitialProps = async () => {
  try {
    const menu = await getWeekMenu();
    return { menu }
  } catch (err) {
    return { menu: null }
  }
}

export default Home;