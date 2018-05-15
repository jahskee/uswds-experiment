webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"usa-footer usa-footer-big\" role=\"contentinfo\">\n        <div class=\"usa-grid usa-footer-return-to-top\">\n          <a href=\"#\">Return to top</a>\n        </div>\n        <div class=\"usa-footer-primary-section\">\n          <div class=\"usa-grid\">\n            <nav class=\"usa-footer-nav usa-width-two-thirds\">\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                  <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link that's a bit longer than most of the others</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link that's pretty long</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n            </nav>\n      \n            <div class=\"usa-sign_up-block usa-width-one-third\">\n              <h3 class=\"usa-sign_up-header\">Sign up</h3>\n      \n              <label class=\"\" for=\"email\" id=\"\">Your email address</label>\n              <input id=\"email\" name=\"email\" type=\"email\">\n      \n              <button type=\"submit\">Sign up</button>\n            </div>\n          </div>\n        </div>\n      \n        <div class=\"usa-footer-secondary_section usa-footer-big-secondary-section\" style='background-color: #006747'>\n          <div class=\"usa-grid\">\n            <div class=\"usa-footer-logo usa-width-one-half\">\n              <img class=\"usa-footer-big-logo-img\" src=\"/assets/img/logo-img.png\" alt=\"\">\n              <h3 class=\"usa-footer-big-logo-heading\">USDA</h3>\n            </div>\n            <div class=\"usa-footer-contact-links usa-width-one-half\">\n              <a class=\"usa-link-facebook\" href=\"javascript:void(0);\">\n                <span>Facebook</span>\n              </a>\n              <a class=\"usa-link-twitter\" href=\"javascript:void(0);\">\n                <span>Twitter</span>\n              </a>\n              <a class=\"usa-link-youtube\" href=\"javascript:void(0);\">\n                <span>YouTube</span>\n              </a>\n              <a class=\"usa-link-rss\" href=\"javascript:void(0);\">\n                <span>RSS</span>\n              </a>\n              <h3 class=\"usa-footer-contact-heading\">Agency Contact Center</h3>\n              <address>\n                <div class=\"usa-footer-primary-content usa-footer-contact_info\">\n                  <p>\n                    <a href=\"tel:1-800-555-5555\">(800) CALL-GOVT</a>\n                  </p>\n                </div>\n                <div class=\"usa-footer-primary-content usa-footer-contact_info\">\n                  <p><a href=\"mailto:info@agency.gov\">info@agency.gov</a></p>\n                </div>\n              </address>\n            </div>\n          </div>\n        </div>\n      </footer>"

/***/ }),

/***/ "./src/app/_common/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\nfooter {  \n  //position:absolute;\n  bottom:0;\n  width:100%;\n  height:50px;\n  background:rgb(145, 199, 226);\n}\n\np {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n*/\n"

/***/ }),

/***/ "./src/app/_common/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/_common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/_common/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/_common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='my-header' style='margin:0; margin-bottom: 3rem'>\n  <div class=\"usa-banner\">\n    <div class=\"usa-accordion\">\n      <header class=\"usa-banner-header\">\n        <div class=\"usa-grid usa-banner-inner\" style='width: 600px; margin-left:0; text-align: left'>\n          <img src=\"/assets/uswds-1.6.3/img/favicons/favicon-57.png\" alt=\"U.S. flag\">\n          <span>An official website of the United States government</span>\n          <button class=\"usa-accordion-button usa-banner-button\" aria-expanded=\"false\" aria-controls=\"gov-banner\">\n            <span class=\"usa-banner-button-text\">Here's how you know</span>\n          </button>\n        </div>\n      </header>\n      <div class=\"usa-banner-content usa-grid usa-accordion-content\" id=\"gov-banner\">\n        <div class=\"usa-banner-guidance-gov usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-dot-gov.svg\" alt=\"Dot gov\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The .gov means it’s official.</strong>\n              <br> Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re\n              on a federal government site.\n            </p>\n          </div>\n        </div>\n        <div class=\"usa-banner-guidance-ssl usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-https.svg\" alt=\"Https\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The site is secure.</strong>\n              <br> The\n              <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide\n              is encrypted and transmitted securely.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <style>\n    my-logo {\n      margin: 0;\n      text-align: left;\n    }\n  </style>\n  <header class=\"usa-header usa-header-basic\" role=\"banner\">\n\n    <form class=\"usa-search usa-search-small\" style=\"padding: 5px 5px 0 0\">\n      <div role=\"search\">\n        <label class=\"usa-sr-only\" for=\"basic-search-field-small\">Search small</label>\n        <input id=\"basic-search-field-small\" type=\"search\" name=\"search\">\n        <button type=\"submit\">\n          <span class=\"usa-sr-only\">Search</span>\n        </button>\n      </div>\n    </form>\n\n    <div id='my-top-menu' style='width: 100vw; background-color:#006747; \n                                  color:white; padding: 10px; padding-left: 30px;'>\n\n      <div style='display: flex; flex-direction: row'>\n        <img src='/assets/images/logo/usda-circle.png' style='width: 80px; height: 80px; text-align: left; margin-right: 10px;\n          vertical-align: middle'>\n        <div>\n          <h3 style='margin: 0; text-align: left; padding-top: 15px'>U.S. Department of Agriculture </h3>\n          <h4 style='margin: 0; text-align: left; padding-top: 5px'>eAuthentication Service</h4>\n        </div>\n      </div>\n\n\n    </div>\n\n\n    <div class=\"usa-nav-container\">\n      <div class=\"usa-navbar\">\n\n        <button class=\"usa-menu-btn\">Menu</button>\n      </div>\n\n      <nav role=\"navigation\" class=\"usa-nav\">\n\n        <button class=\"usa-nav-close\">\n          <img src=\"/assets/uswds-1.6.3/img/close.svg\" alt=\"close\">\n        </button>\n        <ul class=\"usa-nav-primary usa-accordion\">\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/\">\n              <span>Home</span>\n            </a>\n          </li>\n          <li>\n              <a class=\"usa-nav-link\" routerLink=\"/service\">\n              <span>Services</span>\n            </a>\n\n          </li>\n          <li>\n              <a class=\"usa-nav-link\" routerLink=\"/partners\">\n              <span>Partners</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/contact\">\n              <span>Contact</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/signin\">\n              <span>Sign in</span>\n            </a>\n          </li>\n          <li>\n              <a class=\"usa-nav-link\" routerLink=\"/register\">\n              <span>Register</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"usa-overlay\"></div>\n</div>\n\n\n<main id=\"main-content\"></main>"

/***/ }),

/***/ "./src/app/_common/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_common/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.clickSignIn = function () {
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/_common/header/header.component.html"),
            styles: [__webpack_require__("./src/app/_common/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;\" class='container-fluid'>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contacts App';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/_common/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/_common/footer/footer.component.ts");
var add_contact_form_component_1 = __webpack_require__("./src/app/public/servicepage/add-contact-form/add-contact-form.component.ts");
var contact_list_component_1 = __webpack_require__("./src/app/public/servicepage/contact-list/contact-list.component.ts");
var page2_component_1 = __webpack_require__("./src/app/public/page2/page2.component.ts");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var register_component_1 = __webpack_require__("./src/app/public/register/register.component.ts");
var signin_component_1 = __webpack_require__("./src/app/public/signin/signin.component.ts");
var servicepage_component_1 = __webpack_require__("./src/app/public/servicepage/servicepage.component.ts");
var partners_component_1 = __webpack_require__("./src/app/public/partners/partners.component.ts");
var contact_component_1 = __webpack_require__("./src/app/public/contact/contact.component.ts");
var password_reset_component_1 = __webpack_require__("./src/app/public/password-reset/password-reset.component.ts");
var home_component_1 = __webpack_require__("./src/app/public/home/home.component.ts");
var routes = [
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'partners', component: partners_component_1.PartnersComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'service', component: servicepage_component_1.ServicepageComponent },
    { path: 'page2/:contactId', component: page2_component_1.Page2Component },
    { path: 'passwordreset', component: password_reset_component_1.PasswordResetComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                add_contact_form_component_1.AddContactFormComponent,
                contact_list_component_1.ContactListComponent,
                page2_component_1.Page2Component,
                register_component_1.RegisterComponent,
                signin_component_1.SigninComponent,
                servicepage_component_1.ServicepageComponent,
                partners_component_1.PartnersComponent,
                contact_component_1.ContactComponent,
                password_reset_component_1.PasswordResetComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes),
            ],
            providers: [contact_service_1.ContactService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/public/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/public/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/public/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/public/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n<div class=\"usa-overlay\"></div>\n\n\n    <main id=\"main-content\"></main>\n      \n\n<section class=\"usa-hero\">\n  <div class=\"usa-grid\">\n    <div class=\"usa-hero-callout usa-section-dark\">\n      <h2>\n        \n          <span class=\"usa-hero-callout-alt\">Hero callout:</span>\n        \n        Call attention to a current priority\n      </h2>\n\n      \n      <p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>\n      \n\n      \n      <a class=\"usa-button\" href=\"javascript:void(0)\">Learn about what we do</a>\n      \n    </div>\n  </div>\n</section>\n\n\n      <section class=\"usa-grid usa-section\">\n        <div class=\"usa-width-one-third\">\n          <h2>A tagline highlights your approach.</h2>\n        </div>\n        <div class=\"usa-width-two-thirds\">\n          <p>The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.</p>\n          <p>Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.</p>\n        </div>\n      </section>\n      \n\n<section class=\"usa-section usa-section-dark usa-graphic_list\">\n  <div class=\"usa-grid usa-graphic_list-row\">\n    <div class=\"usa-width-one-half usa-media_block\">\n      <img class=\"usa-media_block-img\"  src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n      <div class=\"usa-media_block-body\">\n        <h3>Graphic headings can vary.</h3>\n        <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>\n      </div>\n    </div>\n    <div class=\"usa-width-one-half usa-media_block\">\n      <img class=\"usa-media_block-img\"  src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n      <div class=\"usa-media_block-body\">\n        <h3>Stick to 6 or fewer words.</h3>\n        <p>Keep body text to about 30. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-grid usa-graphic_list-row\">\n    <div class=\"usa-width-one-half usa-media_block\">\n      <img class=\"usa-media_block-img\"  src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n      <div class=\"usa-media_block-body\">\n        <h3>Never highlight anything without a goal.</h3>\n        <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>\n      </div>\n    </div>\n    <div class=\"usa-width-one-half usa-media_block\">\n      <img class=\"usa-media_block-img\"  src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n      <div class=\"usa-media_block-body\">\n        <h3>Could also have 2 or 6.</h3>\n        <p>In addition to your goal, find out your users’ goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n      <section class=\"usa-section\">\n        <div class=\"usa-grid\">\n          <h2>Section heading</h2>\n          <p class=\"usa-font-lead\">Everything up to this point should help people understand your agency or project: who you are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they should get in touch here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.</p>\n          <a class=\"usa-button usa-button-big\" href=\"#\">Call to action</a>\n        </div>\n      </section>\n    </main>\n    "

/***/ }),

/***/ "./src/app/public/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "#page1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"

/***/ }),

/***/ "./src/app/public/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.contacts = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/public/home/home.component.html"),
            styles: [__webpack_require__("./src/app/public/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/public/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='page2' style='margin-top: 0'>\n  \n  <div id='contact-view'  class=\"card\">\n      <div class='card-header'>\n          <h4>View Contact</h4>\n      </div>\n      <div class='card-body'>\n          <div id='row2'>\n              <div id='photo'>\n                <img src='/assets/images/blank-face.jpeg'>\n              </div>\n              <div id='info' *ngIf='isEditMode'>\n                <form (ngSubmit)='onSubmitSave(contact.id)' [formGroup]='contactForm' >\n                  <table>\n                    <tr>\n                      <td id='label'>ID</td>               \n                      \n                      <td id='input'>\n                        <span>{{contact._id}}</span>                 \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Firstname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='firstname' placeholder=\"Firstname\" class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('firstname').hasError('required') && contactForm.get('firstname').touched\">\n                            Firstname is required!\n                        </small>      \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Lastname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='lastname' placeholder=\"Lastname\"  class='form-control'  />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('lastname').hasError('required') && contactForm.get('lastname').touched\">\n                            Lastname is required!\n                        </small> \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Phone</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='phone' placeholder=\"Phone\"  class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('phone').hasError('required') && contactForm.get('phone').touched\">\n                            Phone is required!\n                        </small> \n                      </td>\n                    </tr>\n                  </table>\n                  <div id='buttons'>\n                      <button class=\"btn btn-secondary\" [disabled]=\"contactForm.invalid\" >Save</button>\n                      <button class=\"btn btn-secondary\" (click)='clickCancel()' >Cancel</button>\n                    \n                  </div>\n                </form>\n            </div>\n      \n            <div id='info' *ngIf='!isEditMode' >             \n                    <table>\n                        <tr>\n                          <td id='label'>ID</td>\n                          <td id='input'>{{contact._id}}</td>\n                        </tr>\n                        <tr>\n                          <td>Firstname</td>\n                          <td>{{contact.firstname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Lastname</td>\n                          <td>{{contact.lastname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Phone</td>\n                          <td>{{contact.phone}}</td>\n                        </tr>\n                      </table>\n                      <div class='alert alert-success' style='margin: 0;margin-top: 5px;' *ngIf=\"isShowMessage\">\n                          {{message}}         \n                      </div>\n\n                      <div id='buttons' *ngIf=\"isShowButtons\">\n                          <button class=\"btn btn-secondary\" (click)='clickEdit()'>Edit</button>  \n                          <button class=\"btn btn-secondary\" (click)='deleteContact(contact._id)'>Delete</button>                           \n                      </div>\n                     \n            \n        </div>\n      </div>\n  </div> \n \n</div>\n<a style='width: 100px; text-align: center; margin-top: 10px' routerLink='/service' routerLinkActive='active' class='btn btn-secondary'>Back</a>"

/***/ }),

/***/ "./src/app/public/page2/page2.component.scss":
/***/ (function(module, exports) {

module.exports = "#page2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 100px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #page2 .nav {\n    padding: 10px 0; }\n  #page2 #contactId {\n    padding-left: 10px; }\n  #contact-view #info {\n  padding: 20px; }\n  #contact-view #photo img {\n  width: 200px; }\n  #contact-view table {\n  text-align: left;\n  margin: 10px; }\n  #contact-view table #label {\n    width: 100px; }\n  #contact-view table #input {\n    width: 200px; }\n  #contact-view table input {\n    width: 300px;\n    margin-bottom: 5px; }\n  #contact-view #buttons {\n  margin-top: 20px; }\n  #contact-view #row2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  #contact-view #btn-update {\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/public/page2/page2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var Page2Component = /** @class */ (function () {
    function Page2Component(contactService, route) {
        this.contactService = contactService;
        this.route = route;
        this.isEditMode = false;
        this.isShowMessage = false;
        this.isShowButtons = true;
        this.message = '';
        this.contact = {};
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var contactId = params['contactId'];
            _this.contactService.getContact(contactId).subscribe(function (contact) {
                _this.contact = contact;
                _this.contactForm = new forms_1.FormGroup({
                    firstname: new forms_1.FormControl(_this.contact.firstname, forms_1.Validators.required),
                    lastname: new forms_1.FormControl(_this.contact.lastname, forms_1.Validators.required),
                    phone: new forms_1.FormControl(_this.contact.phone, forms_1.Validators.required),
                });
            });
        });
    };
    Page2Component.prototype.onSubmitSave = function () {
        var _this = this;
        this.isEditMode = false;
        var contactObj = __assign({ _id: this.contact._id }, this.contactForm.value);
        this.contactService.updateContact(contactObj).subscribe(function (data) {
            _this.contact = contactObj;
            console.log('Contact updated!');
        });
        this.isShowMessage = true;
        this.isShowButtons = true;
        this.message = 'Contact successfully updated.';
    };
    Page2Component.prototype.deleteContact = function (contactId) {
        var yes = confirm('Are you sure you want to delete this contact?');
        if (yes) {
            this.contactService.deleteContact(contactId).subscribe(function () {
                return console.log('deleted contact._id = ' + contactId);
            });
            this.isShowMessage = true;
            this.isShowButtons = false;
            this.message = 'Contact successfully deleted.';
        }
    };
    Page2Component.prototype.clickEdit = function () {
        this.isEditMode = true;
    };
    Page2Component.prototype.clickCancel = function () {
        this.isEditMode = false;
        //shallow clone
        var contactObj = __assign({}, this.contact);
        delete contactObj._id;
        delete contactObj.__v;
        this.contactForm.setValue(contactObj);
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/public/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/public/page2/page2.component.scss")],
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService,
            router_1.ActivatedRoute])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;


/***/ }),

/***/ "./src/app/public/partners/partners.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  partners works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/partners/partners.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/partners/partners.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        core_1.Component({
            selector: 'app-partners',
            template: __webpack_require__("./src/app/public/partners/partners.component.html"),
            styles: [__webpack_require__("./src/app/public/partners/partners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());
exports.PartnersComponent = PartnersComponent;


/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  password-reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent = __decorate([
        core_1.Component({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/public/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/public/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());
exports.PasswordResetComponent = PasswordResetComponent;


/***/ }),

/***/ "./src/app/public/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"usa-form\" style=\"margin: 0 auto\">\n    <fieldset>\n      <legend>Name</legend>\n      <label for=\"title\">Title <span class=\"usa-input-label-helper\">(optional)</span></label>\n      <input class=\"usa-input-tiny\" id=\"title\" name=\"title\" type=\"text\">\n\n      <label for=\"first-name\">First name</label>\n      <input id=\"first-name\" name=\"first-name\" type=\"text\" required aria-required=\"true\">\n\n      <label for=\"middle-name\">Middle name <span class=\"usa-input-label-helper\">(optional)</span></label>\n      <input id=\"middle-name\" name=\"middle-name\" type=\"text\">\n\n      <label for=\"last-name\">Last name</label>\n      <input id=\"last-name\" name=\"last-name\" type=\"text\" required aria-required=\"true\">\n\n    </fieldset>\n  </form>"

/***/ }),

/***/ "./src/app/public/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/public/register/register.component.html"),
            styles: [__webpack_require__("./src/app/public/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/public/servicepage/add-contact-form/add-contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-contact-form\"  (click)='formClick()' style=\"margin-right: 1rem; margin-top: 1rem\">\n  <div style='text-align: left;'>New Contact</div>\n  <div>\n      <form (ngSubmit)='onSubmit(contact)' [formGroup]='contact' >\n   \n          <div>\n              <div class='form-group'>\n                  <input type='text' placeholder=\"Firstname\" formControlName='firstname' class='form-control'/>  \n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('firstname').hasError('required') && contact.get('firstname').touched\">\n                      Firstname is required!\n                  </small>      \n              </div>           \n            \n           \n              <div class='form-group'>\n                  <input type='text' placeholder=\"Lastname\" formControlName='lastname'  class='form-control'/>\n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('lastname').hasError('required') && contact.get('lastname').touched\">\n                     Lastname is required!\n                  </small> \n              </div>          \n           \n              <div class='form-group'>\n                  <input type='text' placeholder=\"Phone\" formControlName='phone'  class='form-control'/>\n                  <small class=\"form-text text-danger\" *ngIf=\"contact.get('phone').hasError('required') && contact.get('phone').touched\">\n                      Phone is required!\n                  </small> \n              </div>             \n          </div>\n          <div class='alert alert-success' style='margin: 0;margin-bottom: 5px;' *ngIf=\"isShowMessage\">\n              {{message}}         \n          </div>          \n          <button type='submit' [disabled]=\"contact.invalid\" > Add Contact </button>    \n        </form>\n       \n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/public/servicepage/add-contact-form/add-contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/servicepage/add-contact-form/add-contact-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AddContactFormComponent = /** @class */ (function () {
    function AddContactFormComponent(contactService) {
        this.contactService = contactService;
        this.addContactEvent = new core_1.EventEmitter();
        this.message = '';
        this.isShowMessage = false;
    }
    AddContactFormComponent.prototype.ngOnInit = function () {
        this.contact = new forms_1.FormGroup({
            firstname: new forms_1.FormControl('', forms_1.Validators.required),
            lastname: new forms_1.FormControl('', forms_1.Validators.required),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
        });
    };
    AddContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var contactObj = this.contact.value;
        this.contactService.createContact(contactObj).subscribe(function (data) {
            _this.addContactEvent.emit();
            console.log('create new contact success!');
            _this.contact.reset();
        });
        this.message = 'Contact created.';
        this.isShowMessage = true;
        console.log('contact: ' + JSON.stringify(contactObj));
    };
    AddContactFormComponent.prototype.formClick = function () {
        this.message = '';
        this.isShowMessage = false;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddContactFormComponent.prototype, "addContactEvent", void 0);
    AddContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-contact-form',
            template: __webpack_require__("./src/app/public/servicepage/add-contact-form/add-contact-form.component.html"),
            styles: [__webpack_require__("./src/app/public/servicepage/add-contact-form/add-contact-form.component.scss")],
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService])
    ], AddContactFormComponent);
    return AddContactFormComponent;
}());
exports.AddContactFormComponent = AddContactFormComponent;


/***/ }),

/***/ "./src/app/public/servicepage/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-list\">\n       <table style='margin-top:1rem'>\n          <caption style='margin-bottom:5px'>Bordered table</caption>\n          <thead>\n              <tr>\n                  <th scope=\"col\">ID</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Phone</th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n          \n          </thead>\n          <tbody>\n              <tr *ngFor='let contact of contacts' >\n                  <th scope=\"row\">{{contact._id}}</th>\n                  <td>{{contact.firstname}}</td>\n                  <td>{{contact.lastname}}</td>\n                  <td>{{contact.phone}}</td>\n                  <td><a routerLink='/page2/{{contact._id}}' routerLinkActive='active'>Edit/Del</a></td>\n              </tr>\n            </tbody>\n      </table>\n      \n</div>"

/***/ }),

/***/ "./src/app/public/servicepage/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/servicepage/contact-list/contact-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/public/servicepage/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/public/servicepage/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;


/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" style='display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0 auto'>\n    <app-add-contact-form (addContactEvent)=\"updateContactList()\"></app-add-contact-form>\n    <app-contact-list [contacts]=\"contacts\" > </app-contact-list>\n</div>"

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var contact_service_1 = __webpack_require__("./src/app/services/contact.service.ts");
var ServicepageComponent = /** @class */ (function () {
    function ServicepageComponent(contactService) {
        this.contactService = contactService;
        this.contacts = null;
    }
    ServicepageComponent.prototype.ngOnInit = function () {
        this.updateContactList();
    };
    ServicepageComponent.prototype.updateContactList = function () {
        var _this = this;
        this.contactService.listContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ServicepageComponent = __decorate([
        core_1.Component({
            selector: 'app-servicepage',
            template: __webpack_require__("./src/app/public/servicepage/servicepage.component.html"),
            styles: [__webpack_require__("./src/app/public/servicepage/servicepage.component.scss")]
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService])
    ], ServicepageComponent);
    return ServicepageComponent;
}());
exports.ServicepageComponent = ServicepageComponent;


/***/ }),

/***/ "./src/app/public/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"usa-form\" style='margin: 0 auto;'>\n    <fieldset>\n      <legend class=\"usa-drop_text\">Sign in</legend>\n      <span>or  <a class=\"usa-nav-link\" routerLink=\"/register\">create an account</a></span>\n  \n      <label for=\"username\">Username or email address</label>\n      <input id=\"username\" name=\"username\" type=\"text\" autocapitalize=\"off\" autocorrect=\"off\">\n  \n      <label for=\"password-sign-in\">Password</label>\n      <input id=\"password-sign-in\" name=\"password\" type=\"password\">\n      <p class=\"usa-form-note\">\n        <a title=\"Show password\" href=\"javascript:void(0);\"\n          class=\"usa-show_password\"\n          aria-controls=\"password-sign-in\">Show password</a>\n      </p>\n  \n      <input type=\"submit\" value=\"Sign in\">\n      <p>\n      \n        <a class=\"usa-nav-link\"  title=\"Password Reset\" routerLink=\"/passwordreset\">Forgot Password</a></p>\n      <p><a href=\"javascript:void(0);\" title=\"Forgot password\">\n        Forgot password?</a></p>\n    </fieldset>\n  </form>"

/***/ }),

/***/ "./src/app/public/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/public/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/public/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/services/contact.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.apiurl = environment_1.environment.apiurl;
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaHNrZWVAeWFob28uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTI2MTU0ODA0LCJleHAiOjMxNTU1MjYxNTQ4MDR9.Sac4KgisLlJjknCVrPSK8YU5wusu0I69OlffwcEcJho';
    }
    ContactService.prototype.listContacts = function () {
        return this.http.get(this.apiurl + '/api/contacts?token=' + this.token);
    };
    ContactService.prototype.getContact = function (id) {
        return this.http.get(this.apiurl + '/api/contacts/read/' + id + '?token=' + this.token);
    };
    ContactService.prototype.createContact = function (contactObj) {
        return this.http.post(this.apiurl + '/api/contacts/create?token=' + this.token, contactObj);
    };
    ContactService.prototype.deleteContact = function (id) {
        return this.http.delete(this.apiurl + '/api/contacts/delete/' + id + '?token=' + this.token);
    };
    ContactService.prototype.updateContact = function (contactObj) {
        return this.http.put(this.apiurl + '/api/contacts/update?token=' + this.token, contactObj);
    };
    ContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiurl: 'https://stratteos.us'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map