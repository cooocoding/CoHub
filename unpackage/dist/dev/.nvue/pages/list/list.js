import { r as resolveEasycom, a as requireNativePlugin, f as formatAppLog, W as Ws, _ as __easycom_1 } from "../../uni-search-bar.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, resolveDynamicComponent, createElementVNode, createVNode, createCommentVNode, toDisplayString, Fragment, renderSlot, renderList, withModifiers, resolveComponent, withCtx } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import "vuex";
const _style_0$4 = { "cmd-icon": { "": { "fontFamily": "cmdicons", "fontWeight": "400", "fontVariant": "normal", "textTransform": "none", "textRendering": "auto", "textAlign": "center", "lineHeight": 1, "fontSize": 55, "WebkitFontSmoothing": "antialiased", "verticalAlign": "middle" } }, "cmd-icon-add": { "": { "content::before": '"\\e960"' } }, "cmd-icon-add-circle": { "": { "content::before": '"\\e901"' } }, "cmd-icon-subtract": { "": { "content::before": '"\\e962"' } }, "cmd-icon-subtract-circle": { "": { "content::before": '"\\e961"' } }, "cmd-icon-align-center": { "": { "content::before": '"\\e902"' } }, "cmd-icon-align-left": { "": { "content::before": '"\\e903"' } }, "cmd-icon-align-right": { "": { "content::before": '"\\e904"' } }, "cmd-icon-arrow-down": { "": { "content::before": '"\\e905"' } }, "cmd-icon-arrow-left": { "": { "content::before": '"\\e907"' } }, "cmd-icon-arrow-right": { "": { "content::before": '"\\e908"' } }, "cmd-icon-arrow-up": { "": { "content::before": '"\\e909"' } }, "cmd-icon-bell": { "": { "content::before": '"\\e90a"' } }, "cmd-icon-blocked": { "": { "content::before": '"\\e90b"' } }, "cmd-icon-bookmark": { "": { "content::before": '"\\e90c"' } }, "cmd-icon-bullet-list": { "": { "content::before": '"\\e90d"' } }, "cmd-icon-calendar": { "": { "content::before": '"\\e90e"' } }, "cmd-icon-camera": { "": { "content::before": '"\\e90f"' } }, "cmd-icon-check-circle": { "": { "content::before": '"\\e910"' } }, "cmd-icon-chevron-down": { "": { "content::before": '"\\e911"' } }, "cmd-icon-chevron-left": { "": { "content::before": '"\\e912"' } }, "cmd-icon-chevron-right": { "": { "content::before": '"\\e913"' } }, "cmd-icon-chevron-up": { "": { "content::before": '"\\e914"' } }, "cmd-icon-clock": { "": { "content::before": '"\\e915"' } }, "cmd-icon-close-circle": { "": { "content::before": '"\\e916"' } }, "cmd-icon-close": { "": { "content::before": '"\\e917"' } }, "cmd-icon-credit-card": { "": { "content::before": '"\\e918"' } }, "cmd-icon-download-cloud": { "": { "content::before": '"\\e919"' } }, "cmd-icon-download": { "": { "content::before": '"\\e91a"' } }, "cmd-icon-edit": { "": { "content::before": '"\\e91b"' } }, "cmd-icon-equalizer": { "": { "content::before": '"\\e91c"' } }, "cmd-icon-external-link": { "": { "content::before": '"\\e91d"' } }, "cmd-icon-eye": { "": { "content::before": '"\\e91e"' } }, "cmd-icon-file-audio": { "": { "content::before": '"\\e91f"' } }, "cmd-icon-file-code": { "": { "content::before": '"\\e920"' } }, "cmd-icon-file-generic": { "": { "content::before": '"\\e921"' } }, "cmd-icon-file-jpg": { "": { "content::before": '"\\e923"' } }, "cmd-icon-file-new": { "": { "content::before": '"\\e924"' } }, "cmd-icon-file-png": { "": { "content::before": '"\\e925"' } }, "cmd-icon-file-svg": { "": { "content::before": '"\\e926"' } }, "cmd-icon-file-video": { "": { "content::before": '"\\e927"' } }, "cmd-icon-filter": { "": { "content::before": '"\\e928"' } }, "cmd-icon-folder": { "": { "content::before": '"\\e929"' } }, "cmd-icon-font-color": { "": { "content::before": '"\\e92a"' } }, "cmd-icon-heart": { "": { "content::before": '"\\e92b"' } }, "cmd-icon-help": { "": { "content::before": '"\\e92c"' } }, "cmd-icon-home": { "": { "content::before": '"\\e92d"' } }, "cmd-icon-image": { "": { "content::before": '"\\e92e"' } }, "cmd-icon-iphone-x": { "": { "content::before": '"\\e92f"' } }, "cmd-icon-iphone": { "": { "content::before": '"\\e930"' } }, "cmd-icon-lightning-bolt": { "": { "content::before": '"\\e931"' } }, "cmd-icon-link": { "": { "content::before": '"\\e932"' } }, "cmd-icon-list": { "": { "content::before": '"\\e933"' } }, "cmd-icon-lock": { "": { "content::before": '"\\e934"' } }, "cmd-icon-mail": { "": { "content::before": '"\\e935"' } }, "cmd-icon-map-pin": { "": { "content::before": '"\\e936"' } }, "cmd-icon-menu": { "": { "content::before": '"\\e937"' } }, "cmd-icon-message": { "": { "content::before": '"\\e938"' } }, "cmd-icon-money": { "": { "content::before": '"\\e939"' } }, "cmd-icon-next": { "": { "content::before": '"\\e93a"' } }, "cmd-icon-numbered-list": { "": { "content::before": '"\\e93b"' } }, "cmd-icon-pause": { "": { "content::before": '"\\e93c"' } }, "cmd-icon-phone": { "": { "content::before": '"\\e93d"' } }, "cmd-icon-play": { "": { "content::before": '"\\e93e"' } }, "cmd-icon-playlist": { "": { "content::before": '"\\e93f"' } }, "cmd-icon-prev": { "": { "content::before": '"\\e940"' } }, "cmd-icon-reload": { "": { "content::before": '"\\e941"' } }, "cmd-icon-repecmd-play": { "": { "content::before": '"\\e942"' } }, "cmd-icon-search": { "": { "content::before": '"\\e943"' } }, "cmd-icon-settings": { "": { "content::before": '"\\e944"' } }, "cmd-icon-share-2": { "": { "content::before": '"\\e945"' } }, "cmd-icon-share": { "": { "content::before": '"\\e946"' } }, "cmd-icon-shopping-bag-2": { "": { "content::before": '"\\e947"' } }, "cmd-icon-shopping-bag": { "": { "content::before": '"\\e948"' } }, "cmd-icon-shopping-cart": { "": { "content::before": '"\\e949"' } }, "cmd-icon-shuffle-play": { "": { "content::before": '"\\e94a"' } }, "cmd-icon-sketch": { "": { "content::before": '"\\e94b"' } }, "cmd-icon-sound": { "": { "content::before": '"\\e94c"' } }, "cmd-icon-star": { "": { "content::before": '"\\e94d"' } }, "cmd-icon-stop": { "": { "content::before": '"\\e94e"' } }, "cmd-icon-streaming": { "": { "content::before": '"\\e94f"' } }, "cmd-icon-tag": { "": { "content::before": '"\\e950"' } }, "cmd-icon-tags": { "": { "content::before": '"\\e951"' } }, "cmd-icon-text-italic": { "": { "content::before": '"\\e952"' } }, "cmd-icon-text-strikethrough": { "": { "content::before": '"\\e953"' } }, "cmd-icon-text-underline": { "": { "content::before": '"\\e954"' } }, "cmd-icon-trash": { "": { "content::before": '"\\e955"' } }, "cmd-icon-upload": { "": { "content::before": '"\\e956"' } }, "cmd-icon-user": { "": { "content::before": '"\\e957"' } }, "cmd-icon-video": { "": { "content::before": '"\\e958"' } }, "cmd-icon-volume-minus": { "": { "content::before": '"\\e959"' } }, "cmd-icon-volume-off": { "": { "content::before": '"\\e95a"' } }, "cmd-icon-volume-plus": { "": { "content::before": '"\\e95b"' } }, "cmd-icon-analytics": { "": { "content::before": '"\\e95c"' } }, "cmd-icon-star-2": { "": { "content::before": '"\\e95d"' } }, "cmd-icon-check": { "": { "content::before": '"\\e95e"' } }, "cmd-icon-heart-2": { "": { "content::before": '"\\e95f"' } }, "cmd-icon-loading": { "": { "content::before": '"\\e967"' } }, "cmd-icon-loading-2": { "": { "content::before": '"\\e966"' } }, "cmd-icon-loading-3": { "": { "content::before": '"\\e963"' } }, "cmd-icon-alert-circle": { "": { "content::before": '"\\e964"' } }, "@FONT-FACE": [{ "fontFamily": "cmdicons", "src": 'url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff")' }] };
const _sfc_main$4 = {
  name: "cmd-icon",
  props: {
    /**
     * 自定义字体图标库前缀
     */
    prefixClass: {
      type: String,
      default: "cmd-icon"
    },
    /**
     * 图标类型
     */
    type: String,
    /**
     * 图标颜色
     */
    color: {
      type: String,
      default: "#fff"
    },
    /**
     * 图标大小
     */
    size: {
      type: [Number, String],
      default: "24"
    }
  },
  computed: {
    setStyle() {
      return `color:${this.color};
				font-size:${this.size}px;
				line-height:${this.size}px`;
    }
  },
  methods: {
    $_click(e) {
      this.$emit("click", e);
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass([$props.prefixClass, $props.prefixClass + "-" + $props.type]),
      style: normalizeStyle($options.setStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.$_click && $options.$_click(...args)),
      renderWhole: true
    },
    null,
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$4]], ["__file", "D:/project/CoHub/CoHub/components/cmd-icon/cmd-icon.vue"]]);
const _style_0$3 = { "cmd-nav-bar-fixed": { "": { "position": "fixed", "top": 0, "left": 0, "right": 0, "zIndex": 1e3, "backgroundColor": "#ffffff" } }, "status-bar": { "": { "boxSizing": "border-box", "width": 80, "fontSize": 55, "marginBottom": "-3rpx", "backgroundColor": "rgba(0,0,0,0)" } }, "left-title": { "": { "fontWeight": "bold" } }, "cmd-nav-bar": { "": { "display": "flex", "alignItems": "center", "height": "120rpx", "lineHeight": "120rpx", "color": "#000000", "backgroundColor": "#ffffff", "boxShadow": "0 6rpx 6rpx -3rpx rgba(0, 0, 0, 0.2)" } }, "cmd-nav-bar-left": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "flex-start", "fontWeight": "900", "paddingTop": 16, "paddingLeft": -150 } }, "cmd-nav-bar-title": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "center", "fontWeight": "bold", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "cmd-nav-bar-right": { "": { "flex": 1, "height": 100, "display": "flex", "fontSize": 55, "justifyContent": "flex-end", "marginRight": "30rpx" } }, "cmd-nav-bar-left-icon": { "": { "marginRight": "10rpx" } }, "cmd-nav-bar-left-title": { "": { "fontSize": 50, "fontWeight": "bold", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" } }, "cmd-nav-bar-right-icon": { "": { "marginLeft": "20rpx", "fontWeight": "900" } }, "cmd-nav-bar-right-text": { "": { "marginLeft": "20rpx", "fontWeight": "900" } }, "cmd-nav-bar-avatar-container": { "": { "display": "flex" } }, "cmd-nav-bar-avatar": { "": { "width": "20rpx", "height": "20rpx", "borderRadius": 5, "marginLeft": "600rpx", "marginBottom": "20rpx" } } };
const _sfc_main$3 = {
  name: "cmd-nav-bar",
  components: {
    cmdIcon: __easycom_0$1
  },
  props: {
    /**
     * 固定到页面顶部
     */
    fixed: {
      type: Boolean,
      default: true
    },
    fontWeight: {
      type: String,
      default: "bold"
      // 默认字体粗细
    },
    /**
     * 文字图标颜色
     */
    fontSize: {
      type: String,
      default: ""
    },
    fontColor: {
      type: String,
      default: ""
    },
    /**
     * 导航栏背景颜色
     */
    backgroundColor: {
      type: String,
      default: ""
    },
    /**
     * 导航栏标题
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * 导航栏左侧返回按钮，默认点击返回上层
     */
    back: {
      type: Boolean,
      default: false
    },
    /**
     * 左侧文字可同显返回按钮
     */
    leftText: {
      type: String,
      default: ""
    },
    /**
     * 左侧显示标题，不可显示左侧文字图标
     */
    leftTitle: {
      type: String,
      default: ""
    },
    /**
     * 右侧文字
     */
    rightText: {
      type: String,
      default: ""
    },
    /**
     * 右侧文字颜色
     */
    rightColor: {
      type: String,
      default: ""
    },
    /**
     * 图标一，不可与返回按钮,左侧标题同显
     */
    iconOne: {
      type: String,
      default: ""
    },
    /**
     * 图标二
     */
    iconTwo: {
      type: String,
      default: ""
    },
    /**
     * 图标三，须显有图标二
     */
    iconThree: {
      type: String,
      default: ""
    },
    /**
     * 图标四，不可与右侧文字同显
     */
    iconFour: {
      type: String,
      default: ""
    },
    avatarUrl: {
      type: String,
      default: ""
    }
  },
  computed: {
    /**
     * 设置中心标题
     */
    setCenterTitle() {
      let centerTitle = "";
      if (this.title) {
        if (this.title.length > 8) {
          centerTitle = this.title.slice(0, 6) + "...";
        } else {
          centerTitle = this.title;
        }
      }
      return centerTitle;
    },
    /**
     * 设置标题图标颜色
     */
    setFontColor() {
      let fontColor = "#000";
      if (this.fontColor) {
        fontColor = this.fontColor;
      }
      return fontColor;
    },
    /**
     * 设置背景颜色
     */
    setBackgroundColor() {
      let backgroundColor = "#fff";
      if (this.backgroundColor) {
        backgroundColor = `background: ${this.backgroundColor};`;
      }
      return backgroundColor;
    }
  },
  methods: {
    /**
     * 图标一点击事件
     */
    $_iconOneClick() {
      if (this.back) {
        uni.navigateBack();
      } else {
        this.$emit("iconOne");
      }
    },
    /**
     * 图标二点击事件
     */
    $_iconTwoClick() {
      this.$emit("iconTwo");
    },
    /**
     * 图标三点击事件
     */
    $_iconThreeClick() {
      this.$emit("iconThree");
    },
    /**
     * 图标四点击事件
     */
    $_iconFourClick() {
      this.$emit("iconFour");
    },
    /**
     * 左侧文字点击事件
     */
    $_leftTextClick() {
      this.$emit("leftText");
    },
    /**
     * 右侧文字点击事件
     */
    $_rightTextClick() {
      this.$emit("rightText");
    },
    $_avatarClick() {
      uni.navigateTo({
        url: "/pages/ucenter/settings/settings"
      });
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cmd_icon = resolveEasycom(resolveDynamicComponent("cmd-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass($props.fixed ? "cmd-nav-bar-fixed" : ""),
      style: normalizeStyle($options.setBackgroundColor),
      renderWhole: true
    },
    [
      createElementVNode("view", { class: "status-bar" }),
      createElementVNode("view", { class: "cmd-nav-bar" }, [
        createElementVNode("view", { class: "cmd-nav-bar-left" }, [
          $props.back && !$props.leftTitle || $props.iconOne && !$props.leftTitle ? (openBlock(), createElementBlock("view", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.$_iconOneClick && $options.$_iconOneClick(...args)),
            class: "cmd-nav-bar-left-icon"
          }, [
            createVNode(_component_cmd_icon, {
              type: $props.back ? "chevron-left" : $props.iconOne,
              size: "50",
              color: $options.setFontColor
            }, null, 8, ["type", "color"])
          ])) : createCommentVNode("v-if", true),
          createElementVNode(
            "u-text",
            {
              style: normalizeStyle({ fontWeight: $props.fontWeight })
            },
            toDisplayString($props.leftTitle),
            5
            /* TEXT, STYLE */
          )
        ]),
        !$props.leftTitle ? (openBlock(), createElementBlock(
          "view",
          {
            key: 0,
            class: "cmd-nav-bar-title",
            style: normalizeStyle("color:" + $options.setFontColor)
          },
          [
            createElementVNode(
              "u-text",
              null,
              toDisplayString($options.setCenterTitle),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "cmd-nav-bar-right" }, [
          createElementVNode("view", {
            class: "avatar-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.$_avatarClick && $options.$_avatarClick(...args))
          }, [
            createElementVNode("u-image", {
              class: "avatar",
              src: $props.avatarUrl
            }, null, 8, ["src"])
          ]),
          $props.iconThree && $props.iconFour && !$props.rightText ? (openBlock(), createElementBlock("view", {
            key: 0,
            onClick: _cache[2] || (_cache[2] = (...args) => $options.$_iconFourClick && $options.$_iconFourClick(...args)),
            class: "cmd-nav-bar-right-icon",
            style: { "margin-left": "0" }
          }, [
            createVNode(_component_cmd_icon, {
              type: $props.iconFour,
              size: "24",
              color: $options.setFontColor
            }, null, 8, ["type", "color"])
          ])) : createCommentVNode("v-if", true),
          $props.iconTwo && $props.iconThree ? (openBlock(), createElementBlock("view", {
            key: 1,
            onClick: _cache[3] || (_cache[3] = (...args) => $options.$_iconThreeClick && $options.$_iconThreeClick(...args)),
            class: "cmd-nav-bar-right-icon"
          }, [
            createVNode(_component_cmd_icon, {
              type: $props.iconThree,
              size: "24",
              color: $options.setFontColor
            }, null, 8, ["type", "color"])
          ])) : createCommentVNode("v-if", true),
          $props.iconTwo ? (openBlock(), createElementBlock("view", {
            key: 2,
            onClick: _cache[4] || (_cache[4] = (...args) => $options.$_iconTwoClick && $options.$_iconTwoClick(...args)),
            class: "cmd-nav-bar-right-icon"
          }, [
            createVNode(_component_cmd_icon, {
              type: $props.iconTwo,
              size: "24",
              color: $options.setFontColor
            }, null, 8, ["type", "color"])
          ])) : createCommentVNode("v-if", true),
          $props.rightText ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 3,
              onClick: _cache[5] || (_cache[5] = (...args) => $options.$_rightTextClick && $options.$_rightTextClick(...args)),
              class: "cmd-nav-bar-right-text",
              style: normalizeStyle($props.rightColor != "" ? "color:" + $props.rightColor : "color:" + $options.setFontColor)
            },
            toDisplayString($props.rightText),
            5
            /* TEXT, STYLE */
          )) : createCommentVNode("v-if", true)
        ])
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "D:/project/CoHub/CoHub/components/cmd-nav-bar/cmd-nav-bar.vue"]]);
let mpMixins = {};
let bindIngXMixins = {};
const BindingX = requireNativePlugin("bindingx");
const dom = requireNativePlugin("dom");
const animation = requireNativePlugin("animation");
bindIngXMixins = {
  data() {
    return {};
  },
  watch: {
    show(newVal) {
      if (this.autoClose)
        return;
      if (this.stop)
        return;
      this.stop = true;
      if (newVal) {
        this.open(newVal);
      } else {
        this.close();
      }
    },
    leftOptions() {
      this.getSelectorQuery();
      this.init();
    },
    rightOptions(newVal) {
      this.init();
    }
  },
  created() {
    this.swipeaction = this.getSwipeAction();
    if (this.swipeaction && Array.isArray(this.swipeaction.children)) {
      this.swipeaction.children.push(this);
    }
  },
  mounted() {
    this.box = this.getEl(this.$refs["selector-box--hock"]);
    this.selector = this.getEl(this.$refs["selector-content--hock"]);
    this.leftButton = this.getEl(this.$refs["selector-left-button--hock"]);
    this.rightButton = this.getEl(this.$refs["selector-right-button--hock"]);
    this.init();
  },
  // beforeDestroy() {
  // 	this.swipeaction.children.forEach((item, index) => {
  // 		if (item === this) {
  // 			this.swipeaction.children.splice(index, 1)
  // 		}
  // 	})
  // },
  methods: {
    init() {
      this.$nextTick(() => {
        this.x = 0;
        this.button = {
          show: false
        };
        setTimeout(() => {
          this.getSelectorQuery();
        }, 200);
      });
    },
    onClick(index, item, position) {
      this.$emit("click", {
        content: item,
        index,
        position
      });
    },
    touchstart(e) {
      if (this.disabled)
        return;
      if (this.stop)
        return;
      this.stop = true;
      if (this.autoClose && this.swipeaction) {
        this.swipeaction.closeOther(this);
      }
      const leftWidth = this.button.left.width;
      const rightWidth = this.button.right.width;
      let expression = this.range(this.x, -rightWidth, leftWidth);
      let leftExpression = this.range(this.x - leftWidth, -leftWidth, 0);
      let rightExpression = this.range(this.x + rightWidth, 0, rightWidth);
      this.eventpan = BindingX.bind({
        anchor: this.box,
        eventType: "pan",
        props: [{
          element: this.selector,
          property: "transform.translateX",
          expression
        }, {
          element: this.leftButton,
          property: "transform.translateX",
          expression: leftExpression
        }, {
          element: this.rightButton,
          property: "transform.translateX",
          expression: rightExpression
        }]
      }, (e2) => {
        if (e2.state === "end") {
          this.x = e2.deltaX + this.x;
          this.isclick = true;
          this.bindTiming(e2.deltaX);
        }
      });
    },
    touchend(e) {
      if (this.isopen !== "none" && !this.isclick) {
        this.open("none");
      }
    },
    bindTiming(x) {
      const left = this.x;
      const leftWidth = this.button.left.width;
      const rightWidth = this.button.right.width;
      const threshold = this.threshold;
      if (!this.isopen || this.isopen === "none") {
        if (left > threshold) {
          this.open("left");
        } else if (left < -threshold) {
          this.open("right");
        } else {
          this.open("none");
        }
      } else {
        if (x > -leftWidth && x < 0 || x > rightWidth) {
          if (x > -threshold && x < 0 || x - rightWidth > threshold) {
            this.open("left");
          } else {
            this.open("none");
          }
        } else {
          if (x < threshold && x > 0 || x + leftWidth < -threshold) {
            this.open("right");
          } else {
            this.open("none");
          }
        }
      }
    },
    /**
     * 移动范围
     * @param {Object} num
     * @param {Object} mix
     * @param {Object} max
     */
    range(num, mix, max) {
      return `min(max(x+${num}, ${mix}), ${max})`;
    },
    /**
     * 开启swipe
     */
    open(type) {
      this.animation(type);
    },
    /**
     * 关闭swipe
     */
    close() {
      this.animation("none");
    },
    /**
     * 开启关闭动画
     * @param {Object} type
     */
    animation(type) {
      const leftWidth = this.button.left.width;
      const rightWidth = this.button.right.width;
      if (this.eventpan && this.eventpan.token) {
        BindingX.unbind({
          token: this.eventpan.token,
          eventType: "pan"
        });
      }
      switch (type) {
        case "left":
          Promise.all([
            this.move(this.selector, leftWidth),
            this.move(this.leftButton, 0),
            this.move(this.rightButton, rightWidth * 2)
          ]).then(() => {
            this.setEmit(leftWidth, type);
          });
          break;
        case "right":
          Promise.all([
            this.move(this.selector, -rightWidth),
            this.move(this.leftButton, -leftWidth * 2),
            this.move(this.rightButton, 0)
          ]).then(() => {
            this.setEmit(-rightWidth, type);
          });
          break;
        default:
          Promise.all([
            this.move(this.selector, 0),
            this.move(this.leftButton, -leftWidth),
            this.move(this.rightButton, rightWidth)
          ]).then(() => {
            this.setEmit(0, type);
          });
      }
    },
    setEmit(x, type) {
      const leftWidth = this.button.left.width;
      const rightWidth = this.button.right.width;
      this.isopen = this.isopen || "none";
      this.stop = false;
      this.isclick = false;
      if (this.isopen !== type && this.x !== x) {
        if (type === "left" && leftWidth > 0) {
          this.$emit("change", "left");
        }
        if (type === "right" && rightWidth > 0) {
          this.$emit("change", "right");
        }
        if (type === "none") {
          this.$emit("change", "none");
        }
      }
      this.x = x;
      this.isopen = type;
    },
    move(ref, value) {
      return new Promise((resolve, reject) => {
        animation.transition(ref, {
          styles: {
            transform: `translateX(${value})`
          },
          duration: 150,
          //ms
          timingFunction: "linear",
          needLayout: false,
          delay: 0
          //ms
        }, function(res) {
          resolve(res);
        });
      });
    },
    /**
     * 获取ref
     * @param {Object} el
     */
    getEl(el) {
      return el.ref;
    },
    /**
     * 获取节点信息
     */
    getSelectorQuery() {
      Promise.all([
        this.getDom("left"),
        this.getDom("right")
      ]).then((data) => {
        let show = "none";
        if (this.autoClose) {
          show = "none";
        } else {
          show = this.show;
        }
        if (show === "none")
          ;
        else {
          this.open(show);
        }
      });
    },
    getDom(str) {
      return new Promise((resolve, reject) => {
        dom.getComponentRect(this.$refs[`selector-${str}-button--hock`], (data) => {
          if (data) {
            this.button[str] = data.size;
            resolve(data);
          } else {
            reject();
          }
        });
      });
    }
  }
};
const bindingx = bindIngXMixins;
let otherMixins = {};
const _style_0$2 = { "uni-swipe": { "": { "position": "relative" } }, "uni-swipe_box": { "": { "position": "relative" } }, "uni-swipe_text--center": { "": { "width": 100 } }, "uni-swipe_button-group": { "": { "flexDirection": "row", "position": "absolute", "top": 0, "bottom": 0 } }, "button-group--left": { "": { "left": 0, "transform": "translateX(-100%)" } }, "button-group--right": { "": { "right": 0, "transform": "translateX(100%)" } }, "uni-swipe_button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20 } }, "uni-swipe_button-text": { "": { "fontSize": 12 } }, "ani": { "": { "transitionProperty": "transform", "transitionDuration": 300, "transitionTimingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } }, "@TRANSITION": { "ani": { "property": "transform", "duration": 300, "timingFunction": "cubic-bezier(0.165,0.84,0.44,1)" } } };
const block0 = {};
const block1 = {};
const _sfc_main$2 = {
  mixins: [mpMixins, bindingx, otherMixins],
  emits: ["click", "change"],
  props: {
    // 控制开关
    show: {
      type: String,
      default: "none"
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否自动关闭
    autoClose: {
      type: Boolean,
      default: true
    },
    // 滑动缺省距离
    threshold: {
      type: Number,
      default: 20
    },
    // 左侧按钮内容
    leftOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    // 右侧按钮内容
    rightOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  // TODO vue3
  unmounted() {
    this.__isUnmounted = true;
    this.uninstall();
  },
  methods: {
    uninstall() {
      if (this.swipeaction) {
        this.swipeaction.children.forEach((item, index) => {
          if (item === this) {
            this.swipeaction.children.splice(index, 1);
          }
        });
      }
    },
    /**
     * 获取父元素实例
     */
    getSwipeAction(name = "uniSwipeAction") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
      createCommentVNode(" app nvue端 使用 bindingx "),
      createElementVNode(
        "view",
        {
          ref: "selector-box--hock",
          class: "uni-swipe",
          onHorizontalpan: _cache[0] || (_cache[0] = (...args) => _ctx.touchstart && _ctx.touchstart(...args)),
          onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.touchend && _ctx.touchend(...args))
        },
        [
          createElementVNode(
            "view",
            {
              ref: "selector-left-button--hock",
              class: "uni-swipe_button-group button-group--left"
            },
            [
              renderSlot(_ctx.$slots, "left", {}, () => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($props.leftOptions, (item, index) => {
                    return openBlock(), createElementBlock("view", {
                      key: index,
                      style: normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onClick: withModifiers(($event) => _ctx.onClick(index, item, "left"), ["stop"])
                    }, [
                      createElementVNode(
                        "u-text",
                        {
                          class: "uni-swipe_button-text",
                          style: normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 12, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            512
            /* NEED_PATCH */
          ),
          createElementVNode(
            "view",
            {
              ref: "selector-right-button--hock",
              class: "uni-swipe_button-group button-group--right"
            },
            [
              renderSlot(_ctx.$slots, "right", {}, () => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($props.rightOptions, (item, index) => {
                    return openBlock(), createElementBlock("view", {
                      key: index,
                      style: normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onClick: withModifiers(($event) => _ctx.onClick(index, item, "right"), ["stop"])
                    }, [
                      createElementVNode(
                        "u-text",
                        {
                          class: "uni-swipe_button-text",
                          style: normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 12, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            512
            /* NEED_PATCH */
          ),
          createElementVNode(
            "view",
            {
              ref: "selector-content--hock",
              class: "uni-swipe_box"
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            512
            /* NEED_PATCH */
          )
        ],
        544
        /* NEED_HYDRATION, NEED_PATCH */
      ),
      createCommentVNode(" 其他平台使用 js ，长列表性能可能会有影响")
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
if (typeof block0 === "function")
  block0(_sfc_main$2);
if (typeof block1 === "function")
  block1(_sfc_main$2);
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "D:/project/CoHub/CoHub/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
const _style_0$1 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$1 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/project/CoHub/CoHub/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
var isIos;
isIos = plus.os.name == "iOS";
function judgeIosPermissionPush() {
  var result = false;
  var UIApplication = plus.ios.import("UIApplication");
  var app = UIApplication.sharedApplication();
  var enabledTypes = 0;
  if (app.currentUserNotificationSettings) {
    var settings = app.currentUserNotificationSettings();
    enabledTypes = settings.plusGetAttribute("types");
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:19", "enabledTypes1:" + enabledTypes);
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:21", "推送权限没有开启");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:24", "已经开启推送功能!");
    }
    plus.ios.deleteObject(settings);
  } else {
    enabledTypes = app.enabledRemoteNotificationTypes();
    if (enabledTypes == 0) {
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:30", "推送权限没有开启!");
    } else {
      result = true;
      formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:33", "已经开启推送功能!");
    }
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:35", "enabledTypes2:" + enabledTypes);
  }
  plus.ios.deleteObject(app);
  plus.ios.deleteObject(UIApplication);
  return result;
}
function judgeIosPermissionLocation() {
  var result = false;
  var cllocationManger = plus.ios.import("CLLocationManager");
  var status = cllocationManger.authorizationStatus();
  result = status != 2;
  plus.ios.deleteObject(cllocationManger);
  return result;
}
function judgeIosPermissionRecord() {
  var result = false;
  var avaudiosession = plus.ios.import("AVAudioSession");
  var avaudio = avaudiosession.sharedInstance();
  var permissionStatus = avaudio.recordPermission();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:70", "permissionStatus:" + permissionStatus);
  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:72", "麦克风权限没有开启");
  } else {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:75", "麦克风权限已经开启");
  }
  plus.ios.deleteObject(avaudiosession);
  return result;
}
function judgeIosPermissionCamera() {
  var result = false;
  var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
  var authStatus = AVCaptureDevice.authorizationStatusForMediaType("vide");
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:86", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:89", "相机权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:91", "相机权限没有开启");
  }
  plus.ios.deleteObject(AVCaptureDevice);
  return result;
}
function judgeIosPermissionPhotoLibrary() {
  var result = false;
  var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
  var authStatus = PHPhotoLibrary.authorizationStatus();
  formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:102", "authStatus:" + authStatus);
  if (authStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:105", "相册权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:107", "相册权限没有开启");
  }
  plus.ios.deleteObject(PHPhotoLibrary);
  return result;
}
function judgeIosPermissionContact() {
  var result = false;
  var CNContactStore = plus.ios.import("CNContactStore");
  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
  if (cnAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:120", "通讯录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:122", "通讯录权限没有开启");
  }
  plus.ios.deleteObject(CNContactStore);
  return result;
}
function judgeIosPermissionCalendar() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:135", "日历权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:137", "日历权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function judgeIosPermissionMemo() {
  var result = false;
  var EKEventStore = plus.ios.import("EKEventStore");
  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
  if (ekAuthStatus == 3) {
    result = true;
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:150", "备忘录权限已经开启");
  } else {
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:152", "备忘录权限没有开启");
  }
  plus.ios.deleteObject(EKEventStore);
  return result;
}
function requestAndroidPermission(permissionID) {
  return new Promise((resolve, reject) => {
    plus.android.requestPermissions(
      [permissionID],
      // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
      function(resultObj) {
        var result = 0;
        for (var i = 0; i < resultObj.granted.length; i++) {
          var grantedPermission = resultObj.granted[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:167", "已获取的权限：" + grantedPermission);
          result = 1;
        }
        for (var i = 0; i < resultObj.deniedPresent.length; i++) {
          var deniedPresentPermission = resultObj.deniedPresent[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:172", "拒绝本次申请的权限：" + deniedPresentPermission);
          result = 0;
        }
        for (var i = 0; i < resultObj.deniedAlways.length; i++) {
          var deniedAlwaysPermission = resultObj.deniedAlways[i];
          formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:177", "永久拒绝申请的权限：" + deniedAlwaysPermission);
          result = -1;
        }
        resolve(result);
      },
      function(error) {
        formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:187", "申请权限错误：" + error.code + " = " + error.message);
        resolve({
          code: error.code,
          message: error.message
        });
      }
    );
  });
}
function judgeIosPermission(permissionID) {
  if (permissionID == "location") {
    return judgeIosPermissionLocation();
  } else if (permissionID == "camera") {
    return judgeIosPermissionCamera();
  } else if (permissionID == "photoLibrary") {
    return judgeIosPermissionPhotoLibrary();
  } else if (permissionID == "record") {
    return judgeIosPermissionRecord();
  } else if (permissionID == "push") {
    return judgeIosPermissionPush();
  } else if (permissionID == "contact") {
    return judgeIosPermissionContact();
  } else if (permissionID == "calendar") {
    return judgeIosPermissionCalendar();
  } else if (permissionID == "memo") {
    return judgeIosPermissionMemo();
  }
  return false;
}
function gotoAppPermissionSetting() {
  if (isIos) {
    var UIApplication = plus.ios.import("UIApplication");
    var application2 = UIApplication.sharedApplication();
    var NSURL2 = plus.ios.import("NSURL");
    var setting2 = NSURL2.URLWithString("app-settings:");
    application2.openURL(setting2);
    plus.ios.deleteObject(setting2);
    plus.ios.deleteObject(NSURL2);
    plus.ios.deleteObject(application2);
  } else {
    var Intent = plus.android.importClass("android.content.Intent");
    var Settings = plus.android.importClass("android.provider.Settings");
    var Uri = plus.android.importClass("android.net.Uri");
    var mainActivity = plus.android.runtimeMainActivity();
    var intent = new Intent();
    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
    var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
    intent.setData(uri);
    mainActivity.startActivity(intent);
  }
}
function checkSystemEnableLocation() {
  if (isIos) {
    var result = false;
    var cllocationManger = plus.ios.import("CLLocationManager");
    var result = cllocationManger.locationServicesEnabled();
    plus.ios.deleteObject(cllocationManger);
    return result;
  } else {
    var context = plus.android.importClass("android.content.Context");
    var locationManager = plus.android.importClass("android.location.LocationManager");
    var main = plus.android.runtimeMainActivity();
    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
    formatAppLog("log", "at uni_modules/json-gps/js_sdk/wa-permission/permission.js:262", "系统定位开启:" + result);
    return result;
  }
}
const permision = {
  judgeIosPermission,
  requestAndroidPermission,
  checkSystemEnableLocation,
  gotoAppPermissionSetting
};
class Gps {
  constructor(arg) {
    this.lock = false;
  }
  async getLocation(param = {
    type: "wgs84"
  }) {
    return new Promise(async (callback2) => {
      if (this.lock) {
        callback2(false);
        return false;
      }
      this.lock = true;
      uni.getLocation({
        ...param,
        success: (res) => {
          this.lock = false;
          callback2(res);
        },
        fail: async (err) => {
          uni.showToast({
            title: "定位获取失败",
            icon: "none"
          });
          formatAppLog("error", "at uni_modules/json-gps/js_sdk/gps.js:30", err);
          callback2(false);
          await this.checkGpsIsOpen();
        }
      });
    });
  }
  async checkGpsIsOpen() {
    this.lock = true;
    if (!permision.checkSystemEnableLocation()) {
      plus.nativeUI.confirm("手机定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          if (uni.getSystemInfoSync().platform == "ios") {
            plus.runtime.openURL("app-settings://");
          } else {
            var main = plus.android.runtimeMainActivity();
            var Intent = plus.android.importClass("android.content.Intent");
            var Settings = plus.android.importClass("android.provider.Settings");
            var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            main.startActivity(intent);
          }
        } else {
          uni.showToast({
            title: "设备无定位权限",
            icon: "none"
          });
          callback(false);
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
      return false;
    }
    let checkAppGpsRes = await this.checkAppGps();
    if (!checkAppGpsRes) {
      plus.nativeUI.confirm("应用定位权限没有开启，是否去开启？", (e) => {
        this.lock = false;
        if (e.index == 0) {
          permision.gotoAppPermissionSetting();
          callback(false);
        } else {
          uni.showToast({
            title: "应用无定位权限",
            icon: "none"
          });
          return false;
        }
      }, {
        "buttons": ["去设置", "不开启"],
        "verticalAlign": "center"
      });
    } else {
      this.lock = false;
    }
  }
  async checkAppGps() {
    if (uni.getSystemInfoSync().platform == "ios" && !permision.judgeIosPermission("location")) {
      return false;
    }
    if (uni.getSystemInfoSync().platform != "ios" && await permision.requestAndroidPermission(
      "android.permission.ACCESS_FINE_LOCATION"
    ) != 1) {
      return false;
    }
    return true;
  }
}
const _style_0 = { "pages": { "": { "backgroundColor": "#F2F2F6" } }, "cmd-nav-bar-left-title": { "": { "fontWeight": "bold", "fontSize": 50 } }, "cmd-nav-bar": { "": { "fontSize": 50, "fontWeight": "bold" } }, "avatar": { "": { "width": "90rpx", "height": "90rpx", "marginLeft": "600rpx", "marginBottom": "20rpx" } }, "main": { "": { "justifyContent": "space-between", "flex": 1 } }, "title": { "": { "fontSize": 55, "fontWeight": "bold" } }, "info": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "author": { "": { "fontSize": 14, "color": "#ACACB6" } }, "last_modify_date": { "": { "fontSize": 14, "color": "#ACACB6" } }, "uni-search-box": { "": { "backgroundColor": "#F2F2F6", "position": "sticky", "height": 50, "top": 0, "left": 0 } }, "cover-search-bar": { "": { "height": 50, "position": "relative", "top": -50, "marginBottom": -50 } }, "button-container": { "": { "flexDirection": "row", "display": "flex", "justifyContent": "space-between", "paddingLeft": 13, "paddingRight": 13, "paddingBottom": 20, "paddingTop": 20, "flexWrap": "wrap", "position": "relative" } }, "big-button": { "": { "flex": 1, "width": 150, "height": 100, "backgroundColor": "#ffffff", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "justifyContent": "center", "borderRadius": 10, "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginTop": 0, "marginRight": 8, "marginBottom": 0, "marginLeft": 8 } }, "button-image": { "": { "width": 36, "height": 36, "marginBottom": 13, "marginLeft": 12 } }, "button-text": { "": { "fontSize": 18, "fontWeight": "bold", "color": "#8E8E92", "marginLeft": 16 } }, "button-number": { "": { "position": "absolute", "right": 13, "top": 22, "transform": "translateY(-50%)", "fontSize": 26, "fontWeight": "bold" } }, "swipe-item": { "": { "marginBottom": 10, "fontSize": 12 } }, "swipe-item-content": { "": { "width": 350, "height": 50, "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "backgroundColor": "#ffffff", "borderRadius": 10, "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)", "marginBottom": 8, "marginLeft": 20, "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-swipe_button-group": { "": { "display": "flex", "boxSizing": "border-box", "justifyContent": "space-between", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "uni-swipe_button": { "": { "width": 80, "height": 50, "lineHeight": 100, "textAlign": "center", "backgroundColor": "#f1f1f1", "color": "#333333", "fontSize": 12, "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16 } } };
let cdbRef;
const gps = new Gps(), db = Ws.database();
const _sfc_main = {
  components: {
    statusBar,
    cmdNavBar: __easycom_0
  },
  computed: {
    inputPlaceholder(e) {
      if (uni.getStorageSync("CURRENT_LANG") == "en") {
        return "Please enter the search content";
      } else {
        return "Quick Search";
      }
    },
    colList() {
      return [
        db.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),
        db.collection("uni-id-users").field("_id,nickname").getTemp()
      ];
    }
  },
  data() {
    return {
      where: '"article_status" == 1',
      keyword: "",
      showRefresh: false,
      listHight: 0,
      swipeOptions: [],
      rightOptions: [
        {
          text: "",
          style: {
            backgroundColor: "#0C79FE",
            backgroundImage: "/static/pic/edit.png",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            margin: "0"
          },
          click: (item) => this.handleEdit(item)
        },
        {
          text: "Archived",
          style: {
            backgroundColor: "#979797",
            color: "#FFFFFF"
          },
          click: (item) => this.handleArchived(item)
        },
        {
          text: "Delete",
          style: {
            backgroundColor: "#FF3B30",
            color: "#FFFFFF"
          },
          click: (item) => this.handleDelete(item)
        }
      ],
      items: [
        { name: "Folder 1" }
      ]
    };
  },
  watch: {
    keyword(keyword, oldValue) {
      let where = '"article_status" == 1 ';
      if (keyword) {
        this.where = where + `&& /${keyword}/.test(title)`;
      } else {
        this.where = where;
      }
    }
  },
  async onReady() {
    this.listHight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50 + "px";
    cdbRef = this.$refs.udb;
  },
  async onShow() {
    this.keyword = getApp().globalData.searchText;
    getApp().globalData.searchText = "";
    await gps.getLocation({
      geocode: true
    });
  },
  methods: {
    goToAllInfoPage() {
      uni.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/userinfo/userinfo"
      });
    },
    goToArchivedInfoPage() {
      uni.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/userinfo/userinfo"
      });
    },
    navigateToGrid() {
      uni.navigateTo({
        url: "/pages/grid/grid"
      });
    },
    searchClick(e) {
      uni.hideKeyboard();
      uni.navigateTo({
        url: "/pages/list/search/search",
        animationType: "fade-in"
      });
    },
    retry() {
      this.refresh();
    },
    refresh() {
      cdbRef.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh();
        this.showRefresh = false;
        formatAppLog("log", "at pages/list/list.nvue:203", "end");
      });
      formatAppLog("log", "at pages/list/list.nvue:205", "refresh");
    },
    loadMore() {
      cdbRef.loadMore();
    },
    onqueryerror(e) {
      formatAppLog("error", "at pages/list/list.nvue:211", e);
    },
    onpullingdown(e) {
      formatAppLog("log", "at pages/list/list.nvue:214", e);
      this.showRefresh = true;
      if (e.pullingDistance > 100) {
        this.refresh();
      }
    }
  },
  handleEdit(item) {
    formatAppLog("log", "at pages/list/list.nvue:223", "Edit:", item);
  },
  handleArchived(item) {
    formatAppLog("log", "at pages/list/list.nvue:227", "Archived:", item);
  },
  handleDelete(item) {
    formatAppLog("log", "at pages/list/list.nvue:231", "Delete:", item);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_statusBar = resolveComponent("statusBar");
  const _component_cmd_nav_bar = resolveEasycom(resolveDynamicComponent("cmd-nav-bar"), __easycom_0);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1);
  const _component_uni_swipe_action_item = resolveEasycom(resolveDynamicComponent("uni-swipe-action-item"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "pages font-style" }, [
      createVNode(_component_statusBar),
      createCommentVNode(" 导航栏组件 "),
      createVNode(_component_cmd_nav_bar, {
        fixed: false,
        leftTitle: "My Collection",
        "font-size": "30cm",
        iconTwo: "add",
        "font-color": "#000",
        "background-color": "#fff",
        fontWeight: "bold",
        avatarUrl: "/static/pic/LeftAccessory.png"
      }),
      createCommentVNode(" 搜索功能 "),
      createElementVNode("view", { class: "uni-search-box" }, [
        createVNode(_component_uni_search_bar, {
          modelValue: $data.keyword,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keyword = $event),
          ref: "searchBar",
          radius: "20",
          cancelButton: "none",
          disabled: "",
          placeholder: $options.inputPlaceholder
        }, null, 8, ["modelValue", "placeholder"]),
        createElementVNode("view", {
          class: "cover-search-bar",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.searchClick && $options.searchClick(...args))
        })
      ]),
      createCommentVNode(" 两个并排的按钮 "),
      createElementVNode("view", { class: "button-container" }, [
        createElementVNode("view", {
          class: "big-button",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.goToAllInfoPage && $options.goToAllInfoPage(...args))
        }, [
          createElementVNode("u-image", {
            src: "/static/pic/icnTray.png",
            class: "button-image"
          }),
          createElementVNode("u-text", { class: "button-text" }, "All"),
          createElementVNode("u-text", { class: "button-number" }, "3")
        ]),
        createElementVNode("view", {
          class: "big-button",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.goToArchivedInfoPage && $options.goToArchivedInfoPage(...args))
        }, [
          createElementVNode("u-image", {
            src: "/static/pic/icnTray2.png",
            class: "button-image"
          }),
          createElementVNode("u-text", { class: "button-text" }, "Archived"),
          createElementVNode("u-text", { class: "button-number" }, "0")
        ])
      ]),
      createCommentVNode(" SwipeAction 滑动按钮 "),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.items, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            class: "swipe-item"
          }, [
            createVNode(_component_uni_swipe_action_item, { "right-options": $data.rightOptions }, {
              default: withCtx(() => [
                createElementVNode("view", {
                  class: "swipe-item-content",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateToGrid && $options.navigateToGrid(...args))
                }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["right-options"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/project/CoHub/CoHub/pages/list/list.nvue"]]);
export {
  list as default
};
