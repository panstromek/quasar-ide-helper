<template>
  <div id="q-app" class="q-pa-sm">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    /**
     * @this {Vue}
     */
    name () {
this.$q.fullscreen.exi
    }
  }
}
</script>

<style>
</style>

<test lang="jest">
  it('should work', () => {
    console.log('constructor')
  })
</test>
