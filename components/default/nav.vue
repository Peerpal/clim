<template>
    <nav id="mainNav" class="navbar navbar-default  navbar-fixed">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display --> 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand page-scroll" href="#page-top"><img src="images/logo.png" alt=""></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling --> 
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#slider">Home <span class="sr-only">(current)</span></a></li>
                        <li><a href="#about" class="page-scroll">About</a></li>
                        <li><a href="#service" class="page-scroll">Service</a></li>
                        <li><a href="#appointment" class="page-scroll">Appointment</a></li>
                        <li><a href="#doctor" class="page-scroll">Doctors</a></li>
                        <li><a href="#department" class="page-scroll">Department</a></li>
                        <li><a href="#blog" class="page-scroll">Blog</a></li>
                        <li><a href="#contact" class="page-scroll">Contact</a></li>
                    </ul>
                </div> <!-- /.navbar-collapse --> 
            </div> <!--/.container --> 
        </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "DefaultNav"
})
</script>