<template>
  <div class="">
    <div class="container mx-auto text-center md:bg-grey-lightest">
      <img src="./assets/logo.png">
      <br>
      <button class="btn-blue hover:bg-blue-light">
        Button 1
      </button>
      <button class="btn-blue">
        Button 2
      </button>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
