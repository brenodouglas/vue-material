<template>
  <ul class="nav navbar-nav navbar-right">
    <li>
      <nuxt-link to="/cart" class="navbar-nav__link-icon ">
        <span class="custom-icon icon-car"></span>
      </nuxt-link>
    </li>
    <li>
      <a href="#" class="navbar-nav__link-icon">
        <span class="custom-icon icon-search"></span>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ENG
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><a href="#">ENG</a></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
