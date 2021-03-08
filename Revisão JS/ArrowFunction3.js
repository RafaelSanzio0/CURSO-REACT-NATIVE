let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // this apontando para o contexto global = true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // o this dentro da função aponta para obj por conta do bind  = false
comparaComThis(obj) // o this dentro da função aponta para obj por conta do bind = true

let comparaComThisArrow = param => console.log(this === param) // sera que o this aponta para o global como a função normal apontaria? NAO! pois ela foi definida dentro de um modulo do NODE

comparaComThisArrow(global) // o this não aponta para o global e sim para o modulo do node = false
comparaComThisArrow(module.exports) // o this não aponta para o global e sim para o modulo do node = true