const React = require('react');

const Styles = () => {
    const url = 'http://localhost:3333/css'
    return (
        <>

            <link href={`${url}/bootstrap.min.css`} rel="stylesheet" />

            <link href={`${url}/font-awesome.min.css`} rel="stylesheet" />

            <link href={`${url}/nprogress.css`} rel="stylesheet" />
 
            <link href={`${url}/green.css`} rel="stylesheet" />


            <link href={`${url}/bootstrap-progressbar-3.3.4.min.css`} rel="stylesheet" />
            <link href={`${url}/jqvmap.min.css`} rel="stylesheet" />
            <link href={`${url}/daterangepicker.css`} rel="stylesheet" />

            <link href={`${url}/custom.min.css`} rel="stylesheet"></link>
        </>
    )
}
module.exports = Styles