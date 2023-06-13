import React, { useState } from 'react'
import './Footer.css';
import { Button } from '../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const history = useNavigate();
    const Submit = () => {
        setEmail('');
        history('/login');
    }
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form onSubmit={Submit}>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                        />
                        <Button buttonStyle='btn--outline' to={'login'}>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <NavLink to='/'>How it works</NavLink>
                        <NavLink to='/'>Testimonials</NavLink>
                        <NavLink to='/'>Careers</NavLink>
                        <NavLink to='/'>Investors</NavLink>
                        <NavLink to='/'>Terms of Service</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <NavLink to='/'>Contact</NavLink>
                        <NavLink to='/'>Support</NavLink>
                        <NavLink to='/'>Destinations</NavLink>
                        <NavLink to='/'>Sponsorships</NavLink>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <NavLink to='/'>Submit Video</NavLink>
                        <NavLink to='/'>Ambassadors</NavLink>
                        <NavLink to='/'>Agency</NavLink>
                        <NavLink to='/'>Influencer</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <NavLink target='_blank' to='https://www.instagram.com/' >Instagram</NavLink>
                        <NavLink target='_blank' to='https://www.facebook.com/'>Facebook</NavLink>
                        <NavLink target='_blank' to='https://www.youtube.com/'>Youtube</NavLink>
                        <NavLink target='_blank' to='https://twitter.com/'>Twitter</NavLink>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <NavLink to='/' className='social-logo'>
                            TRVL
                            <i className='fab fa-typo3' />
                        </NavLink>
                    </div>
                    <small className='website-rights'>TRVL © 2023</small>
                    <div className='social-icons'>
                        <NavLink
                            className='social-icon-link facebook'
                            to='https://www.facebook.com/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </NavLink>
                        <NavLink
                            className='social-icon-link instagram'
                            to='https://www.instagram.com/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </NavLink>
                        <NavLink
                            className='social-icon-link youtube'
                            to='https://www.youtube.com/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </NavLink>
                        <NavLink
                            className='social-icon-link twitter'
                            to='https://twitter.com/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </NavLink>
                        <NavLink
                            className='social-icon-link twitter'
                            to='https://www.linkedin.com/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
