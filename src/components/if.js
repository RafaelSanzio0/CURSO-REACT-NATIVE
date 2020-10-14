// PRIMEIRO COMPONENTE SEM JSX

export default props => {
    if (props.teste) {
        return props.children
    } else {
        return false
    }
}