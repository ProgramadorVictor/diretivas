<template>
  <p v-texto="{cor: 'blue', texto: 'Isso ai mano.'}">Encaminhamento de valores para a diretiva personalizada v-texto.</p>
  <p v-texto="configuracaoInicial">Minha primeira diretiva customizada.</p>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    configuracaoInicial: {cor: 'red'}
  })
}
</script>