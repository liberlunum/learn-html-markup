import NavBar from "./components/1-header/Desktop/NavBar/NavBar";
import HeadPage from "./components/1-header/Desktop/Header/HeadPage";
import TopSellers from "./components/body/Desktop/1-block-top-sellers/TopSellers";
import PersonalRecommended from "./components/body/Desktop/2-block-recs/PersonalRecommended";
import News from "./components/body/Desktop/3-block-news/News";
import FooterUpper from "./components/footer/Desktop/1_footer upper/FooterUpper";
import FooterLower from "./components/footer/Desktop/2_footer lower/FooterLower";


function Desktop() {
    return <div>
        <NavBar/>
        <HeadPage/>
        <TopSellers/>
        <PersonalRecommended/>
        <News/>
        <FooterUpper/>
        <FooterLower/>
    </div>
}

export default Desktop