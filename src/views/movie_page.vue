<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="input-group m-3">
                        <input type="text" class="form-control" placeholder="电影名、导演、演员" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container clearfix">
            <div class="btn-group m-3" role="group" aria-label="Basic example" style="display:flex;flex-wrap:wrap;align-items:center">
                <span class="mr-2">电影类型</span>
                <button type="button" class="btn btn-secondary my-1" v-for="type in movie_types" :key="type.value">{{type.label}}</button>
            </div>
            <div class="btn-group m-3" role="group" aria-label="Basic example" style="display:flex;flex-wrap:wrap;align-items:center">
                <span class="mr-2">制作国家</span>
                <button type="button" class="btn btn-secondary my-1" v-for="country in movie_countries" :key="country.value">{{country.label}}</button>
            </div>
            <div class="m-3" style="display:flex;">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="orderBy" id="exampleRadios1" value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                        按时间排序
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="orderBy" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">
                        按评分排序
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "movie_page",
  data() {
    return {
      movie_types: this.GLOBAL.Film_Type,
      movie_countries: this.GLOBAL.Film_Country,
      select_type: "",
      select_country: ""
    };
  },
  watch: {
    currentPageNum: function(newPageNum, oldPageNum) {
      this.searchForm.pageNum = newPageNum;
    }
  },
  methods: {
    typeClick(value) {
      this.searchForm.type = value;
      this.$options.methods.searchMovie.bind(this)();
    },
    countryClick(value) {
      this.searchForm.makeState = value;
      this.$options.methods.searchMovie.bind(this)();
    },
    searchMovie() {
      console.log(this.currentPageNum);
      this.$axios
        .post("/movie/search", this.searchForm)
        .then(res => {
          return Promise.resolve(res.data);
        })
        .then(json => {
          let movies = json.data.list;
          this.totalMovieNumber = json.data.pageNumber;
          this.movies.movies1.splice(0);
          this.movies.movies2.splice(0);
          this.movies.movies3.splice(0);
          this.movies.movies4.splice(0);
          if (movies.length <= 5) {
            this.movies.movies1 = movies.slice(0, movies.length);
          } else if (movies.length <= 10) {
            this.movies.movies1 = movies.slice(0, 5);
            this.movies.movies2 = movies.slice(5, movies.length);
          } else if (movies.length <= 15) {
            this.movies.movies1 = movies.slice(0, 5);
            this.movies.movies2 = movies.slice(5, 10);
            this.movies.movies3 = movies.slice(10, movies.length);
          } else if (movies.length <= 20) {
            this.movies.movies1 = movies.slice(0, 5);
            this.movies.movies2 = movies.slice(5, 10);
            this.movies.movies3 = movies.slice(10, 15);
            this.movies.movies4 = movies.slice(15, movies.length);
          }
        });
    }
  },
  components: {
    pagination
  }
};
</script>

<style scoped>
</style>
