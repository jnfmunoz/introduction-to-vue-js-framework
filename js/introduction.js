let app = new Vue({ // vue object
    el: "#app", 
    data: {
        counter: 0,
        id_user: null,
        show_div: true,
        name: "",
        list: [
            { name: "Name 01" },
            { name: "Name 02" },
        ],
        list2: [
            { id: 1, name: "John Dee"},
            { id: 2, name: "Jacobo Grinberg"},
        ]
    },
    watch:{
        id_user: function(){
            this.counter++;
        }
    },
    methods: {
        hide() {
            this.show_div = false;
        },

        show() {
            this.show_div = true;
        },

        add(){
            this.list.push({name:this.name});
        },

        remove(index){
            this.list.splice(index, 1);
        },
    }

});