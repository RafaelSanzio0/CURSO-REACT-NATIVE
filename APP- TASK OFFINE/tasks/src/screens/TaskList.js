import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles.js'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task.js'


export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM [de] Y')
        return (
            <View style={r_styles.container}>
                <ImageBackground source={todayImage} style={r_styles.background}>
                    <View style={r_styles.titleBar}>
                        <Text style={r_styles.title}>Hoje</Text>
                        <Text style={r_styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={r_styles.taskContainer}>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null}></Task>
                </View>
            </View>
        )
    }
}

const r_styles = StyleSheet.create({
    container: { // o container é a unica view externa, e tem os filhos background e taskcontainer
        flex: 1 
    },
    background: {
        flex: 3
    },
    taskContainer: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end' // como o react trabalha com colunas no seu modo padrao, eu to dizendo que o meu conteudo vai ficar no final dessa coluna
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secindary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secindary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20
    }
})