<template>
  <header>
    <nav class="navbar transparent navbar-float">
        <div class="collapse navbar-collapse">
          <div class="container">
            <div class="nav-item">
              <input type="checkbox" class="navbar__checkbox-toggle" name="toggle" value="true" />
              <ul class="navigation">
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/about">Roots</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/products">Products</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/recipts">Recipts</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/social">Social</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/benefits">Benefits</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/team">Team</a></li>
                  <li class="navigation__nav-item"><a href="http://104.236.248.144/contact">Contact</a></li>
              </ul>

              <button type="button" class="navbar-toggle collapsed" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div class="clearfix"></div>
            </div>
            <div class="nav-item">
              <a class="navbar-brand navbar-brand__float-center" href="http://104.236.248.144">
                <img src="images/logo.png" />
              </a>
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

export default {
  components: {
    NavIcons
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
