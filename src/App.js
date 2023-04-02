import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar, MobileNavButtons, Planets, StarsCanvas} from './components'
import { navLinks, MainContext, PlanetFacts } from './constants';
import { styles } from './styles';

const App = () => {
  const [active, setActive] = useState(navLinks[0].title);
  const [navColors, setNavColors] = useState(navLinks.reduce((colors, navItem) => {
    colors[navItem.title] = navItem.color;
    return colors;
  }, {}));
  const [planetInfo, setPlanetInfo] = useState(MainContext[0])

  const [filteredFacts, setFilteredFacts] = useState([]);
  const [buttonActive, setButtonActive] = useState(1)
  const [image, setImage] = useState()
  const [image2, setImage2] = useState()
  const [content, setContent] = useState()
  const [source, setSource] = useState()

  useEffect(() => {
    // Find the nav item with the same title as the active state
    const activeNavItem = navLinks.find(navItem => navItem.title === active)
    if (activeNavItem) {
      // Set the color for the active nav item
      setNavColors(prevColors => ({
        ...prevColors,
        [active]: activeNavItem.color,
      }))
    }

    const planetInfoArray = MainContext.find((planet) => planet.id === active);
    setPlanetInfo(planetInfoArray)

    const facts = PlanetFacts.find(planet => planet.id === active);
    const factsArray = Object.entries(facts.facts).map(([key, value]) => ({id: key, fact: value}));
    setFilteredFacts(factsArray); 

    const overviewInfo = planetInfo.overview;
    const structureInfo = planetInfo.structure;
    const geologyInfo = planetInfo.geology;

    switch (buttonActive) {
      case 1:
        setImage(overviewInfo[2].image);
        setContent(overviewInfo[0].content)
        setSource(overviewInfo[1].source)
        break;
      case 2:
        setImage(structureInfo[2].image);
        setContent(structureInfo[0].content)
        setSource(structureInfo[1].source)
        break;
      case 3:
        setImage(geologyInfo[3].image);
        setImage2(geologyInfo[2].image2)
        setContent(geologyInfo[0].content)
        setSource(geologyInfo[1].source)
        break;
      default:
        setImage(overviewInfo[2].image);
        setContent(overviewInfo[0].content)
        setSource(overviewInfo[1].source)
    }
  }, [active,setNavColors, planetInfo, buttonActive])

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#070724]">
        <nav
          className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-[#070724] border-b border-[#838391]`}
        >
          <Navbar 
            setActive={setActive} 
            active={active} 
            navColors={navColors} 
            setNavColors={setNavColors}
          />
          <div className="flex sm:hidden justify-between pt-4 border-t border-[#838391]">
            <MobileNavButtons 
              active={active} 
              navColors={navColors} 
              buttonActive={buttonActive}
              setButtonActive={setButtonActive}
            />
          </div>
        </nav>
          <Routes>
            <Route path="/" element={
                <Planets 
                  active={active} 
                  navColors={navColors} 
                  planetInfo={planetInfo}
                  filteredFacts={filteredFacts}
                  buttonActive={buttonActive}
                  setButtonActive={setButtonActive}
                  image={image}
                  image2={image2}
                  content={content}
                  source={source}
                />} 
            />
            <Route path="/:planet" element={
                <Planets 
                  active={active} 
                  navColors={navColors} 
                  planetInfo={planetInfo}
                  filteredFacts={filteredFacts}
                  buttonActive={buttonActive}
                  setButtonActive={setButtonActive}
                  image={image}
                  image2={image2}
                  content={content}
                  source={source}
                />} 
            />
          </Routes>
          <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App;
