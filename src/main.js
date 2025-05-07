import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


/* Criação de diretivas personalizadas */
const Vue = createApp(App)

//Diretiva personalizada chamada teste.
Vue.directive('texto', {
    //Parametros que podem ser utilizados para hooks de ciclo de vida de uma diretiva personalizada: el, binding, vnode, prevVnode
    created(el, binding){ //Chamamos um hook do ciclo de vida antes que os atributos do elemento ou ouvintes de eventos (event listeners) sejam aplicados.
        console.log(binding.value); //Recuperando o valor que foi encaminhado, pela diretiva v-texto="'blue'"
        if (binding.value?.cor) el.style.color = binding.value.cor;

        console.log("A diretiva foi aplicada com sucesso!");
        el.style.fontSize = '150%';

        let textoOriginal = el.innerText;
        let tamanhoTextoOriginal = textoOriginal.length;
        let textoAjustado = '';

        if(tamanhoTextoOriginal > 25 ){
            textoAjustado = textoOriginal.substring(0, 22) + '...';
        }else{
            textoAjustado = textoOriginal;
        }

        el.innerText = textoAjustado;
    }
})

Vue.mount('#app') //Montando a aplicação