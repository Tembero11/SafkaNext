import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabbar, { Tab } from "../components/Tabbar";
import Week from "../components/Week";
import getWeekMenu, { WeekMenu } from "../utils/getWeekMenu";

const Home: NextPage<{ menu: WeekMenu | null }> = ({menu}) => {
  return (
      <>
        <Head>
          <title>Safka Online</title>
        </Head>
        <Navbar/>
        <div className={"content"}>
          {/* <Week menu={menu}/> */}
          <Tabbar>
            <Tab name={"Tab1"}>
              <p>I&apos;m tab 1</p>
            </Tab>
            <Tab name={"Tab2"}>
              <p>I&apos;m tab 2</p>
            </Tab>
            <Tab name={"Tab3"}>
              <p>I&apos;m tab 3</p>
            </Tab>
          </Tabbar>
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