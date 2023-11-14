<template>
    <div>
      <h1 class="title">Add New Product</h1>
      <form @submit.prevent="saveProduct">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input type="text" v-model="name" class="input" placeholder="Name" required />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea v-model="description" class="textarea" placeholder="Description" required></textarea>
          </div>
        </div>
  
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input type="text" v-model="price" class="input" placeholder="Price" required />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Stock</label>
          <div class="control">
            <input type="text" v-model="stock" class="input" placeholder="Stock" required />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input type="file" ref="imageInput" class="input-file" @change="handleImageUpload" />
            <img v-if="imageUrl" :src="imageUrl" alt="Product Image" class="uploaded-image" />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Variation</label>
          <div class="control">
            <input type="text" v-model="variation" class="input" placeholder="Variation" required />
          </div>
        </div>
  
        <div class="field">
          <div class="control">
            <button class="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AddForm",
    data() {
      return {
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null, // Store the selected file
        imageUrl: "", // Display the uploaded image URL
        variation: "",
      };
    },
    methods: {
      async saveProduct() {
        try {
          const formData = new FormData();
          formData.append("name", this.name);
          formData.append("description", this.description);
          formData.append("price", this.price);
          formData.append("stock", this.stock);
          formData.append("image", this.image); // Append the image file
          formData.append("variation", this.variation);
  
          const response = await axios.post("product", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          console.log(response.data);
  
          this.resetForm();
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.image = file;
  
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      resetForm() {
        this.name = "";
        this.description = "";
        this.price = "";
        this.stock = "";
        this.image = null;
        this.imageUrl = "";
        this.variation = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .uploaded-image {
    max-width: 200px;
    max-height: 200px;
    margin-top: 10px;
  }
  </style>
  