<template>
  <div class="main-header">
    <b-row>
      <b-col cols="2">
        <img class="main-logo" src="@/assets/qparamlogo.png" />
      </b-col>
      <b-col cols="10" class="btns">
        <span
          @click="activate(index)"
          class="menu-btns"
          :class="{'menu-active':items.active}"
          v-for="(items,index) in menu"
          :key="index"
        >{{items.name}}</span>
        <b-icon-search></b-icon-search>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "home",
          active: true,
          href: "/"
        },
        {
          name: "about",
          active: false,
          href: "/about"
        },
        {
          name: "courses",
          active: false,
          href: "/courses"
        },
        {
          name: "news",
          active: false,
          href: "/news"
        },
        {
          name: "placements",
          active: false,
          href: "/placements"
        },
        {
          name: "contact",
          active: false,
          href: "/contact"
        }
      ]
    };
  },
  mounted() {
    console.log("im in this page pa", this.$route.name);
    for (var a = 0; a < this.menu.length; a++) {
      if (this.menu[a].name === this.$route.name) {
        this.menu[a].active = true;
      } else {
        this.menu[a].active = false;
      }
    }
  },
  methods: {
    activate(b) {
      console.log("from activate function pa", a);
      for (var a = 0; a < this.menu.length; a++) {
        this.menu[a].active = false;
      }
      this.menu[b].active = true;
      this.$router.push({ path: this.menu[b].href });
    }
  }
};
</script>
<style scoped>
.main-header {
  width: 100vw;
  height: auto;
  padding: 1rem;

  border-bottom: 1px solid grey;
}
.main-logo {
  width: 10rem;
}
.btns {
  padding-top: 1rem;
  padding-left: 18rem;
}
.menu-btns {
  width: auto;
  /* outline: 1px solid black; */
  margin: 0 15px;
  /* box-shadow: -18px -10px 10px #FFFFFF; */
  border-radius: 15px;
  padding: 0.8rem 3rem;
  color: #364e61;
  text-transform: capitalize;
  cursor: pointer;
}
.menu-btns:hover {
  -webkit-box-shadow: 4px 10px 112px 0px rgba(219, 197, 219, 1);
  -moz-box-shadow: 4px 10px 112px 0px rgba(219, 197, 219, 1);
  box-shadow: 3px 6px 10px #c7c1c1;
  background: grey;
  color: white;
}
.menu-active {
  background: transparent linear-gradient(107deg, #fbfbfb 0%, #efeeee 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 3px 6px 10px #c7c1c1;
}
</style>