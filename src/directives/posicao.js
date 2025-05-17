export default {
    created(el, binding){
        console.log(el, binding.arg, binding.value)

        const posicoesPossives = ['relative', 'fixed', 'absolute'];

        if(posicoesPossives.includes(binding.arg)){
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
}