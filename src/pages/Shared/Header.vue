<template>
       <div class="navbar-back">

	<nav class="navbar navbar-default navbar-static">
	 <div class="navbar-header">
		 <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
			 <span class="sr-only">Toggle navigation</span>
			 <span class="icon-bar"></span>
			 <span class="icon-bar"></span>
			 <span class="icon-bar"></span>
		 </button>
		 <div class="buttons">
			 <div class="btn-group">
			   <button type="button" class="btn btn-warning " data-toggle="modal" data-target="#myModal">
			   ثبت نام  و  ورود
			   </button>
			   <router-link to="/SineUp"> <i class="fa fa-home" aria-hidden="true"></i> ثنت نام</router-link>
			 </div>
			 <div class="btn-group">
			   <a  href="cooperation.html" type="button" class="btn btn-success " aria-haspopup="true" aria-expanded="false">
				درخواست همکاری
			   </a>
			 </div>
		 </div>
	 </div>
	 
	 
	 <div class="collapse navbar-collapse js-navbar-collapse">
		 <ul class="nav navbar-nav">
			 <li class="dropdown dropdown-large">
				 <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-question-circle" aria-hidden="true"></i>با ریبوم <b class="caret"></b></a>
				 
				 <ul class="dropdown-menu dropdown-menu-large row">
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">با ریبوم  <i class="fa fa-question-circle" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#"> اخبار و اطلاعات <i class="fa fa-newspaper-o" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">با ریبوم <i class="fa fa-question-circle" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#">فرصت های شغلی <i class="fa fa-handshake-o" aria-hidden="true"></i></a></li>
							 <li><a href="#">شعب و نمایندگی ها <i class="fa fa-users" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">با ریبوم <i class="fa fa-question-circle" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
 
							 <li><a href="#">درباره ریبوم <i class="fa fa-question" aria-hidden="true"></i></a></li>
							 <li> <router-link to="/ContactUs">تماس با ما <i class="fa fa-phone-square" aria-hidden="true"></i> </router-link></li>
							
						 </ul>
					 </li>
					 
				 </ul>
				 
			 </li>
			 <li class="dropdown dropdown-large">
				 <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-child" aria-hidden="true"></i> امور مشتریان <b class="caret"></b></a>
				 
				 <ul class="dropdown-menu dropdown-menu-large row">
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">امور مشتریان<i class="fa fa-child" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#"> تکمیل اطلاعات کاربران <i class="fa fa-address-card-o" aria-hidden="true"></i></a></li>
							 <li><a href="#">محتوای آموزشی <i class="fa fa-graduation-cap" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
 
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">امور مشتریان<i class="fa fa-child" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#">انتقاد و پیشنهادات <i class="fa fa-commenting" aria-hidden="true"></i></a></li>
							 <li><a href="#">ثبت شکایات ADSL <i class="fa fa-comment" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header"> امور مشتریان  <i class="fa fa-child" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#">شارژ آنلاین <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
							 <li><a href="#">قوانین و مقررات <i class="fa fa-book" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
				 </ul>
				 
			 </li>
			 <li class="dropdown dropdown-large">
				 <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-suitcase" aria-hidden="true"></i> خدمات<b class="caret"></b></a>
				 
				 <ul class="dropdown-menu dropdown-menu-large row">
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">خدمات و تعرفه ها <i class="fa fa-suitcase" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#">نصب انواع سرورها <i class="fa fa-server" aria-hidden="true"></i></a></li>
							 <li><a href="#">نصب و اجرای پروژه های اکتیو و پسیو <i class="fa fa-cogs" aria-hidden="true"></i></a></li>
							 <li><a href="#">مشاوره اجرای شبکه بی سیم <i class="fa fa-comments-o" aria-hidden="true"></i></a></li>
							 <li><a href="#">فیبر نوری <i class="fa fa-window-minimize" aria-hidden="true"></i></a></li>
							 <li><a href="#">دوربین های مدار بسته <i class="fa fa-video-camera" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">خدمات و تعرفه ها <i class="fa fa-suitcase" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#">نصب انواع دکل <i class="fa fa-map-pin" aria-hidden="true"></i></a></li>
							 <li><a href="#">آموزشگاه رایانت <i class="fa fa-graduation-cap" aria-hidden="true"></i></a></li>
							 <li><a href="#">VOIP(سیستم تلفنی بر بستر شبکه) <i class="fa fa-phone" aria-hidden="true"></i></a></li>
							 <li><a href="#">طراحی وب سایت <i class="fa fa-television" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
					 <li class="col-sm-4">
						 <ul>
							 <li class="dropdown-header">خدمات و تعرفه ها <i class="fa fa-suitcase" aria-hidden="true"></i> </li>
							 <li class="divider"></li>
							 <li><a href="#"> ADSL اینترنت <i class="fa fa-podcast" aria-hidden="true"></i></a></li>
							 <li><a href="#">Wireless اینترنت <i class="fa fa-wifi" aria-hidden="true"></i></a></li>
							 <li><a href="#">اینترنت اختصاصی <i class="fa fa-user-circle-o" aria-hidden="true"></i></a></li>
							 <li><a href="#">تجهیزات شبکه <i class="fa fa-wrench" aria-hidden="true"></i></a></li>
						 </ul>
					 </li>
					 
				 </ul>
				 
			 </li>
			 <li >
				<router-link to="/"> <i class="fa fa-home" aria-hidden="true"></i> خانه</router-link>
			 </li>
		 </ul>
		 
	 </div><!-- /.nav-collapse -->
 </nav>
 </div>
</template>