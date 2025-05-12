<template>
  <p v-texto="{cor: 'blue', texto: 'Isso ai mano.'}">Encaminhamento de valores para a diretiva personalizada v-texto.</p>
  <p v-texto="configuracaoInicial">Minha primeira diretiva customizada.</p>
  <!-- Abaixo estamos fazendo o binding de dois valores diferentes na diretiva. Do argumento 'absolute' e do valor '75'. -->
  <div v-posicao:absolute="75">Olá, eu sou um binding de argumento e valores</div>
  <span>Código A: <input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrará o código A na parte frontal do equipamento.'">i</span></span><br>
  <span>Código B: <input type="text"><span v-informacao:destacado.doisClickMouse.sairAutomaticamente="'Você encontrará o código B na parte trazeira do equipamento.'">i</span></span>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    configuracaoInicial: {cor: 'red'}
  })
}

// v-informacao:destacado.doisClickMouse
// diretiva:argumento.modificador
</script>