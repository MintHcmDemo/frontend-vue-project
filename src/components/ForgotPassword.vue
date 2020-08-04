<template>
 <div class="vue-tempalte" style="margin-top:7%">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2>Forgot Password</h2>
                        <form @submit.prevent="handleSubmit">
                           
                            <div class="form-group">
                                <label for="email">Enter Your Email ID</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                            </div>
                           
                            <div class="form-group">
                                <button class="btn btn-primary" v-on:click.prevent="PostReq">Send Mail</button>
                               <p class="forgot-password text-right mt-2 mb-4">
            </p>
                            </div>
                            <p style="color:red">
                                    {{msg}}
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import { required, email } from "vuelidate/lib/validators";
       
    export default {
        name:"app",
        data() {
            return {
                msg: "",
                user:
                {
                    email : "",
                   
                },
                submitted: false
            };
        },

        validations: {
            user: {
              
                email: { required, email },
               
            }
        },
        methods:{

            handleSubmit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            },
            
            PostReq: function()
            {

var formData = new FormData();
console.log(this.user.email);
formData.append('email', this.user.email);

                this.$http.post("http://localhost:8087/forgot-password",formData)
                  .then(function(response){
                    console.log(response.bodyText);
                    this.msg=response.bodyText
                    })
                    .catch(e => { 
                        this.msg=e.bodyText;
                        console.log(e); })
                }
            
            
        }
    };
</script>
