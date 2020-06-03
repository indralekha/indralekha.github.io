function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about-me-info/about-me-info.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/about/about-me-info/about-me-info.component.ts ***!
    \****************************************************************/

  /*! exports provided: AboutMeInfoComponent */

  /***/
  function srcAppAboutAboutMeInfoAboutMeInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeInfoComponent", function () {
      return AboutMeInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutMeInfoComponent = /*#__PURE__*/function () {
      function AboutMeInfoComponent(router) {
        _classCallCheck(this, AboutMeInfoComponent);

        this.router = router;
      }

      _createClass(AboutMeInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "WhatIDoPage",
        value: function WhatIDoPage() {
          this.router.navigate(['/whatIDo']);
        }
      }, {
        key: "projectPage",
        value: function projectPage() {
          this.router.navigate(['/projects']);
        }
      }]);

      return AboutMeInfoComponent;
    }();

    AboutMeInfoComponent.ɵfac = function AboutMeInfoComponent_Factory(t) {
      return new (t || AboutMeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AboutMeInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeInfoComponent,
      selectors: [["app-about-me-info"]],
      decls: 18,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-4", "offset-md-1", "mx-3", "my-3"], ["align", "center", 1, "view", "overlay"], ["src", "assets/About/indralekhaResumePicture.jpg", "alt", "Sample image for first version of blog listing", 1, "img-fluid"], [1, "col-md-7", "text-md-left", "ml-3", "mt-3"], [1, "how-section1"], [1, "col-md-6", "col-xs-12", "col-sm-12", "col-lg-6"], ["align", "center"], [3, "click"]],
      template: function AboutMeInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I am Indralekha Pasumarthy,a UI/Front-End Developer. I am an AWS Certified Developer Associate and an AWS certified Cloud Practitioner.I did my Masters in Informatics, majoring in Cloud Computing from Northeastern University, Boston. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeInfoComponent_Template_li_click_14_listener() {
            return ctx.WhatIDoPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "What I Do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeInfoComponent_Template_li_click_16_listener() {
            return ctx.projectPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".how-section1[_ngcontent-%COMP%] {\r\n  margin-top: -15%;\r\n  padding: 10%;\r\n}\r\n.how-section1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n.how-section1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin-top: 10%;\r\n}\r\n.how-img[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  border: 2px solid black;\r\n  padding: 10px;\r\n}\r\n.how-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: teal;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  font-size: 10px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n  height: 7rem;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  line-height: 7rem;\r\n  font-family: sans-serif;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  position: relative;\r\n  transition: 0.3s;\r\n  margin: 3rem;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: inherit;\r\n  height: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  transition: 0.3s;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n  background-color: white;\r\n  z-index: -1;\r\n  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\r\n  background-color: black;\r\n  transform: translate(1.5rem, 1.5rem);\r\n  z-index: -2;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  transform: translate(1.5rem, 1.5rem);\r\n  color: white;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\r\n  background-color: goldenrod;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\r\n  background-color: white;\r\n  transform: translate(-1.5rem, -1.5rem);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtbWUtaW5mby9hYm91dC1tZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQSxjQUFjO0FBRWQ7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtREFBbUQ7QUFDckQ7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsV0FBVztBQUNiO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC1tZS1pbmZvL2Fib3V0LW1lLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ctc2VjdGlvbjEge1xyXG4gIG1hcmdpbi10b3A6IC0xNSU7XHJcbiAgcGFkZGluZzogMTAlO1xyXG59XHJcbi5ob3ctc2VjdGlvbjEgaDMge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5ob3ctc2VjdGlvbjEgLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5ob3ctaW1nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaG93LWltZyBpbWcge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi8qKiBidXR0b25zICoqL1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbm5hdiBsaSB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGhlaWdodDogN3JlbTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA3cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtYXJnaW46IDNyZW07XHJcbn1cclxuXHJcbm5hdiBsaTo6YmVmb3JlLFxyXG5uYXYgbGk6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxubmF2IGxpOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxubmF2IGxpOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMS41cmVtLCAxLjVyZW0pO1xyXG4gIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG5uYXYgbGk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEuNXJlbSwgMS41cmVtKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm5hdiBsaTpob3Zlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuXHJcbm5hdiBsaTpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjVyZW0sIC0xLjVyZW0pO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me-info',
          templateUrl: './about-me-info.component.html',
          styleUrls: ['./about-me-info.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _about_me_info_about_me_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about-me-info/about-me-info.component */
    "./src/app/about/about-me-info/about-me-info.component.ts");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 8,
      vars: 0,
      consts: [[1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "py-5"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, I am Indralekha!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A FrontEnd/UI Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-about-me-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_about_me_info_about_me_info_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoComponent"]],
      styles: [".masthead[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  min-height: 500px;\r\n  width: 100%;\r\n  background-image: url(/assets/About/banner.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#slider-animation[_ngcontent-%COMP%] {\r\n  max-height: 550px;\r\n}\r\n\r\n.heading-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: red;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.text-box[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 15%;\r\n  right: 15%;\r\n  color: #000;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  font-size: 10px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: inherit;\r\n  height: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  transition: 0.3s;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n  background-color: white;\r\n  z-index: -1;\r\n  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\r\n  background-color: red;\r\n  transform: translate(1.5rem, 1.5rem);\r\n  z-index: -2;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  transform: translate(1.5rem, 1.5rem);\r\n  color: white;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\r\n  background-color: goldenrod;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\r\n  background-color: white;\r\n  transform: translate(-1.5rem, -1.5rem);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLCtDQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3RoZWFkIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL0Fib3V0L2Jhbm5lci5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbiNzbGlkZXItYW5pbWF0aW9uIHtcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG4uaGVhZGluZy1ib3ggaDIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuaDIsXHJcbnAge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50ZXh0LWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDE1JTtcclxuICByaWdodDogMTUlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG46cm9vdCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5uYXYgbGk6OmJlZm9yZSxcclxubmF2IGxpOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbm5hdiBsaTo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3gtc2hhZG93OiAwLjJyZW0gMC4ycmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbm5hdiBsaTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxLjVyZW0sIDEuNXJlbSk7XHJcbiAgei1pbmRleDogLTI7XHJcbn1cclxuXHJcbm5hdiBsaTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMS41cmVtLCAxLjVyZW0pO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubmF2IGxpOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxubmF2IGxpOmhvdmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNXJlbSwgLTEuNXJlbSk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _projects_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./projects/project-info/project-info.component */
    "./src/app/projects/project-info/project-info.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./what-ido/what-ido.component */
    "./src/app/what-ido/what-ido.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'about',
      pathMatch: 'full'
    }, {
      path: 'header',
      component: _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'whatIDo',
      component: _what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_4__["WhatIDoComponent"]
    }, {
      path: 'projects',
      children: [{
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
      }, {
        path: ':id',
        component: _projects_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_0__["ProjectInfoComponent"]
      }]
    }, {
      path: 'footer',
      component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'a';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./what-ido/what-ido.component */
    "./src/app/what-ido/what-ido.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _about_about_me_info_about_me_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about/about-me-info/about-me-info.component */
    "./src/app/about/about-me-info/about-me-info.component.ts");
    /* harmony import */


    var _projects_projectService_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projects/projectService.service */
    "./src/app/projects/projectService.service.ts");
    /* harmony import */


    var _projects_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projects/project-info/project-info.component */
    "./src/app/projects/project-info/project-info.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_projects_projectService_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_8__["WhatIDoComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"], _about_about_me_info_about_me_info_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeInfoComponent"], _projects_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_13__["ProjectInfoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_8__["WhatIDoComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"], _about_about_me_info_about_me_info_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeInfoComponent"], _projects_project_info_project_info_component__WEBPACK_IMPORTED_MODULE_13__["ProjectInfoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_projects_projectService_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 2,
      vars: 0,
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 30,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "getInTouch"], ["align", "center", 1, "col-md-4", "col-xs-12", 2, "font-size", "24px"], [1, "github"], ["href", "https://www.linkedin.com/in/indralekha-pasumarthy/"], [1, "fa", "fas", "fa-linkedin", "fa-5x"], [2, "color", "white"], ["href", "https://github.com/indralekha", 2, "color", "white"], [1, "fa", "fas", "fa-github", "fa-5x"], ["href", "#", 2, "color", "rgb(214, 176, 71)"], [1, "fa", "fas", "fa-envelope", "fa-5x"], [1, "row", 2, "float", "right"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GET IN TOUCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "indralekha.p@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \xA9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2020 Indralekha Pasumarthy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".getInTouch[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: red;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  width: 100%;\r\n}\r\n.github[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZXRJblRvdWNoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ2l0aHViIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 19,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row", "col-xs-12"], [1, "nav", "navbar-dark"], [1, "nav-header"], ["routerLink", "/about", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/whatIDo", 1, "nav-link"], ["routerLink", "/projects", 1, "nav-link"], [1, "fa", "fas", "fa-cog", "fa-spin"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Indralekha Pasumarthy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What I Do ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".nav-item[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  color: white;\r\n}\r\n.navbar-default[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  padding: 20px;\r\n  max-width: 100%;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/project-info/project-info.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/projects/project-info/project-info.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProjectInfoComponent */

  /***/
  function srcAppProjectsProjectInfoProjectInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectInfoComponent", function () {
      return ProjectInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projectService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../projectService.service */
    "./src/app/projects/projectService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProjectInfoComponent = /*#__PURE__*/function () {
      function ProjectInfoComponent(projectService, route, router, _location) {
        _classCallCheck(this, ProjectInfoComponent);

        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.projectElement = [];
        this.projectImage = [];
        this.descriptions = [];
        this.category = [];
        this.technologies = [];
      }

      _createClass(ProjectInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.projectInfo = this.projectService.getProj();
          // this.index = this.route.snapshot.params['id'];
          // this.projectElement = this.projectInfo.filter((item) => {
          //   return item.id == this.index;
          // });
          this.projectService.projectsEmit.emit(this.projectElement);
          console.log('Element', this.projectElement);
          this.projectInfo = this.projectService.getProj();
          this.route.params.subscribe(function (params) {
            _this.index = params['id'];

            _this.getList(_this.index);
          });
          console.log('projct Element', this.projectElement);
          this.projectImage = this.projectElement[0].imgSrc;
          this.category = this.projectElement[0].categories;
          this.technologies = this.projectElement[0].subtitle;
          this.descriptions = this.projectElement[0].description;
        }
      }, {
        key: "getList",
        value: function getList(productIndex) {
          this.projectElement = this.projectInfo.filter(function (product) {
            return product.id == productIndex;
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back(); // this.router.navigate(['/about']);

        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }, {
        key: "scrollyClick",
        value: function scrollyClick() {
          document.getElementById('welcome').scrollIntoView();
        }
      }]);

      return ProjectInfoComponent;
    }();

    ProjectInfoComponent.ɵfac = function ProjectInfoComponent_Factory(t) {
      return new (t || ProjectInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projectService_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    ProjectInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectInfoComponent,
      selectors: [["app-project-info"]],
      decls: 51,
      vars: 12,
      consts: [[1, "container"], [1, "row"], [1, "jumbotron"], [1, "btn", "btn-lg", 3, "click"], [1, "btn", "btn-dark", 3, "click"], ["id", "welcome"], [1, "what-i-do"], ["align", "center", 1, "col-md-3", "col-sm-6", "col-xs-12", "col-lg-3", "col-xl-3"], [1, "img-responsive", 3, "src"], ["align", "center", 1, "col-md-3", "col-xs-12", "col-sm-6", "col-lg-3", "col-xl-3"], [1, "gotopbtn", 3, "click"], [1, "fa", "fas", "fa-arrow-up"]],
      template: function ProjectInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_9_listener() {
            return ctx.scrollyClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scroll Down to see work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_11_listener() {
            return ctx.backClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Go Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_49_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectElement[0].projectTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectElement[0].description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.projectElement[0].projectTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectElement[0].subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.projectImage[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category[0], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.projectImage[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category[1], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.projectImage[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category[2], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.projectImage[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category[3], " ");
        }
      },
      styles: [".jumbotron[_ngcontent-%COMP%] {\r\n  border-radius: 0px !important;\r\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-image: url(https://static.pexels.com/photos/24324/pexels-photo.jpg);\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  border-radius: 0px !important;\r\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\r\n  padding: 10px 40px;\r\n}\r\n\r\n.masthead[_ngcontent-%COMP%] {\r\n  min-height: 500px;\r\n}\r\n\r\n.getInTouch[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: Black;\r\n}\r\n\r\n.html5[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  width: 155px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.what-i-do[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: black;\r\n  background-color: white;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%] {\r\n  height: 230px;\r\n  width: 80%;\r\n  border: 2px solid black;\r\n  transition: border-width 0.6s linear;\r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]:hover {\r\n  border-width: 8px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.gotopbtn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: grey;\r\n  bottom: 40px;\r\n  right: 50px;\r\n\r\n  text-decoration: none;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  color: white;\r\n  font-size: 22px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1pbmZvL3Byb2plY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw4RUFBOEU7RUFDOUUsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVzs7RUFFWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0LWluZm8vcHJvamVjdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLnBleGVscy5jb20vcGhvdG9zLzI0MzI0L3BleGVscy1waG90by5qcGcpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG5cclxuLm1hc3RoZWFkIHtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmdldEluVG91Y2gge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogQmxhY2s7XHJcbn1cclxuLmh0bWw1IHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLndoYXQtaS1kbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZlIHtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLXdpZHRoIDAuNnMgbGluZWFyO1xyXG59XHJcbi5pbWctcmVzcG9uc2l2ZTpob3ZlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbn1cclxuaDUsXHJcbmg0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nb3RvcGJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGJvdHRvbTogNDBweDtcclxuICByaWdodDogNTBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-info',
          templateUrl: './project-info.component.html',
          styleUrls: ['./project-info.component.css']
        }]
      }], function () {
        return [{
          type: _projectService_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projectModel.model.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projectModel.model.ts ***!
    \************************************************/

  /*! exports provided: ProjectModel */

  /***/
  function srcAppProjectsProjectModelModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModel", function () {
      return ProjectModel;
    });

    var ProjectModel = function ProjectModel(id, imgSrc, categories, projectNumber, projectTitle, subtitle, description) {
      _classCallCheck(this, ProjectModel);

      this.id = id;
      this.imgSrc = imgSrc;
      this.categories = categories;
      this.projectNumber = projectNumber;
      this.projectTitle = projectTitle;
      this.subtitle = subtitle;
      this.description = description;
    };
    /***/

  },

  /***/
  "./src/app/projects/projectService.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/projects/projectService.service.ts ***!
    \****************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppProjectsProjectServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var _projectModel_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./projectModel.model */
    "./src/app/projects/projectModel.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProjectService = /*#__PURE__*/function () {
      function ProjectService() {
        _classCallCheck(this, ProjectService);

        this.onChangeProject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.projectsEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.proj = [new _projectModel_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"](123, ['/assets/Projects/Mobile1.PNG', '/assets/Projects/Mobile2.PNG', '/assets/Projects/Mobile3.PNG', '/assets/Projects/Mobile4.PNG'], ['SmartPhone Display Page', 'Accessories Display Page', 'Checkout Page', 'ProductInfo Page'], 'Project-1', 'Mobile Tech Store', ['Angular', 'TypeScript', 'HTML', 'CSS', 'AWS'], ['This Project is about developing a fully-dynamic e-commerce website which sells Tech gadgets like Mobile Phones, tablets. The website database is connected using MongoDB. ', 'Mobile Tech Store is similar to any e-commerce website which has Authentication facility to protect Customer information', 'Customers Checkout and pays the amount, the shipping information is stored in MongoDB with the help of NodeJS and Express and generates an order Number, giving customer confirmation of the order.']), new _projectModel_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"](345, ['/assets/Projects/CloudStackTwchHome1.PNG', '/assets/Projects/CloudStackTechContact.PNG', '/assets/Projects/aboutUsCST.PNG', '/assets/Projects/coming-soon-1.png'], ['CloudStackTech Launch Page', 'Contact Page', 'About CloudStackTech', 'Coming Soon'], 'Project-2', 'CloudStackTech', ['Angular', 'NodeJs', 'HTML', 'CSS', 'MongoDB'], ['Creating a website for CloudStackTech company which provides cloud based software development service for the companies to get advantage in migrate projects on cloud.', 'The data will be stored in Backend using MongoDB,Nodejs, Express and will be deployed using AWS services. The website will be up soon.']), new _projectModel_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"](567, ['/assets/Projects/OmFoodsUS1.PNG', '/assets/Projects/omFoodsUS2.PNG', '/assets/Projects/OMFoodsUS3.PNG', '/assets/Projects/OMFoodsUS4.PNG'], ['Om Foods US', 'Products', 'Product Info', 'Checkout'], 'Project-3', 'OM Foods US', ['Angular', 'JS', 'HTML', 'CSS', 'BootStrap'], ['Building an E-commerce website  for OM FOODS US using front end technologies like angular , JavaScript , HTML, CSS . Integrating the information using rest API’s and storing the information in a database.', 'The website uses HTML5, Bootstrap, Angular 8, MongoDB. User Authentication using Express and NodeJS.', 'Coming Soon.....'])];
      }

      _createClass(ProjectService, [{
        key: "getProj",
        value: function getProj() {
          return this.proj;
        }
      }]);

      return ProjectService;
    }();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projectService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./projectService.service */
    "./src/app/projects/projectService.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/projects", a1];
    };

    function ProjectsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_9_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.scrollToTop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prod_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, prod_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prod_r1.imgSrc[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.projectNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.projectTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.subtitle);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(projectService, _location, router) {
        _classCallCheck(this, ProjectsComponent);

        this.projectService = projectService;
        this._location = _location;
        this.router = router;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.projectService.onChangeProject.subscribe(function (project) {
            _this2.project = project;
          });
          this.project = this.projectService.getProj();
          console.log(this.project);
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          // this._location.back();
          this.router.navigate(['/about']);
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projectService_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 20,
      vars: 1,
      consts: [[1, "container"], [1, "btn", "btn-dark", 3, "click"], ["align", "center"], [1, "row"], ["class", "col-md-4 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-12", "col-xs-12"], [1, "post-module"], [1, "thumbnail"], [3, "routerLink"], ["alt", "", 1, "img-responsive", 3, "src"], [1, "gotopbtn", 3, "click"], [1, "fa", "fas", "fa-arrow-up"], [1, "post-content"], [1, "category"], [1, "title"], [1, "sub_title"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_2_listener() {
            return ctx.backClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsComponent_div_9_Template, 14, 7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".post-module[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: block;\r\n  background: #ffffff;\r\n  min-width: 270px;\r\n  height: 350px;\r\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);\r\n  transition: all 0.3s linear 0s;\r\n}\r\n.post-module[_ngcontent-%COMP%]:hover, .hover[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);\r\n}\r\n.post-module[_ngcontent-%COMP%]:hover   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hover[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n  opacity: 0.6;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n  background: #000000;\r\n  height: 350px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 120%;\r\n  transition: all 0.3s linear 0s;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  background: #ffffff;\r\n  width: 100%;\r\n  padding: 0 30px;\r\n  -webkti-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -34px;\r\n  left: 0;\r\n  background: #f2b202;\r\n  padding: 10px 15px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0 0 10px;\r\n  color: #222 !important;\r\n  font-size: 24px !important;\r\n  font-weight: 700;\r\n  margin: 40px 0 0 !important;\r\n}\r\n.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0 0 20px;\r\n  color: #f2b202;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n.container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n  -webkti-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  float: left;\r\n}\r\n.gotopbtn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: grey;\r\n  bottom: 40px;\r\n  right: 50px;\r\n\r\n  text-decoration: none;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  color: white;\r\n  font-size: 22px;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUdiLCtDQUErQztFQUsvQyw4QkFBOEI7QUFDaEM7QUFDQTs7RUFJRSwrQ0FBK0M7QUFDakQ7QUFDQTs7RUFJRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBS1gsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLDhCQUE4QjtFQUU5QixzQkFBc0I7RUFLdEIsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsOEJBQThCO0VBRTlCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVzs7RUFFWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LW1vZHVsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxufVxyXG4ucG9zdC1tb2R1bGU6aG92ZXIsXHJcbi5ob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDM1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMzVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMzVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5wb3N0LW1vZHVsZTpob3ZlciAudGh1bWJuYWlsIGltZyxcclxuLmhvdmVyIC50aHVtYm5haWwgaW1nIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5wb3N0LW1vZHVsZSAudGh1bWJuYWlsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucG9zdC1tb2R1bGUgLnRodW1ibmFpbCBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxufVxyXG4ucG9zdC1tb2R1bGUgLnBvc3QtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICAtd2Via3RpLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM3LCAwLjc1LCAwLjYxLCAxLjA1KSAwcztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNywgMC43NSwgMC42MSwgMS4wNSkgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzcsIDAuNzUsIDAuNjEsIDEuMDUpIDBzO1xyXG59XHJcbi5wb3N0LW1vZHVsZSAucG9zdC1jb250ZW50IC5jYXRlZ29yeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTM0cHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJiMjAyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5wb3N0LW1vZHVsZSAucG9zdC1jb250ZW50IC50aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDQwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc3QtbW9kdWxlIC5wb3N0LWNvbnRlbnQgLnN1Yl90aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gIGNvbG9yOiAjZjJiMjAyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jb2x1bW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIHBhZGRpbmc6IDAgMjVweDsgKi9cclxuICAtd2Via3RpLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5nb3RvcGJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGJvdHRvbTogNDBweDtcclxuICByaWdodDogNTBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: _projectService_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 468,
      vars: 0,
      consts: [[1, "CV-page"], [1, "CV-primaryHeading"], [1, "CV-primaryHeading-name"], [1, "CV-primaryHeading-position"], [1, "CV-u-nowrap"], [1, "CV-details"], ["href", "https://www.linkedin.com/in/indralekha-pasumarthy/", 1, "CV-detail", "CV-detail--linkedin"], [1, "CV-detail-key"], [1, "CV-detail-val"], ["href", "http://www.davidelrizzo.com", 1, "CV-detail", "CV-detail--website"], ["href", "https://davidelrizzo.tumblr.com", 1, "CV-detail", "CV-detail--blog"], [1, "CV-introBlurb"], [1, "CV-grid"], [1, "CV-grid-column", "CV-grid-column--left"], [1, "CV-education"], [1, "CV-secondaryHeading", "CV-education-heading"], [1, "CV-timeline", "CV-education-group"], [1, "CV-timeline-heading"], [1, "CV-timeline-heading-title"], [1, "CV-timeline-heading-duration"], [1, "CV-timeline-details"], [1, "CV-timeline-details-item"], ["href", "https://www.meetup.com/MelbCSS/events/226064757/"], ["href", "https://www.youtube.com/watch?v=EaZEratmqf8"], ["href", "https://css-tricks.com/accessible-simple-responsive-tables/"], ["href", "https://www.meetup.com/MelbCSS/events/226064715/"], ["href", "https://www.youtube.com/watch?v=hi-L28VKkHs&index=1&list=PL_wpyPIDa0tWv6UzgZBVUDYi6NdxtZLbq"], ["href", "https://www.uxaustralia.com.au/conferences/uxaustralia-2015/presentation/the-secret-life-of-inputs/"], ["href", "https://www.meetup.com/IxDA-Melbourne/events/222500245/"], ["href", "https://www.meetup.com/IxDA-Melbourne/photos/26204461/#438812816"], ["href", "https://2015.cssconf.com.au/"], ["href", "https://decompress.com.au/"], ["href", "https://www.meetup.com/MelbCSS/"], [1, "CV-jobs"], [1, "CV-secondaryHeading", "CV-jobs-heading"], [1, "CV-timeline", "CV-job"], [1, "CV-timeline-heading-location"], ["href", "https://www.suncorpgroup.com.au/"], ["href", "https://www.aami.com.au"], ["href", "https://www.gio.com.au"], ["href", "https://www.suncorp.com.au"], ["href", "https://www.apia.com.au"], ["href", "https://www.bingle.com.au"], ["href", "https://www.jayjays.com.au/"], ["href", "https://www.dotti.com.au"], ["href", "https://www.portmans.com.au/"], ["href", "https://www.jacquie.com.au"], ["href", "https://www.smiggle.com.au"], ["href", "https://www.peteralexander.com.au"], ["href", "https://www.justjeans.com.au"], ["href", "https://www.justgroup.com.au"], ["href", "https://www.anz.com.au"], ["href", "https://www.anz.com.au/personal/private-bank/"], ["href", "http://www.anzroyal.com/en/Personal/"], ["href", "http://juliuscaesar.niccolaigroup.com/"], ["href", "https://www.abstractcreative.com.au/"], ["href", "http://www.shantaram.com/"], [1, "CV-grid-column", "CV-grid-column--right"], [1, "CV-skills"], [1, "CV-secondaryHeading", "CV-skills-heading"], [1, "CV-tertiaryHeading"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Indralekha Pasumarthy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Front-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " LinkedIn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "wbr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "linkedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "wbr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".com/indralekha-pasumarthy/ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Website ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "www");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "wbr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".indralekha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "wbr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "codepen.io/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "wbr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "davidelrizzo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " I am a Front End Developer. I have worked on E-commerce applications and integrating them to Backend using Restful API's and deployed on cloud using AWS services. I am very passionate about making things simpler which helps me in solving complicated problems. I am keen to learn new technologies in this dynamic field which can enhance User Experience. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Public Talks and Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Prototyping a Physical Card Game with CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Designing a layout in CSS for rapid prototyping of printed materials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " October 2016: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Melb CSS Meetup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "youTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Responsive Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Understanding input A CSS technique for creating reusable, flexible and accessible tabular layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " March 2016: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Guest blog post on CSS Tricks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " March 2016: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Melb CSS Meetup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "youTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The Secret Life of Inputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Understanding input behaviour across browsers and devices for best practice form design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " August 2015: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "UX Australia - Brisbane");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " June 2015: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "IxDA Melbourne Meetup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Sketchnotes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " March 2015: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "CSS Conf Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Decompress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Multibrand Styleguides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Building a front-end Styleguide to support multiple components, brands and platforms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Dec 2014: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Melb CSS Meetup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Employment history ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Senior UX Designer (Styleguide Specialist) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Suncorp Group ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "2012 to current");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Founder and curator of the Suncorp Web Styleguide - a living multi-brand front-end framework. This Design System supports more than 15 brands, 20 components and multiple backend platforms including ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "AEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "hybrid native apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ". It is the backbone of interface development at the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Suncorp group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " and is implemented in all of Suncorp\u2019s primary websites and web apps. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Extensive experience in front-end design and integration with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Adobe Experience Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " (AEM) content management suite. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Specialist in technical design, form design for eCommerce and collaboration between design and development teams. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Curator of the Suncorp icon library with thousands of unique icons per brand in multiple colours and formats. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Evangelizing the merits of best practice front-end techniques such as responsive design, reusable patterns and accessibility. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Interface design and development for some of Australia\u2019s largest insurance and banking brands, including ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "AAMI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "GIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Suncorp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "APIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Bingle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " and many more. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Internet Team Leader ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "The Just Group ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "2006 to 2012");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Manager of The Just Group Web Design team responsible for web maintenance and email campaigns to hundreds of thousands of customers each week across 7 brands. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Implemented front-end integration of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "WebSphere Commerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Jay Jays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Dotti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " (2010), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Portmans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Jacqui E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " (2011), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Smiggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Peter Alexander");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " (2012). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Sole interface developer and front-end programmer for The Just Group websites, including ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Just Jeans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " (2006 & 2009), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Dotti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " (2007), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Jacqui E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " (2007), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "The Just Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " (2007), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Smiggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " (2008) and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Peter Alexander");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " (2009). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Overhaul of The Just Group eCommerce platform front-end on the Interworld eCommerce platform. Comprehensive work on customer registration, online product catalogues and checkout systems with Credit Card, PayPal and Gift Voucher payments. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Animation and game design. Pioneered technique for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Progressive Enhanced Flash site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " for Dotti. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Animation and game design. Pioneered technique for progressive enhanced Flash sites. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Lead Web Designer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "ANZ Bank (anz.com) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "2004 to 2005");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Full responsibility for ANZ website graphics (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "anz.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "), including homepage, promotions, banners, landing pages, animations and games. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Management of design standards for anz.com, including the creation of an online Web Styleguide. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Management and mentoring of web designers located in India. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Usability and Web Designer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "\u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "ANZ Bank ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "2002 to 2004");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Graphical production and image support for ANZ Internet and Intranet, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "ANZ Private");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, ", ANZ Pacific and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "ANZ Royal Cambodia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " websites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Construction of Flash applications and Screensavers, Product demos, CD ROM applications and ATM screens. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Publishing administrator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "INT Press educational bookshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "1996 \u2013 2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Desktop publishing educational language books. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Mail order picker and packer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " Data entry and invoicing using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "MYOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Freelance work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Site design and development for the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Da Vinci Machines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Ancient Rome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " exhibitions. A dedicated responsive website for prospective patrons wanting information on exhibitions around Australia. (2008, 2009, 2011) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Abstract Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " full development of a fluid, progressive enhanced and content managed website in Flash. (2006) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Shantaram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " website design and development, to support stories and essays from the author of the best selling Australian novel. (2004) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "h2", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " Technical Skills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " Core Specialty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " Design Systems (Styleguides) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " Interface and form design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " Responsive & device based web design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " Icon systems ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " HTML/CSS/JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " Wireframing & Prototyping ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " Accessibility ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " Communicating and documenting design standards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " Extensive Experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, " Design software (Adobe suite, Sketch, Axure) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " Front-end build systems (Git, NPM, Grunt, Bower, Processors) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " Information architecture ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, " User Testing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, " Email design and development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " Web animation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " Content Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " Proficient ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " Customer research ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " Front-end performance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " Testing and code standards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " Native app design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " Real-time applications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " Game design & development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " Print design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " Education history ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Bachelor of Computer Science ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Melbourne University ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "1999 \u2013 2003");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " Study areas included: Programming, Software lifecycle and development, Artificial Intelligence, Database management, Usability, Interface Design, Classics, History, Photography. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Victorian Certificate of Education ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Strathmore Secondary College ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Completed 1998");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " TER Score of 92.5, received straight A+ in Mathematical Methods, Information Process and Management, and Information Systems. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " Graphics Common Assessment Task (CAT) was nominated for entry in Scienceworks Top CATs exhibition. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Professional training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, " 2016: CSSConf Australia, Melbourne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " 2015: UX Australia, Brisbane (Presenting) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " 2015: CSSConf Australia, Melbourne (Presenting) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, " 2014: 1st CSS & JS Conference Melbourne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " 2013: UX Australia conference + workshops, Melbourne ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " 2009: eCommerce & Marketing conference, Sydney ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, " 2008: WACAG 2.0 Accessibility standards seminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " 2006: Vision Australia, Web Accessibility Training ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, " 2006: Max Design, Advanced CSS Programming course ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " 2005: Semi-Permanent Design conference, Sydney ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, " 2004: Macromedia certified course, Advanced application development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " 2002: ANZ Breakout performance and culture 2 day workshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["html[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n}\r\n.CV-u-nowrap[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n}\r\n.CV-page[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  padding: 0 2em;\r\n  color: #222;\r\n  font-size: 1em;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n@media all and (max-width: 500px) {\r\n  .CV-page[_ngcontent-%COMP%] {\r\n    padding: 0 1em;\r\n  }\r\n}\r\n.CV-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(34, 34, 34, 0.15);\r\n  text-decoration: underline;\r\n}\r\n.CV-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgba(14, 118, 158, 0.7);\r\n  text-decoration: none;\r\n  transition: color 0.2s;\r\n}\r\n.CV-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  color: #00aef0;\r\n}\r\n.CV-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  display: inline-block;\r\n  transform: translate(0px, 1px);\r\n}\r\n.CV-page[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\r\n  border-color: rgba(34, 34, 34, 0.25);\r\n}\r\n.CV-page[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  height: 0;\r\n  margin: 1em auto;\r\n  border: none;\r\n  border-top: solid 1px #00aef0;\r\n}\r\n\r\n.CV-page\\[_ngcontent-%COMP%] {\r\n  width: 1100px;\r\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n}\r\n\r\n.CV-primaryHeading[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  margin-bottom: 1.5em;\r\n}\r\n.CV-primaryHeading-name[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 0.1em;\r\n  font-size: 1.8em;\r\n  line-height: 0.9;\r\n}\r\n.CV-primaryHeading-position[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1em;\r\n  line-height: 1;\r\n  color: #00aef0;\r\n  font-style: italic;\r\n}\r\n.CV-secondaryHeading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 2em 0 0;\r\n  text-transform: uppercase;\r\n}\r\n.CV-secondaryHeading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 0.7em;\r\n  height: 0.7em;\r\n  margin: 0 0.5em 0 -0.2em;\r\n  border: 2px solid #00aef0;\r\n  border-left: none;\r\n  border-bottom: none;\r\n  transform: scaleX(0.75) rotate(45deg);\r\n}\r\n.CV-tertiaryHeading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  line-height: 1;\r\n  color: #00aef0;\r\n  font-style: italic;\r\n  font-weight: normal;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.CV-detail[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding: 0.5em 1.5em;\r\n  border-radius: 1em;\r\n  line-height: 1.2;\r\n  font-size: 0.9em;\r\n  text-decoration: none;\r\n}\r\n\r\n.CV-detail[_ngcontent-%COMP%] {\r\n  padding-left: 56px;\r\n}\r\n.CV-detail[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 14px;\r\n  width: 34px;\r\n  height: 34px;\r\n  margin-top: -14px;\r\n  background-size: 28px;\r\n  background-repeat: no-repeat;\r\n  background-position: 2px 2px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  border: solid 1px #222;\r\n  transition: all 0.4s ease;\r\n}\r\n.CV-detail--address[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_address.svg\");\r\n}\r\n.CV-detail--phone[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_phone.svg\");\r\n}\r\n.CV-detail--email[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_email.svg\");\r\n}\r\n.CV-detail--twitter[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_email.svg\");\r\n}\r\n.CV-detail--linkedin[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_linkedin.svg\");\r\n}\r\n.CV-detail--website[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_web.svg\");\r\n}\r\n.CV-detail--blog[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_tumblr.svg\");\r\n}\r\n.CV-detail--experiments[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_codepen.svg\");\r\n}\r\n\r\n.CV-detail-key[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #222;\r\n  text-transform: uppercase;\r\n  transition: all 0.4s ease;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n.CV-detail-val[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: rgba(14, 118, 158, 0.7);\r\n  text-decoration: none;\r\n  transition: all 0.4s ease;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n@media all and (max-width: 500px) {\r\n  .CV-detail-val[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border-bottom: none;\r\n  }\r\n}\r\n@media all and (min-width: 500px) {\r\n  .CV-detail[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    vertical-align: middle;\r\n  }\r\n  .CV-detail-val[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n@media all and (min-width: 700px) {\r\n  .CV-detail[_ngcontent-%COMP%] {\r\n    width: 33%;\r\n  }\r\n}\r\n.CV-detail[_ngcontent-%COMP%]:hover::before, .CV-detail[_ngcontent-%COMP%]:focus::before {\r\n  background-color: #bdedff;\r\n}\r\n.CV-detail[_ngcontent-%COMP%]:hover   .CV-detail-key[_ngcontent-%COMP%], .CV-detail[_ngcontent-%COMP%]:focus   .CV-detail-key[_ngcontent-%COMP%], .CV-detail[_ngcontent-%COMP%]:hover   .CV-detail-val[_ngcontent-%COMP%], .CV-detail[_ngcontent-%COMP%]:focus   .CV-detail-val[_ngcontent-%COMP%] {\r\n  color: #00aef0;\r\n  transform: translateX(0.3em);\r\n}\r\n\r\n.CV-introBlurb[_ngcontent-%COMP%] {\r\n  \r\n  width: 80%;\r\n  margin: 3em auto 1em auto;\r\n  text-align: center;\r\n  font-size: 1.1em;\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .CV-introBlurb[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.CV-grid[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n.CV-grid-column[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n}\r\n.CV-grid-column--left[_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  padding-right: 2em;\r\n}\r\n.CV-grid-column--right[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n}\r\n@media screen and (max-width: 850px) {\r\n  .CV-grid[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .CV-grid-column[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .CV-grid-column--left[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-right: 0;\r\n  }\r\n  .CV-grid-column--right[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.CV-timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 0 0 0 0.5em;\r\n  padding-left: 1.5em;\r\n  border-left: solid 1px #222;\r\n}\r\n.CV-timeline[_ngcontent-%COMP%]:first-of-type {\r\n  margin-top: 1em;\r\n}\r\n.CV-timeline[_ngcontent-%COMP%]:last-of-type {\r\n  border-left-color: transparent;\r\n}\r\n.CV-timeline[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: -0.5em;\r\n  display: block;\r\n  width: 1em;\r\n  height: 1em;\r\n  border: solid 1px #222;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.CV-timeline-heading[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding-bottom: 0.5em;\r\n  line-height: 1em;\r\n  font-weight: normal;\r\n  transform: translateY(-0.1em);\r\n}\r\n.CV-timeline-heading-title[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  color: #00aef0;\r\n  font-style: italic;\r\n  text-transform: uppercase;\r\n}\r\n.CV-timeline-heading-location[_ngcontent-%COMP%] {\r\n  font-size: 0.9em;\r\n}\r\n.CV-timeline-heading-duration[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 0.8em;\r\n  color: #6f6f6f;\r\n}\r\n.CV-timeline-details[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0;\r\n  padding-bottom: 2em;\r\n  padding: 0 0 2em 1em;\r\n  list-style-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGElEQVQIW2NkYGD4D8TIgJERTQDMpVAQAGaUAQbko3DsAAAAAElFTkSuQmCC\");\r\n}\r\n.CV-timeline-details-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n\r\n.CV-referees[_ngcontent-%COMP%] {\r\n  margin-bottom: 4em;\r\n}\r\n.CV-disclaimer[_ngcontent-%COMP%] {\r\n  margin-top: 4em;\r\n  font-size: 0.8em;\r\n  text-align: right;\r\n  font-variant: small-caps;\r\n  color: #a2a2a2;\r\n}\r\n\r\n@media print {\r\n  .CV-page[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n  }\r\n  .CV-pageBreakBefore[_ngcontent-%COMP%] {\r\n    page-break-before: always;\r\n  }\r\n  .svg[_ngcontent-%COMP%]   .CV-detail[_ngcontent-%COMP%] {\r\n    padding-left: 44px;\r\n  }\r\n  .svg[_ngcontent-%COMP%]   .CV-detail[_ngcontent-%COMP%]:before {\r\n    left: 11px;\r\n    width: 28px;\r\n    height: 28px;\r\n    margin-top: -11px;\r\n    background-size: 22px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7OztFQUdFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUVyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUVyQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBLGFBQWE7QUFDYjtFQUNFLGFBQWE7RUFDYixtREFBbUQ7QUFDckQ7QUFDQTtvREFDb0Q7QUFDcEQ7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBRW5CLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtvREFDb0Q7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0EsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBRXRCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0dBQWdHO0FBQ2xHO0FBQ0E7RUFDRSw4RkFBOEY7QUFDaEc7QUFDQTtFQUNFLDhGQUE4RjtBQUNoRztBQUNBO0VBQ0UsOEZBQThGO0FBQ2hHO0FBQ0E7RUFDRSxpR0FBaUc7QUFDbkc7QUFDQTtFQUNFLDRGQUE0RjtBQUM5RjtBQUNBO0VBQ0UsK0ZBQStGO0FBQ2pHO0FBQ0E7RUFDRSxnR0FBZ0c7QUFDbEc7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHlCQUF5QjtFQUV6Qix5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUVyQix5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTs7OztFQUlFLGNBQWM7RUFFZCw0QkFBNEI7QUFDOUI7QUFDQTtvREFDb0Q7QUFDcEQ7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7b0RBQ29EO0FBQ3BEO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtvREFDb0Q7QUFDcEQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFFbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkpBQTJKO0FBQzdKO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtvREFDb0Q7QUFDcEQ7b0RBQ29EO0FBQ3BEO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjtBQUNBO29EQUNvRDtBQUNwRDtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5DVi11LW5vd3JhcCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uQ1YtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyZW07XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuQ1YtcGFnZSB7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICB9XHJcbn1cclxuLkNWLXBhZ2UgYSB7XHJcbiAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC4xNSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLkNWLXBhZ2UgYSBzcGFuIHtcclxuICBjb2xvcjogcmdiYSgxNCwgMTE4LCAxNTgsIDAuNyk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG59XHJcbi5DVi1wYWdlIGE6aG92ZXIgc3BhbiB7XHJcbiAgY29sb3I6ICMwMGFlZjA7XHJcbn1cclxuLkNWLXBhZ2UgYTphY3RpdmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDFweCk7XHJcbn1cclxuLkNWLXBhZ2UgYWJiciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuMjUpO1xyXG59XHJcbi5DVi1wYWdlIGhyIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzAwYWVmMDtcclxufVxyXG4vKiBpZiBJRTw9NyAqL1xyXG4uQ1YtcGFnZVxcIHtcclxuICB3aWR0aDogMTEwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbn1cclxuLyogSGVhZGluZ3NcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLkNWLXByaW1hcnlIZWFkaW5nIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG59XHJcbi5DVi1wcmltYXJ5SGVhZGluZy1uYW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbn1cclxuLkNWLXByaW1hcnlIZWFkaW5nLXBvc2l0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogIzAwYWVmMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLkNWLXNlY29uZGFyeUhlYWRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDJlbSAwIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uQ1Ytc2Vjb25kYXJ5SGVhZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAwLjdlbTtcclxuICBoZWlnaHQ6IDAuN2VtO1xyXG4gIG1hcmdpbjogMCAwLjVlbSAwIC0wLjJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBhZWYwO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwLjc1KSByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNzUpIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLkNWLXRlcnRpYXJ5SGVhZGluZyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogIzAwYWVmMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi8qIERldGFpbHNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLkNWLWRldGFpbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vKiBTVkcgaWNvbnMgKi9cclxuLkNWLWRldGFpbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NnB4O1xyXG59XHJcbi5DVi1kZXRhaWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxNHB4O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMyMjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLkNWLWRldGFpbC0tYWRkcmVzczpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL0NWX2ljb25zX2FkZHJlc3Muc3ZnXCIpO1xyXG59XHJcbi5DVi1kZXRhaWwtLXBob25lOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvQ1ZfaWNvbnNfcGhvbmUuc3ZnXCIpO1xyXG59XHJcbi5DVi1kZXRhaWwtLWVtYWlsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvQ1ZfaWNvbnNfZW1haWwuc3ZnXCIpO1xyXG59XHJcbi5DVi1kZXRhaWwtLXR3aXR0ZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9DVl9pY29uc19lbWFpbC5zdmdcIik7XHJcbn1cclxuLkNWLWRldGFpbC0tbGlua2VkaW46YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9DVl9pY29uc19saW5rZWRpbi5zdmdcIik7XHJcbn1cclxuLkNWLWRldGFpbC0td2Vic2l0ZTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL0NWX2ljb25zX3dlYi5zdmdcIik7XHJcbn1cclxuLkNWLWRldGFpbC0tYmxvZzpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL0NWX2ljb25zX3R1bWJsci5zdmdcIik7XHJcbn1cclxuLkNWLWRldGFpbC0tZXhwZXJpbWVudHM6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9DVl9pY29uc19jb2RlcGVuLnN2Z1wiKTtcclxufVxyXG4vKiBlbmQgaWYgU1ZHICovXHJcbi5DVi1kZXRhaWwta2V5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG4uQ1YtZGV0YWlsLXZhbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKDE0LCAxMTgsIDE1OCwgMC43KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuQ1YtZGV0YWlsLXZhbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLkNWLWRldGFpbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLkNWLWRldGFpbC12YWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLkNWLWRldGFpbCB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gIH1cclxufVxyXG4uQ1YtZGV0YWlsOmhvdmVyOjpiZWZvcmUsXHJcbi5DVi1kZXRhaWw6Zm9jdXM6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZWRmZjtcclxufVxyXG4uQ1YtZGV0YWlsOmhvdmVyIC5DVi1kZXRhaWwta2V5LFxyXG4uQ1YtZGV0YWlsOmZvY3VzIC5DVi1kZXRhaWwta2V5LFxyXG4uQ1YtZGV0YWlsOmhvdmVyIC5DVi1kZXRhaWwtdmFsLFxyXG4uQ1YtZGV0YWlsOmZvY3VzIC5DVi1kZXRhaWwtdmFsIHtcclxuICBjb2xvcjogIzAwYWVmMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjNlbSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuM2VtKTtcclxufVxyXG4vKiBCbHVyYlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uQ1YtaW50cm9CbHVyYiB7XHJcbiAgLypURU1QIGRpc3BsYXk6bm9uZTsgKi9cclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogM2VtIGF1dG8gMWVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuQ1YtaW50cm9CbHVyYiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLyogR3JpZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uQ1YtZ3JpZCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLkNWLWdyaWQtY29sdW1uIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcbi5DVi1ncmlkLWNvbHVtbi0tbGVmdCB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbn1cclxuLkNWLWdyaWQtY29sdW1uLS1yaWdodCB7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5DVi1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuQ1YtZ3JpZC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5DVi1ncmlkLWNvbHVtbi0tbGVmdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5DVi1ncmlkLWNvbHVtbi0tcmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIFRpbWVsaW5lXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5DVi10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDAgMC41ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICMyMjI7XHJcbn1cclxuLkNWLXRpbWVsaW5lOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4uQ1YtdGltZWxpbmU6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLkNWLXRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0wLjVlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICMyMjI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLkNWLXRpbWVsaW5lLWhlYWRpbmcge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFlbSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFlbSk7XHJcbn1cclxuLkNWLXRpbWVsaW5lLWhlYWRpbmctdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjMDBhZWYwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5DVi10aW1lbGluZS1oZWFkaW5nLWxvY2F0aW9uIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbi5DVi10aW1lbGluZS1oZWFkaW5nLWR1cmF0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiAjNmY2ZjZmO1xyXG59XHJcbi5DVi10aW1lbGluZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICBwYWRkaW5nOiAwIDAgMmVtIDFlbTtcclxuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFVQUFBQUZDQVlBQUFDTmJ5YmxBQUFBR0VsRVFWUUlXMk5rWUdENEQ4VElnSkVSVFFETXBWQVFBR2FVQVFia28zRHNBQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG59XHJcbi5DVi10aW1lbGluZS1kZXRhaWxzLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcbi8qIFNraWxsc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiBFTkRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLkNWLXJlZmVyZWVzIHtcclxuICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbn1cclxuLkNWLWRpc2NsYWltZXIge1xyXG4gIG1hcmdpbi10b3A6IDRlbTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICBjb2xvcjogI2EyYTJhMjtcclxufVxyXG4vKiBQUklOVCBTVFlMRVNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIHByaW50IHtcclxuICAuQ1YtcGFnZSB7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gIH1cclxuICAuQ1YtcGFnZUJyZWFrQmVmb3JlIHtcclxuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XHJcbiAgfVxyXG4gIC5zdmcgLkNWLWRldGFpbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgfVxyXG4gIC5zdmcgLkNWLWRldGFpbDpiZWZvcmUge1xyXG4gICAgbGVmdDogMTFweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/what-ido/what-ido.component.ts":
  /*!************************************************!*\
    !*** ./src/app/what-ido/what-ido.component.ts ***!
    \************************************************/

  /*! exports provided: WhatIDoComponent */

  /***/
  function srcAppWhatIdoWhatIdoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatIDoComponent", function () {
      return WhatIDoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var WhatIDoComponent = /*#__PURE__*/function () {
      function WhatIDoComponent(_location) {
        _classCallCheck(this, WhatIDoComponent);

        this._location = _location;
      }

      _createClass(WhatIDoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return WhatIDoComponent;
    }();

    WhatIDoComponent.ɵfac = function WhatIDoComponent_Factory(t) {
      return new (t || WhatIDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    WhatIDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhatIDoComponent,
      selectors: [["app-what-ido"]],
      decls: 148,
      vars: 0,
      consts: [[1, "container"], [1, "btn", "btn-dark", 3, "click"], [1, "what-i-do"], [1, "row"], ["align", "center", 1, "col-md-3", "col-sm-6", "col-xs-12", "col-lg-3", "col-xl-3"], ["src", "assets/whatIDo/e-commerce.jpg", 1, "img-responsive"], [2, "color", "black"], ["align", "center", 1, "col-md-3", "col-xs-12", "col-sm-6", "col-lg-3", "col-xl-3"], ["src", "assets/whatIDo/responsiveWebDesign.png", 1, "img-responsive"], ["src", "assets/whatIDo/webDevelopment.jpg", 1, "img-responsive"], ["src", "assets/whatIDo/cloud.png", 1, "img-responsive"], [1, "getInTouch"], ["align", "center", 1, "col-md-3", "col-xs-6"], ["src", "/assets/whatIDo/html5.png", 1, "html5"], ["src", "/assets/whatIDo/css.png", 1, "html5"], ["src", "/assets/whatIDo/js.jpg", 1, "html5"], ["src", "/assets/whatIDo/angular.png", 1, "html5"], ["src", "/assets/whatIDo/bootstrap.png", 1, "html5"], ["src", "/assets/whatIDo/cloudPractioner.png", 1, "html5"], ["src", "/assets/whatIDo/developerAssociate.png", 1, "html5"], ["src", "/assets/whatIDo/java.png", 1, "html5"], ["src", "/assets/whatIDo/mongoDB.png", 1, "html5"], ["src", "/assets/whatIDo/nodejs.png", 1, "html5"], ["src", "/assets/whatIDo/express.jpg", 1, "html5"], [1, "gotopbtn", 3, "click"], [1, "fa", "fas", "fa-arrow-up"]],
      template: function WhatIDoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhatIDoComponent_Template_button_click_2_listener() {
            return ctx.backClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Go Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WHAT I DO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I am passionate about developing new things");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-commerce Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " E-commerce applications with storing the information in the backend using Rest API's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Responsive Web Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Responsive web designs with wireframes to enhance user experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Web Development+Backend ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Responsive web designs with wireframes to enhance user experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Integration on AWS Cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Deploying websites on Cloud with ELB,EBS,CloudFormation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "TECHNOLOGY STACK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " HTML 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "JAVASCRIPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "ANGULAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " BOOTSTRAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "AWS CLOUD PRACTIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "DEVELOPER ASSOCIATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "JAVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " MONGODB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "NodeJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "EXPRESS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhatIDoComponent_Template_button_click_145_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        }
      },
      styles: [".masthead[_ngcontent-%COMP%] {\r\n  min-height: 500px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.getInTouch[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: Black;\r\n}\r\n.html5[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  width: 155px;\r\n  border: 2px solid black;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.what-i-do[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: black;\r\n  background-color: white;\r\n}\r\n.certifications[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  width: 80%;\r\n}\r\n.img-responsive[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  width: 70%;\r\n}\r\nh5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n.gotopbtn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: grey;\r\n  bottom: 40px;\r\n  right: 50px;\r\n\r\n  text-decoration: none;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  color: white;\r\n  font-size: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdC1pZG8vd2hhdC1pZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXOztFQUVYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2hhdC1pZG8vd2hhdC1pZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2V0SW5Ub3VjaCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBCbGFjaztcclxufVxyXG4uaHRtbDUge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1NXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53aGF0LWktZG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNlcnRpZmljYXRpb25zIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbmg1LFxyXG5oNCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ290b3BidG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatIDoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-what-ido',
          templateUrl: './what-ido.component.html',
          styleUrls: ['./what-ido.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\indralekha\MyPortfolios\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map