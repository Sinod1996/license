import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className = "main-container">
                <div className = "tabs">
                    {this.props.tabs.map((user) => {
                        return (
                            <div className = "tabs-title">
                                <h3 className = "user-title">{user.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
