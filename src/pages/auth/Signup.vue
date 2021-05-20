<template>
   <q-page class="auth row items-center justify-center q-pa-sm">
      <q-card class="auth__card q-px-xl q-py-lg">
         <q-card-section>
            <h1 class="text-h4 q-mt-none q-mb-xl">Signup.</h1>
            <q-form @submit.prevent="onSingup" class="q-gutter-md column">
               <q-input
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  outlined
                  v-model="name"
                  label="full name"
                  :rules="[
                     (val) =>
                        (val && val.length > 0) || 'full name is required',
                  ]"
               />

               <q-input
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  outlined
                  v-model="email"
                  label="email"
                  :rules="[
                     (val) => (val && val.length > 0) || 'email is required',
                  ]"
               />

               <q-input
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                  outlined
                  v-model="password"
                  label="password"
                  :type="isPwd ? 'password' : 'text'"
                  :rules="[
                     (val) => (val && val.length > 0) || 'password is required',
                     (val) => val.length >= 8 || 'password legth minimum 8',
                  ]"
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
                  <q-btn
                     class="block full-width"
                     label="Signup"
                     type="submit"
                     color="primary"
                  />
                  <div class="column items-center q-mt-md">
                     <label>
                        Already have an account?
                        <router-link
                           :to="{ path: 'signin' }"
                           class="text-weight-bold text-primary"
                        >
                           Signin
                        </router-link>
                     </label>
                  </div>
               </div>
            </q-form>
         </q-card-section>
      </q-card>
   </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { route } from "quasar/wrappers";

export default defineComponent({
   name: "signup",
   setup() {
      const $q = useQuasar();
      const store = useStore();
      const isPwd = ref(true);
      const name = ref(null);
      const email = ref(null);
      const password = ref(null);

      const onSingup = async () => {
         console.log(1);
         const result = await store.dispatch("authModel/signup", {
            name: name.value,
            email: email.value,
            password: password.value,
         });
         console.log(result);
         if (result && result.success) {
            route.push('')
         } else {
            $q.notify({
               type: "negative",
               position: "top",
               message: result.error || result.errors.message || "something broke!!",
            });
         }
      };

      return { isPwd, name, email, password, onSingup };
   },
});
</script>
