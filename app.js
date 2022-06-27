const API_URL = "https://fakestoreapi.com";
// create new component for cart
// create clickable images to add to cart must be in scope of component

Vue.component("product", {
    template: `
    <div class="products">
        <div>
            <img v-bind:src="item.image">
            {{ item.price }}
            <button v-on:click="addToShoppingCart(item)" >Add to cart</button>
        </div>
    </div>
    `,
    props: [
        "item",
        "cart"
    ],
    methods: {
        addToShoppingCart: function() {
            this.cart.push(this.item);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        page: "welcome",
        products: [],
        Vuecart: [],
        Vue2cart: []
    },
    methods: {
        getProducts: async function () {
            let response = await fetch(`${API_URL}/products`);
            let data = await response.json();

            this.products = data;
        },
        setPage: function (page) {
            this.page = page;
        },
        addToCart: function (item) {
            this.cart.push(this.item)
        }
    },
    created: function () {
        this.getProducts();
    }
});
