<template>
  <div>
    <font-awesome-icon
      class="text-warning"
      v-for="vicon in icon_list"
      :key="vicon.index"
      :icon="vicon.style"
      v-on:mouseover="starPadding(vicon.index)"
      v-on:mouseout="starInit"
      v-on:click="starEnsure(vicon.index)"
    />

  </div>
</template>
<script>
export default {
  created(){
    this.$options.methods.init.bind(this)(this.score);
  },
  props:{
    score:Number
  },
  data() {
    return {
      needInit: true,
      message: "垃圾",
      mscore: 0,
      icon_list: [
        {
          index: 0,
          style: ["far", "star"]
        },
        {
          index: 1,
          style: ["far", "star"]
        },
        {
          index: 2,
          style: ["far", "star"]
        },
        {
          index: 3,
          style: ["far", "star"]
        },
        {
          index: 4,
          style: ["far", "star"]
        }
      ],
      message_list: ["垃圾", "瑕疵", "一般", "不错", "完美"]
    };
  },
  watch: {
    message(newVal, oldVal) {
      this.$emit("changeMessage", newVal);
    },
    mscore(newVal, oldVal) {
      this.$emit("changeScore", newVal);
    }
  },
  methods: {
    init(number){
      if(number===undefined){
      this.mscore = 0;
      }else{
      this.mscore = number;
      }
      console.log(this.mscore)
      number = Math.floor(number/2)
      this.$options.methods.starPadding.bind(this)(number-1)
    },
    starPadding(index) {
      this.needInit = true;
      this.message = this.message_list[index];
      for (let i = 0; i < 5; i++) {
        if (i <= index) {
          this.icon_list[i].style = ["fas", "star"];
        } else {
          this.icon_list[i].style = ["far", "star"];
        }
      }
    },
    starInit() {
      if (!this.needInit) return;
      for (let i = 0; i < 5; i++) this.icon_list[i].style = ["far", "star"];
      this.message = '';
    },
    starEnsure(index) {
      this.needInit = false;
      this.mscore = (index + 1)*2;
    }
  }
};
</script>
<style scoped>
.text-warning{
  margin: 2px
}
</style>
