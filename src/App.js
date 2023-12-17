import './App.css';
import Desktop from "./MainComponents/Desktop";
import Mobile from "./MainComponents/Mobile";
import {useMediaQuery} from 'react-responsive'

function App() {

    const isDesktop = useMediaQuery({
        minWidth: 768
    })
    const isMobile = useMediaQuery({
        maxWidth: 767
    })

    return (
        <div className="App">
            {isDesktop && <Desktop/>}
            {isMobile && <Mobile/>}
        </div>
    );
}

export default App;
