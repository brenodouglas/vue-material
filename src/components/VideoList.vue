<template>
  <md-whiteframe md-tag="section" :class="$style.sectionContent">
    <video-item />
  </md-whiteframe>
</template>

<script>
import VideoItem from './VideoItem';

export default {
  components: { VideoItem },
};
</script>

<style module>
.sectionContent {
  margin-top: 30px;
  padding: 15px;
}
</style>
