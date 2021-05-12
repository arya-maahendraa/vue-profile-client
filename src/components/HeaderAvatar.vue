<template>
   <div class="">
      <q-btn round flat>
         <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
         </q-avatar>
         <q-menu>
            <div class="column no-wrap q-pa-md">
               <div class="no-wrap items-center">
                  <div class="q-pa-sm column">
                     <div
                        class="text-subtitle1 text-no-wrap text-weight-medium"
                     >
                        Arya mahendra
                     </div>
                     <div class="text-subtitle2 text-weight-light">Admin</div>

                     <q-btn
                        class="q-mt-md"
                        color="primary"
                        label="Logout"
                        size="sm"
                        v-close-popup
                     />
                  </div>
               </div>

               <div class="column">
                  <div class="text-subtitle1 q-mb-sm q-mt-md">Settings</div>
                  <q-btn
                     align="left"
                     flat
                     no-caps
                     no-wrap
                     dense
                     label="Ubah profile"
                     class="q-mb-sm"
                  />
                  <q-btn
                     align="left"
                     flat
                     no-caps
                     no-wrap
                     dense
                     label="Ubah Password"
                     class="q-mb-sm"
                  />
               </div>
            </div>
         </q-menu>
      </q-btn>
   </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
   name: "header-avatar",
});
</script>
