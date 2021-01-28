import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import bg1 from "./img/bg1.jpg";
import bg2 from "./img/bg2.jpg";

function App() {
  return (
    <>
      <Header title={"This is title"} descr={"This is Description!"} />
      <Layout
        title={"This is title 1"}
        descr={"This is Description! 1"}
        id={"first"}
        urlBg={bg1}
      />
      <Layout
        title={"This is title 2"}
        descr={"This is Description! 2"}
        id={"second"}
        colorBg="#ccc"
      />
      <Layout
        title={"This is title 3"}
        descr={"This is Description! 3"}
        id={"third"}
        urlBg={bg2}
      />
      <Footer />
    </>
  );
}

export default App;
