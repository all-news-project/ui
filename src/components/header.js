import React from "react";

const Header = () => {
  const logoUrl =
    "https://raw.githubusercontent.com/all-news-project/ui/main/public/logo192.png";
  const gitHubLogoUrl =
    "https://global-uploads.webflow.com/6320e912264435aca2ab0351/6441979ed961547ccbe96b29_github-white.svg";
  const gitHubLink = "https://github.com/all-news-project";
  const googleExtensionLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Google_Chrome_Web_Store_icon_2015.svg/512px-Google_Chrome_Web_Store_icon_2015.svg.png?20220227092509";
  const googleExtensionLink =
    "https://github.com/all-news-project/extension/wiki/Installation";
  return (
    <header>
      <label className="logo">
        <img src={logoUrl}></img>
      </label>
      <div>
        <span className="header_icon">
          <a href={googleExtensionLink} target="_blank">
            <img src={googleExtensionLogoUrl}></img>
          </a>
        </span>
        <span className="header_icon">
          <a href={gitHubLink} target="_blank">
            <img src={gitHubLogoUrl}></img>
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
