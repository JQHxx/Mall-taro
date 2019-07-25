import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidMount() {
  
  }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
