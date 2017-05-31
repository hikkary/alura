import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Alert
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import { Constants } from 'expo';
// import Home from './home';

const fr = ['bonjour', 'merci', 'comment allez vous ?', 'Viande'];
const ko = ['안녕하세요', '고맙습니다', '잘 지냈어 요?', '고기'];


export default class App extends Component {
state = {
  lang: 'fr',
  content: fr,
  index: 0,
  learning: ko,
  currentWord: null
};
render() {
  return (
    <View style={styles.title}>
      <Text style={styles.paragraph}>
        ALURA
      </Text>

      <View style={styles.title}>
        <TouchableWithoutFeedback onPress={this._change}>
          <View>
          <Text onPress={this.switchLang} style={styles.paragraph}>
            // {this.state.currentWord}
          </Text>
          </View>
        </TouchableWithoutFeedback>
        <Button title="show solution" onPress={this._handleButtonPress} />
        <Button title="Random Word" onPress={this.getRandomWord} />
        <Button title="Press me" onPress={this.switchLang} />

      </View>
      <NativeRouter>
        <View>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Route exact path="/" component={App}/>
        </View>
      </NativeRouter>

    </View>
  );
}
};


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


// componentDidMount() {
//   console.log('debut');
//
//   this.getRandomWord();
//   console.log(this.state);
// }
//
// getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// switchLang = () => {
//   this.setState({
//     learning: this.state.content,
//     content: this.state.learning
//   });
//   this.setState({ currentWord: this.state.learning[this.state.randomInt] });
// };
//
// getRandomWord = () => {
//   this.setState({
//     randomInt: this.getRandomInt(1, this.state.learning.length)
//   });
//   this.setState({ currentWord: this.state.learning[this.state.randomInt] });
// };
//
// render() {
//   return (
//     <View style={styles.title}>
//       <Text style={styles.paragraph}>
//         ALURA
//       </Text>
//
//       <View style={styles.title}>
//         <TouchableWithoutFeedback onPress={this._change}>
//           <View>
//           <Text onPress={this.switchLang} style={styles.paragraph}>
//             {this.state.currentWord}
//           </Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <Button title="show solution" onPress={this._handleButtonPress} />
//         <Button title="Random Word" onPress={this.getRandomWord} />
//         <Button title="Press me" onPress={this.switchLang} />
//
//       </View>
//
//     </View>
//   );
// }
