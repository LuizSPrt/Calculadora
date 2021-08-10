import React, { useState } from 'react';
import { StyleSheet, Button,View, Text, TextInput, Switch,} from 'react-native';

export default props => {
  const [resultado, setResultado] = useState('');
  const [valor, setValor] = useState("0");
  const [valorprt, setValorprt] = useState('0');
  const [valorprt2, setValorprt2] = useState('0');
  const [sinal, setSinal] = useState('0');
  const [igual, setIgual] = useState('0')


  function botao0(){ setValor()+"0"}
  function botao1(){ setValor()+"1"}
  function botao2(){ setValor()+"2"}
  function botao3(){ setValor()+"3"}
  function botao4(){ setValor()+"4"}
  function botao5(){ setValor()+"5"}
  function botao6(){ setValor()+"6"}
  function botao7(){ setValor()+"7"}
  function botao8(){ setValor()+"8"}
  function botao9(){ setValor()+"9"}
  function botaosoma(){ 
    setSinal("+")
    setValorprt(parseFloat(valor))
}
 function botaosub(){ 
    setSinal("-")
    setValorprt(parseFloat(valor))
}
 function botaomult(){ 
    setSinal("*")
    setValorprt(parseFloat(valor))
}
  function botaodiv(){ 
    setSinal("/")
    setValorprt(parseFloat(valor))
}
  function botaoigual(){ setIgual("=")

  switch(sinal){
    case "+":
      somar()
      break;

    case "-":
      subtrair()
      break;

    case "*":
      multiplicar()
      break;

    case "/":
      dividir()
      break;
    
  }

}
  function somar(){ 

    setValorprt2(parseFloat(valor))
    setResultado(valorprt+valorprt2)}

  function subtrair(){ 

    setValorprt2(parseFloat(valor))
    setResultado(valorprt-valorprt2)
    
  }
  function multiplicar(){ 

    setValorprt2(parseFloat(valor))
    setResultado(valorprt*valorprt2)
    
  }
  function dividir(){ 

    setValorprt2(parseFloat(valor))
    setResultado(valorprt/valorprt2)
    
  }

  return (
    <>
    <View>
      <Text style={styles.container}>Calculadora</Text>

    </View>

 
    <Text style={styles.resultado}>
        Resultado : {resultado}
    </Text>
    <View style={styles.button}>
      
    <Button
          title="0"
          onPress={botao0}
    />

    <Button
          title="1"
          onPress={botao1}
    />


    <Button
          title="2"
          onPress={botao2}
    />


    <Button
          title="3"
          onPress={botao3}
    />


    <Button
          title="4"
          onPress={botao4}
    />


    <Button
          title="5"
          onPress={botao5}
    />


    <Button
          title="6"
          onPress={botao6}
    />
    <Button
          title="7"
          onPress={botao7}
    />


    <Button
          title="8"
          onPress={botao8}
    />


    <Button
          title="9"
          onPress={botao9}
    />


    <Button
          title="+"
          onPress={botaosoma}
    />


    <Button
          title="-"
          onPress={botaosub}
    />


    <Button
          title="*"
          onPress={botaomult}
    />


    <Button
          title="/"
          onPress={botaodiv}
    />


    <Button
          title="="
          onPress={botaoigual}
    />

  </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
      color:'#0091FF',
      marginTop:60,
      height:80,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize:25,
      fontWeight:'bold'
  },
  resultado: {
      color:'#0091FF',
      paddingLeft:260,
      marginBottom:16,
      height:80,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5FF',
      fontSize:25,
      fontWeight:'bold'
    
    
  }

});
