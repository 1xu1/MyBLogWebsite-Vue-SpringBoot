<template>
<div class="project-card">
    <a class="project-a" :href="url" target="_blank">
        <h2 class="project-title">{{title}}</h2>
        <img class="project-img" :src="img">
        <span class="project-intro">{{intro}}</span>
    </a>
</div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        title: {
            type: String,
            default: ""
        },
        img: {
            type: String,
            default: ""
        },
        intro: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        }
    },
    methods: {}
}
</script>

<style scoped>
.project-card {
    height: 300px;
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 0 35px 5px rgb(0 0 0 / 40%);
    padding: 10px 10px 10px 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.project-a {
    text-decoration: none;
    color: #000;
}

.project-img {
    height: 200px;
    width: 100%;
}

.project-title {
}

.project-intro {
    
}
</style>
