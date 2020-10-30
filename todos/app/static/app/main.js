// Vue

var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        info: [],
        heading: "Todo List",
        item: " ",
        hasError: false
    },
    methods: {
        addNote() {

            if (this.item === '') {
                this.errorMessage = true;
            } else {}
                axios.post('/api/', {note: this.item})
                    .then(response => {
                        this.info.push(response.data)
                    });
                this.item = '';
                this.errorMessage = false;
        },
        markComplete(id) {
            axios.patch(`/api/${id}/`, {
                completed: this.info.completed = !this.info.completed
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
        },
        updateTask: function(e, id) {
            e.preventDefault();
            axios.patch(`/api/${id}/`, {
                note: id.title = e.target.innerText,
            })
            .then(res => console.log(res))
            e.target.blur();
            
        },
        deleteNote: function(id) {
            axios.delete(`/api/${id}`)
                .then(response => {
                    this.info = this.info.filter(info => info.id !== id)
                });
        },
    },
    // computed: {
    //     filterTodoItem() {
    //         return _.orderBy(this.todoItem, ['completed', false])
    //     }
    // },
    // https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
    mounted() {
        axios
            .get('/api/')
            .then(response => (this.info = response.data))
    }
})