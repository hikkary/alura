import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const fr = ['bonjour', 'merci', 'comment allez vous ?'];
const ko = ['안녕하세요', '고맙습니다', '잘 지냈어 요?'];

export default class App extends Component {
  state = {
    lang: 'fr',
    content: fr,
    index: 0
  };

  change = () => {
    if (this.state.lang === 'ko') {
      this.setstate({ lang: 'fr', content: fr });
    }
    if (this.state.lang === 'fr') {
      this.setstate({ lang: 'ko', content: ko });
    }
  };

  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.paragraph}>
          ALURA
        </Text>
        <View style={styles.title}>
          <Text style={styles.paragraph}>
            {this.state.lang}
            {this.state.content}
            {this.state.index}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
