import './App.css'
// import Footer from './Footer/Footer'
// import Header from './Header/Header'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'
// import Sidemain from './sideMain/Sidemain'

function App() {

  return (
    <>
      {/* <Header /> */}
      <div className="middle">
        <Sidebar />
        <Main />
        {/* <Sidemain /> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
