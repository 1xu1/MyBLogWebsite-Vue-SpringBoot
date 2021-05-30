<template>
    <div  class="music-player">
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" :width="width" :height="height" :src="'//music.163.com/outchain/player?type=2&id='+songId+'&auto='+auto+'&height=66'"></iframe>
    </div>
</template>

<script>
    export default{
        name:"MusicPlayer",
        props:{
            width:{
                type:Number,
                default:250
            },
            height:{
                type:Number,
                default:86
            },
            //网易云音乐的歌曲ID
            songId:{
                type:String,
                default:'503268086'
            },
            //是否自动播放，1自动播放，0不自动播放
            auto:{
                type:String,
                default:'0'
            }
        }
    }
</script>


<style scoped>
.music-player{
    position: fixed;
    right:20px;
    bottom: 20px;
}
</style>
