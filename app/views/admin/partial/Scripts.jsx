const React = require('react');
const Scripts = () => {
    const url = 'http://localhost:3333/js'
    return (
        <>

            <script src={`${url}/jquery.min.js`}></script>

            <script src={`${url}/bootstrap.min.js`}></script>

            <script src={`${url}/fastclick.js`}></script>

            <script src={`${url}/nprogress.js`}></script>

            <script src={`${url}/Chart.min.js`}></script>

            <script src={`${url}/gauge.min.js`}></script>

            <script src={`${url}/bootstrap-progressbar.min.js`}></script>

            <script src={`${url}/icheck.min.js`}></script>

            <script src={`${url}/skycons.js`}></script>

            <script src={`${url}/jquery.flot.js`}></script>
            <script src={`${url}/jquery.flot.pie.js`}></script>
            <script src={`${url}/jquery.flot.time.js`}></script>
            <script src={`${url}/jquery.flot.stack.js`}></script>
            <script src={`${url}/jquery.flot.resize.js`}></script>

            <script src={`${url}/jquery.flot.orderBars.js`}></script>
            <script src={`${url}/jquery.flot.spline.min.js`}></script>
            <script src={`${url}/curvedLines.js`}></script>

            <script src={`${url}/date.js`}></script>

            <script src={`${url}/jquery.vmap.js`}></script>
            <script src={`${url}/jquery.vmap.world.js`}></script>
            <script src={`${url}/jquery.vmap.sampledata.js`}></script>

            <script src={`${url}/moment.min.js`}></script>
            <script src={`${url}/daterangepicker.js`}></script>


            <script src={`${url}/custom.min.js`}></script>
        </>
    )
}

module.exports = Scripts;