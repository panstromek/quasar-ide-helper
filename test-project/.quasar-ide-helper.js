import Vue from 'vue'

Vue.directive('CloseDialog', {})

Vue.directive('CloseMenu', {})

Vue.directive('GoBack', {})

Vue.component('QAjaxBar', {
  name: 'QAjaxBar',
  props: {
    /**
     * Position within window of where QAjaxBar should be displayed
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Skip Ajax hijacking (not a reactive prop)
     * @type {Boolean}
     */
    'skip-hijack': {
      type: Boolean,
    },
    /**
     * Reverse direction of progress
     * @type {Boolean}
     */
    'reverse': {
      type: Boolean,
    }
  }
})

Vue.component('QAvatar', {
  name: 'QAvatar',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * The size in CSS units, including unit name, of the content (icon, text)
     * @type {String}
     */
    'font-size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    'square': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    }
  }
})

Vue.component('QBadge', {
  name: 'QBadge',
  props: {
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Tell QBadge if it should float to the top right side of the relative positioned parent element or not
     * @type {Boolean}
     */
    'floating': {
      type: Boolean,
    },
    /**
     * Applies a 0.8 opacity; Useful especially for floating QBagde
     * @type {Boolean}
     */
    'transparent': {
      type: Boolean,
    },
    /**
     * Badge's content as string; overrides default slot if specified
     * @type {String|Number}
     */
    'label': {
      type: [String,Number],
    },
    /**
     * Sets vertical-align CSS prop
     * @type {String}
     */
    'align': {
      type: String,
    }
  }
})

Vue.component('QBanner', {
  name: 'QBanner',
  props: {
    /**
     * Display actions on same row as content
     * @type {Boolean}
     */
    'inline-actions': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    }
  }
})

Vue.component('QBar', {
  name: 'QBar',
  props: {
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * The component background color lights up the parent's background (as opposed to default behavior which is to darken it); Works unless you specify a CSS background color for it
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    }
  }
})

Vue.component('QBreadcrumbs', {
  name: 'QBreadcrumbs',
  props: {
    /**
     * The string used to separate the breadcrumbs
     * @type {String}
     */
    'separator': {
      type: String,
    },
    /**
     * The color of the active breadcrumb, which can be any color from the Quasar Color Palette
     * @type {String}
     */
    'active-color': {
      type: String,
    },
    /**
     * The gutter value allows you control over the space between the breadcrumb elements.
     * @type {String}
     */
    'gutter': {
      type: String,
    },
    /**
     * The color used to color the separator, which can be any color from the Quasar Color Palette
     * @type {String}
     */
    'separator-color': {
      type: String,
    },
    /**
     * Specify how to align the breadcrumbs horizontally
     * @type {String}
     */
    'align': {
      type: String,
    }
  }
})

Vue.component('QBreadcrumbsEl', {
  name: 'QBreadcrumbsEl',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    'exact': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    'append': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'active-class': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'exact-active-class': {
      type: String,
    },
    /**
     * The label text for the breadcrumb
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    }
  }
})

Vue.component('QBtn', {
  name: 'QBtn',
  props: {
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Define the button HTML DOM type
     * @type {String}
     */
    'type': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * The text that will be shown on the button
     * @type {String|Number}
     */
    'label': {
      type: [String,Number],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon-right': {
      type: String,
    },
    /**
     * Makes a circle shaped button
     * @type {Boolean}
     */
    'round': {
      type: Boolean,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    'unelevated': {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    },
    /**
     * Button size name or a CSS unit including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Makes button size and shape to fit a Floating Action Button
     * @type {Boolean}
     */
    'fab': {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a small Floating Action Button
     * @type {Boolean}
     */
    'fab-mini': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    'no-wrap': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Label or content alignment
     * @type {String}
     */
    'align': {
      type: String,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    'stack': {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    'stretch': {
      type: Boolean,
    },
    /**
     * Put button into loading state (displays a QSpinner -- can be overriden by using a 'loading' slot)
     * @type {Boolean}
     */
    'loading': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background
     * @type {Number}
     */
    'percentage': {
      type: Number,
    },
    /**
     * Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props
     * @type {Boolean}
     */
    'dark-percentage': {
      type: Boolean,
    }
  }
})

Vue.component('QBtnDropdown', {
  name: 'QBtnDropdown',
  props: {
    /**
     * Controls Menu show/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Define the button HTML DOM type
     * @type {String}
     */
    'type': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * The text that will be shown on the button
     * @type {String|Number}
     */
    'label': {
      type: [String,Number],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon-right': {
      type: String,
    },
    /**
     * Makes a circle shaped button
     * @type {Boolean}
     */
    'round': {
      type: Boolean,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    'unelevated': {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    },
    /**
     * Button size name or a CSS unit including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Makes button size and shape to fit a Floating Action Button
     * @type {Boolean}
     */
    'fab': {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a small Floating Action Button
     * @type {Boolean}
     */
    'fab-mini': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    'no-wrap': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Label or content alignment
     * @type {String}
     */
    'align': {
      type: String,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    'stack': {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    'stretch': {
      type: Boolean,
    },
    /**
     * Put button into loading state (displays a QSpinner -- can be overriden by using a 'loading' slot)
     * @type {Boolean}
     */
    'loading': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Split dropdown icon into its own button
     * @type {Boolean}
     */
    'split': {
      type: Boolean,
    },
    /**
     * Style definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    'content-style': {
      type: [Array,String,Object],
    },
    /**
     * Class definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    'content-class': {
      type: [Array,String,Object],
    },
    /**
     * Allows the menu to cover the button. When used, the 'menu-self' and 'menu-fit' props are no longer effective
     * @type {Boolean}
     */
    'cover': {
      type: Boolean,
    },
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     * @type {Boolean}
     */
    'auto-close': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {String}
     */
    'menu-anchor': {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {String}
     */
    'menu-self': {
      type: String,
    }
  }
})

Vue.component('QBtnGroup', {
  name: 'QBtnGroup',
  props: {
    /**
     * Use 'outline' design for buttons
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'flat' design for buttons
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Remove shadow on buttons
     * @type {Boolean}
     */
    'unelevated': {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for squared shape buttons
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Use 'push' design for buttons
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, buttons will stretch to parent's height
     * @type {Boolean}
     */
    'stretch': {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    }
  }
})

Vue.component('QBtnToggle', {
  name: 'QBtnToggle',
  props: {
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Array of Objects defining each option
     * @type {Array}
     */
    'options': {
      type: Array,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'toggle-color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'toggle-text-color': {
      type: String,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    'unelevated': {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    },
    /**
     * Button size name or a CSS unit including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    'no-wrap': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    'stack': {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    'stretch': {
      type: Boolean,
    }
  }
})

Vue.component('QCard', {
  name: 'QCard',
  props: {
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    'square': {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    }
  }
})

Vue.component('QCardActions', {
  name: 'QCardActions',
  props: {
    /**
     * Specify how to align the actions
     * @type {String}
     */
    'align': {
      type: String,
    },
    /**
     * Display actions one below the other
     * @type {Boolean}
     */
    'vertical': {
      type: Boolean,
    }
  }
})

Vue.component('QCardSection', {
  name: 'QCardSection',
  props: {
  }
})

Vue.component('QCarousel', {
  name: 'QCarousel',
  props: {
    /**
     * Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    'animated': {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    'infinite': {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    'swipeable': {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-prev': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-next': {
      type: String,
    },
    /**
     * Height of Carousel in CSS units, including unit name
     * @type {String}
     */
    'height': {
      type: String,
    },
    /**
     * Applies a default padding to each slide, according to the usage of 'arrows' and 'navigation' props
     * @type {Boolean}
     */
    'padding': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'control-color': {
      type: String,
    },
    /**
     * Jump to next slide at fixed time intervals (in milliseconds); 'false' disables autoplay, 'true' enables it for 5000ms intervals
     * @type {Number|Boolean}
     */
    'autoplay': {
      type: [Number,Boolean],
    },
    /**
     * Show navigation arrow buttons
     * @type {Boolean}
     */
    'arrows': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'prev-icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'next-icon': {
      type: String,
    },
    /**
     * Show navigation dots
     * @type {Boolean}
     */
    'navigation': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'navigation-icon': {
      type: String,
    },
    /**
     * Show thumbnails
     * @type {Boolean}
     */
    'thumbnails': {
      type: Boolean,
    }
  }
})

Vue.component('QCarouselControl', {
  name: 'QCarouselControl',
  props: {
    /**
     * Side/corner to stick to
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically (in pixels)
     * @type {Array}
     */
    'offset': {
      type: Array,
    }
  }
})

Vue.component('QCarouselSlide', {
  name: 'QCarouselSlide',
  props: {
    /**
     * Slide name
     * @type {*}
     */
    'name': {
      required: true
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * URL pointing to a slide background image (use statics folder)
     * @type {String}
     */
    'img-src': {
      type: String,
    }
  }
})

Vue.component('QChatMessage', {
  name: 'QChatMessage',
  props: {
    /**
     * Render as a sent message (so from current user)
     * @type {Boolean}
     */
    'sent': {
      type: Boolean,
    },
    /**
     * Renders a label header/section only
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble background
     * @type {String}
     */
    'bg-color': {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble text
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Author's name
     * @type {String}
     */
    'name': {
      type: String,
    },
    /**
     * URL to the avatar image of the author; Suggestion: use a static resource
     * @type {String}
     */
    'avatar': {
      type: String,
    },
    /**
     * Array of strings that are the message body. Strings are not sanitized (see details in docs)
     * @type {String}
     */
    'text': {
      type: String,
    },
    /**
     * Creation timestamp
     * @type {String}
     */
    'stamp': {
      type: String,
    },
    /**
     * 1-12 out of 12 (same as col-*)
     * @type {String}
     */
    'size': {
      type: String,
    }
  }
})

Vue.component('QCheckbox', {
  name: 'QCheckbox',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*|Array}
     */
    'value': {
    },
    /**
     * Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked
     * @type {*}
     */
    'val': {
    },
    /**
     * What model value should be considered as checked/ticked/on?
     * @type {*}
     */
    'true-value': {
    },
    /**
     * What model value should be considered as unchecked/unticked/off?
     * @type {*}
     */
    'false-value': {
    },
    /**
     * Label to display along the component (or use the default slot instead of this prop)
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label (if any specified) should be displayed on the left side of the component
     * @type {Boolean}
     */
    'left-label': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Should the color (if specified any) be kept when the component is unticked/ off?
     * @type {Boolean}
     */
    'keep-color': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * What model value should be considered as 'indeterminate'?
     * @type {*}
     */
    'indeterminate-value': {
    },
    /**
     * When user clicks/taps on the component, should we toggle through the indeterminate state too?
     * @type {Boolean}
     */
    'toggle-indeterminate': {
      type: Boolean,
    }
  }
})

Vue.component('QChip', {
  name: 'QChip',
  props: {
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon-right': {
      type: String,
    },
    /**
     * Chip's content as string; overrides default slot if specified
     * @type {String|Number}
     */
    'label': {
      type: [String,Number],
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Model of the component determining if QChip should be rendered or not
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Model for QChip if it's selected or not
     * @type {Boolean}
     */
    'selected': {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    'square': {
      type: Boolean,
    },
    /**
     * Display using the 'outline' design
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Is QChip clickable? If it's the case, then it will add hover effects and emit 'click' events
     * @type {Boolean}
     */
    'clickable': {
      type: Boolean,
    },
    /**
     * If set, then it displays a 'remove' icon that when clicked the QChip emits 'remove' event
     * @type {Boolean}
     */
    'removable': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QCircularProgress', {
  name: 'QCircularProgress',
  props: {
    /**
     * Current progress (must be between min/max)
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * Minimum value defining 'no progress' (must be lower than 'max')
     * @type {Number}
     */
    'min': {
      type: Number,
    },
    /**
     * Maximum value defining 100% progress made (must be higher than 'min')
     * @type {Number}
     */
    'max': {
      type: Number,
    },
    /**
     * Color name for the arc progress from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for the center part of the component from the Quasar Color Palette
     * @type {String}
     */
    'center-color': {
      type: String,
    },
    /**
     * Color name for the track of the component from the Quasar Color Palette
     * @type {String}
     */
    'track-color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
     * @type {String}
     */
    'font-size': {
      type: String,
    },
    /**
     * Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
     * @type {Number}
     */
    'thickness': {
      type: Number,
    },
    /**
     * Angle to rotate progress arc by
     * @type {Number}
     */
    'angle': {
      type: Number,
    },
    /**
     * Put component into 'indeterminate' state; Ignores 'value' prop
     * @type {Boolean}
     */
    'indeterminate': {
      type: Boolean,
    },
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     * @type {Boolean}
     */
    'show-value': {
      type: Boolean,
    },
    /**
     * Reverses the direction of progress; Only for determined state
     * @type {Boolean}
     */
    'reverse': {
      type: Boolean,
    }
  }
})

Vue.component('QColor', {
  name: 'QColor',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    'value': {
      type: String,
    },
    /**
     * The default value to show when the model doesn't has one
     * @type {String}
     */
    'default-value': {
      type: String,
    },
    /**
     * Forces a certain model format upon the model
     * @type {String}
     */
    'format-model': {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    }
  }
})

Vue.component('QDate', {
  name: 'QDate',
  props: {
    /**
     * Date of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    'value': {
      type: String,
    },
    /**
     * Display the component in landscape mode
     * @type {Boolean}
     */
    'landscape': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * The default year and month to display (in YYYY/MM format) when model is unfilled (undefined or null)
     * @type {String}
     */
    'default-year-month': {
      type: String,
    },
    /**
     * A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not)
     * @type {Array|Function}
     */
    'events': {
      type: [Array,Function],
    },
    /**
     * Color name (from the Quasar Color Palette); If using a function, it receives the date as a String and must return a String (color for the received date)
     * @type {String|Function}
     */
    'event-color': {
      type: [String,Function],
    },
    /**
     * Optionally configure the days that are selectable; If using a function, it receives the date as a String and must return a Boolean (is date acceptable or not)
     * @type {Array|Function}
     */
    'options': {
      type: [Array,Function],
    },
    /**
     * Sets the day of the week that is considered the first day (0 - Sunday, 1 - Monday, ...); This day will show in the left-most column of the calendar
     * @type {String|Number}
     */
    'first-day-of-week': {
      type: [String,Number],
    },
    /**
     * Display a button that selects the current day
     * @type {Boolean}
     */
    'today-btn': {
      type: Boolean,
    },
    /**
     * Don’t display the header
     * @type {Boolean}
     */
    'minimal': {
      type: Boolean,
    }
  }
})

Vue.component('QDialog', {
  name: 'QDialog',
  props: {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog if clicking outside of it or hitting ESC key
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    'no-esc-key': {
      type: Boolean,
    },
    /**
     * Put Dialog into seamless mode; Does not uses a backdrop so user is able to interact with the rest of the page too
     * @type {Boolean}
     */
    'seamless': {
      type: Boolean,
    },
    /**
     * Put Dialog into maximized mode
     * @type {Boolean}
     */
    'maximized': {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same width as the window
     * @type {Boolean}
     */
    'full-width': {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same height as the window
     * @type {Boolean}
     */
    'full-height': {
      type: Boolean,
    },
    /**
     * 
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-show': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-hide': {
      type: String,
    },
    /**
     * (Accessibility) When Dialog gets hidden, do not refocus on the DOM element that previously had focus
     * @type {Boolean}
     */
    'no-refocus': {
      type: Boolean,
    }
  }
})

Vue.component('QDrawer', {
  name: 'QDrawer',
  props: {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Side to attach to
     * @type {String}
     */
    'side': {
      type: String,
    },
    /**
     * Puts drawer into overlay mode (does not occupies space on screen, narrowing the page)
     * @type {Boolean}
     */
    'overlay': {
      type: Boolean,
    },
    /**
     * Width of drawer (in pixels)
     * @type {Number}
     */
    'width': {
      type: Number,
    },
    /**
     * Puts drawer into mini mode
     * @type {Boolean}
     */
    'mini': {
      type: Boolean,
    },
    /**
     * Width of drawer (in pixels) when in mini-mode
     * @type {Number}
     */
    'mini-width': {
      type: Number,
    },
    /**
     * Breakpoint (in pixels) of layout width up to which mobile mode is used
     * @type {Number}
     */
    'breakpoint': {
      type: Number,
    },
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     * @type {String}
     */
    'behavior': {
      type: String,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    'elevated': {
      type: Boolean,
    },
    /**
     * Does not auto-closes when app's route changes
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * Force drawer to be shown on screen on initial render if the layout width is above breakpoint
     * @type {Boolean}
     */
    'show-if-above': {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the drawer
     * @type {Array|String|Object}
     */
    'content-class': {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the drawer
     * @type {Array|String|Object}
     */
    'content-style': {
      type: [Array,String,Object],
    },
    /**
     * Disables the default behavior where drawer can be swiped into view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     * @type {Boolean}
     */
    'no-swipe-open': {
      type: Boolean,
    },
    /**
     * Disables the default behavior where drawer can be swiped out of view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     * @type {Boolean}
     */
    'no-swipe-close': {
      type: Boolean,
    }
  }
})

Vue.component('QEditor', {
  name: 'QEditor',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    'value': {
      type: String,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * CSS unit for the minimum height of the editable area
     * @type {String}
     */
    'min-height': {
      type: String,
    },
    /**
     * CSS unit for maximum height of the input area
     * @type {String}
     */
    'max-height': {
      type: String,
    },
    /**
     * CSS value to set the height of the editable area
     * @type {String}
     */
    'height': {
      type: String,
    },
    /**
     * Definition of commands and their buttons to be included in the 'toolbar' prop
     * @type {Object}
     */
    'definitions': {
      type: Object,
    },
    /**
     * Object with definitions of fonts
     * @type {Object}
     */
    'fonts': {
      type: Object,
    },
    /**
     * An array of arrays of Objects/Strings that you use to define the construction of the elements and commands available in the toolbar
     * @type {Array}
     */
    'toolbar': {
      type: Array,
    },
    /**
     * Font color (from the Quasar Palette) of buttons and text in the toolbar
     * @type {String}
     */
    'toolbar-color': {
      type: String,
    },
    /**
     * Text color (from the Quasar Palette) of toolbar commands
     * @type {String}
     */
    'toolbar-text-color': {
      type: String,
    },
    /**
     * Choose the active color (from the Quasar Palette) of toolbar commands button
     * @type {String}
     */
    'toolbar-toggle-color': {
      type: String,
    },
    /**
     * Toolbar background color (from Quasar Palette)
     * @type {String}
     */
    'toolbar-bg': {
      type: String,
    },
    /**
     * Toolbar buttons are rendered "flat"
     * @type {Boolean}
     */
    'toolbar-flat': {
      type: Boolean,
    },
    /**
     * Toolbar buttons are rendered "outlined"
     * @type {Boolean}
     */
    'toolbar-outline': {
      type: Boolean,
    },
    /**
     * Toolbar buttons are rendered as a "push-button" type
     * @type {Boolean}
     */
    'toolbar-push': {
      type: Boolean,
    },
    /**
     * Toolbar buttons are rendered "rounded"
     * @type {Boolean}
     */
    'toolbar-rounded': {
      type: Boolean,
    },
    /**
     * Object with CSS properties and values for styling the container of QEditor
     * @type {Object}
     */
    'content-style': {
      type: Object,
    },
    /**
     * CSS classes for the input area
     * @type {Object|Array|String}
     */
    'content-class': {
      type: [Object,Array,String],
    }
  }
})

Vue.component('QExpansionItem', {
  name: 'QExpansionItem',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    'exact': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    'append': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'active-class': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'exact-active-class': {
      type: String,
    },
    /**
     * Model of the component defining 'open' state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'expand-icon': {
      type: String,
    },
    /**
     * Apply custom class(es) to the expand icon item section
     * @type {Array|String|Object}
     */
    'expand-icon-class': {
      type: [Array,String,Object],
    },
    /**
     * Header label (unless using 'header' slot)
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Header sub-label (unless using 'header' slot)
     * @type {String}
     */
    'caption': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Animation duration (in milliseconds)
     * @type {Number}
     */
    'duration': {
      type: Number,
    },
    /**
     * Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    'header-inset-level': {
      type: Number,
    },
    /**
     * Apply an inset to content (changes content padding)
     * @type {Number}
     */
    'content-inset-level': {
      type: Number,
    },
    /**
     * Apply a top and bottom separator when expansion item is opened
     * @type {Boolean}
     */
    'expand-separator': {
      type: Boolean,
    },
    /**
     * Puts expansion item into open state on initial render; Overriden by v-model if used
     * @type {Boolean}
     */
    'default-opened': {
      type: Boolean,
    },
    /**
     * Applies the expansion events to the expand icon only and not to the whole header
     * @type {Boolean}
     */
    'expand-icon-toggle': {
      type: Boolean,
    },
    /**
     * Switch expand icon side (from default 'right' to 'left')
     * @type {Boolean}
     */
    'switch-toggle-side': {
      type: Boolean,
    },
    /**
     * Use dense mode for expand icon
     * @type {Boolean}
     */
    'dense-toggle': {
      type: Boolean,
    },
    /**
     * Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'
     * @type {String}
     */
    'group': {
      type: String,
    },
    /**
     * Put expansion list into 'popup' mode
     * @type {Boolean}
     */
    'popup': {
      type: Boolean,
    },
    /**
     * Apply custom style to the header
     * @type {Array|String|Object}
     */
    'header-style': {
      type: [Array,String,Object],
    },
    /**
     * Apply custom class(es) to the header
     * @type {Array|String|Object}
     */
    'header-class': {
      type: [Array,String,Object],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QFab', {
  name: 'QFab',
  props: {
    /**
     * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'input' event
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'active-icon': {
      type: String,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {String}
     */
    'direction': {
      type: String,
    },
    /**
     * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * Use 'outline' design for Fab button
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'push' design for Fab button
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * Use 'flat' design for Fab button
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Apply the glossy effect over the button
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    }
  }
})

Vue.component('QFabAction', {
  name: 'QFabAction',
  props: {
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
      required: true
    },
    /**
     * Use 'outline' design for Fab button
     * @type {Boolean}
     */
    'outline': {
      type: Boolean,
    },
    /**
     * Use 'push' design for Fab button
     * @type {Boolean}
     */
    'push': {
      type: Boolean,
    },
    /**
     * Use 'flat' design for Fab button
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Apply the glossy effect over the button
     * @type {Boolean}
     */
    'glossy': {
      type: Boolean,
    }
  }
})

Vue.component('QField', {
  name: 'QField',
  props: {
    /**
     * Does field has validation errors?
     * @type {Boolean}
     */
    'error': {
      type: Boolean,
    },
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     * @type {String}
     */
    'error-message': {
      type: String,
    },
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     * @type {Array}
     */
    'rules': {
      type: Array,
    },
    /**
     * Check validation status against the 'rules' only after field loses focus for first time
     * @type {Boolean}
     */
    'lazy-rules': {
      type: Boolean,
    },
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label will be always shown above the field regardless of field content (if any)
     * @type {Boolean}
     */
    'stack-label': {
      type: Boolean,
    },
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     * @type {String}
     */
    'hint': {
      type: String,
    },
    /**
     * Hide the helper (hint) text when field doesn't has focus
     * @type {Boolean}
     */
    'hide-hint': {
      type: Boolean,
    },
    /**
     * Prefix
     * @type {String}
     */
    'prefix': {
      type: String,
    },
    /**
     * Suffix
     * @type {String}
     */
    'suffix': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'bg-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Use 'filled' design for the field
     * @type {Boolean}
     */
    'filled': {
      type: Boolean,
    },
    /**
     * Use 'outlined' design for the field
     * @type {Boolean}
     */
    'outlined': {
      type: Boolean,
    },
    /**
     * Use 'borderless' design for the field
     * @type {Boolean}
     */
    'borderless': {
      type: Boolean,
    },
    /**
     * Use 'standout' design for the field
     * @type {Boolean}
     */
    'standout': {
      type: Boolean,
    },
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     * @type {Boolean}
     */
    'bottom-slots': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Align content to match QItem
     * @type {Boolean}
     */
    'items-aligned': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    }
  }
})

Vue.component('QFooter', {
  name: 'QFooter',
  props: {
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide footer
     * @type {Boolean}
     */
    'reveal': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    'elevated': {
      type: Boolean,
    }
  }
})

Vue.component('QHeader', {
  name: 'QHeader',
  props: {
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide header
     * @type {Boolean}
     */
    'reveal': {
      type: Boolean,
    },
    /**
     * Amount of scroll (in pixels) that should trigger a 'reveal' state change
     * @type {Number}
     */
    'reveal-offset': {
      type: Number,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    'elevated': {
      type: Boolean,
    }
  }
})

Vue.component('QIcon', {
  name: 'QIcon',
  props: {
    /**
     * Name of the icon, following Quasar convention
     * @type {String}
     */
    'name': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Apply a standard margin on the left side. Useful if icon is on the right side of something.
     * @type {Boolean}
     */
    'left': {
      type: Boolean,
    },
    /**
     * Apply a standard margin on the right side. Useful if icon is on the left side of something.
     * @type {Boolean}
     */
    'right': {
      type: Boolean,
    }
  }
})

Vue.component('QImg', {
  name: 'QImg',
  props: {
    /**
     * Path to image
     * @type {String}
     */
    'src': {
      type: String,
    },
    /**
     * Same syntax as <img> srcset attribute.
     * @type {String}
     */
    'srcset': {
      type: String,
    },
    /**
     * Same syntax as <img> sizes attribute.
     * @type {String}
     */
    'sizes': {
      type: String,
    },
    /**
     * Specifies an alternate text for the image, if the image cannot be displayed
     * @type {String}
     */
    'alt': {
      type: String,
    },
    /**
     * While waiting for your image to load, you can use a placeholder image
     * @type {String}
     */
    'placeholder-src': {
      type: String,
    },
    /**
     * Do not use transitions; faster render
     * @type {Boolean}
     */
    'basic': {
      type: Boolean,
    },
    /**
     * Make sure that the image getting displayed is fully contained, regardless if additional blank space besides the image is needed on horizontal or vertical
     * @type {Boolean}
     */
    'contain': {
      type: Boolean,
    },
    /**
     * Equivalent to CSS background-position property
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * Force the component to maintain an aspect ratio
     * @type {String|Number}
     */
    'ratio': {
      type: [String,Number],
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition': {
      type: String,
    },
    /**
     * Color name for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    'spinner-color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name, for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    'spinnner-size': {
      type: String,
    }
  }
})

Vue.component('QInfiniteScroll', {
  name: 'QInfiniteScroll',
  props: {
    /**
     * Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance
     * @type {Number}
     */
    'offset': {
      type: Number,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QInnerLoading', {
  name: 'QInnerLoading',
  props: {
    /**
     * State - loading or not
     * @type {Boolean}
     */
    'showing': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name, for Spinner (unless using the default slot)
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-show': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-hide': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    }
  }
})

Vue.component('QInput', {
  name: 'QInput',
  props: {
    /**
     * Custom mask or one of the predefined mask names
     * @type {String}
     */
    'mask': {
      type: String,
    },
    /**
     * Fills string with underscore characters to fill mask's length
     * @type {Boolean}
     */
    'fill-mask': {
      type: Boolean,
    },
    /**
     * Model will be unmasked (won't contain tokens/separation characters)
     * @type {Boolean}
     */
    'unmasked-value': {
      type: Boolean,
    },
    /**
     * Does field has validation errors?
     * @type {Boolean}
     */
    'error': {
      type: Boolean,
    },
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     * @type {String}
     */
    'error-message': {
      type: String,
    },
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     * @type {Array}
     */
    'rules': {
      type: Array,
    },
    /**
     * Check validation status against the 'rules' only after field loses focus for first time
     * @type {Boolean}
     */
    'lazy-rules': {
      type: Boolean,
    },
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label will be always shown above the field regardless of field content (if any)
     * @type {Boolean}
     */
    'stack-label': {
      type: Boolean,
    },
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     * @type {String}
     */
    'hint': {
      type: String,
    },
    /**
     * Hide the helper (hint) text when field doesn't has focus
     * @type {Boolean}
     */
    'hide-hint': {
      type: Boolean,
    },
    /**
     * Prefix
     * @type {String}
     */
    'prefix': {
      type: String,
    },
    /**
     * Suffix
     * @type {String}
     */
    'suffix': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'bg-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Use 'filled' design for the field
     * @type {Boolean}
     */
    'filled': {
      type: Boolean,
    },
    /**
     * Use 'outlined' design for the field
     * @type {Boolean}
     */
    'outlined': {
      type: Boolean,
    },
    /**
     * Use 'borderless' design for the field
     * @type {Boolean}
     */
    'borderless': {
      type: Boolean,
    },
    /**
     * Use 'standout' design for the field
     * @type {Boolean}
     */
    'standout': {
      type: Boolean,
    },
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     * @type {Boolean}
     */
    'bottom-slots': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Align content to match QItem
     * @type {Boolean}
     */
    'items-aligned': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String|Number}
     */
    'value': {
      type: [String,Number],
      required: true
    },
    /**
     * Input type
     * @type {String}
     */
    'type': {
      type: String,
    },
    /**
     * Debounce amount (in milliseconds) when updating model
     * @type {String|Number}
     */
    'debounce': {
      type: [String,Number],
    },
    /**
     * Show a counter on bottom right
     * @type {Boolean}
     */
    'counter': {
      type: Boolean,
    },
    /**
     * Specify a max length of model
     * @type {String|Number}
     */
    'maxlength': {
      type: [String,Number],
    },
    /**
     * Make field autogrow along with its content (uses a textarea)
     * @type {Boolean}
     */
    'autogrow': {
      type: Boolean,
    },
    /**
     * Focus field on initial component render
     * @type {Boolean}
     */
    'autofocus': {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the underlying input tag
     * @type {Array|String|Object}
     */
    'input-class': {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the underlying input tag
     * @type {Array|String|Object}
     */
    'input-style': {
      type: [Array,String,Object],
    }
  }
})

Vue.component('QItem', {
  name: 'QItem',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    'exact': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    'append': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'active-class': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'exact-active-class': {
      type: String,
    },
    /**
     * Put item into 'active' state
     * @type {Boolean}
     */
    'active': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events
     * @type {Boolean}
     */
    'clickable': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    'inset-level': {
      type: Number,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
     * @type {String}
     */
    'tag': {
      type: String,
    },
    /**
     * Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states
     * @type {Boolean}
     */
    'manual-focus': {
      type: Boolean,
    },
    /**
     * Determines focus state, ONLY if 'manual-focus' is enabled / set to true
     * @type {Boolean}
     */
    'focused': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QItemLabel', {
  name: 'QItemLabel',
  props: {
    /**
     * Renders an overline label
     * @type {Boolean}
     */
    'overline': {
      type: Boolean,
    },
    /**
     * Renders a caption label
     * @type {Boolean}
     */
    'caption': {
      type: Boolean,
    },
    /**
     * Renders a header label
     * @type {Boolean}
     */
    'header': {
      type: Boolean,
    },
    /**
     * Applies an inset to the label
     * @type {Boolean}
     */
    'inset': {
      type: Boolean,
    },
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     * @type {Number|String}
     */
    'lines': {
      type: [Number,String],
    }
  }
})

Vue.component('QItemSection', {
  name: 'QItemSection',
  props: {
    /**
     * Render an avatar item side (does not needs 'side' prop to be set)
     * @type {Boolean}
     */
    'avatar': {
      type: Boolean,
    },
    /**
     * Render a thumbnail item side (does not needs 'side' prop to be set)
     * @type {Boolean}
     */
    'thumbnail': {
      type: Boolean,
    },
    /**
     * Renders as a side of the item
     * @type {Boolean}
     */
    'side': {
      type: Boolean,
    },
    /**
     * Align content to top (useful for multi-line items)
     * @type {Boolean}
     */
    'top': {
      type: Boolean,
    },
    /**
     * Do not wrap text (useful for item's main content)
     * @type {Boolean}
     */
    'no-wrap': {
      type: Boolean,
    }
  }
})

Vue.component('QKnob', {
  name: 'QKnob',
  props: {
    /**
     * Any number to indicate the given value of the knob. Either use this property (along with a listener for 'input' event) OR use the v-model directive
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * The minimum value that the model (the knob value) should start at
     * @type {Number}
     */
    'min': {
      type: Number,
    },
    /**
     * The maximimum value that the model (the knob value) should go to
     * @type {Number}
     */
    'max': {
      type: Number,
    },
    /**
     * A number representing steps in the value of the model, while adjusting the knob
     * @type {Number}
     */
    'step': {
      type: Number,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for the center part of the component from the Quasar Color Palette
     * @type {String}
     */
    'center-color': {
      type: String,
    },
    /**
     * Color name for the track of the component from the Quasar Color Palette
     * @type {String}
     */
    'track-color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
     * @type {String}
     */
    'font-size': {
      type: String,
    },
    /**
     * Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
     * @type {Number}
     */
    'thickness': {
      type: Number,
    },
    /**
     * Angle to rotate progress arc by
     * @type {Number}
     */
    'angle': {
      type: Number,
    },
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     * @type {Boolean}
     */
    'show-value': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    }
  }
})

Vue.component('QLayout', {
  name: 'QLayout',
  props: {
    /**
     * Defines how your layout components (header/footer/drawer) should be placed on screen; See docs examples
     * @type {String}
     */
    'view': {
      type: String,
    },
    /**
     * Containerize the layout which means it changes the default behavior of expanding to the whole window; Useful (but not limited to) for when using on a QDialog
     * @type {Boolean}
     */
    'container': {
      type: Boolean,
    }
  }
})

Vue.component('QLinearProgress', {
  name: 'QLinearProgress',
  props: {
    /**
     * Progress value (0.0 < x < 1.0)
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * Optional buffer value (0.0 < x < 1.0)
     * @type {Number}
     */
    'buffer': {
      type: Number,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for component's track from the Quasar Color Palette
     * @type {String}
     */
    'track-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Reverse direction of progress
     * @type {Boolean}
     */
    'reverse': {
      type: Boolean,
    },
    /**
     * Draw stripes; For determinate state only (for performance reasons)
     * @type {Boolean}
     */
    'stripe': {
      type: Boolean,
    },
    /**
     * Put component into indeterminate mode
     * @type {Boolean}
     */
    'indeterminate': {
      type: Boolean,
    },
    /**
     * Put component into query mode
     * @type {Boolean}
     */
    'query': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    }
  }
})

Vue.component('QList', {
  name: 'QList',
  props: {
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Applies a separator between contained items
     * @type {Boolean}
     */
    'separator': {
      type: Boolean,
    },
    /**
     * Applies a material design-like padding on top and bottom
     * @type {Boolean}
     */
    'padding': {
      type: Boolean,
    }
  }
})

Vue.component('QMarkupTable', {
  name: 'QMarkupTable',
  props: {
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {String}
     */
    'separator': {
      type: String,
    },
    /**
     * Wrap text within table cells
     * @type {Boolean}
     */
    'wrap-cells': {
      type: Boolean,
    }
  }
})

Vue.component('QMenu', {
  name: 'QMenu',
  props: {
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|String}
     */
    'target': {
      type: [Boolean,String],
    },
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     * @type {Boolean}
     */
    'context-menu': {
      type: Boolean,
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Allows the menu to match at least the full width of its target
     * @type {Boolean}
     */
    'fit': {
      type: Boolean,
    },
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     * @type {Boolean}
     */
    'cover': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {String}
     */
    'anchor': {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {String}
     */
    'self': {
      type: String,
    },
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     * @type {Array}
     */
    'offset': {
      type: Array,
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the menu to get shown)
     * @type {Boolean}
     */
    'no-parent-event': {
      type: Boolean,
    },
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     * @type {Boolean}
     */
    'touch-position': {
      type: Boolean,
    },
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     * @type {Boolean}
     */
    'auto-close': {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    'content-class': {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    'content-style': {
      type: [Array,String,Object],
    },
    /**
     * The maximimum height of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    'max-height': {
      type: String,
    },
    /**
     * The maximimum width of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    'max-width': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-show': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-hide': {
      type: String,
    }
  }
})

Vue.component('QNoSsr', {
  name: 'QNoSsr',
  props: {
    /**
     * HTML tag to render
     * @type {String}
     */
    'tag': {
      type: String,
    },
    /**
     * Text to display on server-side render (unless using 'placeholder' slot)
     * @type {String}
     */
    'placeholder': {
      type: String,
    }
  }
})

Vue.component('QOptionGroup', {
  name: 'QOptionGroup',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Array of objects with value and label props. The binary components will be created according to this array
     * @type {Array}
     */
    'options': {
      type: Array,
    },
    /**
     * The type of input component to be used
     * @type {String}
     */
    'type': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Should the color (if specified any) be kept when input components are unticked?
     * @type {Boolean}
     */
    'keep-color': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Label (if any specified) should be displayed on the left side of the input components
     * @type {Boolean}
     */
    'left-label': {
      type: Boolean,
    },
    /**
     * Show input component as inline-block rather than each having their own row
     * @type {Boolean}
     */
    'inline': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QPage', {
  name: 'QPage',
  props: {
    /**
     * Applies a default responsive page padding
     * @type {Boolean}
     */
    'padding': {
      type: Boolean,
    },
    /**
     * Override default CSS style applied to the component (sets minHeight); Function(offset: Number) => CSS props/value: Object
     * @type {Function}
     */
    'style-fn': {
      type: Function,
    }
  }
})

Vue.component('QPageContainer', {
  name: 'QPageContainer',
  props: {
  }
})

Vue.component('QPageScroller', {
  name: 'QPageScroller',
  props: {
    /**
     * Page side/corner to stick to
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     * @type {Array}
     */
    'offset': {
      type: Array,
    },
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     * @type {Boolean}
     */
    'expand': {
      type: Boolean,
    },
    /**
     * Scroll offset (in pixels) from which point the component is shown on page
     * @type {Number}
     */
    'scroll-offset': {
      type: Number,
    },
    /**
     * Duration (in milliseconds) of the scrolling until it reaches its target
     * @type {Number}
     */
    'duration': {
      type: Number,
    }
  }
})

Vue.component('QPageSticky', {
  name: 'QPageSticky',
  props: {
    /**
     * Page side/corner to stick to
     * @type {String}
     */
    'position': {
      type: String,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     * @type {Array}
     */
    'offset': {
      type: Array,
    },
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     * @type {Boolean}
     */
    'expand': {
      type: Boolean,
    }
  }
})

Vue.component('QPagination', {
  name: 'QPagination',
  props: {
    /**
     * Current page (must be between min/max)
     * @type {Number}
     */
    'value': {
      type: Number,
      required: true
    },
    /**
     * Minimum page (must be lower than 'max')
     * @type {Number}
     */
    'min': {
      type: Number,
    },
    /**
     * Number of last page (must be higher than 'min')
     * @type {Number}
     */
    'max': {
      type: Number,
      required: true
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Button size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Use an input instead of buttons
     * @type {Boolean}
     */
    'input': {
      type: Boolean,
    },
    /**
     * Show boundary button links
     * @type {Boolean}
     */
    'boundary-links': {
      type: Boolean,
    },
    /**
     * Always show first and last page buttons (if not using 'input')
     * @type {Boolean}
     */
    'boundary-numbers': {
      type: Boolean,
    },
    /**
     * Show direction buttons
     * @type {Boolean}
     */
    'direction-links': {
      type: Boolean,
    },
    /**
     * Show ellipses (...) when pages are available
     * @type {Boolean}
     */
    'ellipses': {
      type: Boolean,
    },
    /**
     * Maximum number of page links to display at a time; 0 means Infinite
     * @type {Number}
     */
    'max-pages': {
      type: Number,
    }
  }
})

Vue.component('QParallax', {
  name: 'QParallax',
  props: {
    /**
     * Path to image (unless a 'media' slot is used)
     * @type {String}
     */
    'src': {
      type: String,
    },
    /**
     * Height of component (in pixels)
     * @type {Number}
     */
    'height': {
      type: Number,
    },
    /**
     * Speed of parallax effect (0.0 < x < 1.0)
     * @type {Number}
     */
    'speed': {
      type: Number,
    }
  }
})

Vue.component('QPopupEdit', {
  name: 'QPopupEdit',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Optional title (unless 'title' slot is used)
     * @type {String}
     */
    'title': {
      type: String,
    },
    /**
     * Show Set and Cancel buttons
     * @type {Boolean}
     */
    'buttons': {
      type: Boolean,
    },
    /**
     * Override Set button label
     * @type {String}
     */
    'label-set': {
      type: String,
    },
    /**
     * Override Cancel button label
     * @type {String}
     */
    'label-cancel': {
      type: String,
    },
    /**
     * Avoid Popup closing by hitting ESC key or by clicking/tapping outside of the Popup
     * @type {Boolean}
     */
    'persistent': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Validates model then triggers 'save' and closes Popup; Returns a Boolean ('true' means valid, 'false' means abort); Syntax: validate(value)
     * @type {Function}
     */
    'validate': {
      type: Function,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QPopupProxy', {
  name: 'QPopupProxy',
  props: {
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|String}
     */
    'target': {
      type: [Boolean,String],
    },
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     * @type {Boolean}
     */
    'context-menu': {
      type: Boolean,
    },
    /**
     * Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Breakpoint (in pixels) of window width from where a Menu will get to be used instead of a Dialog
     * @type {Number|String}
     */
    'breakpoint': {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QPullToRefresh', {
  name: 'QPullToRefresh',
  props: {
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Icon to display when refreshing the content
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Don't listen for mouse events
     * @type {Boolean}
     */
    'no-mouse': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QRadio', {
  name: 'QRadio',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number|String}
     */
    'value': {
      type: [Number,String],
      required: true
    },
    /**
     * The actual value of the option with which model value is changed
     * @type {Number|String}
     */
    'val': {
      type: [Number,String],
      required: true
    },
    /**
     * Label to display along the radio control (or use the default slot instead of this prop)
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label (if any specified) should be displayed on the left side of the checkbox
     * @type {Boolean}
     */
    'left-label': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Should the color (if specified any) be kept when checkbox is unticked?
     * @type {Boolean}
     */
    'keep-color': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    }
  }
})

Vue.component('QRange', {
  name: 'QRange',
  props: {
    /**
     * Model of the component of type { min, max } (both values must be between global min/max); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Object}
     */
    'value': {
      type: Object,
    },
    /**
     * Minimum value of the model
     * @type {Number}
     */
    'min': {
      type: Number,
    },
    /**
     * Maximum value of the model
     * @type {Number}
     */
    'max': {
      type: Number,
    },
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     * @type {Number}
     */
    'step': {
      type: Number,
    },
    /**
     * User can drag range instead of just the two thumbs
     * @type {Boolean}
     */
    'drag-range': {
      type: Boolean,
    },
    /**
     * User can drag only the range instead and NOT the two thumbs
     * @type {Boolean}
     */
    'drag-range-only': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Popup labels (for left and right thumbs) when user clicks/taps on the slider thumb and moves it
     * @type {Boolean}
     */
    'label': {
      type: Boolean,
    },
    /**
     * Color name for labels background from the Quasar Color Palette; Applies to both labels, unless specific label color props are used
     * @type {String}
     */
    'label-color': {
      type: String,
    },
    /**
     * Color name for left label background from the Quasar Color Palette
     * @type {String}
     */
    'left-label-color': {
      type: String,
    },
    /**
     * Color name for right label background from the Quasar Color Palette
     * @type {String}
     */
    'right-label-color': {
      type: String,
    },
    /**
     * Always display the labels
     * @type {Boolean}
     */
    'label-always': {
      type: Boolean,
    },
    /**
     * Display markers on the track, one for each possible value for the model
     * @type {Boolean}
     */
    'markers': {
      type: Boolean,
    },
    /**
     * Snap thumbs on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     * @type {Boolean}
     */
    'snap': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    }
  }
})

Vue.component('QRating', {
  name: 'QRating',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * Number of icons to display
     * @type {Number|String}
     */
    'max': {
      type: [Number,String],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QResizeObserver', {
  name: 'QResizeObserver',
  props: {
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    'debounce': {
      type: [String,Number],
    }
  }
})

Vue.component('QRouteTab', {
  name: 'QRouteTab',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    'to': {
      type: [String,Object],
      required: true
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    'exact': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    'append': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    'replace': {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'active-class': {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    'exact-active-class': {
      type: String,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * A number or string to label the tab
     * @type {Number|String}
     */
    'label': {
      type: [Number,String],
    },
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     * @type {Boolean|String}
     */
    'alert': {
      type: [Boolean,String],
    },
    /**
     * Panel name
     * @type {Number|String}
     */
    'name': {
      type: [Number,String],
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QScrollArea', {
  name: 'QScrollArea',
  props: {
    /**
     * Object with CSS properties and values for styling the thumb of custom scrollbar
     * @type {Object}
     */
    'thumb-style': {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea
     * @type {Object}
     */
    'content-style': {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)
     * @type {Object}
     */
    'content-active-style': {
      type: Object,
    },
    /**
     * Number (in milliseconds) defining a delay before custom scrollbars become visible after mouse is hovering the container
     * @type {Number|String}
     */
    'delay': {
      type: [Number,String],
    }
  }
})

Vue.component('QScrollObserver', {
  name: 'QScrollObserver',
  props: {
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    'debounce': {
      type: [String,Number],
    }
  }
})

Vue.component('QSelect', {
  name: 'QSelect',
  props: {
    /**
     * Does field has validation errors?
     * @type {Boolean}
     */
    'error': {
      type: Boolean,
    },
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     * @type {String}
     */
    'error-message': {
      type: String,
    },
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     * @type {Array}
     */
    'rules': {
      type: Array,
    },
    /**
     * Check validation status against the 'rules' only after field loses focus for first time
     * @type {Boolean}
     */
    'lazy-rules': {
      type: Boolean,
    },
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label will be always shown above the field regardless of field content (if any)
     * @type {Boolean}
     */
    'stack-label': {
      type: Boolean,
    },
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     * @type {String}
     */
    'hint': {
      type: String,
    },
    /**
     * Hide the helper (hint) text when field doesn't has focus
     * @type {Boolean}
     */
    'hide-hint': {
      type: Boolean,
    },
    /**
     * Prefix
     * @type {String}
     */
    'prefix': {
      type: String,
    },
    /**
     * Suffix
     * @type {String}
     */
    'suffix': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'bg-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Use 'filled' design for the field
     * @type {Boolean}
     */
    'filled': {
      type: Boolean,
    },
    /**
     * Use 'outlined' design for the field
     * @type {Boolean}
     */
    'outlined': {
      type: Boolean,
    },
    /**
     * Use 'borderless' design for the field
     * @type {Boolean}
     */
    'borderless': {
      type: Boolean,
    },
    /**
     * Use 'standout' design for the field
     * @type {Boolean}
     */
    'standout': {
      type: Boolean,
    },
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     * @type {Boolean}
     */
    'bottom-slots': {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    'rounded': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Align content to match QItem
     * @type {Boolean}
     */
    'items-aligned': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Model of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number|String|Array}
     */
    'value': {
      type: [Number,String,Array],
      required: true
    },
    /**
     * Allow multiple selection; Model must be Array
     * @type {Boolean}
     */
    'multiple': {
      type: Boolean,
    },
    /**
     * Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop
     * @type {Number|String}
     */
    'display-value': {
      type: [Number,String],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'dropdown-icon': {
      type: String,
    },
    /**
     * Available options that the user can select from
     * @type {Array}
     */
    'options': {
      type: Array,
    },
    /**
     * Property of option which holds the 'value'
     * @type {Function|String}
     */
    'option-value': {
      type: [Function,String],
    },
    /**
     * Property of option which holds the 'label'
     * @type {Function|String}
     */
    'option-label': {
      type: [Function,String],
    },
    /**
     * Property of option which tells it's disabled; The value of the property must be a Boolean
     * @type {Function|String}
     */
    'option-disable': {
      type: [Function,String],
    },
    /**
     * Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects
     * @type {Boolean}
     */
    'hide-selected': {
      type: Boolean,
    },
    /**
     * Show a counter of selected options on bottom right side
     * @type {Boolean}
     */
    'counter': {
      type: Boolean,
    },
    /**
     * Allow a maximum number of selections that the user can do
     * @type {Number|String}
     */
    'max-values': {
      type: [Number,String],
    },
    /**
     * Dense mode for options list; occupies less space
     * @type {Boolean}
     */
    'options-dense': {
      type: Boolean,
    },
    /**
     * Options menu will be colored with a dark color
     * @type {Boolean}
     */
    'options-dark': {
      type: Boolean,
    },
    /**
     * CSS class name for options that are active/selected
     * @type {String}
     */
    'options-selected-class': {
      type: String,
    },
    /**
     * Use an input tag where users can type
     * @type {Boolean}
     */
    'use-input': {
      type: Boolean,
    },
    /**
     * Use QChip to show what is currently selected
     * @type {Boolean}
     */
    'use-chips': {
      type: Boolean,
    },
    /**
     * Try to map labels of model from 'options' Array; has a small performance penalty
     * @type {Boolean}
     */
    'map-options': {
      type: Boolean,
    },
    /**
     * Update model with the value of the selected option instead of the whole option
     * @type {Boolean}
     */
    'emit-value': {
      type: Boolean,
    },
    /**
     * Debounce the input model update with an amount of milliseconds
     * @type {Number|String}
     */
    'input-debounce': {
      type: [Number,String],
    },
    /**
     * Expand the menu on top or bottom of the component, so it won't cover it
     * @type {Boolean}
     */
    'expand-besides': {
      type: Boolean,
    },
    /**
     * Focus component on initial render
     * @type {Boolean}
     */
    'autofocus': {
      type: Boolean,
    },
    /**
     * Transition when showing the menu; One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-show': {
      type: String,
    },
    /**
     * Transition when hiding the menu; One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-hide': {
      type: String,
    }
  }
})

Vue.component('QSeparator', {
  name: 'QSeparator',
  props: {
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * If set to true, the top and bottom margins will be set to 8px
     * @type {Boolean}
     */
    'spaced': {
      type: Boolean,
    },
    /**
     * if set to true, the left and right margins will be set to 16px. If set to item, the left and right margins will be set to 72px. If set to item-thumbnail, the left margin is set to 116px and right margin is set to 0px
     * @type {Boolean|String}
     */
    'inset': {
      type: [Boolean,String],
    },
    /**
     * If set to true, the separator will be vertical.
     * @type {Boolean}
     */
    'vertical': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSlideItem', {
  name: 'QSlideItem',
  props: {
    /**
     * Color name for left-side background from the Quasar Color Palette
     * @type {String}
     */
    'left-color': {
      type: String,
    },
    /**
     * Color name for right-side background from the Quasar Color Palette
     * @type {String}
     */
    'right-color': {
      type: String,
    }
  }
})

Vue.component('QSlider', {
  name: 'QSlider',
  props: {
    /**
     * Model of the component (must be between min/max); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * Minimum value of the model
     * @type {Number}
     */
    'min': {
      type: Number,
    },
    /**
     * Maximum value of the model
     * @type {Number}
     */
    'max': {
      type: Number,
    },
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     * @type {Number}
     */
    'step': {
      type: Number,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Popup a label when user clicks/taps on the slider thumb and moves it
     * @type {Boolean}
     */
    'label': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'label-color': {
      type: String,
    },
    /**
     * Always display the label
     * @type {Boolean}
     */
    'label-always': {
      type: Boolean,
    },
    /**
     * Display markers on the track, one for each possible value for the model
     * @type {Boolean}
     */
    'markers': {
      type: Boolean,
    },
    /**
     * Snap on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     * @type {Boolean}
     */
    'snap': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    }
  }
})

Vue.component('QSlideTransition', {
  name: 'QSlideTransition',
  props: {
    /**
     * If set to true, the transition will be applied on the initial render.
     * @type {Boolean}
     */
    'appear': {
      type: Boolean,
    },
    /**
     * Duration (in milliseconds) enabling animated scroll.
     * @type {Number}
     */
    'duration': {
      type: Number,
    }
  }
})

Vue.component('QSpace', {
  name: 'QSpace',
  props: {
  }
})

Vue.component('QSpinner', {
  name: 'QSpinner',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Override value to use for stroke-width
     * @type {Number}
     */
    'thickness': {
      type: Number,
    }
  }
})

Vue.component('QSpinnerAudio', {
  name: 'QSpinnerAudio',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerBall', {
  name: 'QSpinnerBall',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerBars', {
  name: 'QSpinnerBars',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerComment', {
  name: 'QSpinnerComment',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerCube', {
  name: 'QSpinnerCube',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerDots', {
  name: 'QSpinnerDots',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerFacebook', {
  name: 'QSpinnerFacebook',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerGears', {
  name: 'QSpinnerGears',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerGrid', {
  name: 'QSpinnerGrid',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerHearts', {
  name: 'QSpinnerHearts',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerHourglass', {
  name: 'QSpinnerHourglass',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerInfinity', {
  name: 'QSpinnerInfinity',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerIos', {
  name: 'QSpinnerIos',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerOval', {
  name: 'QSpinnerOval',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerPie', {
  name: 'QSpinnerPie',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerPuff', {
  name: 'QSpinnerPuff',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerRadio', {
  name: 'QSpinnerRadio',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerRings', {
  name: 'QSpinnerRings',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSpinnerTail', {
  name: 'QSpinnerTail',
  props: {
    /**
     * Size in CSS units, including unit name
     * @type {String}
     */
    'size': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    }
  }
})

Vue.component('QSplitter', {
  name: 'QSplitter',
  props: {
    /**
     * Model of the component defining the split ratio (0.0 < x < 100.0) beetween panes; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number}
     */
    'value': {
      type: Number,
    },
    /**
     * Allows the splitter to split its two panes horizontally, instead of vertically
     * @type {Boolean}
     */
    'horizontal': {
      type: Boolean,
    },
    /**
     * An array of two values representing a ratio of minimum and maximum split area of the two panes (0.0 < x < 100.0)
     * @type {Array}
     */
    'limits': {
      type: Array,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the splitter separator
     * @type {Array|String|Object}
     */
    'separator-class': {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the splitter separator
     * @type {Array|String|Object}
     */
    'separator-style': {
      type: [Array,String,Object],
    },
    /**
     * Applies a default lighter color on the separator; To be used when background is darker; Avoid using when you are overriding through separator-class or separator-style props
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    }
  }
})

Vue.component('QStep', {
  name: 'QStep',
  props: {
    /**
     * Panel name
     * @type {*}
     */
    'name': {
      required: true
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Step title
     * @type {String}
     */
    'title': {
      type: String,
      required: true
    },
    /**
     * Step’s additional information that appears beneath the title
     * @type {String}
     */
    'caption': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'done-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'done-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'active-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'active-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'error-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'error-color': {
      type: String,
    },
    /**
     * Allow navigation through the header
     * @type {Boolean}
     */
    'header-nav': {
      type: Boolean,
    },
    /**
     * Mark the step as 'done'
     * @type {Boolean}
     */
    'done': {
      type: Boolean,
    },
    /**
     * Mark the step as having an error
     * @type {Boolean}
     */
    'error': {
      type: Boolean,
    }
  }
})

Vue.component('QStepper', {
  name: 'QStepper',
  props: {
    /**
     * Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    'animated': {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    'infinite': {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    'swipeable': {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-prev': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-next': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Put Stepper in vertical mode (instead of horizontal by default)
     * @type {Boolean}
     */
    'vertical': {
      type: Boolean,
    },
    /**
     * Use alternative labels (applies only to horizontal stepper)
     * @type {Boolean}
     */
    'alternative-labels': {
      type: Boolean,
    },
    /**
     * Allow navigation through the header
     * @type {Boolean}
     */
    'header-nav': {
      type: Boolean,
    },
    /**
     * Hide header labels on narrow windows
     * @type {Boolean}
     */
    'contracted': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'inactive-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'inactive-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'done-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'done-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'active-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'active-color': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'error-icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'error-color': {
      type: String,
    }
  }
})

Vue.component('QStepperNavigation', {
  name: 'QStepperNavigation',
  props: {
  }
})

Vue.component('QTab', {
  name: 'QTab',
  props: {
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    'ripple': {
      type: [Boolean,Object],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * A number or string to label the tab
     * @type {Number|String}
     */
    'label': {
      type: [Number,String],
    },
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     * @type {Boolean|String}
     */
    'alert': {
      type: [Boolean,String],
    },
    /**
     * Panel name
     * @type {Number|String}
     */
    'name': {
      type: [Number,String],
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QTable', {
  name: 'QTable',
  props: {
    /**
     * Rows of data to display
     * @type {Array}
     */
    'data': {
      type: Array,
    },
    /**
     * Property of each row that defines the unique key of each row; The value of property must be string or number
     * @type {String}
     */
    'row-key': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Display data as a grid instead of the default table
     * @type {Boolean}
     */
    'grid': {
      type: Boolean,
    },
    /**
     * Dense mode; Connect with $q.screen for responsive behavior
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * The column definitions (Array of Objects)
     * @type {Array}
     */
    'columns': {
      type: Array,
    },
    /**
     * Array of Strings defining column names ('name' property of each column from 'columns' prop definitions)
     * @type {Array}
     */
    'visible-columns': {
      type: Array,
    },
    /**
     * Put Table into 'loading' state; Notify the user something is happening behind the covers
     * @type {Boolean}
     */
    'loading': {
      type: Boolean,
    },
    /**
     * Table title
     * @type {String}
     */
    'title': {
      type: String,
    },
    /**
     * Hide table header layer
     * @type {Boolean}
     */
    'hide-header': {
      type: Boolean,
    },
    /**
     * Hide table bottom layer
     * @type {Boolean}
     */
    'hide-bottom': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {String}
     */
    'separator': {
      type: String,
    },
    /**
     * Wrap text within table cells
     * @type {Boolean}
     */
    'wrap-cells': {
      type: Boolean,
    },
    /**
     * Skip the third state (unsorted) when user toggles column sort direction
     * @type {Boolean}
     */
    'binary-state-sort': {
      type: Boolean,
    },
    /**
     * Override default text to display when no data is available
     * @type {String}
     */
    'no-data-label': {
      type: String,
    },
    /**
     * Override default text to display when user filters the table and no matched results are found
     * @type {String}
     */
    'no-results-label': {
      type: String,
    },
    /**
     * Override default text to display when table is in loading state (see 'loading' prop)
     * @type {String}
     */
    'loading-label': {
      type: String,
    },
    /**
     * Text to display when user selected at least one row
     * @type {Function}
     */
    'selected-rows-label': {
      type: Function,
    },
    /**
     * Text to override default rows per page label at bottom of table
     * @type {String}
     */
    'rows-per-page-label': {
      type: String,
    },
    /**
     * Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used)
     * @type {Function}
     */
    'pagination-label': {
      type: Function,
    },
    /**
     * CSS style to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    'table-style': {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    'table-class': {
      type: [String,Array,Object],
    },
    /**
     * String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering
     * @type {String|Object}
     */
    'filter': {
      type: [String,Object],
    },
    /**
     * The actual filtering mechanism
     * @type {Function}
     */
    'filter-method': {
      type: Function,
    },
    /**
     * Pagination object
     * @type {Object}
     */
    'pagination': {
      type: Object,
    },
    /**
     * Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
     * @type {Array}
     */
    'rows-per-page-options': {
      type: Array,
    },
    /**
     * Selection type
     * @type {String}
     */
    'selection': {
      type: String,
    },
    /**
     * Keeps the user selection array
     * @type {Array}
     */
    'selected': {
      type: Array,
    },
    /**
     * The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows
     * @type {Function}
     */
    'sort-method': {
      type: Function,
    }
  }
})

Vue.component('QTabPanel', {
  name: 'QTabPanel',
  props: {
    /**
     * Panel name
     * @type {*}
     */
    'name': {
      required: true
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    }
  }
})

Vue.component('QTabPanels', {
  name: 'QTabPanels',
  props: {
    /**
     * Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    'value': {
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    'animated': {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    'infinite': {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    'swipeable': {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-prev': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    'transition-next': {
      type: String,
    }
  }
})

Vue.component('QTabs', {
  name: 'QTabs',
  props: {
    /**
     * Model of the component defining current panel name; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number|String}
     */
    'value': {
      type: [Number,String],
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {String}
     */
    'align': {
      type: String,
    },
    /**
     * Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
     * @type {Number|String}
     */
    'breakpoint': {
      type: [Number,String],
    },
    /**
     * The color to be attributed to the text of the active tab
     * @type {String}
     */
    'active-color': {
      type: String,
    },
    /**
     * The color to be attributed to the background of the active tab
     * @type {String}
     */
    'active-bg-color': {
      type: String,
    },
    /**
     * The color to be attributed to the indicator (the underline) of the active tab
     * @type {String}
     */
    'indicator-color': {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    'left-icon': {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    'right-icon': {
      type: String,
    },
    /**
     * Allows the indicator to be placed above the tab, instead of below it
     * @type {Boolean}
     */
    'top-indicator': {
      type: Boolean,
    },
    /**
     * Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab
     * @type {Boolean}
     */
    'narrow-indicator': {
      type: Boolean,
    },
    /**
     * Allows the text to be inline with the icon, should one be used
     * @type {Boolean}
     */
    'inline-label': {
      type: Boolean,
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    'no-caps': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    }
  }
})

Vue.component('QTd', {
  name: 'QTd',
  props: {
    /**
     * QTable's column scoped slot property
     * @type {Object}
     */
    'props': {
      type: Object,
    },
    /**
     * Tries to shrink column width size; Useful for columns with a checkbox/radio/toggle
     * @type {Boolean}
     */
    'auto-width': {
      type: Boolean,
    }
  }
})

Vue.component('QTh', {
  name: 'QTh',
  props: {
    /**
     * QTable's header column scoped slot property
     * @type {Object}
     */
    'props': {
      type: Object,
    },
    /**
     * Tries to shrink header column width size; Useful for columns with a checkbox/radio/toggle
     * @type {Boolean}
     */
    'auto-width': {
      type: Boolean,
    }
  }
})

Vue.component('QTime', {
  name: 'QTime',
  props: {
    /**
     * Time of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String}
     */
    'value': {
      type: String,
    },
    /**
     * Display the component in landscape mode
     * @type {Boolean}
     */
    'landscape': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Forces 24 hour time display instead of AM/PM system
     * @type {Boolean}
     */
    'format24h': {
      type: Boolean,
    },
    /**
     * Optionally configure what time is the user allowed to set; Overriden by 'hour-options', 'minute-options' and 'second-options' if those are set
     * @type {Function}
     */
    'options': {
      type: Function,
    },
    /**
     * Optionally configure what hours is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    'hour-options': {
      type: Array,
    },
    /**
     * Optionally configure what minutes is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    'minute-options': {
      type: Array,
    },
    /**
     * Optionally configure what seconds is the user allowed to set; Overrides 'options' prop if that is also set
     * @type {Array}
     */
    'second-options': {
      type: Array,
    },
    /**
     * Allow the time to be set with seconds
     * @type {Boolean}
     */
    'with-seconds': {
      type: Boolean,
    },
    /**
     * Display a button that selects the current time
     * @type {Boolean}
     */
    'now-btn': {
      type: Boolean,
    }
  }
})

Vue.component('QTimeline', {
  name: 'QTimeline',
  props: {
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Side to place the timeline entries in dense and comfortable layout; For loose layout it gets overriden by QTimelineEntry side prop
     * @type {String}
     */
    'side': {
      type: String,
    },
    /**
     * Layout of the timeline. Dense keeps content and labels on one side. Comfortable keeps content on one side and labels on the opposite side. Loose puts content on both sides.
     * @type {String}
     */
    'layout': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    }
  }
})

Vue.component('QTimelineEntry', {
  name: 'QTimelineEntry',
  props: {
    /**
     * Defines a heading timeline item
     * @type {Boolean}
     */
    'heading': {
      type: Boolean,
    },
    /**
     * Tag to use, if of type 'heading' only
     * @type {String}
     */
    'tag': {
      type: String,
    },
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     * @type {String}
     */
    'side': {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Title of timeline entry
     * @type {String}
     */
    'title': {
      type: String,
    },
    /**
     * Subtitle of timeline entry
     * @type {String}
     */
    'subtitle': {
      type: String,
    }
  }
})

Vue.component('QToggle', {
  name: 'QToggle',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*|Array}
     */
    'value': {
    },
    /**
     * Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked
     * @type {*}
     */
    'val': {
    },
    /**
     * What model value should be considered as checked/ticked/on?
     * @type {*}
     */
    'true-value': {
    },
    /**
     * What model value should be considered as unchecked/unticked/off?
     * @type {*}
     */
    'false-value': {
    },
    /**
     * Label to display along the component (or use the default slot instead of this prop)
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Label (if any specified) should be displayed on the left side of the component
     * @type {Boolean}
     */
    'left-label': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Should the color (if specified any) be kept when the component is unticked/ off?
     * @type {Boolean}
     */
    'keep-color': {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    'dense': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    'tabindex': {
      type: [Number,String],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * The icon to be used when the toggle is on
     * @type {String}
     */
    'checked-icon': {
      type: String,
    },
    /**
     * The icon to be used when the toggle is off
     * @type {String}
     */
    'unchecked-icon': {
      type: String,
    }
  }
})

Vue.component('QToolbar', {
  name: 'QToolbar',
  props: {
    /**
     * Apply an inset to content (useful for subsequent toolbars)
     * @type {Boolean}
     */
    'inset': {
      type: Boolean,
    }
  }
})

Vue.component('QToolbarTitle', {
  name: 'QToolbarTitle',
  props: {
    /**
     * By default, QToolbarTitle is set to grow to the available space. However, you can reverse that with this prop
     * @type {Boolean}
     */
    'shrink': {
      type: Boolean,
    }
  }
})

Vue.component('QTooltip', {
  name: 'QTooltip',
  props: {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    'value': {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the Tooltip
     * @type {Array|String|Object}
     */
    'content-class': {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the Tooltip
     * @type {Array|String|Object}
     */
    'content-style': {
      type: [Array,String,Object],
    },
    /**
     * The maximimum height of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    'max-height': {
      type: String,
    },
    /**
     * The maximimum width of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    'max-width': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-show': {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    'transition-hide': {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {String}
     */
    'anchor': {
      type: String,
    },
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels
     * @type {Array}
     */
    'offset': {
      type: Array,
    },
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|String}
     */
    'target': {
      type: [Boolean,String],
    },
    /**
     * Configure Tooltip to appear with delay
     * @type {Number}
     */
    'delay': {
      type: Number,
    }
  }
})

Vue.component('QTr', {
  name: 'QTr',
  props: {
    /**
     * QTable's row scoped slot property
     * @type {Object}
     */
    'props': {
      type: Object,
    }
  }
})

Vue.component('QTree', {
  name: 'QTree',
  props: {
    /**
     * The array of nodes that designates the tree structure
     * @type {Array}
     */
    'nodes': {
      type: Array,
      required: true
    },
    /**
     * The property name of each node object that holds a unique node id
     * @type {String}
     */
    'node-key': {
      type: String,
      required: true
    },
    /**
     * The property name of each node object that holds the label of the node
     * @type {String}
     */
    'label-key': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Color name for controls (like checkboxes) from the Quasar Color Palette
     * @type {String}
     */
    'control-color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Color name for selected nodes (from the Quasar Color Palette)
     * @type {String}
     */
    'selected-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    'icon': {
      type: String,
    },
    /**
     * The type of strategy to use for the selection of the nodes
     * @type {String}
     */
    'tick-strategy': {
      type: String,
    },
    /**
     * Keys of nodes that are ticked
     * @type {Array}
     */
    'ticked': {
      type: Array,
    },
    /**
     * Keys of nodes that are expanded
     * @type {Array}
     */
    'expanded': {
      type: Array,
    },
    /**
     * Key of node currently selected
     * @type {*}
     */
    'selected': {
    },
    /**
     * Allow the tree to have all its branches expanded, when first rendered
     * @type {Boolean}
     */
    'default-expand-all': {
      type: Boolean,
    },
    /**
     * Allows the tree to be set in accordion mode
     * @type {Boolean}
     */
    'accordion': {
      type: Boolean,
    },
    /**
     * The text value to be used for filtering nodes
     * @type {String}
     */
    'filter': {
      type: String,
    },
    /**
     * The function to use to filter the tree nodes
     * @type {Function}
     */
    'filter-method': {
      type: Function,
    },
    /**
     * Toggle animation duration (in milliseconds)
     * @type {Number}
     */
    'duration': {
      type: Number,
    },
    /**
     * Override default such label for when no nodes are available
     * @type {String}
     */
    'no-nodes-label': {
      type: String,
    },
    /**
     * Override default such label for when no nodes are available due to filtering
     * @type {String}
     */
    'no-results-label': {
      type: String,
    }
  }
})

Vue.component('QUploader', {
  name: 'QUploader',
  props: {
    /**
     * Label for the uploader
     * @type {String}
     */
    'label': {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    'color': {
      type: String,
    },
    /**
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    'text-color': {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    'dark': {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    'square': {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    'flat': {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    'bordered': {
      type: Boolean,
    },
    /**
     * Show component as inline-block
     * @type {Boolean}
     */
    'inline': {
      type: Boolean,
    },
    /**
     * Allow multiple file uploads
     * @type {Boolean}
     */
    'multiple': {
      type: Boolean,
    },
    /**
     * Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element
     * @type {String}
     */
    'accept': {
      type: String,
    },
    /**
     * Maximum size of individual file in bytes
     * @type {Number}
     */
    'max-file-size': {
      type: Number,
    },
    /**
     * Maximum size of all files combined in bytes
     * @type {Number}
     */
    'max-total-size': {
      type: Number,
    },
    /**
     * Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded
     * @type {Function}
     */
    'filter': {
      type: Function,
    },
    /**
     * Don't display thumbnails for image files
     * @type {Boolean}
     */
    'no-thumbnails': {
      type: Boolean,
    },
    /**
     * Upload files immediately when added
     * @type {Boolean}
     */
    'auto-upload': {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    'disable': {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    'readonly': {
      type: Boolean,
    },
    /**
     * URL or path to the server which handles the upload. Takes String or factory function, which returns String. Function is called right before upload
     * @type {String|Function}
     */
    'url': {
      type: [String,Function],
      required: true
    },
    /**
     * HTTP method to use for upload; Takes String or factory function which returns a String; Function is called right before upload
     * @type {String|Function}
     */
    'method': {
      type: [String,Function],
    },
    /**
     * Array or a factory function which returns an array; Array consists of objects with header definitions; Function is called right before upload
     * @type {Array|Function}
     */
    'headers': {
      type: [Array,Function],
    },
    /**
     * Upload files in batch (in one XHR request); Takes boolean or factory function for Boolean; Function is called right before upload
     * @type {Boolean|Function}
     */
    'batch': {
      type: [Boolean,Function],
    }
  }
})

Vue.component('QVideo', {
  name: 'QVideo',
  props: {
    /**
     * The source url to display in an iframe
     * @type {String}
     */
    'src': {
      type: String,
      required: true
    }
  }
})

Vue.directive('Ripple', {})

Vue.directive('Scroll', {})

Vue.directive('ScrollFire', {})

Vue.directive('TouchHold', {})

Vue.directive('TouchPan', {})

Vue.directive('TouchRepeat', {})

Vue.directive('TouchSwipe', {})

  /**
   * Quasar plugins injected to prototype:
   * $q.addressbarColor

   * $q.fullscreen

   * $q.appVisible

   * $q.bottomSheet

   * $q.cookies

   * $q.dialog

   * $q.loading

   * $q.loadingBar

   * $q.localStorage

   * $q.notify

   * $q.platform

   * $q.screen

   * $q.sessionStorage

   */
  Vue.prototype.$q = {
  
addressbarColor : {
  
  
   /**
    * Sets addressbar color (for browsers that support it)
    * @param {String} hexColor Color in hex format
    */
    set (hexColor) {}
},

fullscreen : {
  
    /**
     * Does browser support it?
     * @type {Boolean}
     */
    'isCapable': {},
    /**
     * Is Fullscreen active? (reactive)
     * @type {Boolean}
     */
    'isActive': {},
  
   /**
    * Request going into Fullscreen (with optional target)
    * @param {String} [target] Optional CSS selector of target to request Fullscreen on
    */
    request (target) {},
   /**
    * Request exiting out of Fullscreen mode
    */
    exit () {},
   /**
    * Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)
    * @param {String} [target] Optional CSS selector of target to request Fullscreen on
    */
    toggle (target) {}
},

appVisible : {
  
    /**
     * Does the app has user focus? Or the app runs in the background / another tab has the user's attention (reactive)
     * @type {Boolean}
     */
    'appVisible': {},
  
},

bottomSheet : {
  
  
   /**
    * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
    * @param {Object} opts Bottom Sheet options
    * @return {Object} Chainable Object
    */
    create (opts) {}
},

cookies : {
  
  
   /**
    * Get cookie
    * @param {String} name Cookie name
    * @return {String} Cookie value
    */
    get (name) {},
   /**
    * Get all cookies
    * @return {Object} Object with cookie names (as keys) and their values
    */
    getAll () {},
   /**
    * Set cookie
    * @param {String} name Cookie name
    * @param {String} value Cookie value
    * @param {Object} [options] Cookie options
    */
    set (name,value,options) {},
   /**
    * Check if cookie exists
    * @param {String} name Cookie name
    * @return {Boolean} Does cookie exists or not?
    */
    has (name) {},
   /**
    * Remove a cookie
    * @param {String} name Cookie name
    * @param {Object} [options] Cookie options
    */
    remove (name,options) {},
   /**
    * For SSR usage only, and only on the global import (not on $q.cookies)
    * @param {Object} ssrContext SSR Context Object
    * @return {Object} Cookie object (like $q.cookies) for SSR usage purposes
    */
    parseSSR (ssrContext) {}
},

dialog : {
  
  
   /**
    * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
    * @param {Object} opts Dialog options
    * @return {Object} Chainable Object
    */
    create (opts) {}
},

loading : {
  
    /**
     * Is Loading active? (reactive)
     * @type {Boolean}
     */
    'isActive': {},
  
   /**
    * Activate and show
    * @param {Object} [opts] All props are optional
    */
    show (opts) {},
   /**
    * Hide it
    */
    hide () {},
   /**
    * Merge options into the default ones
    * @param {Object} opts Pick the subprop you want to define
    */
    setDefaults (opts) {}
},

loadingBar : {
  
  
   /**
    * Notify bar you've started a background activity
    * @param {Number} [speed] Delay (in milliseconds) between bar progress increments
    */
    start (speed) {},
   /**
    * Notify bar one background activity has finalized
    */
    stop () {},
   /**
    * Manually trigger a bar progress increment
    * @param {Number} [amount] Amount (0.0 < x < 1.0) to increment with
    */
    increment (amount) {}
},

localStorage : {
  
  
   /**
    * Check if storage item exists
    * @param {String} key Entry key
    * @return {Boolean} Does the item exists or not?
    */
    has (key) {},
   /**
    * Get storage number of entries
    * @return {Number} Number of entries
    */
    getLength () {},
   /**
    * Get a storage item value
    * @param {String} key Entry key
    * @return {*} Storage item value
    */
    getItem (key) {},
   /**
    * Get the storage item value at specific index
    * @param {Number} index Entry index
    * @return {*} Storage item value
    */
    getIndex (index) {},
   /**
    * Retrieve all items in storage
    * @return {Object} Object syntax: item name as Object key and its value
    */
    getAll () {},
   /**
    * Set item in storage
    * @param {String} key Entry key
    * @param {String} value Entry value
    */
    set (key,value) {},
   /**
    * Remove a storage item
    * @param {String} key Storage key
    */
    remove (key) {},
   /**
    * Remove everything from the storage
    */
    clear () {},
   /**
    * Determine if storage has any items
    * @return {Boolean} Tells if storage is empty or not
    */
    isEmpty () {}
},

notify : {
  
  
   /**
    * Creates a notification; Same as calling $q.notify(...)
    * @param {Object} opts For syntax, check quasar.conf options parameters
    * @return {Function} Calling this function hides the notification
    */
    create (opts) {},
   /**
    * Merge options into the default ones
    * @param {Object} opts For syntax, check quasar.conf options parameters
    */
    setDefaults (opts) {}
},

platform : {
  
    /**
     * Client browser details (property names depend on browser)
     * @type {Object}
     */
    'is': {},
    /**
     * Client browser detectable properties
     * @type {Object}
     */
    'has': {},
    /**
     * Client browser environment
     * @type {Object}
     */
    'within': {},
  
},

screen : {
  
    /**
     * Screen width (in pixels) (reactive)
     * @type {Number}
     */
    'width': {},
    /**
     * Screen height (in pixels) (reactive)
     * @type {Number}
     */
    'height': {},
    /**
     * Breakpoints (in pixels) (reactive)
     * @type {Object}
     */
    'sizes': {},
    /**
     * Tells if current screen width is lower than breakpoint-name (reactive)
     * @type {Object}
     */
    'lt': {},
    /**
     * Tells if current screen width is greater than breakpoint-name (reactive)
     * @type {Object}
     */
    'gt': {},
    /**
     * Current screen width fits exactly 'xs' breakpoint (reactive)
     * @type {Boolean}
     */
    'xs': {},
    /**
     * Current screen width fits exactly 'sm' breakpoint (reactive)
     * @type {Boolean}
     */
    'sm': {},
    /**
     * Current screen width fits exactly 'md' breakpoint (reactive)
     * @type {Boolean}
     */
    'md': {},
    /**
     * Current screen width fits exactly 'lg' breakpoint (reactive)
     * @type {Boolean}
     */
    'lg': {},
    /**
     * Current screen width fits exactly 'xl' breakpoint (reactive)
     * @type {Boolean}
     */
    'xl': {},
  
   /**
    * Override default breakpoint sizes
    * @param {Object} breakpoints Pick what you want to override
    */
    setSizes (breakpoints) {},
   /**
    * Debounce update of all props when screen width/height changes
    * @param {Number} amount Amount in milliseconds
    */
    setDebounce (amount) {}
},

sessionStorage : {
  
  
   /**
    * Check if storage item exists
    * @param {String} key Entry key
    * @return {Boolean} Does the item exists or not?
    */
    has (key) {},
   /**
    * Get storage number of entries
    * @return {Number} Number of entries
    */
    getLength () {},
   /**
    * Get a storage item value
    * @param {String} key Entry key
    * @return {*} Storage item value
    */
    getItem (key) {},
   /**
    * Get the storage item value at specific index
    * @param {Number} index Entry index
    * @return {*} Storage item value
    */
    getIndex (index) {},
   /**
    * Retrieve all items in storage
    * @return {Object} Object syntax: item name as Object key and its value
    */
    getAll () {},
   /**
    * Set item in storage
    * @param {String} key Entry key
    * @param {String} value Entry value
    */
    set (key,value) {},
   /**
    * Remove a storage item
    * @param {String} key Storage key
    */
    remove (key) {},
   /**
    * Remove everything from the storage
    */
    clear () {},
   /**
    * Determine if storage has any items
    * @return {Boolean} Tells if storage is empty or not
    */
    isEmpty () {}
},

  }