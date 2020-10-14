import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Bunda from './components/Primeiro'
import TestComp1, { Comp2, Comp3 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import ContadorV2 from './components/contador/ContadorV2'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/usuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'


export default () => (
    <SafeAreaView style={style.App}>
        {/*<Text>{1+2}</Text>
        <Bunda></Bunda>
        <TestComp1/>
        <Comp2/>
        <Comp3/>
        <MinMax min={3} max ={20}/>
        <Aleatorio/>
        <Titulo principal='Cadastro'
                segundario='Tela de Cadastro'/>
                
        <Botao/>
        <Contador inicial={100} passo={5} />
        <Contador inicial={100} passo={5} />
        <ContadorV2 />
        <ParImpar num={3}/>
        <Familia>
           <Membro nome="Ana" sobrenome="Silva"/>
           <Membro nome="Julia" sobrenome="Silva"/>
        </Familia>
        <Familia>
           <Membro nome="Carlos" sobrenome="Arruda"/>
           <Membro nome="Bia" sobrenome="Arruda"/>
        </Familia>
        <UsuarioLogado  usuario={{nome: 'Rafa', email: 'rafa@gmail.com'}}/>
        <UsuarioLogado  usuario={{nome: 'bebe'}}/>
        <ListaProdutos />*/}
        <ListaProdutosV2 />

    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    }
})
    
