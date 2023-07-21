<template>
  <div>
    <div class="card">
      <DataTable :value="messages" paginator :rows="5" tableStyle="min-width: 50rem">
        <Column field="date" header="Дата" sortable style="width: 20%">1</Column>
        <Column field="priority" header="Важность" sortable style="width: 20%">2</Column>
        <Column field="equipment" header="Оборудование" sortable style="width: 20%">3</Column>
        <Column field="message" header="Сообщение" sortable style="width: 20%">4</Column>
        <Column field="responsible" header="Ответственный" sortable style="width: 20%">4</Column>
      </DataTable>
    </div>
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
    };
  }
}
</script>

<style scoped>
.card {
  padding: 40px;
}
</style>
