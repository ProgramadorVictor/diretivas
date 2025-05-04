import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


/* Criação de diretivas personalizadas */
const Vue = createApp(App)

//Diretiva personalizada chamada teste.
Vue.directive('teste', {
    created(){ //Chamamos um hook do ciclo de vida antes que os atributos do elemento ou ouvintes de eventos (event listeners) sejam aplicados.
        console.log("A diretiva foi aplicada com sucesso!");
    }
})

Vue.mount('#app') //Montando a aplicação