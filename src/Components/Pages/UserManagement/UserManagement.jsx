import React from 'react'
import Table from '../../Components/UserManagementComponents/Table'

const UserManagement = () => {
    return (
        <div className='container'>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span></span>
                <h1 class="h3 mb-0 text-gray-800">USER MANAGEMENT</h1>
                <span></span>
            </div>
            <hr class="sidebar-divider" />
            <div class="row justify-content-md-center">
                <div className="col-11">
                    <Table />
                    <br />
                </div>

            </div>
        </div>
    )
}

export default UserManagement