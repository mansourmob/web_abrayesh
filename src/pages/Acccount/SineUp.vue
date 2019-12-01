<template>
    <div>
         <div class="container-fulied">
  	<div class="hr"></div>
  </div>
  <div class="container-fulied">
	  <div class="header-top">
		<h3 class="header-top-titr">ثبت نام</h3>
		<h6 class="header-top-address">صفحه اصلی / ثبت نام</h6>
	  </div>
  </div>
<div class="container">
	<div class="row">
					<div class="col-md-3 blogShort">

					
<div class="profile-sidebar">
				<!-- SIDEBAR USERPIC -->
				<div class="profile-userpic2">
					<img src="src/assets/img/online-registration-concept_23-2147980578.jpg" class="img-responsive login-logo">
				</div>
				<!-- END SIDEBAR USERPIC -->
				<!-- SIDEBAR USER TITLE -->
				<div class="profile-usertitle2">
					<div class="profile-usertitle-name2">
ثبت نام در ریبوم کاملا رایگانه ، جهت ثبت نام در سایت کافیه فرم مقابل رو پرکنید و به جمع خانواده ریبومی ها بپیوندید،منتظرتون هستیم
					</div>
				</div>
				<!-- END MENU -->
			</div>
                   
                
                 </div> 
				<div class="col-md-9 blogShort" style="background:#f4f4f4;">
					<div class="tabbable-panel margin-tops4 ">
<form action="#">
			<div class="col-md-6">
			<span>{{$v}}</span>
						<div class="input-group contact-input">
						 <label class="my-label-style" for="cheese" >شماره</label>
						  <input type="text" :class="{invalid:$v.phone.$error}" id="phone" v-model="phone" placeholder="" @input="$v.phone.$touch()">  
						  <p style="color:red" v-if="!$v.phone.required">شماره تماس اشتباه است</p>
						</div>
						<div class="input-group contact-input">
						<label class="my-label-style" for="cheese">رمز</label>
						  <input type="password" class="form-control " id="password" v-model="password" placeholder="" >
						</div>

			</div>

			<div class="col-md-12">
				<button class="order-btn" type="submit" @click.prevent="RegisterUser()">ثبت نام</button>
			</div>
 </form>
					</div>
                </div>



	</div>
</div>
    </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators';
export default {
 
    data(){
		return {
			'phone':'',
			'password':'',
			'ref':'aaaaa'
		}
	},
	  methods: {
    RegisterUser() {
      const register = {
        phone: this.phone,
        password: this.password,
        ref: this.ref
      };
      this.$store.dispatch("RegisterUser", register);
    }
  },
  validations:{
	phone:{
		required
	}
  }



}

</script>
<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}
</style>