<template>
  <div>
    <md-sidenav class="main-sidebar md-left md-fixed" ref="leftSidenav">
      <md-list>
        <md-list-item>
          <md-icon>video_library</md-icon> <span>Video</span>
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">Humor</md-list-item>
              <md-list-item class="md-inset">Music</md-list-item>
              <md-list-item class="md-inset">Movies</md-list-item>
              <md-list-item class="md-inset">TV Shows</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <div class="page-content">
      <div class="md-whiteframe main-header md-whiteframe-1dp">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button icon-button-toggle" @click="toggleLeftSidenav">
              <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title" style="flex: 1">EditFilmes</h2>

            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-container">
            <md-button class="md-fab md-mini md-plus-button">
              <md-icon>add</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
  },
};
</script>

<style scoped>
  .md-plus-button {
    margin: 0;
    bottom: -20px;
    position: absolute;
    right: 0px;
  }
  .page-content {
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column;
    flex-flow: column;
  }

  .main-header {
      position: relative;
      z-index: 2;
  }
</style>
