<template>
<div class="label-cloud-card">
    <div v-if="loading">
        <center>
            <img src="../assets/img/loading.gif" style="margin-top: 100px; margin-bottom: 100px" />
        </center>
    </div>
    <div v-else>
        <p>标签云</p>
        <div class="label-row">
            <a :key="key" v-for='(value, key) in labels' :href="labelUrl(key)" class="label-button"><span>{{key}}</span><span class="label-num">{{value}}</span></a>
        </div>

    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "LabelCloudCard",
    data() {
        return {
            labels: [],
            loading: true
        }
    },
    methods: {
        getDate() {
            axios
                .get("/api/getBlogLabels")
                .then((res) => {
                    this.labels = res.data.data;
                    this.loading = false
                })
                .catch((err) => {
                    alert("诶呀，数据读取失败，请试着刷新一下");
                    console.log(err);
                });
        }

    },
    mounted() {
        this.getDate()
    },
    computed:{
        labelUrl() {
            return function (label) {
                let r='?'
                let urlParm=this.$route.query
                for(let p in urlParm){
                    if(!urlParm[p]==label)
                        r+=p+'='+urlParm[p]+'&'
                }
                r=r+'label='+label
                return '/home'+r
            }
        }
    }


}
</script>

<style scoped>
a {
    text-decoration: none ;
    color: black;
}

.label-cloud-card {
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 10px 10px 10px;
    background: white;

}

.label-button {
    font-size: 12px;
    border: 1px solid #29b6f6;
    border-radius: 10px;
    padding-bottom: 3px;
    padding-left: 10px;
    margin-bottom: 5px;
    margin-right: 2px;
    user-select: none;
    font-weight: 400;
}

.label-button:hover {
    transition: all .4s;
    background: #b3e5fc;
}

.label-button-selected {
    background: #b3e5fc;
}

.label-num {
    font-weight: 600;
    margin-right: 5px;
    margin-left: 3px;
    color: #0277bd !important; 
}

.label-row {
    display: block;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>
