<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary movie-navbar">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" width="140" height="30" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto"  @click="removeActive">
                        <li class="nav-item ">
                            <a class="nav-link active" ref="home" href="#/home">首页</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#/movie">电影</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#/">影评</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                收藏
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <a class="dropdown-item" href="#/store/movie">电影</a>
                                <a class="dropdown-item" href="#/store/review">影评</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto "  @click="removeActive">
                        <li class="nav-item ">
                            <a class="nav-link" href="javascript:void(0);">登陆</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);">注册</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                设置
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#/personal_info">个人信息</a>
                                <a class="dropdown-item" href="#/message">消息</a>
                            </div>
                        </li>
                    </ul>
                    <a class="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" :title="user_name">
                        <img style="border-radius:50%" src="https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg" width="30" height="30" alt="">
                    </a>
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
        <footer class="page-footer text-center font-small mt-4 wow fadeIn bg-primary" style="visibility: visible; animation-name: fadeIn;">

            <!--Call to action-->
            <div class="pt-4">
                <div class="container">
                    <div class="row" style="text-align: center">
                        <div class="col-md-6">
                            <div class="content tag-linksite">
                                <h4 class="title">相关网站</h4>
                                <a class="footer-link" href="https://movie.douban.com/" target="_blank">豆瓣电影</a>
                                <i style="font-style:normal">|</i>
                                <a class="footer-link" href="http://maoyan.com/" target="_blank">猫眼电影</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="content tag-friendsite">
                                <div class="content tag-cloud friend-links">
                                    <h4 class="title">友情链接</h4>
                                    <a class="footer-link" href="http://www.bootcss.com" title="Bootstrap 中文网" target="_blank">Bootstrap中文网</a>
                                    <i style="font-style:normal">|</i>
                                    <a class="footer-link" href="https://cn.vuejs.org/" title="vue 官网" target="_blank">VUE官网</a>
                                    <i style="font-style:normal">|</i>
                                    <a class="footer-link" href="https://www.jquery123.com/" title="jQuery 中文文档" target="_blank">jQuery中文文档</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Copyright-->
            <div class="footer-copyright py-3">
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                        ©2019版权所有：2019_31501102_叶港归_毕业设计
                    </font>
                </font>
            </div>
            <!--/.Copyright-->

        </footer>
    </div>
</template>
<script>
export default {
  name: "main_page",
  created(){
      this.$router.push('/home')
  },
  data() {
    return { 
        user_name: "ygg"
        }
  },
  methods:{
    navSelect(e){
        console.log(e.target)
    },
    removeActive(){
        this.$refs.home.classList.remove('active')
    }
  }
};
</script>

<style scoped>
.movie-navbar .nav-link {
  color: white;
}
footer{
    color: white
}
.footer-link{
    color: white;
}
</style>
