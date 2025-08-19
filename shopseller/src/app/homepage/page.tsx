import TopBar from '../SharedComponents/TopBar';
import Header from '../SharedComponents/Header';
import Banner from './component/Banner';
import FlashSales from './component/Flashsales';
import CategorySection from './component/CategorySection';
import MusicBanner from './component/MusicBanner'; 
import Categories from './component/ProductCard';
import ProductListing from './component/ProductListing';
import NewArrival from './component/NewArrival';
import ServiceFeatures from './component/Services';
import { Footer } from '../SharedComponents/Footer';

const HomepageComponent = () => (
  <main>
    <div style={{ display: 'flex', padding: '32px' }}>
      <section style={{ flex: 1 }}>
        <TopBar/>
        <Header/>
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