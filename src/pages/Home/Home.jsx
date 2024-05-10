import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Indo from "../../components/indonesia/indo";
import data from "../../utils/constants/provinces";
import Profinsi from "../../components/profinsi/profinsi";
import Form from "../../components/form/form";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <Indo />
      <Profinsi provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
