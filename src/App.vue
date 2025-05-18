<template>
  <p v-texto="{cor: 'blue', texto: 'Isso ai mano.'}">Encaminhamento de valores para a diretiva personalizada v-texto.</p>
  <p v-texto="configuracaoInicial">Minha primeira diretiva customizada.</p>
  <!-- Abaixo estamos fazendo o binding de dois valores diferentes na diretiva. Do argumento 'absolute' e do valor '75'. -->
  <div v-posicao:absolute="75">Olá, eu sou um binding de argumento e valores</div>
  <span>Código A: <input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrará o código A na parte frontal do equipamento.'">i</span></span><br>
  <span>Código B: <input type="text"><span v-informacao:destacado.doisClickMouse.sairAutomaticamente="'Você encontrará o código B na parte trazeira do equipamento.'">i</span></span>
  <hr>
  <h1 v-colorir-fundo-texto="'pink'" v-colorir-letra-texto="'white'">Diretiva customizada, registrada localmente no componente.</h1>
</template>

<script>
import colorirLetraTexto from './directives/colorirLetraTexto'; //Importando diretivas para o registro local

export default {
  name: 'App',
  directives: { //Criação de diretivas locais no próprio componente. Necessário criar o atributo 'directives'
    colorirFundoTexto:{ //O padrão camelCase é convertido para kebab-case, ao ser usado a diretiva diretamente na tag. linha 9 do código.
      //colorirFundoTexto também pode ser usado dessa forma 'colorir-fundo-texto', juntamente com as ''
      created: function(el, binding){
        el.style.background = binding.value
        console.log('Diretiva customizada, registrada localmente no componente.', el, binding);
      },
      // updated: function(el, binding){}//Se necessário a utilização de outros hooks de life cycle.
    },
    colorirLetraTexto: colorirLetraTexto //Importando diretivas para o registro local
  },
  data: () => ({
    configuracaoInicial: {cor: 'red'}
  })
}

// v-informacao:destacado.doisClickMouse
// diretiva:argumento.modificador
</script>