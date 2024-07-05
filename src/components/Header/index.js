import React from 'react';
import { Avatar, Image } from '@adobe/react-spectrum';
import './index.css';

function Header() {
  return (
    <div className="header">
      <Image
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkCSY3NbHOEiYQEBwexIyxbL_2bGSF4TTT0TCuHEj0VvT_B0DwU5FEPdSWKZX68Jcmp_qZ2ZIvUZ2zjjpmM-gZok99kfKONV1d234uqgF7sWqFuk823QQRL5BlxWyY8cqoAEqZNRHll6wkYY9e2x-KlnSQrYasXbR364DNb8phBMw1cObXgDJx0dje/s320/havahavai.png"
        alt="icon"
      />
      <Avatar
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkzb-4_-j6QcEHP7IO6iKmnPhPijitks89pYOK45A1WPVgby51XScWX9kH0JXAjZ4_rpTcNQo68vpyodbSHYv27Jzwk08tf9YPttw2gG2aXyg0H7i_3iSC5QitdASGo9U11Sv1cRGH-ORSXwIwWNU_cPVLTmnWVU_OnpFciHkvNMJU5MqWgCUTCdZu/s320/Avatar%20-%20Desktop%20-%20Light.png"
        alt="avatar"
      />
    </div>
  );
}

export default Header;
