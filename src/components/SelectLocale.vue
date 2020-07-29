<template>
  <div>
    <b-form-select v-model="$i18n.locale" :options="langs" class="btn btn-outline-primary">
    </b-form-select>
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return { langs: ['en', 'hi'] }
  }
}
</script>