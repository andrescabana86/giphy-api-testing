import React from 'react'
import './app.sass'

export class App extends React.PureComponent {
  render() {
    return (
      <h1 data-testid="title" className="title">Welcome to my boilerplate</h1>
    )
  }
}
