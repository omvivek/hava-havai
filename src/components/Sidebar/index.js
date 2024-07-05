import React from 'react';
import { Image } from '@adobe/react-spectrum';
import '@spectrum-web-components/sidenav/sp-sidenav.js';
import '@spectrum-web-components/sidenav/sp-sidenav-heading.js';
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';
import './index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <sp-sidenav variant="multilevel">
        
        <sp-sidenav-item>
          <div className="icon-text">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglfBoGl67w2o4ph36Klufh-ljkuAazWu_MxeRlFwYJJMr2AAQqYkICU5VSZv-dXYQ88GSnB7Gdo9hV7Rgq31dhjm4vVK5NhsjvgI2a0cIWPiMbzfdJ2Fv3g4P-G11sBFh4mkUHFlapn4L2sfrR9TuJNcIu3ao0p7htEFEKxR2h606eCMNEJyGNZTYT/s320/Icon.png"
              alt="Home icon"
              className="icon"
            />
            Home
          </div>
        </sp-sidenav-item>
        
        
        <sp-sidenav-item>
          <div className="icon-text">
            <Image
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHMy-YZtljA6u_KEcyRnywHhadBQedpcWr-CfGQmQ6vLo6MwkHuHdYi1kLf_ZErf9nbs8rSHcdqb-4MdqcstgX51k-QN3bP3pqXZfjhPYLQfqnme17EB-iAeyMlyu2D5Ovy-DTaTXH-eT14yqFhli2Ur4d5FwJxNnXGylBENhi22mtlUGWqrhE_9oP/s320/Vector.png"
              alt="Dashboard icon"
              className="icon"
            />
            Dashboard
          </div>
        </sp-sidenav-item>
        
        
        <sp-sidenav-heading label="Services">
          <sp-sidenav-item value="Airports" label="Airports"></sp-sidenav-item>
          <sp-sidenav-item value="Videos" label="Videos"></sp-sidenav-item>
        </sp-sidenav-heading>
        
        
        <sp-sidenav-heading label="Others">
          <sp-sidenav-item value="List 1" label="List 1"></sp-sidenav-item>
          <sp-sidenav-item value="List 2" label="List 2"></sp-sidenav-item>
          <sp-sidenav-item value="List 3" label="List 3"></sp-sidenav-item>
        </sp-sidenav-heading>
      </sp-sidenav>
    </div>
  );
}

export default Sidebar;
