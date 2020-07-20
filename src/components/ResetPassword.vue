<template>
 <div class="vue-tempalte">
        <div class="container">
            <div class="row">
                <div class="col-sm-18 offset-sm-4">
                    <div>
                        <h2>Reset Password</h2>
                        <form @submit.prevent="handleSubmit">
                         
                            <div class="form-group">
                                <label for="password">Reset Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                          
                            <div class="form-group">
                                <button class="btn btn-primary" v-on:click.prevent="PostReq">Change Password</button>
                               
                                
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
    import { required, password } from "vuelidate/lib/validators";
        import { REGISTER_ADDRESS } from '@/constants.js'


    export default {
        name:"app",
        data() {
            return {
                msg: "",
                user:
                {
            
                    password : "",
                  
                },
                submitted: false
            };
        },

        validations: {
            user: {
              
                password: { required,password},
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
                console.log(this.$route.query.token)
var formData = new FormData();
formData.append('token', this.$route.query.token);
formData.append('password', this.user.password);
                this.$http.put("http://localhost:8087/reset-password",formData)
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
