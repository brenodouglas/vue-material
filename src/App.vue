<template>
  <div id="app" class="container" v-md-theme="'default'">
    <router-view />
  </div>
</template>

<script>
export default {
};
</script>

<style>
@import 'assets/css/styles.css';

.container {
  min-height: 100%;
  -ms-flex-flow: column nowrap;
  flex-flow: column;
  -ms-flex: 1;
  flex: 1;
  transition: all .4s cubic-bezier(.25,.8,.25,1);
}

.container, body {
    display: -ms-flexbox;
    display: flex;
}

.main-sidebar.md-sidenav .md-sidenav-content {
    width: 280px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column;
    flex-flow: column;
}

@media (min-width: 1281px) {
  .main-sidebar.md-sidenav .md-sidenav-content {
      top: 0;
      pointer-events: auto;
      transform: translateZ(0);
      box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
  }

  .container {
    padding-left: 280px;
  }

  .icon-button-toggle {
    display: none;
  }
}

</style>
