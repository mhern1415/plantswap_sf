import React from 'react';

const Footer = () => {

     const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }


    return (
             <div>
             <h5 className="ui center aligned icon header">
             <button onClick={scrollToTop} className="ui red google button">
             <i className="arrow alternate circle up icon" />
                    Scroll to top
                    </button>
             </h5>
         </div>
    )
}

export default Footer;