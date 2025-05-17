import { createApp} from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


/* Criação de diretivas personalizadas */
const Vue = createApp(App)

//Ciclos de vidas ou Hooks
// beforeCreate
// created
// beforeMount
// mounted
// beforeUpdate
// updated
// beforeUnmount
// unmounted


//Importando e registrando globalmente diretivas customizadas.
import texto from './directives/texto.js'
import posicao from './directives/posicao.js'
import informacao from './directives/informacao.js'

Vue.directive('texto', texto)
Vue.directive('posicao', posicao)
Vue.directive('informacao', informacao)

Vue.mount('#app') //Montando a aplicação

/*
    binding.value (valor atribuido a diretiva)
    binding.arg (valor do argumento)
    binding.modifiers (modificadores da diretiva)
*/