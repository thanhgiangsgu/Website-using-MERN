import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="contact spad">
            <div className="container" style={{paddingRight: 'none'}}>
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="contact__content" style={{display: 'flex', paddingRight: '0px'}}>
                            <div className="contact__address">
                            <h5>Contact info</h5>
                            <ul>
                                <li>
                                    <h6><i className="fa fa-map-marker"></i> Address</h6>
                                    <p>272 An Dương Vương, phường 3, quận 5, Thành phố Hồ Chí Minh</p>
                                </li>
                                <li>
                                    <h6><i className="fa fa-phone"></i> Phone</h6>
                                    <p><span>125-711-811</span><span>125-668-886</span></p>
                                </li>
                                <li>
                                    <h6><i className="fa fa-headphones"></i> Support</h6>
                                    <p>Support.bubushop@gmail.com</p>
                                </li>
                            </ul>
                            </div>


                            <div class="col-lg-6 col-md-6s">
                            <div className="contact__form" style={{marginLeft : '150px'}}>
                            <h5>SEND MESSAGE</h5>
                            <div > 
                                <input type="text" placeholder="Name" style={{marginBottom: '15px' , width: '500px', height: '40px'}}></input>
                                <input style={{marginBottom: '15px' , width: '500px' , height: '40px'}} type="text" placeholder="Email"/>
                                <input style={{marginBottom: '15px' , width: '500px' , height: '40px'}} type="text" placeholder="Website"/>
                                <textarea placeholder="Message" rows= {3} cols = {60}></textarea>
                                <button type="submit" className="site-btn" style={{width: '100%'}}>Send Message</button>
                            </div>
                        </div>
                                </div>
                            



                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
