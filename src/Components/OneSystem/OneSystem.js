import React, { Component } from 'react'
import SubSystem from './SubSystem/SubSystem'

export default class OneSystem extends Component {
    render() {
        const {oneSubSyst} = this.props
        return (
            <div className="one-system">
               
                {this.props.oneSyst.map((item) => {
                    return (
                        <div className="one-system-flex">
                            <i className="fas fa-caret-up " onClick={this.props.subOpenSyst}></i>
                            <h3>{item.system_name}</h3>
                            <p>{item.id}</p>
                            <p>{item.created_date}</p>
                            <p>{item.active_licenses}</p>
                            <button onClick = {this.props.delete}>Remove</button>
                        </div>
                    )
                })}
                <SubSystem oneSubSystems={oneSubSyst} subOpenSystem={this.props.subOpen}/>
            </div>
        )
    }
}

