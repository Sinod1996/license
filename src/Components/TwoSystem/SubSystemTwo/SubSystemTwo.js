import React, { Component } from 'react'

export default class SubSystemTwo extends Component {
    render() {
        return (
            <div className={`sub-flex ${this.props.subOpenTwoSystem ? "sub-flex-open" : ""} `}>
                {this.props.twoSub.map((user) => {
                    return (
                        <div className = "subsystems">
                            <p>{user.licenses}</p>
                            <p>{user.expires}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
