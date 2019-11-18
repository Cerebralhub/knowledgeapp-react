import React from 'react';
const Footer = () => {
    return (
      <section class="footer-area">
      <footer class="container">
          <div class="row">
              <div class="col-sm-8">
                  <p>
                      Copyright &copy;
                      <script>
                          document.write(new Date().getFullYear());
                      </script> All Rights Reserved | Knowledge App
                  </p>
              </div>
              <div class="col-sm-4">
                  <form class="form-inline">
                      <input class="form-control mr-sm-2" type="newsletter" placeholder="Enter your email"
                          aria-label="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Subscribe</button>
                  </form>
              </div>


          </div>

      </footer>
  </section>

        
)

}

export default Footer