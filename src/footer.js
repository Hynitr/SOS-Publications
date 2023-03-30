import React , { useState, useEffect }  from "react";
import logo from './img/logo.png';

function Footer() {


  const [year, setYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setYear(year);
  }, []);



  return (


        <footer className="footer pt-5 mt-5">
          <div className="container py-5">

                  
                  
            <div className="row m-2">

                <div className="col-lg-6 mt-2">
                  <img src={logo} alt="logo" className="img-fluid img-responsive" width="200" />
                  <p className="mt-4 col-10">Our book publishing/printing service is Oprofessional, easy, and fast. From family history books to poetry, memoirs to
                        children's books, fiction, nonfiction, literature, biographies, history books, art
                        books, children's books, self-help books, healthy guideline books, executive books,
                        motivational and spiritual books, etc. Basically, any kind of books you can think of. </p>
                </div>

                <div className="col-lg-3 mt-5">
                  <h1>Quick links</h1>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-2"><a href="#home" className="footer-link text-decoration-none text-white">Home</a></li>
                    <li className="mb-2"><a href="#about-us" className="footer-link text-decoration-none text-white">Published Books</a></li>
                    <li className="mb-2"><a href="#courses" className="footer-link text-decoration-none text-white">Our Services</a></li>
                    <li className="mb-2"> <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=2349066647086&text=Hello,%20I%27ll%20love%20to%20join%20the%20Adiz%20Academy%20Community.%20My%20name%20is%20---" className="footer-link text-decoration-none text-white">Contact Us</a></li>
                  </ul>
                </div>
            

                <div className="col-lg-3 mt-5">
                  <h1>Contact Us</h1>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-2"><a href="#home" className="footer-link text-decoration-none text-white">3, Babatunde Okunnuga str, Unity Estate, Lagos</a></li>
                    <li className="mb-2"><a href="#about-us" className="footer-link text-decoration-none text-white">hello@sospublications.com.ng</a></li>
                    <li className="mb-2"><a href="#courses" className="footer-link text-decoration-none text-white">+2348023415875, +2348135291769, +2348094814575, </a></li>
                    </ul>
                </div>

                
            </div>
           
              
            <div className='justify-content-center text-center pt-5 mt-5'>
                <small>&copy; SOS Publications {year} &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Developed by: <a className="text-decoration-none text-white" href="https://hynitr.com" rel="noreferrer" target="_blank">Hynitr</a></small>
            </div>

          </div>
                    
        </footer>


  );
}

export default Footer;
