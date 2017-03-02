<!-- Vue application -->
<template>

  <div class="container">

    Here's a <b>FlexGrid</b> with auto-generated columns:

    <wj-flex-grid
     :items-source="view">
      <wj-flex-grid-column binding="name" header="Name"></wj-flex-grid-column>
      <wj-flex-grid-column binding="date" header="Date"></wj-flex-grid-column>
      <wj-flex-grid-column binding="sales" header="Sales"></wj-flex-grid-column>
      <wj-flex-grid-column binding="expenses" header="Expenses"></wj-flex-grid-column>
    </wj-flex-grid>

  </div>
</template>

<script lang="ts">
  import WijmoTest from './WijmoTest.ts'
  export default WijmoTest
</script>
