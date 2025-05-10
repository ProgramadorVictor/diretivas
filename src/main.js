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

Vue.directive('posicao', {
    created(el, binding){
        console.log(el, binding.arg, binding.value)

        const posicoesPossives = ['relative', 'fixed', 'absolute'];

        if(posicoesPossives.includes(binding.arg)){
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
})

Vue.directive('informacao', {
    created(el, binding){
        console.log(el, binding, binding.modifiers, binding.value);
        let funcao = null

        if(binding.arg == undefined || binding.arg === 'simples'){
            funcao = function(event){
                console.log(event)
    
                let informacaoSpan = document.createElement('span');
                informacaoSpan.style.position = 'absolute'
                informacaoSpan.style.background = '#ddd'
                informacaoSpan.style.padding = '2px'
                informacaoSpan.innerText = binding.value
    
                el.appendChild(informacaoSpan);
    
                informacaoSpan.addEventListener('click', (event) => {
                    event.stopPropagation() //Para não ficar gerando vários span
                    informacaoSpan.remove()
                })
            }
        }

        if(binding.arg === 'destacado'){

            funcao = function(){
                let informacaoDivContainer = document.createElement('div')
                let informacaoDiv = document.createElement('div')
                informacaoDiv.innerText = binding.value

                informacaoDivContainer.style.width = '100%'
                informacaoDivContainer.style.height = '100%'
                informacaoDivContainer.style.display = 'flex'
                informacaoDivContainer.style.flexDirection = 'row'
                informacaoDivContainer.style.alignItems = 'center'
                informacaoDivContainer.style.justifyContent = 'center'
                informacaoDivContainer.style.background = '#ccc'
                informacaoDivContainer.style.position = 'absolute'
                informacaoDivContainer.style.top = '0'
                informacaoDivContainer.style.zIndex = '10'

                informacaoDiv.style.padding = '30px'
                informacaoDiv.style.background = '#fba'
                informacaoDivContainer.appendChild(informacaoDiv)

                el.appendChild(informacaoDivContainer)

                informacaoDivContainer.addEventListener('click', (event) => {
                    event.stopPropagation() //Para não ficar gerando vários span
                    informacaoDivContainer.remove()
                })
            }
        }

        if(binding.modifiers['umClickMouse']){
            el.addEventListener('click', funcao)
        }

        if(binding.modifiers['doisClickMouse']){
            el.addEventListener('dblclick', funcao)
        }
    }
})

Vue.mount('#app') //Montando a aplicação

/*
    binding.value (valor atribuido a diretiva)
    binding.arg (valor do argumento)
    binding.modifiers (modificadores da diretiva)
*/