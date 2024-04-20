<template>
  <div class="box">
    <div class="boxDay">{{date_Year}}</div>
    <div class="boxTime">
      <div style="background-color: #00C1EB;">{{ dateWeek }}</div>
      <div >{{ dateDay }}</div>
    </div>
    <div class="boxDate">{{ dateYear }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      date_Year:null,
      mouthday: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "July",
        "September",
        "October",
        "November",
        "December",
      ],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const date = dayjs(new Date());
      this.dateDay = date.format("HH:mm");
      this.dateYear = date.format("M/DD");
      this.date_Year = date.format("YYYY");
      this.dateWeek = this.mouthday[date.format("M") - 1]
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.box {
  color: black;
  display: flex;
  align-items: center;
}
.boxDay {
  font-size: 15px;
  transform: rotate(-90deg);
}
.boxTime {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
}
.boxDate {
  font-size: 30px;
}
</style>
