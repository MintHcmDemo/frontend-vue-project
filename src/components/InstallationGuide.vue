<template>
<div  style="margin-top:55px">
    <div class="container-fluid p-0 mt-5 bg-white">
        <div class="row ml-3">
            <div class="col-lg-2">
                <div class="container mt-4 ml-0">
                    <p class="font-weight-bolder mt-4 m-0">Navigation</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Privacy Policy</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Recent changes</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Random Page</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Help</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Process</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Business Processes</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Technical Processes</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Modules</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">All Modules</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Integrations</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Integrations</a></p>

                    <p class="font-weight-bolder mt-4 m-0">All Files</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">All Files</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Diagrams</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Screens</a></p>
                    
                   
                                 
                </div>
            </div>
            <div class="col-lg-10 border-left">
                <div class="m-3 mr-5 pr-5">
                    <div class="d-flex flex-md-row text-center mt-4" >
                        <span class=" ml-2 mt-2"><a class="text-dark" href=""><u>Process</u></a></span>
                        <span class=" ml-4 mt-2">Discussion</span>
                        <div>
                            <b-dropdown id="dropdown-1" variant="light" text="Views" class="ml-2 mb-0">
                                <b-dropdown-item>What links here</b-dropdown-item>
                                <b-dropdown-item>Related changes</b-dropdown-item>
                                <b-dropdown-item>Upload file</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item disabled>Tools</b-dropdown-item>
                                <b-dropdown-item>Special pages</b-dropdown-item>
                                <b-dropdown-item>Printable version</b-dropdown-item>
                                <b-dropdown-item>Permanent link</b-dropdown-item>
                                <b-dropdown-item>Page information</b-dropdown-item>
                                <b-dropdown-item>View Form</b-dropdown-item>
                                <b-dropdown-item>Cite this page</b-dropdown-item>
                            </b-dropdown>
                        </div>  
                    </div>
                    <div class="row flex-column text-center ml-4">
                        <h4 class="row float-left mt-4 border-bottom mr-4">Installation Guide</h4>
                        <div class="container row my-3 pr-5">
                            <div class="col-lg-4">
                                <b-card no-body >
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-button block v-b-toggle.accordion-1 variant="light">
                                            <span class="float-left m-1">Contents</span> 
                                            <span class="when-opened float-left text-success mt-1 small">
                                                <span>[Hide]</span>
                                            </span>
                                            <span class="when-closed float-left text-success mt-1 small">
                                                <span>[Show]</span>
                                            </span>
                                            
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel" visible>
                                        <b-card-body>
                                            <b-card-text>
                                                <span v-for="item in items" :key="item.id" class="small">
                                                    <span class=" float-left">{{ item.id }}. <a href="" class="text-success">{{ item.message }}</a></span><br>
                                                    <span v-if="item.subitems.length" v-for="subitem in item.subitems" :key="subitem.id" >
                                                        <span class=" float-left ml-4">{{ item.id }}.{{ subitem.id }} <a href="" class="text-success">{{ subitem.message }}</a></span><br>
                                                    </span>
                                                </span>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                            <div class="col-lg-3">
                            </div>
                            <div class="col-lg-5">
                                <b-card no-body >
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-button block v-b-toggle.accordion-2 variant="light">
                                            <span class="m-1">Info</span> 
                                            <span class="when-opened float-right text-success mt-1 small">
                                                <span>[Collapse]</span>
                                            </span>
                                            <span class="when-closed float-right text-success mt-1 small">
                                                <span>[Expand]</span>
                                            </span>
                                            
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="m-0 small">
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Process Name</b></span><span>Installation guide</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Process Type </b></span><span>ev-Technical Process</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Processes</b></span><span></span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Modules</b></span><span></span></div>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card 
                                    border-variant="secondary" 
                                    header="Installation guide" 
                                    header-bg-variant="secondary"
                                    header-text-variant="white"
                                    class="text-center mt-5 ">
                                    
                                    <b-card-text class="m-0 small">
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b></b></span><span><a class="text-success" href="">Add a Process Step</a></span></div>
                                    </b-card-text>
                                    
                                </b-card>
                            </div>
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Short Description</h4>
                        <p class="row float-left">Installation guide for MintHCM </p>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Preparing for installation</h4>
                        <p class="row float-left">To install MintHCM you will need following:</p>
                        <p class="row float-left ml-3">• Linux or Windows platform</p>
                        <p class="row float-left ml-3">• Java</p>
                        <p class="row float-left ml-3">• Eclipse with Spring Tools or Spring Tool Suite</p>
                        <p class="row float-left ml-3">• PostgreSQL database</p>
                        <p class="row float-left ml-5">I. Setup the PostgreSQL with following properties:</p>
                        <div class="float-left ml-5">
                            <ol type="i">
                                <li v-for="property in postgresProps" :key="property.message">
                                    <p style="justify-content: left;display: flex">{{ property.message }}</p>
                                </li>
                            </ol>
                        </div>
                        <p class="row float-left ml-3">• Noje.js  </p>
                        <p class="row float-left ml-3">• Node Package Manager (npm)</p>
                        <p class="row float-left ml-3">• Vue CLI</p>
                        <p class="row float-left">Clone the following repositories using git bash in the directory of your choice:</p>
                        <div class="float-left ml-3">
                            <ul type="square">
                                <li v-for="repository in repositoriesNames" :key="repository.message">
                                    <p style="justify-content: left;display: flex"><a :href="repository.message">{{ repository.message }}</a></p>
                                </li>
                            </ul>
                        </div>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Installation of MintHCM</h4>
                        <p class="row float-left">Once you have your files prepared, 
                            you can start actual installation. To do so, follow the steps below: </p>
                        <p class="row float-left">1. Import the Java projects repositories in Eclipse as gradle project.</p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img1" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Importing local repositories in Eclipse</span>    
                        </div>
                        <p class="row float-left mt-3">2. Set your github account username and password as 
                            Environment variables GIT_USERNAME and GIT_PASSWORD.</p>
                        <p class="row float-left ml-2">To set Environment variables in Windows follow the procedure below:</p>
                        <p class="row float-left ml-2">i. Open the Start Search, type in “env”, and choose “Edit the system environment variables”: </p>

                        <div class="border float-left ml-2 mb-5" style="width:30%">
                            <img :src="img2" width="97%" class="m-1 border">
                            <span class="ml-1 float-left small">Start Menu</span>    
                        </div>
                        <p class="row float-left ml-2">ii. Click the “Environment Variables…” button. </p>

                        <div class="border float-left ml-2 mb-5" style="width:40%">
                            <img :src="img3" width="97%" class="m-1 border">
                            <span class="ml-1 float-left small">System Properties Menu</span>    
                        </div>
                        <p class="row float-left ml-2">iii. Set the environment variables as needed. </p>

                        <div class="border float-left ml-2 mb-5" style="width:40%">
                            <img :src="img4" width="97%" class="m-1 border">
                            <span class="ml-1 float-left small">Environment Variables Window</span>    
                        </div>
                        <p class="row float-left">3. Run the imported Microservices projects as a Spring Boot App:</p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img5" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Run Java Project as Spring Boot App</span>    
                        </div>
                        <p class="row float-left">Run the project in the following order:</p>
                        <div class="float-left ml-3">
                            <ol type="1">
                                <li v-for="microservice in microservicesRunningOrder" :key="microservice.name">
                                    <p style="justify-content: left;display: flex">{{ microservice.name }}</p>
                                </li>
                            </ol>
                        </div>
                        <p class="row float-left mt-3">4. Install following dependencies:</p>
                        <div class="float-left ml-3">
                            <ul>
                                <li v-for="dependency in dependencies" :key="dependency.name">
                                    <p style="justify-content: left;display: flex">{{ dependency.name }}</p>
                                </li>
                            </ul>
                        </div>
                        <p class="row float-left">Install dependencies using command :</p>
                        <div class="bg-light border p-2 mb-3" style="width:700px">
                            <code class="row float-left my-2 ml-3" style="text-align: justify;">npm install --save &lt;depedency&gt;</code>
                        </div>
                        <p class="row float-left mt-3">5. Run frontend-vue-project using following command:</p>
                        <div class="bg-light border p-2 mb-3" style="width:700px">
                            <code class="row float-left my-2 ml-3" style="text-align: justify;">Cd frontend-vue-project <br>
                            npm run serve</code>
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Troubleshooting</h4>
                        <p class="row float-left">During the installation process some errors may occur. </p>

                        <h5 class="row float-left mb-4 mt-2">Error 126 </h5>
                        <p class="row float-left">During the running Vue Project Error 126 may occur</p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img6" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Error 126</span>    
                        </div>
                        <p class="row float-left">End of lifecycle means the program unexpectedly stopped. 
                            This can have various reasons. So it's not a syntax error and not an expected exception/error.</p>
                        <p class="row float-left">Run the following commands:</p>
                        <div class="bg-light border p-2 mb-3" style="width:700px">
                            <code class="row float-left my-2 ml-3" style="text-align: justify;">npm cache verify<br>
                            sudo rm -rf node_modules && rm ./package-lock.json && npm install</code>
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Process Steps</h4>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Mentioned in other articles</h4>
                        
                        <div class="bg-light border p-3 mb-3" style="width:700px">
                            <span class="float-left text-secondary">
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Categories</a>:
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Tech</a>|
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Technical Processes</a>|
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Processes</a>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-2 m-2 py-3 border-top">
            <div class="ml-3">
                <p class="text-secondary" ><a class="text-secondary" href="">Powered by MediaWiki</a>
                - <a class="text-secondary" href="">Powered by Semantic MediaWiki</a></p>
                <p class="text-secondary">This page was last edited on 21 January 2020, at 11:59.</p>
                <p class="text-secondary" ><a class="text-secondary" href="">Privacy policy</a>
                - <a class="text-secondary" href="">About MintHCM Wiki</a>
                - <a class="text-secondary" href="">Disclaimers</a></p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
  export default {
    data() {
        return {
            dependencies:[
                { name: '@fortawesome/fontawesome-svg-core' },
                { name: '@fortawesome/free-solid-svg-icons' },
                { name: 'axios' },
                { name: 'bootstrap' },
                { name: 'bootstrap-vue' },
                { name: 'font-awesome' },
                { name: 'vue-axios' },
                { name: 'vue-i18n' },
                { name: 'vue-resource' },
                { name: 'vue-router' },
                { name: 'vue-session' },
                { name: 'vuelidate' },
                { name: 'vuex' }
            ],
            microservicesRunningOrder:[
                { name: 'ConfigServer' },
                { name: 'UserRegistrationService' },
                { name: 'UserLoginService' },
                { name: 'ContactUsService' },
            ],
            postgresProps: [
                { message: 'port : 5432' },
                { message: 'username : postgres' },
                { message: 'password : jkt123' }
            ],
            repositoriesNames: [
                { message: 'https://github.com/MintHcmDemo/frontend-vue-project' },
                { message: 'https://github.com/MintHcmDemo/ConfigServer' },
                { message: 'https://github.com/MintHcmDemo/UserRegistrationService' },
                { message: 'https://github.com/MintHcmDemo/UserLoginService' },
                { message: 'https://github.com/MintHcmDemo/ContactUsService' }
            ],
            items: [
                { id: '1', message: "Short Description", subitems:[] },
                { id: '2', message: "Preparing for installation", subitems:[] },
                { id: '3', message: "Installation of MintHCM", subitems:[] },
                { id: '4', message: "Troubleshooting", subitems:[
                    { id: '1', message: "Error 126", subitems:[] }
                ]},
                { id: '5', message: "Process Steps", subitems:[] },
                { id: '6', message: "Mentioned in other articles", subitems:[] }, 
            ],
            img1: require('@/assets/Installation_Import_java_project_as_gradle_project_in_eclipse.png'),
            img2: require('@/assets/Set_Environment_Variables_start_menu.png'),
            img3: require('@/assets/Set_Environment_Variables_system_properties.png'),
            img4: require('@/assets/Set_Environment_Variables_select_row_and_edit.png'),
            img5: require('@/assets/Installation_Run_java_project_as_spring_boot_app.png'),
            img6: require('@/assets/Installation_Error_126_vue_cli.png'),
            img7: require('@/assets/Installation_Error_126_vue_cli.png'),
            img8: require('@/assets/Installation_Error_126_vue_cli.png'),
            

        }
    }
  }
</script>

<style scoped>

    .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    }

</style>