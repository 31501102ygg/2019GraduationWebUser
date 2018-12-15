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
          src="https://ygg-31501102-bucket.oss-cn-shenzhen.aliyuncs.com/movie_headerImg/h1.jpg"
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
                      alt="Source Image"
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
                    alt="Cropped Image"
                  />
                  <div>
                    <button
                      class="btn btn-secondary"
                      @click="cropImage"
                      v-if="imgSrc != ''"
                      style="margin-right: 40px;"
                    >截取</button>
                    <button
                      class="btn btn-secondary"
                      @click="rotate"
                      v-if="imgSrc != ''"
                    >旋转图片</button>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >关闭</button>
                  <button
                    type="button"
                    class="btn btn-primary"
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
  create() {},
  data() {
    return {
      user: {
        username: "ygg1111",
        nickname: "乌龟滑翔"
      },
      imgSrc: "",
      cropImg: ""
    };
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
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
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    rotate() {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
};
</script>

<style scoped>
</style>
