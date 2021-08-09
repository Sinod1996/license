import React, { Component } from 'react'
import './App.css';
import data from './test_data.json'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Systems from './Components/Systems/Systems';
import OneSystem from './Components/OneSystem/OneSystem';
import TwoSystem from './Components/TwoSystem/TwoSystem';



export default class App extends Component {
  state = {
    plans: [
      { name: "Free", active: true, slug: "free_license", id: 0 },
      { name: "Pro", active: false, slug: "pro_license", id: 1 },
      { name: "VIP", active: false, slug: "vip_license", id: 2 }
    ],
    tabs: [
      { title: "Subscription", id: 0 },
      { title: "Outright", id: 1 },
      { title: "Offline Activation", id : 2}
    ],
    systems: [
      { system_name: "James-Main-Mackbook", id: 91520, created_date: "01 Jan 2019", active_licenses: 2 },
      { system_name: "James-Laptop", id: 91518, created_date: "15 Jan 2020", active_licenses: 1}
    ],
    subsystems: [
      { system_id: 91520, licenses: "Lightworks Pro", expires: "Never", cost: "30.00" },
      { system_id: 91520, licenses: "QScan Max", expires: "29 Aug 2021", cost: "26.00" },
      { system_id: 91518, licenses: "Lightworks Pro", expires: "Never", cost: "30.00" },
      { system_id: 91518, licenses: "QScan Max", expires: "29 Jul 2021", cost: "78.00" }
    ],
    subOpen: false,
    subOpenTwo: false,
    delete:false,

  }

  subOpen = () => {
    this.setState({
      subOpen : !this.state.subOpen
    })
  }

subOpenTwo = () => {
    this.setState({
      subOpenTwo : !this.state.subOpenTwo
    })
}

  Remove = () => {
    this.setState({
    delete: this.state.systems.slice(0,1)
  })
}

 

  render() {
    console.log(data);
    const { plans, tabs, systems, subsystems, subOpen, subOpenTwo } = this.state
    return (
      <div className="App">
        <Header datas={data.page_title} plans={plans} activeName={this.activeName}  />
        <Main tabs={tabs} />
        <Systems />
        <OneSystem oneSyst={systems.slice(0, 1)} oneSubSyst={subsystems.slice(0, 2)} subOpenSyst={this.subOpen} subOpen={subOpen} delete = {this.Remove} del = {this.state.delete} />
        <TwoSystem twoSyst={systems.slice(1, 2)} twoSubSyst={subsystems.slice(2, 4)} subOpenTwoSyst={this.subOpenTwo} subOpenTwo={subOpenTwo} delete={this.Remove} del={this.state.delete}  />
      </div>
    )
  }
}

