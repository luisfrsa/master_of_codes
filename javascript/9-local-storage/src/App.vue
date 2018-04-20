<template>
  <div id="app">
     <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" v-model="currentData.nome" class="form-control">
          </div>
          <div class="form-group">
            <label>Telefone</label>
            <input type="text" v-model="currentData.telefone" class="form-control">
          </div>
          <div class="form-group">
            <label>Cidade</label>
            <input type="text" v-model="currentData.cidade" class="form-control">
          </div>
           <div class="form-group">
            <label>Estado</label>
            <input type="text" v-model="currentData.estado" class="form-control">
          </div>
          <button class="btn btn-primary btn-block"  v-on:click="addRegistro(currentData)">Adicionar</button>
        </div>
      </div>
      <br/>
      <button class="btn btn-danger"  v-on:click="clearStorage(currentData)">Limpar Storage</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="reg in registrosSalvos">
            <td>{{reg.nome}}</td>
            <td>{{reg.telefone}}</td>
            <td>{{reg.cidade}}</td>
            <td>{{reg.estado}}</td>
            <td><button class="btn btn-default"  v-on:click="alterar(reg)">Alterar</button></td>
            <td><button class="btn btn-warning"  v-on:click="remove(reg)">Remover</button></td>
          </tr>
        </tbody>
      </table>  
      
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  
  data() {
    return {
      currentData: {},
      storageInstance: null,
      registrosSalvos: [
        {
          nome: "Luis",
          telefone: "44 1234-4321",
          cidade: "Maringá",
          estado: "PR"
        },
        {
          nome: "Luis",
          telefone: "44 1234-4321",
          cidade: "Maringá",
          estado: "PR"
        }
      ]
    };
  },
  created: function() {
    this.storageInstance = this.storage();
    this.registrosSalvos = this.storageInstance.get() || [];
  },
  methods: {
    clearStorage: function() {
      this.registrosSalvos = [];
      this.storageInstance.clear();
    },
    addRegistro: function(el) {
      this.registrosSalvos.push({
        nome: el.nome,
        telefone: el.telefone,
        cidade: el.cidade,
        estado: el.estado
      });
      this.currentData = {};
      this.storageInstance.set(this.registrosSalvos);
    },
    alterar: function(e) {
      this.currentData = e;
      this.registrosSalvos = this.registrosSalvos.filter(el => el != e);
    },
    remove: function(e) {
      this.registrosSalvos = this.registrosSalvos.filter(el => el != e);
      this.storageInstance.set(this.registrosSalvos);
    },
    storage: function() {
      if (typeof Storage !== "undefined") {
        return this.storageClass();
      } else {
        alert("Storage não suportado");
        return {
          set: function(data) {},
          get: function() {
            return [];
          },
          clear: function() {}
        };
      }
    },
    storageClass: function() {
      var set = function(data) {
        var dataStore;
        if (data) {
          dataStore = JSON.stringify(data);
        }
        localStorage.setItem("myStore", dataStore);
      };
      var get = function() {
        var parse,
          retorno = localStorage.getItem("myStore");
        if (retorno) {
          parse = JSON.parse(retorno);
        }
        return parse || [];
      };
      var clear = function() {
        localStorage.setItem("myStore", []);
      };
      return {
        set: set,
        get: get,
        clear: clear
      };
    }
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
td {
  text-align: left;
}
.form-group {
  text-align: left;
}
</style>