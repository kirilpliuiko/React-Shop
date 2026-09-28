import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Chair for sitting',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.webp',
          desc: 'Table for eating',
          category: 'chairs',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'Sofa for chilling',
          category: 'sofas',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Wall light',
          img: 'wall-light.jpeg',
          desc: 'Wall light for lighting',
          category: 'wall-lights',
          price: '25'
        },
        {
          id: 5,
          title: 'White chair',
          img: 'chair-white.jpeg',
          desc: 'Chair for sitting',
          category: 'chairs',
          price: '49.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]}, () => {
      console.log(this.state.orders)
    })
  }
}

export default App;
