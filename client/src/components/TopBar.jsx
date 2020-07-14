import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }
  render() {
    return (
      <div className="topBar">
        <a href='./' style={{textDecoration: 'none'}}><div className="kyleShelton">kS</div></a>
        <div className="clickableTop">
            <div className="clickable">PROJECTS</div>
            <a style={{textDecoration: 'none', color: '#3c3c64'}} href="./resume/Kyle_Shelton.pdf"><div className="clickable">RESUME</div></a>
        </div>
        <div className="clickableIcons">
            <a className="email" onClick={() => this.setState({copied: true})}>
              <CopyToClipboard text={'kylejamesshelton@gmail.com'}>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </CopyToClipboard>{this.state.copied ? <div className="email-copied">✅   email copied!</div> : <div className="email-dropdown">copy to clipboard</div>}
            </a>
            <a href='https://www.linkedin.com/in/okshelton/' style={{color: '#3c3c64'}}><FontAwesomeIcon className="icon"  icon={faLinkedin} /></a>
            <a href='https://github.com/okshelton' style={{color: '#3c3c64'}}><FontAwesomeIcon className="icon"  icon={faGithub} /></a>
        </div>
      </div>
    )
  }
}