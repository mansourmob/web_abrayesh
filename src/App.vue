<template>
 <div>
<app-header></app-header>

<transition enter-active-class="animated zoomIn">
  <router-view></router-view> 
</transition>

 


<app-Footer></app-Footer>

   <div class="modal fade" id="myModal" role="dialog">
	 <div class="modal-dialog">
	 
	   <!-- Modal content-->
		  <div class="modal-content">
 
			 <div class="modal-header">
				 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				 <h4 class="modal-title" id="myModalLabel">ورود به ریبوم</h4>
			 </div> <!-- /.modal-header -->
 
			 <div class="modal-body">
				 <form role="form">
				 
					 <div class="form-group login-logo-form-group">
						 <img src="src/assets/img/logo.png" class="img-responsive login-logo">
					 </div> <!-- /.form-group -->
 
					 <div class="form-group">
						 <div class="input-group">
							 <input type="text" class="form-control" id="uLogin" placeholder="نام کاربری">
							 <label for="uLogin" class="input-group-addon glyphicon glyphicon-user"></label>
						 </div>
					 </div> <!-- /.form-group -->
 
					 <div class="form-group">
						 <div class="input-group">
							 <input type="password" class="form-control" id="uPassword" placeholder="کلمه عبور">
							 <label for="uPassword" class="input-group-addon glyphicon glyphicon-lock"></label>
						 </div> <!-- /.input-group -->
					 </div> <!-- /.form-group -->
 
					 <div class="form-group signup-form-group">
					 <button class="form-control btn btn-warning ">ورود</button>
						 
					 </div> <!-- /.form-group -->
					 
				 </form>
 
			 </div> <!-- /.modal-body -->
 
			 <div class="modal-footer">
					 <div class="form-group signup-form-group">
						 <span class="signup">هنوز ثبت نام نکردید؟<a href="signup.html">ثبت نام</a></span>
					 </div> <!-- /.form-group -->
 
 
			 </div> <!-- /.modal-footer -->
 
		 </div>
	   
	 </div>
   </div>
 </div>
</template>

<script>
import AppFooter from './pages/Shared/Footer.vue'
import AppHeader from './pages/Shared/Header.vue'
export default {
components:{
  AppFooter:AppFooter,
  AppHeader:AppHeader
}
}
</script>

<style>


</style>
