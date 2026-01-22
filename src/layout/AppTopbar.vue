<script setup lang="ts">
import { useLayout } from '@/layout/composables/layout'
import AppConfigurator from './AppConfigurator.vue'
import InlineSvg from '@/components/InlineSvg.vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import { ref } from 'vue'

const menu = ref()
const items = ref([
  {
    label: 'Profile',
    items: [
      {
        label: 'My info',
        icon: 'pi pi-id-card',
        route: '/pages/myinfo',
      },
    ],
  },
])

const toggle = (event: Event) => {
  menu.value.toggle(event)
}
const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout()
</script>

<template>
  <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
        <i class="pi pi-bars"></i>
      </button>
      <router-link to="/" class="layout-topbar-logo">
        <InlineSvg name="logo-envo-purple" />
        <span>EMS</span>
      </router-link>
    </div>

    <div class="layout-topbar-actions">
      <div class="layout-config-menu">
        <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
          <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
        </button>
        <div class="relative">
          <button
            v-styleclass="{
              selector: '@next',
              enterFromClass: 'hidden',
              enterActiveClass: 'p-anchored-overlay-enter-active',
              leaveToClass: 'hidden',
              leaveActiveClass: 'p-anchored-overlay-leave-active',
              hideOnOutsideClick: true,
            }"
            type="button"
            class="layout-topbar-action layout-topbar-action-highlight"
          >
            <i class="pi pi-palette"></i>
          </button>
          <AppConfigurator />
        </div>
      </div>

      <button
        class="layout-topbar-menu-button layout-topbar-action"
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          enterActiveClass: 'p-anchored-overlay-enter-active',
          leaveToClass: 'hidden',
          leaveActiveClass: 'p-anchored-overlay-leave-active',
          hideOnOutsideClick: true,
        }"
      >
        <i class="pi pi-ellipsis-v"></i>
      </button>

      <div class="layout-topbar-menu hidden lg:block">
        <div class="layout-topbar-menu-content">
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-calendar"></i>
            <span>Calendar</span>
          </button>
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-inbox"></i>
            <span>Messages</span>
          </button>
          <Button
            @click="toggle"
            icon="pi pi-user"
            size="large"
            variant="text"
            rounded
            aria-label="User"
            aria-haspopup="true"
            aria-controls="overlay_menu_user"
          />
          <Menu ref="menu" id="overlay_menu_user" :model="items" :popup="true">
            <template #item="{ item, props }">
              <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                </a>
              </router-link>
              <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </template>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>
