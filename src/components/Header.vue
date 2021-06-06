<template>
  <div>
    <b-navbar type="light" variant="light" fixed="top">
      <b-navbar-nav class="mx-2">
        <b-nav-item-dropdown variant="link" no-caret>
          <template #button-content>
            <div>
              <b-icon icon="justify"></b-icon>
            </div>
          </template>
          <b-dropdown-item>Logout</b-dropdown-item>
          <b-dropdown-item>Help</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-brand to="/translate/" class="mx-3">BocaVook</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      books: [],
    };
  },
};
</script>
