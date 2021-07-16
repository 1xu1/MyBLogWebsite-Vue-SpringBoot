<template>
    <div class="row">
        <button :disabled="pageNum==index" class="item" v-for="index of pages" @click="pageTrans(index)">{{index}}</button>
    </div>
</template>

<script>
    export default{
        name:"PagesButton",
        props:{
            pages:{
                Number
            },
            pageNum:{
                Number,
                default:1
            },
        },
        methods:{
            // pageTrans:function(index){
            //     location.replace(this.$route.path+"?page=" + index);
            // },
            //@event
            //点击按钮触发
            pageTrans:function(index){
                this.$emit('pageTrans',index)
            }
        }
    }
</script>


<style scoped>
.row{
    display:flex;
    justify-content: center;
    margin: 20px;
}
.item{
    margin-left: 10px;
    width: 35px;
    height: 35px;
    background: #fff;
    border: #616161 solid 1px;
    border-radius: 5px;
    color: #606266;
}
.item:hover{
    background: rgba(26,115,132,.06);
    transition: all .4s;
}
.item:active{
    background: rgba(26,115,132,.5);
}
.item:disabled{
     border: #BDBDBD solid 1px;
     color:#E0E0E0;
}
</style>
