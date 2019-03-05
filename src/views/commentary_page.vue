<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="input-group m-3">
          <input
            type="text"
            class="form-control"
            placeholder="电影名"
            aria-label="Recipient's username"
            aria-describedby="button-search"
          >
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-search"
            >搜索</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex"
      style="margin-left:16px;"
    >
      <button
        type="button"
        :class="{'btn':true, 'btn-outline-primary':type===2,'btn-primary':type===1}"
        @click="changeType(1)"
      >专家影评</button>
      <button
        type="button"
        :class="{'btn':true, 'btn-outline-primary':type===1,'btn-primary':type===2}"
        @click="changeType(2)"
      style="margin-left:10px;"
      >大众影评</button>
    </div>
    <div style="margin:16px;">
      <div class="list-group">
        <a
          href="#/commentary"
          class="list-group-item list-group-item-action flex-column align-items-start"
          v-for="commentary in commentaryList"
          :key="commentary.id"
        >
          <div class="row">
            <div class="col-2">
              <a href="#">
                <img
                  class="movie-img"
                  :src=commentary.movieUrl
                  alt="电影海报图片"
                >
              </a>
            </div>
            <div class="col-10">
              <div
                class="d-flex justify-content-start"
                style="align-items:center"
              >
                <img
                  class="user-img"
                  :src=commentary.userUrl
                  alt="用户头像"
                >
                <p style="margin-top: 1rem;margin-left:5px">{{commentary.userName}}</p>
                <stars
                  :score=commentary.score
                  style="margin-left:5px"
                ></stars>
                <small style="margin-left:5px">{{commentary.time}}</small>
              </div>
              <div class="d-flex justify-content-start">
                <a href="#">
                  <p class="mb-1">{{commentary.title}}</p>
                </a>
              </div>
              <div class="d-flex justify-content-start">
                <p
                  class="mb-1"
                  style="text-align: left;"
                >{{commentary.pureContent}}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <page-navigation
      :total=pagination.totalPage
      :range=pagination.pageRange
      v-on:currentPage="changeCurrentPage"
    ></page-navigation>
  </div>
</template>
<script>
import scoreStars from "../components/scoreStars.vue";
import pageNavigation from "../components/pageNavigation.vue";

export default {
  created(){
    this.$options.methods.search.bind(this)(1);
  },
  components: {
    stars: scoreStars,
    "page-navigation": pageNavigation
  },
  data() {
    return {
      commentaryList: [
        {
          id: 1,
          movieUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_img/p1188042816.jpg",
          userUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg",
          userName: "ygg123",
          title: "于心的那份青涩",
          content:
            "学长他就像我生命中的灵感，他让我了解爱的积极意义，他就像是让我一直前进的动力， 其实这部在内地12年上映的泰国校园爱情小清新电影，每次想到学生时期的那份纯纯爱恋，总是会把它再刷一遍，遍遍的感触都不同，就像那个她永远在我心裡，但却越来越模糊。 校园+淡淡初恋+死党... ",
          score: 9,
          time: "2018-10-01 12:15:11"
        },
        {
          id: 2,
          movieUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_img/p1188042816.jpg",
          userUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg",
          userName: "ygg123",
          title: "于心的那份青涩",
          content:
            "学长他就像我生命中的灵感，他让我了解爱的积极意义，他就像是让我一直前进的动力， 其实这部在内地12年上映的泰国校园爱情小清新电影，每次想到学生时期的那份纯纯爱恋，总是会把它再刷一遍，遍遍的感触都不同，就像那个她永远在我心裡，但却越来越模糊。 校园+淡淡初恋+死党... ",
          score: 9,
          time: "2018-10-01 12:15:11"
        },
        {
          id: 3,
          movieUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_img/p1188042816.jpg",
          userUrl:
            "https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg",
          userName: "ygg123",
          title: "于心的那份青涩",
          content:
            "学长他就像我生命中的灵感，他让我了解爱的积极意义，他就像是让我一直前进的动力， 其实这部在内地12年上映的泰国校园爱情小清新电影，每次想到学生时期的那份纯纯爱恋，总是会把它再刷一遍，遍遍的感触都不同，就像那个她永远在我心裡，但却越来越模糊。 校园+淡淡初恋+死党... ",
          score: 9,
          time: "2018-10-01 12:15:11"
        }
      ],
      pagination: {
        totalPage: 2,
        pageRange: 7,
        currentPage: 1
      },
      type:1
    };
  },
  methods: {
    search(val) {
      let url = this.GLOBAL.BASE_URL+"long/get?page="+val
      this.$axios.get(url)
      .then(res=>{return Promise.resolve(res.data)})
      .then(json=>{
        if(json.code==='ACK'){
        this.commentaryList=json.data
        this.pagination.totalPage = Math.ceil(json.data.length/10);
        }else{
          console.log(json.message)
        }
      })
      .catch(error=>{console.log(error)})
    },
    changeCurrentPage(val) {
      this.pagination.currentPage = parseInt(val);
      this.$options.methods.search.bind(this)(val);
    },
    changeType(val){
      this.type = val;
    }
  }
};
</script>
<style scoped>
.movie-img {
  min-height: 150px;
  max-height: 200px;
  width: 100px;
}
.user-img {
  height: 40px;
  width: 40px;
}
</style>
