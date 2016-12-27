<template>
  <header>
    <nav class="navbar transparent navbar-float">
      <div class="collapse navbar-collapse">
        <div class="container">
          <div class="nav-item">
            <input type="checkbox" class="navbar__checkbox-toggle" name="toggle" value="true" />

            <navigation-list />

            <button type="button" class="navbar-toggle collapsed" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div class="clearfix"></div>
          </div>

          <div class="nav-item">
            <nuxt-link class="navbar-brand navbar-brand__float-center" to="/">
              <img src="images/logo.png" />
            </nuxt-link>
          </div>
          <div class="nav-item">
            <nav-icons />
          </div>
        </div>
      </div>
    </nav>
    <div class="clearfix"></div>
  </header>
</template>

<script>
import NavIcons from './nav-icons'
import NavigationList from './navigation-list'

export default {
  components: {
    NavIcons,
    NavigationList
  }
}
</script>

<style scoped>
.mdPlusButton {
  margin: 0;
  bottom: -20px;
  position: absolute !important;
  right: 0px !important;
}
</style>
