<template>
  <p v-texto="{cor: 'blue', texto: 'Isso ai mano.'}">Encaminhamento de valores para a diretiva personalizada v-texto.</p>
  <p v-texto="configuracaoInicial">Minha primeira diretiva customizada.</p>
  <!-- Abaixo estamos fazendo o binding de dois valores diferentes na diretiva. Do argumento 'absolute' e do valor '75'. -->
  <div v-posicao:absolute="75">Olá, eu sou um binding de argumento e valores</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    configuracaoInicial: {cor: 'red'}
  })
}
</script>