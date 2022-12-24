import './App.css';
import Navbar from './Components/Navbar/navbar';
import LogoBar from './Components/LogoBar/logoBar';
import Slider from './Components/Slider/slider';
import TopPic from './Components/TopPic/topPic';
import SaleArea from './Components/SaleArea/saleArea';
import FlashSale from './Components/FlashSale/FlashSale';
import BarazMall from './Components/BarazMall/BarazMall';
import MoreProduct from './Components/MoreProduct/MoreProduct';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <LogoBar />
      <Slider />
      <TopPic />
      <SaleArea />
       <FlashSale />
       <BarazMall />
       <MoreProduct />
        <Footer />
    </div>
  );
}

export default App;
