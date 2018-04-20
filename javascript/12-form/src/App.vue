<template>
  <div id="app">
   <div class="container">
     <div class="row">
       <div class="col-md-6 col-md-offset-3" >
         <h1>Form validator</h1>
         <div class="form-group">
           <label>Nome</label>
           <p class="alert alert-danger" v-if="!isValid.nome  && isDirty.nome">Preencha um nome válido, mínimo 3 caracteres</p>
           <input type="text" class="form-control" v-model="nome" @change="changeNome">
         </div>
           <div class="form-group">
           <label>Data de nascimento</label><br/>
           <p class="alert alert-danger" v-if="!isValid.data  && isDirty.data">Preencha uma válida</p>
           <date-picker :date="data"  :option="option"></date-picker>
         </div>
          <div class="form-group">
           <label>Cep</label>
           <p class="alert alert-danger" v-if="!isValid.cep  && isDirty.cep">Preencha um Cep válido</p>
           <the-mask class="form-control" v-model="cep" :disabled="data.time.length <=2 || !isValid.nome" :mask="['#####-###']"  />
           
         </div>
          <div class="form-group">
           <label>CPF</label>
           <p class="alert alert-danger"  v-if="!isValid.cpf  && isDirty.cpf">Preencha um documento válido</p>
           <the-mask class="form-control" :disabled="!isValid.cep" v-model="cpf" :mask="['###.###.###-##']" />
         </div>
           <div class="form-group">
           <label>Telefone</label>
           <p class="alert alert-danger" v-if="!isValid.telefone  && isDirty.telefone">Preencha um telefone válido</p>
           <the-mask class="form-control" :disabled="!isValid.cpf" v-model="telefone"  :mask="['(##) ####-####', '(##) #####-####']" />
         </div>
        <div class="form-group"> 
           <label>Valor em investimento</label>
           <p class="alert alert-danger" v-if="!isValid.valor  && isDirty.valor">Preencha um valor válido, mínimo R$ 10.000,00</p>
            <money v-model="valor" :disabled="!isValid.telefone" v-bind="money" class="form-control" ></money> 
         </div>
         <button class="btn btn-primary" v-on:click="sucesso()" :disabled="verificaValido()">Botão status</button><br><br>
         <p class="alert alert-success"  v-if="showSucess">Registro salvo com sucesso (simulação)</p>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import myDatepicker from "vue-datepicker/vue-datepicker-es6.vue";
export default {
  name: "App",
  components: {
    "date-picker": myDatepicker
  },
  data() {
    return {
      currentClass: "red",
      nome: undefined,
      cep: undefined,
      cpf: undefined,
      telefone: undefined,
      data: undefined,
      valor:undefined,
      showSucess:false,
      isValid: {
        nome: false,
        cep: false,
        cpf: false,
        telefone: false,
        valor:false,
      },
      isDirty: {
        nome: false,
        cep: false,
        cpf: false,
        telefone: false,
        valor:false,
      },
      data: {
        time: ""
      },
      date: {
        time: "" // string
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'DD/MM/YYYY',
        placeholder: '',
        inputStyle: {'display':' block', 'width': '100%', 'height': '34px', 'padding': '6px 12px', 'font-size': '14px', 'line-height':' 1.42857', 'color': '#555555', 'background-color':'#fff', 'background-image': 'none', 'border':'1px solid #ccc', 'border-radius':'4px', },
        color: { header: '#ccc', headerText: '#f00' },
        buttons: { ok: 'Ok', cancel: 'Cancel' },
        overlayOpacity: 0.5,
        dismissible: true 
      },
        money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
      }
    };
  },
  methods: {
    changeNome: function() {
      this.isValid.nome = this.nome.length >= 3;
      this.isDirty.nome = true;
    },
    changeCep: function() {
      this.isValid.cep = this.cep.length == 8;
      this.isDirty.cep = true;
    },
    changeCPF: function() {
      this.isValid.cpf = this.testaCPF(this.cpf);
      this.isDirty.cpf = true;
    },
    changeTelefone: function() {
      this.isValid.telefone = this.telefone.length >= 10;
      this.isDirty.telefone = true;
    },
    changeValor: function() {
      this.isValid.valor = this.valor >= 10000;
      this.isDirty.valor = true;
    },
    verificaValido: function() {
      for (let i in this.isValid) {
        if (!this.isValid[i]) {
          console.log(i);
          return true;
        }
      }
      return false;
    },
    sucesso:function(){
      this.showSucess = true;
      setTimeout(() => {
       this.showSucess=false; 
      }, 2000);
    },
    /*from https://www.devmedia.com.br/validar-cpf-com-javascript/23916 */
    testaCPF: function(strCPF) {
      var Soma;
      var Resto;
      var i;
      Soma = 0;
      if (strCPF == "00000000000") return false;
      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;
      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }
  },
   watch: {
    cpf: function (val) {
      this.changeCPF();
    },
    telefone: function (val) {
      this.changeTelefone();
    },
    valor: function (val) {
      if(val>0){
      this.changeValor();
      }
    },
    cep: function (val) {
      this.changeCep();
    },
   }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cov-vue-date{
  width:100%;
}
</style>
