<script>
import { computed, defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";
import { useRoute } from "vue-router";

@Options({
  components: {},
  computed: {},
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false },
  },
})
export default class HeaderLink extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.setup();
  }

  setup(props) {
    const route = useRoute();
    const active = computed(() =>
      props.exact ? route.path === props.to : route.path.startsWith(props.to)
    );

    console.log(active);
    return { active };
  }
}
// export default defineComponent({
//   props: {
//     to: { type: String, required: true },
//     exact: { type: Boolean, default: false },
//   },
//   setup(props) {
//     const route = useRoute();
//     const active = computed(() =>
//       props.exact ? route.path === props.to : route.path.startsWith(props.to)
//     );
//     return { active };
//   },
// });
</script>

<template>
  <div style="width: 150px">
    <router-link :to="to" class="nav-link" :class="active ? 'font-weight-bold' : null">
      <slot />
    </router-link>
  </div>
</template>
