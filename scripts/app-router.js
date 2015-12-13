export function setupRouter(router) {

   router.map({
      '/test': {
         component: require('../dist/components/main.vue')
      }
   });

}
