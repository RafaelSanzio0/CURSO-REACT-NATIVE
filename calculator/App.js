import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = { // defino apenas alguns valores padroes
  displayValue: '0',
  clearDisplay: false, //diz se o display precisa ser limpo no proximo digito digitado = true ou não = false
  operation: null,
  values: [0,0],
  current: 0, // indice do array que estou setando no momento
}

export default class App extends Component { 

  state = {...initialState} // cria um objeto com os mesmos valores do initialState
  
  // 1,2,3,4,5,6,7,8,9
  addDigit = digit => {
    //console.debug(typeof this.state.displayValue)
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay // seja se tiver 0 no display e eu digitar 8 nao vai ficar 08 e sim 8 OU se tiver como true o cleardisplay quer dizer que preciso limpar o diplay
    
    if (digit === '.' && !clearDisplay && this.state.displayValue.includes('.')) { // validacao do ponto, so pode ter 1
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue //se for true limpa senao mostra o valor
    const displayValue =  currentValue + digit // pega valor atual e concateno com o digitado
    this.setState({displayValue, clearDisplay: false})

    if (digit !== '.'){ //se for diferente de . significa que digitei um digito valido
      const newValue = parseFloat(displayValue) // transforma o resultado em float
      const values  = [...this.state.values] // cria um novo array a partir da propriedade values
      values[this.state.current] = newValue // se o current aponta pro indice 0 ele atualiza esse valor SE tiver apontado para o indice 1 entao ele pega o novo valor do tipo float
      this.setState({values})
    }
  }

  // AC
  clearMemory = () => {
    this.setState({...initialState})
  }

  // *,-,+,/,=
  setOperation = operation => {
    if (this.state.current === 0){ // pega o estado inicial seto o state para a operacao escolhida e atualizo o valor de current pra 1 e quando mudo a operacao quero que o display limpe 
      this.setState({operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`) // utilizando eval consigo ter esse comportamento (2+2) = 4
      } catch(e) { // imagina que tentei fazer a seguinte operation --> 2 = 2, o eval lanca um erro e podemos tratar dizendo que iremos manter o numero atual no display
        values[0] = this.state.values[0]
      }

      values[1] = 0 // sempre que seto uma nova operation garanto que o valor de indice 1 esteja zeraod para receber o novo valor
      this.setState({ //seto stato com aquilo que recebi nos resultados
        displayValue: `${values[0]}`,
        operation: equals ? null : operation, // verifico se a op escolhida for igual eu n faco nada se for diferente disso faca algo
        current: equals ? 0 : 1, //se for = ele fica no indice 0 caso eu tenha colocaod alguma operacao eu continuo setando no indice 1
        clearDisplay: true,
        values, // setando o array de valores da linha 48, como temos o mesmo nome do atributo é só chamar o values
      })
    } 
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation}/>
          {/*como ja foi definido no onPress chamando arrow fuction não precisamos reescrever aqui novamente*/}
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation onClick={() => this.setOperation('-')} />
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          {/*passando com argumento utilizando arrow function*/}
          <Button label='0' double onClick={() => this.addDigit('0')}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' operation onClick={() => this.setOperation('=')}/>
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
      flexDirection: 'row', //deixa os botoes em linha
      flexWrap: 'wrap' // quebra as linha fazendo com que todos os botoes aparecam
    }
})