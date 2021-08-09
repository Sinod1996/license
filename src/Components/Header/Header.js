
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="title">{this.props.datas}</h1>
                <div className="plans"> {this.props.plans.map((item) => {
                    return (
                        <div>
                            <b className="names" onClick={this.props.activeName}>{item.name}</b>
                        </div>

                    )
                })}
                    <button className="btn">Upgrade now</button>
                </div>

            </div>
        )
    }
}

