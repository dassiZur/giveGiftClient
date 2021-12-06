import React, { useEffect } from "react";
import Gallery from 'react-grid-gallery';


const Logo = (props) => {
    
    return (
    <div>
        <div className="sidebarfltr">
            <h3>סינון</h3>

        </div>
        {/* <div style={{marginRight: '15vw'}}> */}
         <Gallery images={props.giftsArr} showLightboxThumbnails={true} />
        {/* </div> */}
            
    </div>)
}
export default Logo;