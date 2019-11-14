import React from 'react';
const Footer = () => {
    return (
        <footer className="sticky-footer">
        <div className="container">
           <div className="row no-gutters">
              <div className="col-lg-6 col-sm-6">
                 <p>
                    Copyright &copy;
                    <script>
                       document.write(new Date().getFullYear());
                    </script> All Rights Reserved | Knowledge App
                 </p>
              </div>
              <div className="col-lg-6 col-sm-6 text-right">
                 <div className="app">
                    <a href="#"><img alt="" src="img/google.png"/></a>
                    <a href="#"><img alt="" src="img/apple.png"/></a>
                 </div>
              </div>
           </div>
        </div>
     </footer>

        
)

}

export default Footer