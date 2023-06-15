import React from 'react';
import "./Contact.scss";
const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h1>CONTACT US</h1>
                <p>Home / Contact Us</p>
                <div className="card">
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-twitter"></i> 
                    </div>
                    <div className="text-card">
                        <div className="logo">
                            <i class="fa-solid fa-address-card"></i> <h2>For communication</h2>
                        </div>
                        <div className="cards">
                            <div className="inputs">
                                <input type="text" placeholder='Your Name' />
                                <input type="text" placeholder='Email Address' />
                                <input type="text" placeholder='Message' className='message' />
                                <button>Sent Now </button>
                            </div>
                            <div className="line"></div>
                            <div className="location">
                                <h4><i class="fa-solid fa-envelope"></i> aybekashirbaev68@gmail.com</h4>
                                <h4><i class="fa-solid fa-phone"></i> +998(99)402-01-15</h4>
                                <h4><i class="fa-solid fa-location-arrow"></i> Karakalpakstan, Kanlikol City</h4>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;