import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'

import commonStyles from '../commonStyles.js'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task.js' // comunicacao direta acontecendo aqui, pois o pai(tasklist) conhece o filho(task)

export default class TaskList extends Component {
    state = {
        tasks: [
        {
            id: Math.random(),
            desc: 'Ler Livro de React Livre',
            estimeAt: new Date(),
            doneAt: null
        },  {
            id: Math.random(),
            desc: 'Comprar Livro de React Livre',
            estimeAt: new Date(),
            doneAt: new Date()
        },
    ]
}       
    // a logica do toogletask fica aqui pois é onde se encontra o estado das task
    toogleTask = taskId => { // funcao responsavel por dizer se uma tarefa esta done ou pendente
        const task = [...this.state.tasks] //cria copia do array
        task.forEach(task => {
            if (taskId == task){
                task.doneAt = task.doneAt ? null : new Date() // se a task.doneAT tiver done eu n faco nada senao eu coloco uma data nova no momento que ele foi clicado
            }
        })
        this.setState({task: task}) // como temo novo array ai em cima nos passamos o novo estado dele(array: nome do atributo definido dentro do state )
    }

    // com o render item eu pego esses objetos ai de cima e renderizo para um objeto JSX
    // como os atributos sao os mesmos que espero receber em task eu consigo pegar os atributos e faze um sprad
    // jogando dentro da task {...item}

    //data={this.state.tasks} = LISTA D OBJETOS PUROS NADA DE KEY E VALUE
    // keyExtractor={item => `${item.id}` = OBTENDO O ID DE FORMA CORRETA DE CADA ELEMENTO
    // renderItem={({item}) => <Task {...item} explicacao acima

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
                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTaskProps={this.toogleTask} />}/>
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