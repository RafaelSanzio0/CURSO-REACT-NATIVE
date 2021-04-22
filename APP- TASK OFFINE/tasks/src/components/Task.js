import React from 'react' // imr
import { View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native' // imrn
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

//export default props indica que é um componente funcional

//utilizamos a tecnica de comunicacao indireta passando uma funcao como propriedade
//pra tag filha e ela é chamada quando determinado evento acontecer uma func callback para mudar status da app
// a ideia central e passar params de pai pra filho (taskList pra Task)

//RESUMINDO UMA COMUNICACAO INDIRETA É QUANDO VC PASSA VIA PROPS UMA FUNCAO PRO FILHO E O FILHO CHAMA O PAI ATRAVES DESSA FUNC CALLBACK

export default props => {

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {} // é possivel tbm aplicar estilos fora do css styles
    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM [de] Y')

    // recebendo fucnao como callback na onpress via props que é o toogle / aqui nos passamos o ID do elemento clicado para o pai
    return (
        <View style={r_styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggleTaskProps(props.id)}> 
                <View style={r_styles.checkContainer}> 
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[r_styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={r_styles.date}>{formattedDate}</Text>
            </View>
        </View>

    )
}

function getCheckView (doneAt) {
    if (doneAt != null){
        return (
            <View style={r_styles.done}>
                <Icon name='check' size={20} color='#FFF'/>
            </View>
        )
    } else {
        return (
            <View style={r_styles.pending}></View>
        )
    }
}

const r_styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  // com isso o main acess para a ser no sentido de linha
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',  //como o main acess é agora row eu utilizo a propriedade alingintens para mexer no cross acess que é por padrao uma column
        paddingVertical: 10
    },
    checkContainer: {
        width: "15%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#59b77b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 16
    },
    date:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 13
    }

})
//TODA VIEW É UMA FLEX CONTAINER QUE TEM UMA FLEX ITEM AI O JUSTIFYCONTENT E O ALINGITENS FAZ ALINHAR OS FLEX INTENS DENTRO
//DE UM CONTAINER DO TIPO row

