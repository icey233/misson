<template>
  <div class="containr">
    <!-- 头部标题 -->
    <div class="top">
      <div>
        <img src="/src/assets/1713589193193.png" alt="" />
      </div>
      <div class="title">
        <div class="title-cn">东 深 智 慧 供 水</div>
        <div class="title-en">INTELLIGENT WATER SUPPLY OF EAST SHENZHEN</div>
      </div>
    </div>
    <!-- menu菜单 -->
    <div class="content">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        style="border-color: white;"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>水源监控</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>水库管理</span>
          </template>
          <el-menu-item index="2-1">运维管理</el-menu-item>
          <el-menu-item index="2-2">监测分析</el-menu-item>
          <el-menu-item index="2-3">AI智能分析</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>二维构建</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><icon-menu /></el-icon>
          <span>管网检测</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 天气时间面板 和tag标签 -->
    <div class="bottom">
      <div class="bottom-box">
        <div class="day">
          <div class="weather">
            <v-mini-weather
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <template #default="{ weather, icon }">
                <!--DIY内容-->
                <span>{{ weather.temp }}℃</span>
                <!--插入图标-->
                <v-mini-weather-icon
                  :icon="icon"
                  style="margin: 0 5px"
                ></v-mini-weather-icon>
                <span>{{ weather.weather }}</span>
              </template>
            </v-mini-weather>
          </div>
          <div class="time">
            <dayTime></dayTime>
          </div>
        </div>
        <div class="tag">
          <el-check-tag :checked="checked1" @change="onChange1"
            >台风路径</el-check-tag
          >
          <el-check-tag :checked="checked2" @change="onChange2"
            >洪水预报</el-check-tag
          >
          <el-check-tag :checked="checked3" @change="onChange3"
            >水库纳蓄</el-check-tag
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { ref } from "vue";
import dayTime from "./dayTime.vue";
import { vMiniWeather, vMiniWeatherIcon } from "vue3-mini-weather";
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const onChange1 = (status) => {
  checked1.value = status;
};
const onChange2 = (status) => {
  checked2.value = status;
};
const onChange3 = (status) => {
  checked3.value = status;
};
</script>

<style lang="less" scoped>
.containr {
  background: white;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.top {
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 30px;
  .title {
    margin-left: 10px;
    height: 56px;
    .title-cn {
      font-family: 庞门正道标题体 !important;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 42px;
    }
    .title-en {
      font-size: 13px;
    }
  }
}
.content {
  margin-top: 50px;
  margin-left: 10px;
  width: 170px;
  font-family: 庞门正道标题体 !important;
  span {
    font-size: 25px;
  }
}
.bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;
  .bottom-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tag {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
    }
    .weather {
      border-bottom: 1px solid;
      margin-bottom: 10px;
      margin-left: 10px;
    }
  }
}

.weather-info {
  display: flex;
  align-items: center;
}
/*修改图标样式*/
.v-mini-weather-icon {
  width: 50px;
  height: 50px;
}
/*修改文本样式*/
.weather-text {
  color: #000;
}
</style>
