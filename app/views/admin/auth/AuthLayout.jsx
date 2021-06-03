const React = require('react');

const AuthLayout = (props) => {
    return (

        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="http://localhost:3333/css/auth.css" />
                <title>Document</title>
            </head>
            <body>
                <div className="container">
                    <div className="content-are">
                        {props.children}
                    </div>

                </div>
            </body>
        </html>
    )
}

module.exports = AuthLayout;