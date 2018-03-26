

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Alterando dados de: {{data.nome}}
          <button type="button" class="btn-close" @click="close" > x </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <label>Id</label>: {{data.id}}<br/>
          <label>Status</label>: {{data.status}}<br/>
          <label>Nome</label>: {{data.nome}}<br/>
          <label>Descricao</label>: {{data.descricao}}<br/>
          <label>Telefone</label>: {{data.telefone}}<br/>
          <label>Cidade</label>: {{data.cidade}}<br/>
          <label>Data</label>: {{data.data | data}}<br/>
          <label>Valor</label>: {{data.valor | valor}}<br/>
        </slot>
       </section>      
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: ["data"],
  methods: {
    close() {
      this.$emit("close");
    }
  },
  filters: {
    data: function(data) {
      if(!data){
        return "";
      }
      let dia = data.getDate();
      if (dia < 10) dia = "0" + dia;
      let mes = data.getMonth() + 1;
      if (mes < 10) mes = "0" + mes;
      let ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
    valor: function(valor) {
      if(!valor){
        return "";
      }
      return ( "R$ " + valor .toFixed(2) .toString() .replace(".", ",") );
    }
  }
};
</script>
<style>
.modal-body {
  position: relative;
  padding: 20px 20px;
  text-align: left;
}
label {
  font-weight: bold;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 80%;
  max-width: 500px;
  margin: auto;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>