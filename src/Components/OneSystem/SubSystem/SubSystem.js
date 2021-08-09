import React, { Component } from 'react'

export default class SubSystem extends Component {
    render() {
        return (
            <div className={` sub-flex ${this.props.subOpenSystem ? "sub-flex-open" : ""}`} >
                {this.props.oneSubSystems.map((user) => {
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
