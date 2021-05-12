<template>
   <q-layout >
      <q-page-container class="bg-grey-1">
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "auth-layout",
});
</script>
