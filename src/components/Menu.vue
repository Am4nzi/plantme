<template>
  <h1>Hello World</h1>
</template>

<script>
export default {
  name: "Menu",
  created() {
    fetch('http://localhost:3000/sizemenudata')
      .then(response => response.json())
      .then(data => {
        this.sizeMenuData = data;
      })
      .catch(error => console.error(error))
  },
  data: () => ({
    show: false,
    sizeMenuData: []
  })
};
</script>
