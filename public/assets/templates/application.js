window.Ember.TEMPLATES.application=Ember.Handlebars.compile('<nav class="top-bar">\n  <ul class="title-area">\n    <li class="name">\n      <h1><a href="#">Ember Bloggr</a></h1>\n    </li>\n    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>\n  </ul>\n  <section class="top-bar-section">\n    <ul class="left">\n      <li class="divider"></li>\n      <li>{{#linkTo \'posts\'}}Posts{{/linkTo}}</li>\n      <li class="divider"></li>\n      <li>{{#linkTo \'about\'}}About{{/linkTo}}</li>\n    </ul>\n  </section>\n</nav>\n\n{{outlet}}\n');