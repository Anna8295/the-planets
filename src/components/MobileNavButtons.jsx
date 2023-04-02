const MobileNavButtons = ({active, navColors, buttonActive, setButtonActive, }) => {
   
    console.log(active, navColors, buttonActive)
    const handleClick = (buttonActive ) => {
        setButtonActive(buttonActive);
    };

    return(
        <>
            <button 
            className={'button uppercase text-[9px]'}
            style={{borderBottom: buttonActive === 1 ? `solid ${navColors[active]}` : ''}}
            onClick={() => handleClick(1)}
            > 
                overview
            </button>

            <button 
            className={'button uppercase text-[9px]'}
            style={{borderBottom: buttonActive === 2 ? `solid ${navColors[active]}` : ''}}
            onClick={() => handleClick(2)}
            >
                structure
            </button>

            <button 
            className={'button uppercase text-[9px]'}
            style={{borderBottom: buttonActive === 3 ? `solid ${navColors[active]}` : ''}}
            onClick={() => handleClick(3)}
            >
                surface
            </button>
        </>
    )
}

export default MobileNavButtons