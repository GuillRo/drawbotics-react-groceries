import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = (props) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12  col-md-6 col-lg-4 column">
            <Header />
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout