const React = require('react');

const SideBar = (props) => {
    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <a href="/admin" className="brand">Brand </a>
            </div>
            <div className="sidebar-body">
                <div className="sidebar-item">
                    <a href="/admin/user/create" className="item">Create User</a>
                </div>
                <div className="sidebar-item">
                    <a href="#item" className="item">Item</a>
                </div>
                <div className="sidebar-item">
                    <a href="#item" className="item">Item</a>
                </div>
                <div className="sidebar-item">
                    <a href="#item" className="item">Item</a>
                </div>
                <div className="sidebar-item">
                    <a href="#item" className="item">Item</a>
                </div>
            </div>
        </div>
    )
}
module.exports = SideBar