import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        employees: []
      }
    }
  render() {
    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee =>
                            <tr key={employee.id}>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.emailId}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}
