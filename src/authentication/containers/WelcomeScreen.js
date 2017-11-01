/**
 * # WelcomeScreen.js
 * @flow
 */

import NavBar from '../../lib/config/NavBar'
import React from 'react'
import Welcome from '../components/Welcome'

type WelcomeScreenProps = {
  navigator: any,
}

class WelcomeScreen extends React.Component<WelcomeScreenProps> {
  static navigatorStyle = NavBar.Default.style
  render() {
    return (
      <Welcome
        navigator={this.props.navigator}
      />
    )
  }
}

export default WelcomeScreen
