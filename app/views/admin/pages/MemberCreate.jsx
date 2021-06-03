const React = require('react');
const Layout = require('../Layout');
const MemberCreate = (props) => {
    return (
        <Layout>
            <div className="member-create-form">

                <form action="/admin/member/create" method='post' className="form">

                    <div className="form-group">
                        <label htmlFor="userName">Enter name</label>
                        <input id='userName' type="text" name='name' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input id='password' type="text" name='password' className='form-control' />

                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <input id='passwordConfirm' type="text" name='confirm' className='form-control' />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" name='email' className='form-control' />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

module.exports = MemberCreate;