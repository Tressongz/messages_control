<template>
  <Header
    @search="search"
  />
  <router-view
    :messages="searchedMessages"
    @unread="unreadMessage"
  />
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      searchQuery: '',
      data: require('../src/data/message.json'),
      messages: []
    }
  },
  methods: {
    search(searchQuery) {
      this.searchQuery = searchQuery
    },
    unreadMessage(id) {
      this.messages.find(x => x.id === id).status = !this.messages.find(x => x.id === id).status
    },
    timeOutMessage(i) {
      setTimeout(() => {
        this.messages.push(this.data[i])
      },5000 * i)
    },
    addMessage() {
      for (let i = 0; i < this.data.length; i++) {
        this.timeOutMessage(i);
      }
    }
  },
  computed: {
    searchedMessages() {
      return this.messages.filter(mess => mess.message.toLowerCase().includes(this.searchQuery.toLowerCase())).reverse();
    }
  },
  created() {
    this.addMessage()
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  /*overflow-y: hidden;*/
}
</style>
