<script setup lang="ts">
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

interface MenuItem {
  label?: string;
  icon?: string;
  to?: string;
  url?: string;
  target?: string;
  class?: string;
  separator?: boolean;
  path?: string;
  items?: MenuItem[];
}

const model = ref<MenuItem[]>([
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/'
      }
    ]
  },
  {
    label: 'UI Components',
    path: '/uikit',
    items: [
      {
        label: 'Form Layout',
        icon: 'pi pi-fw pi-id-card',
        to: '/uikit/formlayout'
      },
    ]
  },
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    path: '/pages',
    items: [
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        to: '/pages/notfound'
      },
      {
        label: 'Empty',
        icon: 'pi pi-fw pi-circle-off',
        to: '/pages/empty'
      }
    ]
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
