<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">用户电影点评</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="form-group">
              <label for="markNumberInput">评分</label>
              <input
                type="text"
                class="form-control"
                id="markNumberInput"
                aria-describedby="markNumber"
                placeholder="mark"
                v-model="vscore"
              >
              <small
                id="markNumber"
                class="form-text text-muted"
              >短评评分限制在1-10分之间</small>
            </div>
            <div class="form-group">
              <label for="markCommentInput">Password</label>
              <input
                type="password"
                class="form-control"
                id="markCommentInput"
                aria-describedby="markComment"
                placeholder="Password"
                v-model="vcontent"
              >
              <small
                id="markComment"
                class="form-text text-muted"
              >短评限制字数为350个字</small>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="submit"
          >确认</button>
          <button
            type="button"
            ref="modalCancel"
            class="btn btn-secondary"
            data-dismiss="modal"
          >取消</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    id: String,
    score: Number,
    content: String
  },
  data() {
    return {
      vscore: this.score,
      vcontent: this.content
    };
  },
  watch: {
    vscore(newVal, OldVal) {
      this.$emit("inputscore", newVal);
    },
    vcontent(newVal, OldVal) {
      this.$emit("inputcontent", newVal);
    }
  },
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
<style scoped>
</style>
