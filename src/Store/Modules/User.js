import Vue from 'vue';

const state = {

};


const getters = {

};

const mutations = {

};

const actions = {
    RegisterUser(context,RegisterData){
        Vue.http.post('v1/users/registration',RegisterData)
        .then(response =>{
            if(response.status == 200){
                console.log(response);
                alert("ثبت نام با موفقیت انجام شد")
            }  
            
        }).then(data =>{
            if(response.status == 400){
                console.log(response);
                alert("400")
            } 
        })
    }
};


export default {
  state,
  getters,
  mutations,
  actions
};
