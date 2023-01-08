import React, { Component } from 'react'
import loading from '../Assets/loading.gif'
import './Spinner.css'

export class Spinner extends Component {
  render() {
    return (
    // Using Local gif as an image
    //   <div className="text-center">
    //     <img src={loading} alt="Loading" />
    //   </div>

    // Including Customizable gif using css-loaders
        <div className="cssload-container my-3">
        <div className="cssload-speeding-wheel"></div>
        </div>
    )
  }
}

export default Spinner