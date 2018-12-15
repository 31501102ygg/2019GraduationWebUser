<template>
    <div class="container">
        <div class="row m-2">
            <h2>个人基本信息</h2>
        </div>
        <div class="row m-2">
            <h5>账号：</h5>
            <input type="text" disabled="true" :value="user.username">
        </div>
        <div class="row m-2">
            <h5>头像：</h5>
             <div>
                <img src="https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg" alt="" style="width:150px;height:150px">
                <button type="button" class="btn btn-primary">更换头像</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"personal_info",
    create(){

    },
    data(){
        return {
            user:{
                username:"ygg1111"
                }
        }
    },

}
</script>

<style scoped>

</style>
