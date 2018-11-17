<template>
    <div id="pagination">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item">{{ item.name }}</li>
        </ul>
        <pagination :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination>
    </div>
</template>
<script>
import pagination from "vue-bootstrap-pagination";

export default {
  el: "#pagination",
  data() {
    return {
      items: [],
      pagination: {
        total: 0,
        per_page: 12, // required
        current_page: 1, // required
        last_page: 0, // required
        from: 1,
        to: 12
      },
      paginationOptions: {
        offset: 4,
        previousText: "Prev",
        nextText: "Next",
        alwaysShowPrevNext: true
      }
    };
  },
  methods:{
      
  }
};
</script>
