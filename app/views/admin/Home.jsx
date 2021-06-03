const React = require('react');
const Layout = require('./Layout')
function Home(props) {
  return (
    <Layout>
         <div className="content-area-home">
            <h1>Content area home</h1>
         </div>
    </Layout>
  )
}
module.exports = Home;