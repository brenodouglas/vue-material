<template>
  <md-card md-with-hover :class="$style.mdCard">
    <md-card-header>
      <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div>
    </md-card-header>

    <md-card-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
    </md-card-content>

    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
};
</script>

<style module>
.mdCard {
  width: 100%;
  max-width: 320px;
  margin: 0 4px 16px;
  display: inline-block !important;
  vertical-align: top;
}
</style>
