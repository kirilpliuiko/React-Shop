import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items';
import Categories from "./components/Categories";

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
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }

  chooseCategory(category) {
    console.log(category)
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
