<template>
   <q-page class="auth row items-center justify-center q-pa-sm">
      <q-card class="auth__card q-pa-lg">
         <q-card-section>
            <q-form class="q-gutter-md column">
               <q-input
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  v-model="username"
                  outlined
                  label="username"
               />

               <q-input
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  v-model="password"
                  outlined
                  label="password"
                  :type="isPwd ? 'password' : 'text'"
               >
                  <template v-slot:append>
                     <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                     />
                  </template>
               </q-input>

               <div class="q-mt-lg">
                  <q-btn class="block full-width" label="Login" type="submit" color="primary" />
               </div>
            </q-form>
         </q-card-section>
      </q-card>
   </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
   name: "login",
   setup() {
      const isPwd = ref(true);
      const password = ref("");
      const username = ref("");

      return { isPwd, password, username };
   },
});
</script>

<style lang="scss" scoped>
.auth {
   .auth__card {
      width: 500px;
      max-width: 500px;
   }
}
</style>
