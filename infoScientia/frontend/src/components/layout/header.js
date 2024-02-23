import React, { Component } from 'react'

export class header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontFamily: 'Code Mono, sans-serif', fontSize: '30px' }}>infoScientia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Homepage</a>
                    <a className="nav-link" href="#">Data</a>
                    <a className="nav-link" href="#">Account</a>
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default header