<template>
    <div style="margin-top:6%" width=50%>
         <div class="inner-block">
                <div class="container ">
                    <div class="row">
                        

        <div class="alert alert-success" role="alert">
            <h2 class="alert-heading">CONTACT US</h2>
        </div>

        <form @submit.prevent="handleSubmit">
            <div class=" form-group">
                <label for="fname">FIRSTNAME</label>
                <input type="text" v-model="userForm.fname" id="fname" name="fname" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.fname.$error }" />
                <div v-if="isSubmitted && !$v.userForm.fname.required" class="invalid-feedback">firstname is required</div>
            </div>
            <div class="form-group">
                <label for="lname">LASTNAME</label>
                <input type="text" v-model="userForm.lname" id="lname" name="lname" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.lname.$error }" />
                <div v-if="isSubmitted && !$v.userForm.lname.required" class="invalid-feedback">lastname is required</div>
            </div>
            <div class="form-group">
                <label for="company">COMPANY</label>
                <input type="text" v-model="userForm.company" id="company" name="company" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.company.$error }" />
                <div v-if="isSubmitted && !$v.userForm.company.required" class="invalid-feedback">this field is required</div>
            </div>
             <div class="form-group">
                <label for="phone">Mobile</label>
                <input type="text" v-model="userForm.phone" id="phone" name="phone" class="form-control"
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.phone.$error }" />
                <div v-if="isSubmitted && $v.userForm.phone.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.phone.required">Mobile field is required</span>
                </div>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="userForm.email" id="email" name="email" class="form-control"
                
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }" />
                <div v-if="isSubmitted && $v.userForm.email.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.email.required">Email field is required</span>
                    <span v-if="!$v.userForm.email.email">Please provide valid email</span>
                </div>
            </div>
             <div class="form-group">
           <textarea  id="message" rows="5" v-model="userForm.message" class="form-control"
                
                    :class="{ 'is-invalid': isSubmitted && $v.userForm.message.$error }">
                <div v-if="isSubmitted && $v.userForm.message.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.message">this field is required</span>
                    <span v-if="!$v.userForm.message">Please provide valid text</span>
                </div></textarea>
             </div>
    
            <div class="form-group form-check">
                <input type="checkbox" v-model="userForm.accept" @change="$v.userForm.accept.$touch()" id="accept" class="form-check-input">
                <label class="form-check-label" :class="{ 'is-invalid': isSubmitted && $v.userForm.accept.$error }" for="accept">Accept terms &nbsp; conditions</label>

                <div v-if="isSubmitted && $v.userForm.accept.$error" class="invalid-feedback">
                    <span v-if="!$v.userForm.accept.required">Accept terms and conditions</span>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-danger btn-block" @click.prevent="PostReq">Submit</button>
            </div>
        </form>
         </div> </div> </div>  
    </div>
</template>

<script>
    import {
        required,
        email,
        minLength
        
    } from "vuelidate/lib/validators";
    

    export default {
        
        data() {
            return {
                msg :"Success!!!",
                userForm: {
                    fname: "",
                    lname:"",
                    company:"",
                    phone:"",
                    email:"",
                    message:"",
                    accept: ""
                    
                },
                isSubmitted: false
            };
        
        },
        validations: {
            userForm: {
                fname: {
                    required
                },
                lname:{
                    required
                },
                company:{
                    required
                },
                phone:{
                    required
                },
                email: {
                    required,
                    email
                },
                message:{
                    required
                },
                
                accept: {
                    required (val) {
                      return val
                    }
                }
            }
        },
        methods: {
            handleSubmit() {
                this.isSubmitted = true;

                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!" + JSON.stringify(this.userForm));
            },
         PostReq: function()
            {
    
                if (this.userForm.email) {
                this.$http.post("http://localhost:8082/contactus",this.userForm, {"content-type": "application/json" })
                    .then(function(response){
                    console.log(response.bodyText);
                    this.msg=response.bodyText
                    })
                    .catch(e => { 
                        this.msg=e.bodyText;
                        console.log(e); })
                } 
            }
        }     
    };
</script>
<style scoped>
.inner-block {
    width: 20%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
</style>
