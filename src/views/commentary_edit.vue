<template>
  <div class="container">
    <div
      class="row"
      id="which_movie"
    >
      <img
        :src="movie_info.imgUrl"
        alt="电影图片"
      >
      <div>
        <div style="line-height:50px"><a :href="movie_info.src">{{movie_info.name}}</a></div>
        <div><p>{{movie_info.simpleInfo}}</p></div>
      </div>
    </div>

    <div class="like_row">
      <input type="text" v-model="title" placeholder="请输入影评标题" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="like_row">
      <froala
        :tag="'textarea'"
        :config="config"
        v-model="model"
      ></froala>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    this.movie_id = this.$route.query.movieId;
    this.$options.methods.getMovieSimpleInfo.bind(this)(this.movie_id)
  },
  data() {
    return {
      movie_id:0,
      movie_info:{
        "imgUrl":'https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_img/p1014542496.jpg',
        "src":'http://localhost:8080/#/movie_info?movieId=183',
        "name":'拯救大兵瑞恩',
        "simpleInfo":'导演 饶晓志 主演 陈建斌 / 任素汐 / 中国大陆 / 8.1分(425103评价)'
      },
      title:'',
      config: {
        toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline','strikeThrough','|', 'fontFamily', 'fontSize', 'color', '|','paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'embedly', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting','|', 'print', 'spellChecker', 'help', '|', 'fullscreen','|','undo', 'redo'],//['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],//显示可操作项
        language: "zh_cn",
        events: {
          "froalaEditor.initialized": function() {
            console.log("initialized");
          },
          "froalaEditor.blur":function(e, editor){
            console.log(editor.html.get())
          }
        }
      },
      model: ''
    };
  },
  methods: {
    getMovieSimpleInfo(){
      var url = this.GLOBAL.BASE_URL+"movie/info/simple?movieId="+this.movie_id
      console.log(url)
      this.$axios.get(url)
      .then(res=>{return Promise.resolve(res.data)})
      .then(json=>{
        console.log(json)
        if(json.code==='ACK'){
        this.movie_info=json.data
        this.movie_info.src = this.GLOBAL.BASE_WEB_URL+'movie_info?movieId='+this.movie_id
        }else{
          console.log(json.message)
        }
      })
      .catch(error=>{console.log(error)})
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  text-align: left;
  width: 70%;
}

#which_movie img {
  width: 60px;
  height: 90px;
  margin-right: 10px;
}

/* #which_movie div {
  line-height: 30px
} */

#which_movie {
  margin-bottom: 20px;
  background-color: #e9ecef;
}

.like_row {
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 20px;
}


</style>

<style>
.fr-box.fr-basic .fr-element{
  min-height: 500px;
}
</style>
