import './App.css'
import PreNavbar from './components/PreNavbar'
import Navbar from "./components/Navbar.js"
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from './components/Heading.js'
import StarProduct from "./components/StarProducts.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
 import Videos from "./components/Videos.js"
  import Banner from "./components/Banner.js"
 import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
import data from './data/data.json';

function App() {
  return(
    <Router >
     
    <PreNavbar/>
    <Navbar/>
    <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
    
    <Slider start = {data.banner_start} />
     <Offers offer = {data.offer} />
     <Heading text="STAR PRODUCT"/>
     <StarProduct starProduct={data.starProduct}/>
     <Heading text = "Hot Accessories"/>
      <HotAccessoriesMenu/>
      <Routes>
       <Route exact path = "/music" element =  {<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

       <Route exact path="/smartDevice" element ={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}/>
      

       <Route exact path="/home" element = {<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}/>


       <Route exact path="/lifestyle" element = {<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}/>
      
       <Route exact path="/mobileAccessories" element = {<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  /> } />
      
      </Routes>
      <Heading text = "Product Reviews"/>
      <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />

      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>

      <Banner  banner={data.banner_end}/>

      <Footer footer={data.footer} />
          
    </Router>
  )
}

export default App;
