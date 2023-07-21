<template>
  <div class="header">
    <SelectButton class="buttons" v-model="value" :options="options" aria-labelledby="basic" />
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText class="input" v-focus @keydown.enter="search" v-model="searchQuery" placeholder="Поиск по сообщению" />
    </span>
    <Button  class="btn" @click="search" label="Поиск" />
  </div>
</template>


<script>
import router from "@/router";

export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      value: '',
      options: ['Таблица','Карточки']
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchQuery)
    },
    change() {
      if (this.value === this.options[1]) {
        router.push({name: 'cards'})
      } else {
        router.push({name: 'home'})
      }
    }
  },
  watch: {
    value() {
      this.change()
    }
  }
}

</script>

<style scoped>
@media screen and (max-width: 700px) {
  .buttons {
    margin-bottom: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  span{
    margin-left: 0 !important;
    margin-bottom: 10px;
  }
  .header{
    flex-direction: column;
  }
  .input {
    width: 100%;
  }
  .btn {
    width: 100% !important;
  }
}
.header {
  display: flex;
  padding: 15px;
}
span {
  margin-left: auto;
  margin-right: 5px;
  height: 50px;
}
.btn {
  width: 100px;
  height: 45px;
  margin-right: 15px;
}
</style>