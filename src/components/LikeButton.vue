<template>
  <div class="like">
    <i
      @click="addBlogLike(blog_id)"
      :class="slected ? ' like-button bi-heart-fill' : ' like-button bi-heart'"
    ></i>
    <span class="like-words">赞{{ blog.blog_like }}</span>
  </div>
</template>
    
<script>
import axios from "axios";
export default {
  name: "LikeBtton",
  props: {
    blog: {
      type: Object,
      default: () => {
        blog_like: 0;
      },
    },
    blog_id: {
      type: String,
    },
  },
  data() {
    return {
      slected: false,
    };
  },
  methods: {
    //博文喜欢数加一
    addBlogLike: function () {
      this.slected = true;
      axios
        .post("/api/addBlogLike", {
          blog_id: this.blog_id,
        })
        .then((res) => {
          this.blog.blog_like++;
        });
    },
  },
};
</script>


<style scoped>
/*@import "bootstrap";*/
.like-button {
  font-size: 25px;
  position: relative;
}
.like-words {
  font-size: 15px;
  user-select: none;
}
.like {
  position: relative;
  color: red;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 25px;
}
i {
  font-style: normal;
}
</style>
