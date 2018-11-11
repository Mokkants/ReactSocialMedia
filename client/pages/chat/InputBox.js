import React, {Component} from 'react'

const inputBoxStyles={
    width:'100%',
    paddingTop:10,
    paddingBottom:10,
    fontSize:17
}

class InputBox extends Component {
    constructor() {
      super()
      this.state = {
        message: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
      this.setState({
        message: e.target.value
      })
    }
    handleSubmit(e) {
      e.preventDefault()
      this.props.sendMessage(this.state.message)
      this.setState({
        message: ''
      })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input
                style={inputBoxStyles}
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Write a message..."
                type="text" 
            />
        </form>
      )
    }
  }

  export default InputBox