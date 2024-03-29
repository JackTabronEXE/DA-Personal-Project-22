import React from 'react'

function Header() {
return (
<>
<header className="ds-header" id="site-header">
<div className="container">
    <div className="ds-header-inner">
      <a href="index.html" className="ds-logo">
        <span>J</span>Jack Tabron
      </a>
      <ul className="ds-social">
        <li><a href="https://github.com/JackTabronEXE"> <i className="ri-github-fill"></i></a></li>
        <li><a href="#" target="_blank"><i className="ri-stack-overflow-line"></i></a></li>
        <li><a href="#" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
      </ul>
    </div>
</div>
</header>
</>
)
}

export default Header