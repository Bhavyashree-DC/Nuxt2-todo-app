<template>
    <div class="date">
       {{ currentDate }}
    </div>
</template>

<script>
export default {
  name: 'CurrentDate',
  data () {
    return {
        today : new Date(),
        dateFormat : new Intl.DateTimeFormat('en-GB', {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        }),
    }
  },
  computed:{
    currentDate(){
        return this.dateFormat.format(this.today);
    }
  },
}

</script>

<style scoped>
   .date{
        font-size: 20px;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 30px;
        text-align: center;
        color: #fff;
   }
</style> 