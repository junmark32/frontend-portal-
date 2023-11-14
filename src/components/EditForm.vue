<template>
    <div>
      <h1 class="title">Update Product</h1>
      <form @submit.prevent="updateProduct">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input type="text" v-model="name" class="input" placeholder="Name" />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea v-model="description" class="textarea" placeholder="Description"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input type="text" v-model="price" class="input" placeholder="Price" />
          </div>
        </div>
        <div class="field">
          <label class="label">Stock</label>
          <div class="control">
            <input type="text" v-model="stock" class="input" placeholder="Stock" />
          </div>
        </div>
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input type="text" v-model="image" class="input" placeholder="Image URL" />
          </div>
        </div>
        <div class="field">
          <label class="label">Variation</label>
          <div class="control">
            <input type="text" v-model="variation" class="input" placeholder="Variation" />
          </div>
        </div>
        <div class="control">
          <button class="button is-primary">Update</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "EditForm",
    data() {
      return {
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        variation: "",
      };
    },
    created() {
      this.getProductById();
    },
    methods: {
      async getProductById() {
        try {
          const response = await axios.get(`product/${this.$route.params.id}`);
          this.name = response.data.name;
          this.description = response.data.description;
          this.price = response.data.price;
          this.stock = response.data.stock;
          this.image = response.data.image;
          this.variation = response.data.variation;
        } catch (error) {
          console.log(error);
        }
      },
      async updateProduct() {
        try {
          await axios.put(`product/${this.$route.params.id}`, {
            name: this.name,
            description: this.description,
            price: this.price,
            stock: this.stock,
            image: this.image,
            variation: this.variation,
          });
          this.name = "";
          this.description = "";
          this.price = "";
          this.stock = "";
          this.image = "";
          this.variation = "";
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  
  <style></style>
  