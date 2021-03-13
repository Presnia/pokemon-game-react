import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg2 from '../src/assets/bg2.jpg';
import bg3 from '../src/assets/bg3.jpg';

const App = () => {
  return (
    <div className="App">
      <Header title="This is title"
              descr="This is Description!"/>
      <Layout title="This is title"
              descr="This is Description!"
              urlBg={bg2}
              colorBg={null}/>
      <Layout title="This is title"
              descr="This is Description!"
              urlBg={null}
              colorBg={"yellow"}/>
      <Layout title="This is title"
              descr="This is Description!"
              urlBg={bg3}
              colorBg={null}/>
      <Footer />
    </div>
  );
};

export default App;
