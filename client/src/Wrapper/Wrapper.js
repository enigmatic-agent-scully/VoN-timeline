import React, { Component } from 'react';
import './style.css';
const vonLogo = require('./../assets/Imgs/von-logo.svg');
const AGMClogo = require('./../assets/Imgs/agmc-logo.svg');
const AWClogo = require('./../assets/Imgs/awc-logo.svg');

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userInfo: [],
      loggedIn: false
    };
  }

  render() {
    return (
      <div className='MainContainer'>
        <div className='VoN-Nav'>
          <div className='pure-menu pure-menu-horizontal'>
            <a
              href='www.voicesofnote.org'
              className='pure-menu-heading pure-menu-link'
            >
              <img
                src={vonLogo}
                className='pure-img'
                width='300px'
                alt='Voices of Note Logo'
              />
            </a>
            <a
              href='www.voicesofnote.org/AGMC'
              className='pure-menu-heading pure-menu-link'
            >
              <img
                src={AGMClogo}
                className='pure-img'
                width='90px'
                alt='AGMC Logo'
              />
            </a>
            <a
              href='www.voicesofnote.org/AWC'
              className='pure-menu-heading pure-menu-link'
            >
              <img
                src={AWClogo}
                className='pure-img'
                width='90px'
                alt='AWC Logo'
              />
            </a>
            <br />
            <ul className='pure-menu-list'>
              <li className='pure-menu-item'>
                <a href='www.voicesofnote.org/AGMC' className='pure-menu-link'>
                  AGMC
                </a>
              </li>
              <li className='pure-menu-item'>
                <a href='www.voicesofnote.org/AWC' className='pure-menu-link'>
                  AWC
                </a>
              </li>
              <li className='pure-menu-item pure-menu-has-children pure-menu-allow-hover'>
                <a
                  href='www.voicesofnote.org/about/'
                  id='about'
                  className='pure-menu-link'
                >
                  ABOUT
                </a>
                <ul className='pure-menu-children'>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/about/our-history/'
                      className='pure-menu-link'
                    >
                      OUR HISTORY
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/about/leadership/'
                      className='pure-menu-link'
                    >
                      LEADERSHIP
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/media/'
                      className='pure-menu-link'
                    >
                      PRESS KIT
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/gallery/'
                      className='pure-menu-link'
                    >
                      GALLERY
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/about/contact-us/'
                      className='pure-menu-link'
                    >
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </li>
              <li className='pure-menu-item pure-menu-has-children pure-menu-allow-hover'>
                <a
                  href='www.voicesofnote.org/ways-to-give/'
                  id='ways to give'
                  className='pure-menu-link'
                >
                  GIVE
                </a>
                <ul className='pure-menu-children'>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/ways-to-give/donate/'
                      className='pure-menu-link'
                    >
                      DONATE
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/ways-to-give/corporate-sponsorship/'
                      className='pure-menu-link'
                    >
                      CORPORATE SPONSORSHIP
                    </a>
                  </li>
                  <li className='pure-menu-item'>
                    <a
                      href='www.voicesofnote.org/ways-to-give/volunteer'
                      className='pure-menu-link'
                    >
                      VOLUNTEER
                    </a>
                  </li>
                </ul>
              </li>
              <li className='pure-menu-item'>
                <a
                  href='www.voicesofnote.org/event'
                  className='pure-menu-link'
                  id='ticketsButton'
                >
                  TICKETS
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.props.children}
        <div className='VoN-Footer'>
          <div className='footer'>
            {!this.state.loggedIn ? (
              <a href='/login' className='button'>
                VoN Member Login
              </a>
            ) : (
              <a href='/logout' className='button'>
                Log Out
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
