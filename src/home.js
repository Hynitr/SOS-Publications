import { Card} from 'react-bootstrap';
import AOS from 'aos';

import side from './img/side.png';
import bar from './img/bar.png';
import logo from './img/more.png';

const Homepage = () => {

    AOS.init();


    return ( 
 
       <div>
            <section className="home d-flex align-items-center text-center vh-100">
                <div className="container">
                    
                    <h1 className='display-1 fw-bold mb-2' data-aos="flip-left" data-aos-duration="2500">About 400+ Quality Books Published</h1>
                    <p className='col-lg-7 m-auto lead mt-2 mb-3' data-aos="fade-up" data-aos-duration="2000">Whether you are a first time client/author or an experienced one, we will
                     give you a world-class work at the most affordable cost.
                    </p>
                    <button className='btn btn-dark py-3 px-5 mt-2 fw-bold' data-aos="fade-up" data-aos-duration="1500">Explore Printed Books </button>
                </div>
            </section>


            <section className="banner mt-5 pt-5 pb-5 mb-5">
                <div className="container m-lg-auto">

                    <h1 className='fw-bold display-5 mb-5 col-8 m-3' data-aos="fade-up" data-aos-duration="2000">Trusted by <span>leading authors</span></h1>

                    <div className='row justify-content-center text-center m-auto' data-aos="flip-left" data-aos-duration="2500">
                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>
                    </div>

                    <div className='row justify-content-center text-center m-auto' data-aos="flip-right" data-aos-duration="2500">
                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>
                    </div>


                    <div className='row justify-content-center text-center m-auto'data-aos="flip-left" data-aos-duration="2500">
                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>
                    </div>


                    <div className='row justify-content-center text-center m-auto' data-aos="flip-right" data-aos-duration="2500">
                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>

                        <div className='col-lg-3 col-6'>
                            <img src={ side } alt="" className='img-fluid'/>
                        </div>
                    </div>
                    
                </div>
            </section> 


            <section className="about mt-5 pt-5 pb-5 mb-5 bg-pink">
                <div className="container m-auto pb-5 mb-5 mt-5">

                    <div className='row m-auto'>
                        <div className='col-lg-6 col-12'>
                        <h1 className='fw-bold display-5 mt-5 mb-4 col-lg-12 col-11'>A name synonymous with quality printing</h1>
                        <p>Our publishing system, enables you to manage your
                            publication process from planning your content all the way up
                            to publishing. Our professional publishing system structures
                            and streamlines your publishing process in order to avoid
                            wastage
                        </p>

                        <p>Our strengths in creative book cover and page layout design,
                            combined with high quality printing and superior customer
                            service have helped make our publishing company one of the
                            first choice of many writers seeking to publish in the country
                        </p>

                        <p>
                            The success of SOS Publication's Book Printing is directly
                            related to our ability to accept manuscripts straight from
                            client's desktop publishing programs, proof the book, select
                            book publishing options and publish the book quickly and
                            affordably directly from our large book publishing facility - all
                            from the ease of your home or office computer.

                        </p>


                        <p>
                        With a solid arrangement that can scale from a single user to
                        hundreds of designers, editors and writers, we make your daily
                        job easier and enable you to focus on what you do best: which
                        is create the contents, while we perfect the rest
                        </p>
                        </div>

                        <div className='col-lg-5' data-aos="flip-right" data-aos-duration="2000">
                            <img src={ bar } alt="" className='img-fluid h-100'/>
                        </div>
                    </div>
                </div>
            </section>
           


            <section className="ship mt-5 pt-5 pb-5 mb-5">
                <div className="container">

                    <div className="row m-auto">

                        <div className="col-lg-4 col-12 mb-lg-0 mb-3" data-aos="fade-right" data-aos-duration="2500">

                            <Card className='mb-4'>
                                <Card.Body className='mt-3 m-3'>
                                    <Card.Title className='mb-3 fw-bold'><span>S—Simplicity</span></Card.Title>
                                    <Card.Text>
                                    We believe publishing a book should be as simple as purchasing fast food.
                                    You submit your request, we provide it, you pay, and you leave happy. It's
                                    that simple. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-4'>
                                <Card.Body className='mt-3 m-3'>
                                    <Card.Title className='mb-3 fw-bold'><span>H—High quality</span></Card.Title>
                                    <Card.Text>
                                    Many people are skeptical about Publishing Houses because of
                                    the stigma of poor quality. Our network of professionals have
                                    continuously created works that exceed the quality of commercial
                                    publishers.  
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-4 col-12 mb-lg-0 mb-3 align-items-center d-none d-lg-flex">
                           <img src={logo} alt="" className='img-fluid'/>
                        </div>

                        <div className="col-lg-4 col-12 mb-lg-0 mb-3" data-aos="flip-right" data-aos-duration="2000">

                            <Card className='mb-4'>
                                <Card.Body className='mt-3 m-3'>
                                    <Card.Title className='mb-3 fw-bold'><span>P—Personal relationship</span></Card.Title>
                                    <Card.Text>
                                    SOS provides our partners with a personal contact who assists and directs
                                    them throughout the entire process. Call any time and ask any question. We
                                    will be there to see you through.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className='mb-4'>
                                <Card.Body className='mt-3 m-3'>
                                    <Card.Title className='mb-3 fw-bold'><span>S—Simplicity</span></Card.Title>
                                    <Card.Text>
                                    We believe publishing a book should be as simple as purchasing fast food.
                                    You submit your request, we provide it, you pay, and you leave happy. It's
                                    that simple. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                       
                    </div>
                </div>
            </section>



            <section className="services mt-5 pt-5 pb-5 mb-5 bg-pink">
                <div className="container m-auto pb-5 mb-5 mt-5">


                    <h1 className='fw-bold text-center justify-content-center m-auto display-4 mb-3'>What we can do</h1>
                    <p className='text-center justify-content-center m-auto col-lg-12 col-8 mb-lg-5 mb-3'>Get to know more about our tailored services</p>

                    <div className='row m-auto'>
                        <div className='col-lg-6 col-12'>
                            <h1 className='fw-bold display-5 mt-5 mb-4 col-lg-12 col-11 text-white'>Branding</h1>
                            <p className='col-lg-11'>Aside publishing books, our Graphics/Brand Concept ADepartment is also versed in expressing your mindset
                                through solid graphic illustration, creating a unique,
                                internationally acceptable concept for your brand. This
                                department takes care of your logo, trademark, letterheads,
                                business cards, envelopes, receipts/invoice/delivery notes,
                                bookmarks, postcards or flyers, handbills and posters.
                                Whatever you can imagine, we can bring into reality
                            </p>

                       
                        </div>


                        <div className='col-lg-6 col-12'>
                            <h1 className='fw-bold display-5 mt-5 mb-4 col-lg-12 col-11 text-white'>Company Brochures</h1>
                            <p className='col-lg-11'>We also specialize in all forms of Company Profiles, Program Brochures, Information Bulletins and
                                Service Booklets, be it on one page, folded, or
                                binded multiple pages.
                                Whether you desire a brand promotional gift item to
                                encourage the patronage of
                                new clients, or to reward your consistent
                                clients and faithful staffs, we have a wide
                                range of corporate gifts items that will suit
                                perfectly each of your purpose per time.
                                Just name it!

                            </p>

                       
                        </div>



                        <div className='col-lg-6 col-12'>
                            <h1 className='fw-bold display-5 mt-5 mb-4 col-lg-12 col-11 text-white'>ISBN/EAN</h1>
                            <p className='col-lg-11'>You are a writer; so the issue of copyright will be an important one to you as it protects your work
                                from copyright infringement. The International Standard Book Number (ISBN) is the 10 digit
                                number on the back of a book. This number identifies the publisher and the book title. Booksellers
                                all over the world use this number to order, price and keep track of inventory. An EAN bar code is
                                your ISBN transferred into an OCR scanable image created specifically for your book.

                            </p>

                       
                        </div>



                        <div className='col-lg-6 col-12'>
                            <h1 className='fw-bold display-5 mt-5 mb-4 col-lg-12 col-11 text-white'>AUDIO TRANSCRIPTION</h1>
                            <p className='col-lg-11'>The challenge of being a career person is much more demanding today than it can ever be. It is
                                thereby increasingly becoming more difficult for executives who are talented writers to find the
                                time to sit down and write life transforming books. We
                                come to record your word on our tape (or just pick the ones you have recorded), and
                                believing that the impact of the spoken word is as powerful as the written word, we take the pain to
                                transcribe your recorded words into a book form, relieving you of the stress of writing.

                            </p>

                       
                        </div>

                      
                    </div>
                </div>
            </section>
           


            <section className='started pt-5 mt-5 mb-5 pb-5 m-lg-0 m-2' data-aos="flip-left" data-aos-duration="1500">
                <div className='container pt-5 pb-5 mb-5'>

                    <Card className='col-lg-10 justify-content-center text-start m-auto'>
                        <Card.Body>

                            <div className='py-5 px-lg-5 px-3 m-lg-5'>
                                <h1 className="mb-3 display-4 fw-bold">Publish Your Book</h1>
                                <p className="mt-4 mb-5 lead">To better help you publish a book, we provide the most book printing options that most
                                    companies cannot compete with, which includes six different book Publishing Binding
                                    Styles, five Printing Paper Options, five Standard Book Printing Sizes and lots more.
                                </p>

                                <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=2349066647086&text=Hello,%20I%27ll%20love%20to%20join%20the%20Adiz%20Academy%20Community.%20My%20name%20is%20---"><button type="submit" className="btn py-3 btn-light btn-join">Talk to us Now</button></a>
                                
                            </div>
                                                
                        </Card.Body>
                         
                    </Card>

                </div>

            </section>


            
       </div>
        
     );
}
 
export default Homepage;