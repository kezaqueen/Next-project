import TopBar from './component/home/TopBar';
import Header from './component/home/Header';
import Banner from './component/home/Banner';
import FlashSales from './component/home/Flashsales';
import CategorySection from './component/home/CategorySection';
import MusicBanner from './component/home/MusicBanner'; 
import Categories from './component/home/ProductCard';
import ProductListing from './component/home/ProductListing';
import NewArrival from './component/home/NewArrival';
import ServiceFeatures from './component/home/Services';
import { Footer } from './component/home/Footer';

const HomepageComponent = () => (
  <main>
    <TopBar />
    <Header />
    <div style={{ display: 'flex', padding: '32px' }}>
      <section style={{ flex: 1 }}>
        <Banner />
        <FlashSales />
        <Categories/>
        <CategorySection />
        <MusicBanner />
        <ProductListing/>
        <NewArrival/>
        <ServiceFeatures/>
        <Footer/>
      </section>
    </div>
  </main>
);

export default HomepageComponent;