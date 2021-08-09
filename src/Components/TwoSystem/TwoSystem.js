import React, { Component } from 'react'
import SubSystemTwo from './SubSystemTwo/SubSystemTwo'

export default class TwoSystem extends Component {
    render() {
        const className = "one-system-flex"
        return (
            <div className="two-system">
                
                {this.props.twoSyst.map((item) => {
                    return (
                        <div className = {className}>
                            <i className="fas fa-caret-up " onClick={this.props.subOpenTwoSyst}></i>
                            <h3>{item.system_name}</h3>
                            <p>{item.id}</p>
                            <p>{item.created_date}</p>
                            <p>{item.active_licenses}</p>
                            <button onClick = "Remove()">Remove</button>
                        </div>
                    )
                })}
                <SubSystemTwo twoSub={this.props.twoSubSyst}  subOpenTwoSystem={this.props.subOpenTwo} />
            </div>
        )
    }
}
