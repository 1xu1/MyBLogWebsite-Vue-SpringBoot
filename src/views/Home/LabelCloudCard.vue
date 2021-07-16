<template>
<div class="label-cloud-card">
    <div v-if="loading">
        <div class="loading">
            <LoadingIcon></LoadingIcon>
        </div>
    </div>
    <div v-else>
        <p>标签云</p>
        <div class="label-row">
            <a :id="index" :key="value[0]" v-for='(value,index) in labels' @click="change(value[0],index)" class="label-button">
                <span>{{value[0]}}</span>
                <span class="label-num">{{value[1]}}</span>
            </a>
        </div>

    </div>
</div>
</template>

<script>
import axios from "axios"
import CrossLine from '@/components/things/CrossLine.vue';
export default {
  components: { CrossLine },
    name: "LabelCloudCard",
    data() {
        return {
            labels: [],
            loading: true,
            slected:[]
        }
    },
    methods: {
        getDate() {
            axios
                .get("/api/getBlogLabels")
                .then((res) => {
                    this.labels = new Map(Object.entries(res.data.data)); 
                    this.loading = false
                    let arr=Array.from(this.labels)
                    arr.sort((a,b)=>{
                        return b[1]-a[1]
                    })
                    this.labels=new Map(arr)
                })
                .catch((err) => {
                    console.log(err);
                });


            
        },
        //@event
        //点击标签按钮触发
        change(label,index){
            let slected=this.slected
            let tmp;
            if(!slected.includes(index)){
                if((tmp = slected.pop())!=undefined)
                    document.getElementById(tmp).style.backgroundColor="#FFFFFF"
                document.getElementById(index).style.backgroundColor="#BBDEFB"
                slected.push(index)
            }
            else{
                document.getElementById(index).style.backgroundColor="#FFFFFF"
                slected.splice(index,1)
                label=''
            }
            this.slected=index
            let page=1
            let limit=null
            this.$emit('change',page,limit,label)
            this.slected=slected
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
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
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
