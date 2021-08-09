import React, { Component } from 'react'
const systems = <h4>Systems</h4>
const id = <p>ID</p>
const createdDate = <p>Created Date</p>
const activeLicense = <p>Active License</p>
export default class Systems extends Component {
    render() {
        return (
            <div className = "systems-container">
                <h4>{systems}</h4>
                <p>{id}</p>
                <p>{createdDate}</p>
                <p>{activeLicense}</p>
                
            </div>
        )
    }
}
