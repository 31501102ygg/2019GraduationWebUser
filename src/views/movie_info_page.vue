<template>
  <div class="container">
    <div
      class="row"
      style="padding:15px"
    >
      <h3 style="">{{movie["name"]}} {{movie["foreignName"]}} ({{movie_year}})</h3>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div
          class="card bg-info"
          style="box-shadow:10px 10px 5px #888888"
        >
          <img
            :src="movie.imgUrl"
            alt=""
          >
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="row mx-1"
          v-for="part in movie_entity"
          :key="part.id"
        >
          <p style="text-align:left">
            <span>{{part.type_name}}</span>
            <span style="text-align:left">{{movie[part.value_name]}}</span></p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="row">
          <h4>电影评分</h4>
        </div>
        <div
          id="score"
          class="row"
          style="align-items:center"
        >
          <h1>{{movie_score.toFixed(1)}}</h1>
          <font-awesome-icon
            v-if="Math.round(movie_score/2)>=1"
            class="text-warning"
            :icon="['fas','star']"
          />
          <font-awesome-icon
            v-if="Math.round(movie_score/2)>=2"
            class="text-warning"
            :icon="['fas','star']"
          />
          <font-awesome-icon
            v-if="Math.round(movie_score/2)>=3"
            class="text-warning"
            :icon="['fas','star']"
          />
          <font-awesome-icon
            v-if="Math.round(movie_score/2)>=4"
            class="text-warning"
            :icon="['fas','star']"
          />
          <font-awesome-icon
            v-if="Math.round(movie_score/2)>=5"
            class="text-warning"
            :icon="['fas','star']"
          />
          <font-awesome-icon
            v-if="Math.round(movie_score/2)<(movie_score/2)"
            class="text-warning"
            :icon="['fas','star-half']"
          />
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-primary"
          >打分</button>
        </div>
      </div>
    </div>
    <div
      class="row"
      style="padding:15px"
    >
      <h4>电影简介</h4>
    </div>
    <div
      class="row"
      style="text-align:left;padding-left:15px"
    >
      <p>{{movie.introduction}}</p>
    </div>
    <div
      class="row"
      style="padding:15px"
    >
      <h4>电影短评</h4>
    </div>
    <div
      class="row"
      style="text-align:left;padding-left:15px"
    >
      <div class="list-group" style="width:100%">
        <div
          class="list-group-item list-group-item-action flex-column align-items-start"
          style="margin-bottom:5px"
          v-for="shortCommentary in shortCommentarys" 
          :key="shortCommentary.id"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{shortCommentary.username}}</h5>
            <small>{{shortCommentary.score}}</small>
          </div>
          <p class="mb-1">{{shortCommentary.content}}</p>
          <small>{{shortCommentary.createDateTimeString}}</small>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "movie_info",
  created() {
    this.movie_id = this.$route.query.movieId;
    this.pageHelper.data=this.movie_id;
    this.$options.methods.getMovieById.bind(this)();
    this.$options.methods.getMovieShortCommentarys.bind(this)();
  },
  data() {
    return {
      movie_id: 20,
      movie_score: 9.0,
      movie_year: 2018,
      pageHelper:{
        data:'',
        pageNum:1,
        pageSize:10
      },
      movie_entity: [
        { id: 1, type_name: "导演：", value_name: "director" },
        { id: 2, type_name: "编剧：", value_name: "screenwriter" },
        { id: 3, type_name: "主演：", value_name: "actors" },
        { id: 4, type_name: "类型：", value_name: "type" },
        {
          id: 5,
          type_name: "制片国家/地区：",
          value_name: "makeState"
        },
        { id: 6, type_name: "语言：", value_name: "language" },
        {
          id: 7,
          type_name: "上映日期：",
          value_name: "releaseTimeString"
        },
        { id: 8, type_name: "片长：", value_name: "sheetLength" },
        { id: 9, type_name: "外文名：", value_name: "foreignName" }
      ],
      movie: {},
      shortCommentarys:[]
    };
  },
  methods: {
    getMovieById() {
      var url = "/movie/info?movieId=" + this.movie_id;
      this.$axios
        .get(url)
        .then(res => {
          return Promise.resolve(res.data);
        })
        .then(json => {
          if (json.code === "ACK") {
            this.movie = json.data;
            this.movie_year = /\d+/.exec(this.movie.releaseTimeString)[0];
          } else {
            this.$parent.alert("warning", json.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMovieShortCommentarys(){
      this.$axios.post("short/search/",this.pageHelper)
      .then(res=>{return Promise.resolve(res.data)})
      .then(json=>{
        if(json.code==='ACK'){
          this.shortCommentarys=json.data
          console.log(json.data)
        }else{ 
            this.$parent.alert("warning", json.message);
        }
      })
      .catch(error=>{console.log(error)})
    }
  }
};
</script>

<style scoped>
</style>
