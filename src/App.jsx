import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

function App() {

  return (
    <>
      {/* <Header /> */}
      <div className="middle">
        <Sidebar />
        <Main />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
