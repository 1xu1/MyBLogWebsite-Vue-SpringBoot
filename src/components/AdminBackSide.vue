<template>
  <el-menu :default-openeds="['1', '1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>博文信息</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">博文列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
import axios from "axios";
import {Menu,Submenu,MenuItem,MenuItemGroup} from "element-ui"
export default {
  name: "AdminBackSide",
  components:{
    'el-menu':Menu,
    'el-menu-item-group':MenuItemGroup,
    'el-menu-item':MenuItem,
    'el-submenu':Submenu
  }
  }
  
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
