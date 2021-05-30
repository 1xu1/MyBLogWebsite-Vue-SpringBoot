<template>
  <!--博文内容块-->
  <div>
    <div v-if="loading">
      <center>
        <img
          src="../assets/img/loading.gif"
          style="margin-top: 100px; margin-bottom: 100px"
        />
      </center>
    </div>
    <!--博文内容-->
    <div v-else>
        <mavon-editor
          class="mavon"
          :boxShadow="false"
          previewBackground="#ffffff"
          :subfield="false"
          :defaultOpen="'preview'"
          :toolbarsFlag="false"
          :editable="false"
          :scrollStyle="true"
          :ishljs="true"
          :value="blog.blog_content"
        ></mavon-editor>            
    </div>
  </div>
</template>

<script>
import LikeButton from './LikeButton.vue';
export default {
  components: { LikeButton },
  name: "BlogContent",
  data() {
    return {
    };
  },
  components:{
    LikeButton,
  }
  ,
  props:{
    blog_id:{
      Number
    },
    loading:{
      Boolean,
      default:true
    },
    like:{
      Number,
      default:0
    },
    blog:{
      Object,
      default:null
    }
  }
};


</script>


<style scoped>
/*@import "bootstrap";*/
.commenter_name {
  text-decoration: none;
  font-weight: 700;
}

.comment_sub {
  color: #757575;
  font-size: small;
  margin: 5px 5px 5px 5px;
}

.comment_reply {
  width: 90%;
  height: 70px;
  resize: none;
  font-size: small;
  outline-color: #1565c0;
  border: solid 1px #757575;
  border-radius: 3px;
}

.comment_input {
  width: 100px;
  font-size: medium;
  outline-color: #1565c0;
  border: solid 1px #757575;
  border-radius: 3px;
  margin-bottom: 15px;
}

.button_reply {
  margin-left: 5px;
  border-radius: 5px;
  width: 70px;
  height: 70px;
  border: #757575;
  flex: right;
  background-color: #2196f3;
  color: white;
}

.button_reply:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #1976d2;
}

.blog_body{
  background-color: white;
 
}



.mavon{
  background-color: white;
  border: none;
}



</style>
