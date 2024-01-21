<template>
  <div>
   <!-- Section: Design Block -->
<section class="text-center">
  <!-- Background image -->
  <div class="p-5 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        "></div>
  <!-- Background image -->

  <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up now</h2>
          <VeeForm @submit="createUser()" >
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-md-6 mb-4">
                <AppFormField v-model="form.name.firstname" name="fistname" label="First Name" rules="required" />
              </div>
              <div class="col-md-6 mb-4">
                <AppFormField v-model="form.name.lastname" name="lastname" label="Last Name" rules="required" />
              </div>
            </div>
            <AppFormField v-model="form.username" name="username" label="UserName" rules="required" />
            <!-- Email input -->
               <AppFormField v-model="form.email" name="email" label="Email" rules="required|email|unique" />
               <AppFormField v-model="form.phone" name="phone" label="Phone" rules="required" />
            <div class="row">
              <div class="col-md-3 mb-4">
                <AppFormField v-model="form.address.city" name="city" label="City" rules="required" />
              </div>
              <div class="col-md-3 mb-4">
                <AppFormField v-model="form.address.street" name="street" label="Street" rules="required" />
              </div>
              <div class="col-md-3 mb-4">
                <AppFormField v-model="form.address.number" name="number" label="Number" rules="required" />
              </div>
              <div class="col-md-3 mb-4">
                <AppFormField v-model="form.address.zipcode" name="zipcoe" label="Zipcode" rules="required" />
              </div>
            </div>
            <!-- Password input -->
            <AppFormField v-model="form.password" name="password" label="Password" rules="required|min:8" />

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4 d-none">
              <VeeField name="subscripe" class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label class="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign up
            </button>

            <!-- Register buttons -->
            <div class="text-center">
              <span>or sign up with: </span>
             <span>Login</span>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->
  </div>
</template>
<script>
export default{
  name:'RegisterForm',
  data(){
     return{
      form:{
        email:'',
        username:'',
        password:'',
        phone:'',
        name:{
          firstname:'',
          lastname:''
        },
        address:{
          city:'',
          street:'',
          number:'',
          zipcode:'',
          geolocation:{
            lat:'-37.3159',
            long:'81.1496'
          }
        },
      }
     }
  },
  methods:{
    async createUser(){
     var form = JSON.stringify(this.form);
     var response = await this.axios.post('users',form);
     console.log(response);
    }
  }
}
</script>
<style scoped>
</style>