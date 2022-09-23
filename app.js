Vue.createApp({
    data(){
        return{
            seleccionarElemento: null,
            propositos: [],
            valorIngresado: '',
            estadoBoton: false
        };
    },
    methods:{
        agregarProposito(){
            this.propositos.push(this.valorIngresado)
        },

        eliminarProposito(index){
            this.propositos.splice(index, 1)
        },

        editarProposito(index, valorIngresado){
            this.valorIngresado = valorIngresado
            this.seleccionarElemento = index
            this.estadoBoton = true
            console.log(this.estadoBoton)

        },

        actualizarProposito(index){
            this.propositos.splice(this.seleccionarElemento, 1, this.valorIngresado)
            this.estadoBoton = false

        }
    }
}).mount('#app')