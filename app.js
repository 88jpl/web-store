const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
    template: `
    <div>
        <div>
            <img v-bind:src="item.image">
            {{ item.price }}
        </div>
    </div>
    `,
    props: [
        "item"
    ]
    });

var app = new Vue({
    el: "#app",
    data: {
        page: "welcome",
        products: []
    },
    methods: {
        getProducts: async function () {
            let response = await fetch(`${API_URL}/products`);
            let data = await response.json();

            this.products = data;
        },
        setPage: function (page) {
            this.page = page;
        }
    },
    created: function () {
        this.getProducts();
    }
});
