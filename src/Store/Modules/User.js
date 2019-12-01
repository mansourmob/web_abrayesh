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

                alert("شد ");

              
            
        }).then(data =>{
            alert("ثبت نام با موفقیت انجام شد");
        })
    }
};


export default {
  state,
  getters,
  mutations,
  actions
};
