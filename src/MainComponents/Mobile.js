
import MobNavBar from "./components/1-header/Mobile/1-nav-bar/MobNavBar";
import MobNews from "./components/body/Mobile/1-block-news/MobNews";
import MobTopSellers from "./components/body/Mobile/2-block-top-sellers/MobTopSellers";
import MobRecs from "./components/body/Mobile/3-block-recs/MobRecs";
import Discount from "./components/body/Mobile/4-block-discount/Discount";
import Footer from "./components/footer/Mobile/Footer";

function Mobile() {
    const isMobile = true;

    return <div >
        <MobNavBar />
        <MobNews/>
        <MobTopSellers/>
        <MobRecs/>
        <Discount/>
        <Footer/>
    </div>
}

export default Mobile