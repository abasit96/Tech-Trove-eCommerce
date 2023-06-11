import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer(props) {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
              <a href='https://www.facebook.com/' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='facebook-f' />
              </a>
              <a href='https://twitter.com/home' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='twitter' />
              </a>
              <a href='https://google.com/' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='google' />
              </a>
              <a href='https://instagram.com/' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='instagram' />
              </a>
              <a href='https://linkedin.com/' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='linkedin' />
              </a>
              <a href='https://github.com/abasit96/Tech-Trove-eCommerce' className='me-4 text-reset'>
                <MDBIcon color='secondary' fab icon='github' />
              </a>
            </div>
          </section>
    
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    {/* <MDBIcon color='secondary' icon='laptop' className='me-3' /> */}
                    <span role="img" aria-label="computer">💻 </span>
                    Tech Trove
                  </h6>
                  <p>
                  Welcome! At Tech Trove you will easily find all the necessities for your tech career or hobby. We offer great products at reasonable prices and outstanding service. Let us know how we can help your shopping experience be even better.
                  </p>
                </MDBCol>
    
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Monitors
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Chairs
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Keyboards
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Mice
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Headsets
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Miscellaneous
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Price Match
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Order History
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Order Issues
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                    techtrove.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      );
    }

export default Footer;