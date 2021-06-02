const React = require('react');
const Layout = require('../Layout');
function Login(props) {
    return (
        <>
            <Layout>
                <div className="login-form">
                    <div className="alert">
                        {props.message && props.message}
                    </div>
                    <form action="/admin/login" method="POST" className="form" enctype="application/json">

                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input id={"email"} type="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="label">Passowrd</label>
                            <input id="password" type="password" name={'password'} className="form-control" />  
                        </div>
                        <button type="submit" className={'btn btn-primary'}>Login</button>
                    </form>
                </div>
            </Layout>

        </>
    )
}

module.exports = Login;