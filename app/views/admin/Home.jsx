const React = require('react');
function Home(props){
    return(
        <div className="container">
            <h1>Home</h1>
            <h3>Admin : {props.user.admin.email}</h3>
        </div>
    )
}
module.exports = Home;