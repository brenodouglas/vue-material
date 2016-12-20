<template>
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button icon-button-toggle">
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
        <md-button class="md-fab md-mini" :class="$style.mdPlusButton">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </md-toolbar>
</template>

<script>
export default {
}
</script>

<style module>
.mdPlusButton {
  margin: 0;
  bottom: -20px;
  position: absolute !important;
  right: 0px !important;
}
</style>
