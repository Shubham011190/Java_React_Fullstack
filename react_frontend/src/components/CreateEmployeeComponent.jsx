import { useState } from "react";
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const CreateEmployeeComponent = ()=>{
    const [state,setState] = useState({
        firstname : ' ',
        lastname:' ',
        email:' ',
    })
    const changeFirstNameHandler = (event) =>{
        setState({firstname : event.target.firstname})
    }
    const changeLastNameHandler = (event) =>{
        setState({firstname : event.target.firstname})
    }
    const changeEmailHandler = (event) =>{
        setState({firstname : event.target.firstname})
    }
    const saveEmployee = (event)=>{
        event.preventDefault();
        let employee = {firstname : state.firstname, lastname : state.lastname, email : state.lastname};
        console.log("Employee =>" + JSON.stringify(employee));
    }
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name : </label>
                                        <input placeholder='First Name' name='firstname' className='form-control'
                                        value={state.firstname} onChange={changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name : </label>
                                        <input placeholder='Last Name' name='lastname' className='form-control'
                                        value={state.lastname} onChange={changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address : </label>
                                        <input placeholder='Email Address' name='email' className='form-control'
                                        value={state.email} onChange={changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                                    <Link to="/employees" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default CreateEmployeeComponent;
