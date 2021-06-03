const React = require('react');
const Layout = require('./AuthLayout');
function Login(props) {
    return (
        <>
            <Layout>
                <div className="login-container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-lg-4 m-auto">
                            <div className="panel panel-default">
                                <div className="panel-heading">Login to Admin dashboard</div>
                                <div className="panel-body">
                                    <form encType='urlecoded' action="/admin/login" method='POST' className="form">
                                        <div className="form-group">
                                            <label htmlFor="email" className='label'>
                                                Email Address
                                              </label>
                                            <input type="email" className="form-control" name="email" id='email' />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className='label'>
                                                Email Address
                                              </label>
                                            <input type="password" className="form-control" name="password" id='password' />

                                        </div>

                                        <div className="form-group text-center">
                                            <button className='btn btn-primary' type='submit'>Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                    {props.message 
                                     ? <div className="alert alert-danger"> {props.message} </div>
                                     : ""
                                     }
                                   
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

module.exports = Login;