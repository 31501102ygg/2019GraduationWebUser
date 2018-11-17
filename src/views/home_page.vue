<template>
    <div>
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>第一张幻灯片标签</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://static.runoob.com/images/mix/img_nature_wide.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>第二张幻灯片标签</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>第三张幻灯片标签</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container clearfix">
            <hr>
            <div class="hot-movie" style="display:flex;align-items: center">
                <span style="margin-right:auto">最近热门电影</span>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Previous" @click="getHotPre">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li v-for="item in pageIndex" :key="item.id" :class="{'page-item':1===1,active:item.id === activeHotMoviePage}">
                            <a class="page-link" href="javascript:void(0);" @click="reloadHotMovies(item.id)">{{item.id}}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next" @click="getHotNext">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="container clearfix">
            <hr>
            <div class="row">
                <div class="col" v-for="hotmovie in hotmovies" v-bind:key="hotmovie.id">
                    <img class="img-fluid" :src="hotmovie.imgUrl" alt="">
                    <span>{{hotmovie.name}}</span>
                </div>
            </div>
        </div>
        <div class="container clearfix">
            <hr>
            <div class="new-movie" style="display:flex;align-items: center">
                <span style="margin-right:auto">最新电影</span>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Previous" @click="getPre">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li v-for="item in pageIndex" :key="item.id" :ref="item.id" :class="{'page-item':1===1,active:item.id === activeNewMoviePage}">
                            <a class="page-link" href="javascript:void(0);" @click="reloadNewestMovies(item.id)">{{item.id}}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next" @click="getNext">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="container clearfix">
            <hr>
            <div class="row">
                <div class="col" v-for="movie in newMovies" v-bind:key="movie.id">
                    <img class="img-fluid" :src="movie.imgUrl" alt="">
                    <span>{{movie.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var index = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
export default {
  name: "home_page",
  created() {
    this.$options.methods.loadNewestMovies.bind(this)();
    this.$options.methods.loadHotMovies.bind(this)();
  },
  data() {
    return {
      pageIndex: index,
      activeHotMoviePage: 1,
      activeNewMoviePage: 1,
      hotmovies: [],
      newMovies: []
    };
  },
  methods: {
    //最新电影方法区
    getNext() {
      this.activeNewMoviePage =
        this.activeNewMoviePage + 1 === 6 ? 1 : this.activeNewMoviePage + 1;
      this.$options.methods.loadNewestMovies.bind(this)();
    },
    getPre() {
      this.activeNewMoviePage =
        this.activeNewMoviePage - 1 === 0 ? 5 : this.activeNewMoviePage - 1;
      this.$options.methods.loadNewestMovies.bind(this)();
    },
    reloadNewestMovies(id) {
      this.activeNewMoviePage = id;
      this.$options.methods.loadNewestMovies.bind(this)();
    },
    //最热电影方法区
    getHotNext() {
      this.activeHotMoviePage =
        this.activeHotMoviePage + 1 === 6 ? 1 : this.activeHotMoviePage + 1;
      this.$options.methods.loadHotMovies.bind(this)();
    },
    getHotPre() {
      this.activeHotMoviePage =
        this.activeHotMoviePage - 1 === 0 ? 5 : this.activeHotMoviePage - 1;
      this.$options.methods.loadHotMovies.bind(this)();
    },
    reloadHotMovies(id) {
      this.activeHotMoviePage = id;
      this.$options.methods.loadHotMovies.bind(this)();
    },
    loadNewestMovies() {
      let data = {
        pageNum: this.activeNewMoviePage,
        pageSize: 5
      };
      this.$axios
        .post("/movie/newest", data)
        .then(res => {
          return Promise.resolve(res.data);
        })
        .then(json => {
          if (json.code === "ACK") {
            this.newMovies = json.data.list;
          } else {
            this.$message.error(json.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },   
    loadHotMovies() {
      let data = {
        pageNum: this.activeHotMoviePage,
        pageSize: 5
      };
      this.$axios
        .post("/movie/newest", data)
        .then(res => {
          return Promise.resolve(res.data);
        })
        .then(json => {
          if (json.code === "ACK") {
            this.hotmovies = json.data.list;
          } else {
            this.$message.error(json.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.hot-movie > span {
  float: left;
}
</style>
