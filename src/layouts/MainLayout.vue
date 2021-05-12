<template>
   <q-layout view="lHh Lpr lFf">
      <q-header  class="bg-white text-grey-10 shadow-1">
         <q-toolbar class="header row justify-between">
            <div class="row">
               <q-btn
                  flat
                  dense
                  round
                  icon="menu"
                  aria-label="Menu"
                  @click="toggleLeftDrawer"
                  class="header-humburger"
               />
            </div>

            <header-avatar></header-avatar>
         </q-toolbar>
      </q-header>

      <q-drawer
         v-model="leftDrawerOpen"
         show-if-above
         bordered
         class="bg-blue-grey-10 text-grey-4"
      >
         <div class="header row items-center q-pa-md">
            <h5 class="text-h5 no-margin">Vuefile</h5>
         </div>

         <q-list>
            <q-item-label header class="text-grey-8">
               Essential Links
            </q-item-label>

            <EssentialLink
               v-for="link in essentialLinks"
               :key="link.title"
               v-bind="link"
            />
         </q-list>
      </q-drawer>

      <q-page-container class="bg-grey-2">
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import HeaderAvatar from "components/HeaderAvatar.vue";

const linksList = [
   {
      title: "Docs",
      icon: "school",
      link: "https://quasar.dev",
   },
   {
      title: "Github",
      icon: "code",
      link: "https://github.com/quasarframework",
   },
   {
      title: "Discord Chat Channel",
      icon: "chat",
      link: "https://chat.quasar.dev",
   },
   {
      title: "Forum",
      icon: "record_voice_over",
      link: "https://forum.quasar.dev",
   },
   {
      title: "Twitter",
      icon: "rss_feed",
      link: "https://twitter.quasar.dev",
   },
   {
      title: "Facebook",
      icon: "public",
      link: "https://facebook.quasar.dev",
   },
   {
      title: "Quasar Awesome",
      icon: "favorite",
      link: "https://awesome.quasar.dev",
   },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
   name: "MainLayout",

   components: {
      EssentialLink,
      HeaderAvatar,
   },

   setup() {
      const leftDrawerOpen = ref(false);

      return {
         essentialLinks: linksList,
         leftDrawerOpen,
         toggleLeftDrawer() {
            leftDrawerOpen.value = !leftDrawerOpen.value;
         },
      };
   },
});
</script>

<style lang="scss" scoped>
.header {
   height: 70px;
}
.header-humburger {
   display: none;
   @media (max-width: $breakpoint-md-min) {
      display: flex;
   }
}
</style>
