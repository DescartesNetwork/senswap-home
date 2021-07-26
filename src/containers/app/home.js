import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { Medium, Telegram, Twitter, ImgCircle, Paper } from 'static/images';
import Button from 'components/button';

import WHITEPAPER from 'static/base/senswap_whitepaper.pdf';
import CTA_GUIDELINE from 'static/base/guideline_senswap_devnet.pdf';

const SOCIAL_ICON = [
  { icon: Telegram, src: 'https://t.me/SenSwap' },
  { icon: Twitter, src: 'https://twitter.com/SenSwap' },
  { icon: Medium, src: 'https://blogs.senswap.com' },
  { icon: Paper, src: WHITEPAPER },
];
const CTA_SENSWAP_DEVNET = 'https://app.senswap.com';
const RELEASE_DATE = '2021,07,25, 19:00:00';


class Home extends Component {
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-12 coming-soon">
          <div className="wrap-content">
            <div className="title">
              <h1>An Open Liquidity Protocol for Token Swap on Solana</h1>
            </div>
            <div className="group-button">
              <div className="btn-coming-soon">
                <Button text="Guideline to join" url={CTA_GUIDELINE} />
              </div>
               <div className="btn-coming-soon">
                <Button text="Senswap Devnet" url={CTA_SENSWAP_DEVNET} />
              </div>
            </div>
            <ul className="btn-social">
              {SOCIAL_ICON.map((e, idx) => {
                return <li key={idx}>
                  <a href={e.src} target="_blank" rel="noreferrer">
                    <img src={e.icon} alt={`social_${idx}`} />
                  </a>
                </li>
              })}
            </ul>
            <div className="bg-img">
              <img src={ImgCircle} alt="coming soon" />
              <img src={ImgCircle} alt="coming soon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));