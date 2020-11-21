<template>
  <a-layout id="global-layout">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"> nav 1 </a-menu-item>
        <a-menu-item key="2"> nav 2 </a-menu-item>
        <a-menu-item key="3"> nav 3 </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div>
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer class="footer">
      Ant Design Template © 2020 Created by carie8655
    </a-layout-footer>
  </a-layout>
</template>

<style>
#global-layout {
  min-height: 100vh;
}

.header {
  padding: 0px 24px;
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.content {
  padding: 24px;
}

.breadcrumb {
  margin-bottom: 24px;
}

.footer {
  text-align: center;
}
</style>
