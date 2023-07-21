<template>
  <div>
    <Info/>
    <DataView class="data" :value="messages" paginator :rows="6" :layout="layout">
      <template  class="wrapper" #grid="slotProps">
        <div class="col-12 sm:col-6 lg:col-4 xl:col-4 p-2">
          <div class="card" :class="{selected: slotProps.data.id === selectedCard}" @click="select(slotProps.data.id)" :key="slotProps.data.id">
            <div class="date">Дата: </div>
            <div class="priority">Важность: </div>
            <div class="equipment">Оборудование: </div>
            <div class="message">Сообщение: </div>
            <div class="avatar"><i class="pi pi-user"></i></div>
            <div class="date-value"> {{ slotProps.data.date }} </div>
            <div class="priority-value"> <i class="pi pi-info-circle"> </i> {{ slotProps.data.priority }} </div>
            <div class="equipment-value"> {{ slotProps.data.equipment }} </div>
            <div class="message-value"> {{ slotProps.data.message }} </div>
            <div class="responsible-value"> {{ slotProps.data.responsible }} </div>
            <Badge  v-if="!slotProps.data.status" class="tag" severity="info" value="Непрочитанно"></Badge>
            <Badge  v-else class="tag" severity="success" value="Прочитано"></Badge>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>

export default {
props: {
  messages: {
    type: Array,
    require: true
  }
},
data() {
  return {
    layout: 'grid',
    selectedCard: '',
  }
  },
  methods: {
    select(id) {
      this.selectedCard = id;
    },
    spaced(e) {
      if (e.key === ' ') {
        if (this.selectedCard !== ' ') {
          this.$emit('unread', this.selectedCard)
          this.$toast.add({ severity: 'info', summary: 'Уведомление', detail: 'Статус сообщения был изменен', life: 3000 });
        }
      }
    }
  },
  mounted() {
    document.body.addEventListener('keydown', this.spaced)
  },
  beforeUnmount() {
    document.body.removeEventListener('keydown', this.spaced)
  }
}
</script>

<style scoped>
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .avatar {
    width: 60px !important;
    height: 60px !important;
  }
  .pi-user {
    font-size: 1.7em !important;
  }
}
@media screen and (min-width: 576px) and (max-width: 800px) {
  .card {
    grid-template-columns: 2fr 2fr !important;
    grid-template-areas:
        "responsible-value avatar"
        "date date-value"
        "priority priority-value "
        "equipment equipment-value"
        "message message-value" !important;
    gap: 2px !important;
  }
  .avatar {
    width: 40px !important;
    height: 40px !important;
  }
  .pi-user {
    font-size: 1.7em !important;
  }
}
@media screen and (max-width: 480px) {
  .card {
    grid-template-columns: 2fr 2fr !important;
    grid-template-areas:
        "responsible-value avatar"
        "date date-value"
        "priority priority-value "
        "equipment equipment-value"
        "message message-value" !important;
    gap: 2px !important;
    }
  .avatar {
    width: 40px !important;
    height: 40px !important;
  }
  .pi-user {
    font-size: 1.7em !important;
  }
}
.data {
  padding: 10px;
}
.wrapper {
  display: flex;
}
.card {
  border: 2px solid slateblue;
  padding: 15px;
  position: relative;
  display: grid;
  grid-auto-rows: 1fr;
  word-wrap: break-word;
  height: 100%;
  gap: 0.5em;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-areas:
    "date date-value avatar"
    "priority priority-value avatar"
    "equipment equipment-value responsible-value"
    "message message-value message-value";
  cursor: pointer;
}
.selected {
  border: 2px solid lightseagreen;
}
.tag {
  position: absolute;
  right: -8px;
  top: -10px;
}
.avatar {
  border-radius: 40px;
  border: 1px solid black;
  height: 80px;
  width: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: avatar;
}
.pi-user {
  font-size: 2.5em;
}
.pi-info-circle {
  margin-right: 5px;
}
.date {
  grid-area: date;
  font-weight: bold;
}
.priority {
  grid-area: priority;
  font-weight: bold;
}
.equipment {
  grid-area: equipment;
  font-weight: bold;
}
.message {
  grid-area: message;
  font-weight: bold;
}
.date-value {
  grid-area: date-value;
}
.priority-value {
  grid-area: priority-value;
}
.equipment-value {
  grid-area: equipment-value;
}
.message-value {
  grid-area: message-value;
}
.responsible-value {
  grid-area: responsible-value;
}
</style>
