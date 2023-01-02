import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabbar, { Tab } from "../components/Tabbar";
import Week from "../components/Week";
import getWeekMenu, { WeekMenu } from "../utils/getWeekMenu";

const Home: NextPage<{ menu: WeekMenu | null }> = ({menu}) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobileDevice());
  }, [])

  return (
      <>
        <Head>
          <title>Safka Online</title>
        </Head>
        <Navbar/>
        <div className={"content"}>
          {
            isMobile ? (
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
            ) : (
              <Week menu={menu}/>
            )
          }
        </div>
        <Footer/>
      </>
  );
}

function isMobileDevice() {
  if (typeof window == "undefined") return false;

  const isTouch = "ontouchstart" in window;
  const isSmallScreen = window.innerWidth < 550;

  return isTouch && isSmallScreen;
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