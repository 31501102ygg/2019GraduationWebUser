<template>
  <div class="container">
    <div class="row m-2">
      <h2>个人基本信息</h2>
    </div>
    <div class="row m-2">
      <h5>账号：</h5>
      <input
        type="text"
        disabled="true"
        :value="user.username"
      >
    </div>
    <div class="row m-2">
      <h5>昵称：</h5>
      <input
        type="text"
        :value="user.nickname"
      >
    </div>
    <div class="row m-2">
      <h5>头像：</h5>
      <div style="display: grid">
        <img
          :src="user.headerImgUrl"
          alt=""
          style="width:150px;height:150px"
        >
        <button
          type="button"
          class="btn btn-primary my-2"
          data-toggle="modal"
          data-target="#headerImgExchange"
        >更换头像</button>
      </div>
    </div>
    <div
      class="row m-2"
      style="display:flex;"
    >
      <h5>性别：</h5>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="orderBy"
          id="sex-man"
          value="0"
          v-model="user.sex"
          checked
        >
        <label
          class="form-check-label"
          for="sex-man"
        >
          男生
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="orderBy"
          id="sex-woman"
          value="1"
          v-model="user.sex"
        >
        <label
          class="form-check-label"
          for="sex-woman"
        >
          女生
        </label>
      </div>
    </div>

    <div class="row m-2">
      <h5>电话：</h5>
      <input
        type="text"
        :value="user.phoneNumber"
      >
    </div>
    <div class="row m-2">
      <h5>工作：</h5>
      <input
        type="text"
        :value="user.occupation"
      >
    </div>
    <div class="row m-2">
      <h5>所在地：</h5>
      <v-distpicker @selected="addressSelect"></v-distpicker>
    </div>
    <div class="row m-2">
      <h5>个性签名：</h5>
      <textarea
        class="form-control"
        :value="user.personalitySignature"
        rows="3"
      ></textarea>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      id="headerImgExchange"
      tabindex="-1"
      role="dialog"
      aria-labelledby="headerImgExchange"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">头像更换</h5>
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
              <div class="row">
                <div class="col-6">
                  <div style="width: 300px; height:300px; border: 1px solid gray; display: inline-block;">
                    <vue-cropper
                      ref='cropper'
                      :guides="true"
                      :view-mode="1"
                      drag-mode="move"
                      :auto-crop-area="0.5"
                      :min-container-width="250"
                      :min-container-height="250"
                      :minCropBoxWidth="200"
                      :minCropBoxHeight="200"
                      :background="true"
                      :rotatable="true"
                      :src="imgSrc"
                      :cropBoxResizable="false"
                      :cropmove="cropImage"
                      :ready="cropImage"
                      :zoom="cropImage"
                      alt="请上传图片"
                      :img-style="{ 'width': '300px', 'height': '300px' }"
                    >
                    </vue-cropper>
                  </div>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    style="font-size: 1.2em; padding: 10px 0;"
                    @change="setImage"
                  />
                </div>
                <div class="col-6">
                  <img
                    :src="cropImg"
                    style="width: 200px; height: 200px; border: 1px solid gray"
                    alt="头像预览"
                  />
                  <div class="my-2">
                    <button
                      class="btn btn-secondary"
                      @click="rotate"
                      v-if="imgSrc != ''"
                    >旋转图片</button>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    ref="closeModal"
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >关闭</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="uploadImg"
                  >保存更改</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal_info",
  created() {
    //设置请求头
    this.$axios.defaults.headers.common[
      "Authorization"
    ] = sessionStorage.getItem("TOKEN");

    this.$options.methods.getUserInfo.bind(this)();
  },
  data() {
    return {
      user: {},
      imgSrc: "",
      cropImg: "",
      cropImgName: "",
      location:{
        province:"",
        city:"",
        area:""
      }
    };
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      this.cropImgName = file.name;
      if (!file.type.includes("image/")) {
        alert("请上传图片文件");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("浏览器不支持FileReader方法");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    rotate() {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    uploadImg() {
      var form = new FormData();
      var img = this.cropImg;
      var imgName = this.cropImgName;
      var file = this.$options.methods.dataURLtoFile(img, imgName);
      form.append("file", file);
      this.$axios
        .post("/upload/img/movie", form)
        .then(res => {
          return Promise.resolve(res);
        })
        .then(json => {
          json = json.data;
          this.$refs.closeModal.click();
          this.user.headerImgUrl = json.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    getUserInfo() {
      var url = "/user/info?username=" + this.$parent.user_name;
      this.$axios
        .get(url)
        .then(res => {
          return Promise.resolve(res);
        })
        .then(json => {
          json = json.data;
          this.user = json.data;
          console.log(this.user);
        });
    },
    addressSelect(object){
      this.user.location = object.area.code;
      console.log(object)
    }
  }
};
</script>

<style scoped>
</style>
