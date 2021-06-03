const React = require('react');
const Header = require('./partial/Header');
const Footer = require('./partial/Footer');
const SideBar  = require('./inc/SideBar')
function Layout(props) {
    return (
        <>

            <html lang="en">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="https://cruss-backend.herokuapp.com/css/main.css" />
                    <title>Document</title>
                </head>
                <body className={'nav-md'}>
                    <div className="container">
                        <div className="header">
                            <Header />
                        </div>
                        <div className="content">
                            <div className="row">
                            <div className="col-4">
                                <SideBar />
                            </div>
                            <div className="col-8">
                            {props.children}
                            </div>
                            </div>
                           
                            
                        </div>
                        <div className="footer">
                            <Footer />
                        </div>

                    </div>
                
                </body>
            </html>
        </>
    )
}
module.exports = Layout;