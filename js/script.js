const { createApp } = Vue;

createApp({
    data() {
        return {
            nodes: new Array()
        }
    },

    methods: {
        onSubmit() {
            this.nodes.push({text: this.$refs.form.inputText.value, isDone: JSON.parse(this.$refs.form.inputSelect.value)});
            this.$refs.form.inputText.value = "";
        },

        removeElement(index){
            this.nodes.splice(index, 1);
        },

        changeStatus(node){
            node.isDone = !node.isDone;
        }
    },

    computed: {

    }
}).mount("#app");