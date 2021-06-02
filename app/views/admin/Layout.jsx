const React = require('react');
function Layout(props) {
    return (
        <>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
                    <title>Document</title>
                </head>
                <body>
                    <div className="container">
                        {props.children}
                    </div>

                </body>
            </html>
        </>
    )
}
module.exports = Layout;