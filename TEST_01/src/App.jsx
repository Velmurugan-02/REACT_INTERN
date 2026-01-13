import Test_props from '../Components/TestProps';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

function App() {
  let name = "Velmurugan";
  return (
    <>
      <Test_props name = "Velmurugan" num = "1"/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
