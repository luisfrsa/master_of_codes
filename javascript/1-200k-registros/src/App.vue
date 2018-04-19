
<template>
  <div id="app">
    <button v-show="data.length==0" v-on:click="buildData">LOAD DATA</button><br/>
    <div v-show="data.length!=0">
      <modal v-show="isModalVisible" @close="closeModal" :data="currentData"></modal>
      <table class="table table-striped">
          <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Nome</th>
              <th>Descrição</th>
          </tr>
          <tr v-for="reg in paginated('paginacao')" v-on:click="showModal(reg)">
            <td>{{reg.id}}</td>
            <td>{{reg.status}}</td>
            <td>{{reg.nome}}</td>
            <td>{{reg.descricao}}</td>
          </tr>
      </table>
      <paginate name="paginacao" :list="data" :per="pageLength" > </paginate>  
      <paginate-links for="paginacao" :limit="pageLimit"  :show-step-links="true" :step-links="{ next: '>', prev: '<' }"></paginate-links>
    </div>
  </div>
</template>

<script>
import modal from "./Modal";
export default {
  name: "app",
  components: {
    modal
  },
  data() {
    return {      
      countItem: 200000,
      data: [],
      cidades: [
        "Maringá",
        "Curitiba",
        "Londrina",
        "Fóz do Iguaçu",
        "Ponta Grossa",
        "Cascavel"
      ],
      currentData: {},
      pageLength: 10,
      pageLimit: 4,
      paginate: ["paginacao"],
      shown: true,
      isModalVisible: false
    };
  },
  methods: {
    buildData: function() {
      console.time("init");
      this.data = [];
      for (let i = 1; i <= this.countItem; i++) {
        this.data.push(this.newData(i));
      }
      console.log(this.data);
      console.timeEnd("init");
    },
    newData: function(id) {
      let seed = this.newSeed(id);
      return {
        id: id,
        status: this.newStatus(id),
        nome: "Item " + id,
        descricao: "Descrição do item " + id + " com seed " + seed,
        telefone: this.newTelefone(seed),
        cidade: this.newCidade(id),
        data: this.newDate(seed),
        valor: this.newvalor(seed)
      };
    },
    newSeed(id) {
      return id * 6789 + 1;
    },
    newStatus(id) {
      return id % 9 != 0 || id % 7 != 0;
    },
    newCidade: function(id) {
      return this.cidades[id % this.cidades.length];
    },
    newTelefone: function(seed) {
      let posTel = seed.toString();
      return "(44) 9 9876-" + posTel.slice(posTel.length - 4);
    },
    newDate: function(seed) {
      let min = 900000000000;
      return new Date(min + seed * 2999999);
    },
    newvalor: function(seed) {
      return seed * 1.12;
    },
    limit: function(arr, limit, length) {
      return arr.slice((limit - 1) * length, (limit - 1) * length + length);
    },
    showModal(data) {
      this.currentData = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table{
  th{
    text-align:center;
  }
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button {
  cursor: pointer;
}
.paginate-links {
  a{
  cursor: pointer;
  }
  .number.active a {
    font-weight: bold;
  }
}
</style>
