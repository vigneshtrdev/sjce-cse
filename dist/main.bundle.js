webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#firstAbout h4{\n  line-height: 1.5;\n}\n#firstAbout\n{\n  font-family: 'Roboto',sans-serif;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#firstAbout ul>li{\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>About Us</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"firstAbout\" class=\"container\">\n    <ul>\n      <li>Established in the year 1995.</li>\n      <li>Offers UG and PG course in Computer Science and Engineering.</li>\n      <li>Start with the initial intake of 60 and increased with 120 and 180 from the year 2000 and 2013 respectively for the UG course.</li>\n      <li> 45 Nos. of well qualified dedicated faculties among that 19 of them holding doctoral degree from various reputed Universities.</li>\n      <li> Recognized as Research Centre by Anna University, Chennai.</li>\n      <li>Well-equipped spacious laboratories with high end computing systems suitable for Research and Development activities.</li>\n      <li>Our students won prize in the “Smart India Hackathon-2017”, organized by Govt. of India and which is sanctioned as a project with financial assistance by AICTE.</li>\n      <li>Applied few patents by the faculty members of our department.</li>\n      <li>Every year a large number of students win accolades at the National and International level awards for their projects, cultural and sports achievements besides securing many University Ranks.\n      </li>\n      <li> Many of our students got placements in top notch organizations besides securing admissions in world class Universities in India and abroad. </li>\n    </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about-us',
        template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/academic-performance/academic-performance.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.auto\n{\n  table-layout: auto;\n}\n#academic-performance{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\na{\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/academic-performance/academic-performance.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Academic Performance</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"academic-performance\" class=\"container\">\n      <ul>\n        <h3><li><a href=\"./assets/ResultAnalysis.pdf\" target=\"_blank\">Result Analysis</a></li></h3>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/academic-performance/academic-performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcademicPerformanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcademicPerformanceComponent = (function () {
    function AcademicPerformanceComponent() {
    }
    AcademicPerformanceComponent.prototype.ngOnInit = function () {
    };
    return AcademicPerformanceComponent;
}());
AcademicPerformanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-academic-performance',
        template: __webpack_require__("../../../../../src/app/academic-performance/academic-performance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/academic-performance/academic-performance.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AcademicPerformanceComponent);

//# sourceMappingURL=academic-performance.component.js.map

/***/ }),

/***/ "../../../../../src/app/achievements/achievements.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.auto\n{\n  table-layout: auto;\n}\n#achievements{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\na{\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/achievements/achievements.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Achievements</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"achievements\" class=\"container\">\n      <ul>\n        <h3><li><a href=\"./assets/achievements/01.pdf\" target=\"_blank\">Student Achievements</a></li></h3>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/achievements/achievements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    return AchievementsComponent;
}());
AchievementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-achievements',
        template: __webpack_require__("../../../../../src/app/achievements/achievements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/achievements/achievements.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AchievementsComponent);

//# sourceMappingURL=achievements.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#nav-header{\n  padding: 10px;\n  background: #fff;\n  box-shadow:0px 0px 8px 0px #010101;\n}\n#nav-header span{\n  font-size: 1.5em;\n  padding-left: 10px;\n  font-family: 'Righteous',cursive;\n}\n.table-center{\n  vertical-align: middle;\n}\n#mob-head{\n  font-family: 'Righteous',cursive;\n  padding-top: 5px;\n  color: #000;\n  font-size: 1.5em;\n}\nspan#sup{\n  position: absolute;\n  font-size: 0.5em;\n  left:72px;\n}\nspan#engg{\n  position: absolute;\n  left:72px;\n  top:38px;\n}\n#footer-section\n{\n  padding: 10px;\n  background: #101010;\n  font-family: 'Raleway',sans-serif;\n  color: #e1e1e1;\n  margin-top: 100px;\n}\n#author\n{\n  color: #777;\n  text-decoration: none;\n}\n#author:hover\n{\n  color: #e76137;\n}\n.fix\n{\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [showSpinner]=\"false\" [color]=\"'#e76137'\"></ng-progress>\n<div id=\"target\"></div>\n<nav class=\"navbar navbar-default navbar-custom2 navbar-fixed-top hidden-xs\">\n  <div id=\"nav-header\">\n    <img src=\"./assets/logo.png\" width=\"60px\" class=\"img-responsive\" style=\"display:inline\">\n    <img src=\"./../assets/25yrlogo.jpg\" width=\"100px\" height=\"75px\" style=\"position:absolute;top:5px;right:30px;\"/>\n    <span class=\"hidden-xs\">Department of Computer Science &amp; Engineering</span>\n  </div>\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li id=\"home\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/\">HOME</a></li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">PROFILE\n        <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/about-us\">ABOUT US</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/vision-mission\">VISION &amp; MISSION</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/peo-pso\">PEO &amp; PSO</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/po\">PROGRAM OUTCOME</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/co\">COURSE OUTCOMES</a></li>\n\n        </ul>\n      </li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">ACADEMICS\n      <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/syllabus\">SYLLABUS &amp; REGULATION</a></li>\n          <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">LESSON &amp; LAB PLAN</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/academics\">COURSE MATERIALS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/academics\">MODULE COORDINATORS</a></li> -->\n        </ul>\n      </li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">FACULTY\n    <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/faculty\">FACULTY &amp; STAFF</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/faculty-mentors\">FACULTY MENTORS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/student-committee\">COMMITTEE FOR STUDENTS WELFARE</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">FACILITIES\n    <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/laboratory\">LABORATORY</a></li>\n          <!-- <li><a scrollTo=\"target\" routerLink=\"/laboratory\">RESEARCH CELL</a></li> -->\n        </ul>\n      </li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">STUDENTS\n    <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">RESEARCH</a></li> -->\n          <li><a scrollTo=\"target\" routerLink=\"/achievements\">ACHIEVEMENTS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/academic-performance\">ACADEMIC PERFORMANCE</a></li>\n        </ul>\n      </li>\n      <li id=\"lab\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/placements\">PLACEMENTS</a></li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">RESEARCH\n        <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/supervisors\">SUPERVISORS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/phd\">Ph.D AWARDED</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/research-scholars\">RESEARCH SCHOLARS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/research-projects\">RESEARCH PROJECTS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/patents\">PATENTS</a></li>\n          <li><a scrollTo=\"target\" routerLink=\"/publications\">PUBLICATIONS</a></li>\n        </ul>\n      </li>\n      <li class=\"dropdown\" class=\"text-center\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">PROFESSIONAL ACTIVITIES\n    <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a scrollTo=\"target\" routerLink=\"/professional-activities\">IEEE &amp; CSI</a></li>\n        </ul>\n      </li>\n      <!--<li class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/gallery\">NEWS</a></li>-->\n      <li id=\"\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/gallery\">GALLERY</a></li>\n      <li id=\"contact-us\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/contact-us\">CONTACT US</a></li>\n\n    </ul>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-default navbar-custom2 navbar-fixed-top hidden-sm hidden-md hidden-lg hidden-xl\">\n\n  <button type=\"button\" id=\"navbarToggle\" class=\"glyph-pad navbar-toggle collapsed btn-lg\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"fa fa-bars nav-icon\" aria-hidden=\"true\"></span>\n  </button>\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header navbar-titles\">\n      <a href=\"/\" class=\"navbar-brand\" id=\"mob-head\"><span><img class=\"logo\" src=\"./assets/logo.png\" width=\"50px\"><span id=\"sup\"> Department of </span> Computer Science<span id=\"engg\"> &amp; Engineering</span></span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li id=\"home\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/\">HOME</a></li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">PROFILE\n        <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/about-us\">ABOUT US</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/vision-mission\">VISION &amp; MISSION</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/peo-pso\">PEO &amp; PSO</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/po\">PROGRAM OUTCOME</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/gallery\">GALLERY</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">ACADEMICS\n      <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/syllabus\">SYLLABUS &amp; REGULATION</a></li>\n            <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">COURSE MATERIALS</a></li> -->\n            <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">MODULE COORDINATORS</a></li> -->\n            <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">LESSON &amp; LAB PLAN</a></li> -->\n          </ul>\n        </li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">FACULTY\n    <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/faculty\">FACULTY &amp; STAFF</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/faculty-mentors\">FACULTY MENTORS</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">FACILITIES\n    <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/laboratory\">LABORATORY</a></li>\n            <!-- <li><a scrollTo=\"target\" routerLink=\"/laboratory\">RESEARCH CELL</a></li> -->\n          </ul>\n        </li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">STUDENTS\n    <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <!-- <li><a scrollTo=\"target\" routerLink=\"/academics\">RESEARCH</a></li> -->\n            <li><a scrollTo=\"target\" routerLink=\"/achievements\">ACHIEVEMENTS</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/academic-performance\">ACADEMIC PERFORMANCE</a></li>\n          </ul>\n        </li>\n        <li id=\"lab\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/placements\">PLACEMENTS</a></li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">RESEARCH\n        <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/supervisors\">SUPERVISORS</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/phd\">Ph.D AWARDED</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/research-scholars\">RESEARCH SCHOLARS</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/research-projects\">RESEARCH PROJECTS</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/patents\">PATENTS</a></li>\n            <li><a scrollTo=\"target\" routerLink=\"/publications\">PUBLICATIONS</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" class=\"text-center\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">PROFESSIONAL ACTIVITIES\n    <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a scrollTo=\"target\" routerLink=\"/professional-activities\">IEEE &amp; CSI</a></li>\n          </ul>\n        </li>\n        <!--<li class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/gallery\">NEWS</a></li>-->\n        <li id=\"contact-us\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/contact-us\">CONTACT US</a></li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <img src=\"./assets/logo.png\" class=\"img-responsive\" width=\"100px\">\n        <h4 class=\"margs3\">Providing the best in computer education since 1995.</h4>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <h4 class=\"justify\">Contact Information</h4>\n        <div class=\"row margs3\">\n          <div class=\"col-md-1 col-xs-1\">\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"col-md-11 col-xs-11 text-muted \">\n            <p>St. Joseph's College of Engineering, OMR, Semmencherry, Chennai - 600 119.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 col-xs-1\">\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"col-md-11 col-xs-11 text-muted\">\n            <p>+91-44-24500792</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 col-xs-1\">\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"col-md-11 col-xs-11 text-muted\">\n            <p>hodcsestaffaffairs@stjosephs.ac.in</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <h4 class=\"justify\">We are open</h4>\n\n        <div class=\"margs3 text-muted\">\n          <p>Mon-Sat: 8:00 AM - 3:00 PM\n            <br>(Please check if the faculty member you wish to meet is present if you are visiting us on a Saturday)</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section id=\"footer-section\" class=\"text-center\">\n    <h4>&copy; 2019 All rights reserved by St. Joseph's College of Engineering</h4>\n    <h6 class=\"text-muted\">Maintained by Vigneshwaran R</h6>\n  </section>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(progressService) {
        this.progressService = progressService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["b" /* NgProgress */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lab_lab_component__ = __webpack_require__("../../../../../src/app/lab/lab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faculty_faculty_component__ = __webpack_require__("../../../../../src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faculty_details_service__ = __webpack_require__("../../../../../src/app/faculty-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_ng2_smooth_scroll__ = __webpack_require__("../../../../ng2-smooth-scroll/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cpanel_cpanel_component__ = __webpack_require__("../../../../../src/app/cpanel/cpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vision_mission_vision_mission_component__ = __webpack_require__("../../../../../src/app/vision-mission/vision-mission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__peo_pso_peo_pso_component__ = __webpack_require__("../../../../../src/app/peo-pso/peo-pso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__po_po_component__ = __webpack_require__("../../../../../src/app/po/po.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__syllabus_syllabus_component__ = __webpack_require__("../../../../../src/app/syllabus/syllabus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__faculty_mentors_faculty_mentors_component__ = __webpack_require__("../../../../../src/app/faculty-mentors/faculty-mentors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__supervisors_supervisors_component__ = __webpack_require__("../../../../../src/app/supervisors/supervisors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__research_scholars_research_scholars_component__ = __webpack_require__("../../../../../src/app/research-scholars/research-scholars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__phd_phd_component__ = __webpack_require__("../../../../../src/app/phd/phd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__research_projects_research_projects_component__ = __webpack_require__("../../../../../src/app/research-projects/research-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__patents_patents_component__ = __webpack_require__("../../../../../src/app/patents/patents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__achievements_achievements_component__ = __webpack_require__("../../../../../src/app/achievements/achievements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__professional_activities_professional_activities_component__ = __webpack_require__("../../../../../src/app/professional-activities/professional-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__placements_placements_component__ = __webpack_require__("../../../../../src/app/placements/placements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__academic_performance_academic_performance_component__ = __webpack_require__("../../../../../src/app/academic-performance/academic-performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__co_co_component__ = __webpack_require__("../../../../../src/app/co/co.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__students_committee_students_committee_component__ = __webpack_require__("../../../../../src/app/students-committee/students-committee.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__lab_lab_component__["a" /* LabComponent */],
            __WEBPACK_IMPORTED_MODULE_5__faculty_faculty_component__["a" /* FacultyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__node_modules_ng2_smooth_scroll__["a" /* SmoothScrollToDirective */],
            __WEBPACK_IMPORTED_MODULE_12__node_modules_ng2_smooth_scroll__["b" /* SmoothScrollDirective */],
            __WEBPACK_IMPORTED_MODULE_7__students_students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__cpanel_cpanel_component__["a" /* CpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_17__vision_mission_vision_mission_component__["a" /* VisionMissionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__peo_pso_peo_pso_component__["a" /* PeoPsoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__po_po_component__["a" /* PoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__syllabus_syllabus_component__["a" /* SyllabusComponent */],
            __WEBPACK_IMPORTED_MODULE_21__faculty_mentors_faculty_mentors_component__["a" /* FacultyMentorsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__supervisors_supervisors_component__["a" /* SupervisorsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__research_scholars_research_scholars_component__["a" /* ResearchScholarsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__phd_phd_component__["a" /* PhdComponent */],
            __WEBPACK_IMPORTED_MODULE_25__research_projects_research_projects_component__["a" /* ResearchProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__patents_patents_component__["a" /* PatentsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__publications_publications_component__["a" /* PublicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__achievements_achievements_component__["a" /* AchievementsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__professional_activities_professional_activities_component__["a" /* ProfessionalActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__placements_placements_component__["a" /* PlacementsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__academic_performance_academic_performance_component__["a" /* AcademicPerformanceComponent */],
            __WEBPACK_IMPORTED_MODULE_32__co_co_component__["a" /* CoComponent */],
            __WEBPACK_IMPORTED_MODULE_33__students_committee_students_committee_component__["a" /* StudentsCommitteeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_progressbar__["a" /* NgProgressModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAx5CZ3ctMUfAybIslLB0Jy_Dac3HvL-6M'
            }),
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'about-us',
                    component: __WEBPACK_IMPORTED_MODULE_3__about_us_about_us_component__["a" /* AboutUsComponent */]
                },
                {
                    path: 'contact-us',
                    component: __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__["a" /* ContactUsComponent */]
                },
                {
                    path: 'faculty',
                    component: __WEBPACK_IMPORTED_MODULE_5__faculty_faculty_component__["a" /* FacultyComponent */]
                },
                {
                    path: 'gallery',
                    component: __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */]
                },
                {
                    path: 'academics',
                    component: __WEBPACK_IMPORTED_MODULE_7__students_students_component__["a" /* StudentsComponent */]
                },
                {
                    path: 'laboratory',
                    component: __WEBPACK_IMPORTED_MODULE_4__lab_lab_component__["a" /* LabComponent */]
                },
                {
                    path: 'vision-mission',
                    component: __WEBPACK_IMPORTED_MODULE_17__vision_mission_vision_mission_component__["a" /* VisionMissionComponent */]
                },
                {
                    path: 'peo-pso',
                    component: __WEBPACK_IMPORTED_MODULE_18__peo_pso_peo_pso_component__["a" /* PeoPsoComponent */]
                },
                {
                    path: 'po',
                    component: __WEBPACK_IMPORTED_MODULE_19__po_po_component__["a" /* PoComponent */]
                },
                {
                    path: 'syllabus',
                    component: __WEBPACK_IMPORTED_MODULE_20__syllabus_syllabus_component__["a" /* SyllabusComponent */]
                },
                {
                    path: 'faculty-mentors',
                    component: __WEBPACK_IMPORTED_MODULE_21__faculty_mentors_faculty_mentors_component__["a" /* FacultyMentorsComponent */]
                },
                {
                    path: 'research-scholars',
                    component: __WEBPACK_IMPORTED_MODULE_23__research_scholars_research_scholars_component__["a" /* ResearchScholarsComponent */]
                },
                {
                    path: 'phd',
                    component: __WEBPACK_IMPORTED_MODULE_24__phd_phd_component__["a" /* PhdComponent */]
                },
                {
                    path: 'supervisors',
                    component: __WEBPACK_IMPORTED_MODULE_22__supervisors_supervisors_component__["a" /* SupervisorsComponent */]
                },
                {
                    path: 'research-projects',
                    component: __WEBPACK_IMPORTED_MODULE_25__research_projects_research_projects_component__["a" /* ResearchProjectsComponent */]
                },
                {
                    path: 'patents',
                    component: __WEBPACK_IMPORTED_MODULE_26__patents_patents_component__["a" /* PatentsComponent */]
                },
                {
                    path: 'publications',
                    component: __WEBPACK_IMPORTED_MODULE_27__publications_publications_component__["a" /* PublicationsComponent */]
                },
                {
                    path: 'achievements',
                    component: __WEBPACK_IMPORTED_MODULE_28__achievements_achievements_component__["a" /* AchievementsComponent */]
                },
                {
                    path: 'professional-activities',
                    component: __WEBPACK_IMPORTED_MODULE_29__professional_activities_professional_activities_component__["a" /* ProfessionalActivitiesComponent */]
                },
                {
                    path: 'placements',
                    component: __WEBPACK_IMPORTED_MODULE_30__placements_placements_component__["a" /* PlacementsComponent */]
                },
                {
                    path: 'academic-performance',
                    component: __WEBPACK_IMPORTED_MODULE_31__academic_performance_academic_performance_component__["a" /* AcademicPerformanceComponent */]
                },
                {
                    path: 'cpanel',
                    component: __WEBPACK_IMPORTED_MODULE_16__cpanel_cpanel_component__["a" /* CpanelComponent */]
                },
                {
                    path: 'co',
                    component: __WEBPACK_IMPORTED_MODULE_32__co_co_component__["a" /* CoComponent */]
                },
                {
                    path: 'student-committee',
                    component: __WEBPACK_IMPORTED_MODULE_33__students_committee_students_committee_component__["a" /* StudentsCommitteeComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__faculty_details_service__["a" /* FacultyDetailsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/co/co.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#about-back\r\n{\r\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\r\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\r\n  background-attachment: fixed;\r\n  background-position: bottom;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.jumbotron\r\n{\r\n  background: rgba(0, 0, 0, 0);\r\n  font-family: 'Righteous',sans-serif;\r\n  color: #fff;\r\n  text-shadow: 2px 2px #000;\r\n  padding-top: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/co/co.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>COURSE OUTCOMES</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"syllabus\" class=\"container\">\n      <h2>Undergraduate Courses</h2>\n      <ul>\n        <li><a href=\"./assets/co/CO_2017_UG.pdf\" target=\"_blank\">COURSE OUTCOMES 2017</a></li>\n        <li><a href=\"./assets/co/CO_2013_UG.pdf\" target=\"_blank\">COURSE OUTCOMES 2013</a></li>\n      </ul>\n      <h2>Postgraduate Courses</h2>\n      <ul>\n        <li><a href=\"./assets/co/CO_2017_PG.pdf\" target=\"_blank\">COURSE OUTCOMES 2017</a></li>\n        <li><a href=\"./assets/co/CO_2013_PG.pdf\" target=\"_blank\">COURSE OUTCOMES 2013</a></li>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/co/co.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoComponent = (function () {
    function CoComponent() {
    }
    CoComponent.prototype.ngOnInit = function () {
    };
    return CoComponent;
}());
CoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-co',
        template: __webpack_require__("../../../../../src/app/co/co.component.html"),
        styles: [__webpack_require__("../../../../../src/app/co/co.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CoComponent);

//# sourceMappingURL=co.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\nagm-map {\n  height: 450px;\n}\n#contact{\n  padding-top:  80px;\n  padding-bottom:   100px;\n  font-family: 'Raleway',sans-serif;\n}\n#contact-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.margin-bottom-30\n{\n  margin-bottom: 30px;\n}\n.margin-bottom-60\n{\n  margin-bottom: 60px;\n}\n.margin-top-60\n{\n  margin-top: 40px;\n}\nli#contact-us>a\n{\n  color: orange !important;\n}\n.form-style\n{\n    margin-bottom: 20px;\n    border: 2px solid #e1e1e1;\n    height: 50px;\n\n}\n.form-style:focus\n{\n  border: 2px solid rgba(102,175,233,1);\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <header id=\"contact-back\">\n            <div class=\"container\">\n            <div class=\"jumbotron\">\n            <h1>Contact Us</h1>\n            </div>\n          </div>\n        </header>\n        <section>\n          <article class=\"container\" id=\"contact\">\n            <div class=\"row text-center\">\n              <div class=\"col-md-4 \">\n                  <h1 class=\"margin-bottom-60\">Contact Info</h1>\n                  <div class=\"row  margin-bottom-30\">\n                    <div class=\"col-md-1\">\n                      <i class=\"fa fa-map-o fa-2x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-11\">\n                        <h4><b>Address</b></h4>\n                        <h5 class=\"text-muted\">OMR, Semmencherry, Chennai - 600 119</h5>\n                    </div>\n                  </div>\n                  <div class=\"row  margin-bottom-30\">\n                    <div class=\"col-md-1\">\n                      <i class=\"fa fa-phone fa-2x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-11\">\n                        <h4><b>Phone</b></h4>\n                        <h5 class=\"text-muted\">+91-44-24500792</h5>\n                    </div>\n                  </div>\n                  <div class=\"row  margin-bottom-30\">\n                    <div class=\"col-md-1\">\n                      <i class=\"fa fa-envelope-o fa-2x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-11\">\n                        <h4><b>Email</b></h4>\n                        <h5 class=\"text-muted\">hodcsestaffaffairs@stjosephs.ac.in</h5>\n                    </div>\n                  </div>\n                  <div class=\"row  margin-bottom-30\">\n                    <div class=\"col-md-1\">\n                      <i class=\"fa fa-clock-o fa-2x\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-11\">\n                        <h4><b>Working Hours</b></h4>\n                        <h5 class=\"text-muted\">Monday – Saturday <br>8:00 AM – 3:00 PM</h5>\n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-md-7 col-md-offset-1\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [title]=\"title\">\n                <agm-info-window [disableAutoPan]=\"true\">\n                     <h5 class=\"text-center\"><b>St. Joseph's College of Engineering</b></h5>\n                     <p class=\"text-center\">Old Mamallapuram Road, Semmencherry, Kamaraj Nagar,<br> Semmancheri, Chennai, Tamil Nadu 600119</p>\n                  </agm-info-window>\n                </agm-marker>\n                </agm-map>\n              </div>\n\n</div>\n\n</article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.title = 'My first AGM project';
        this.lat = 12.8702423;
        this.lng = 80.2167096;
        this.zoom = 17;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/cpanel/cpanel.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  padding-top: 25vh;\n}\nlabel\n{\n  font-family: 'Raleway',sans-serif;\n}\n#insert-title\n{\n  font-family: 'Righteous',sans-serif;\n}\n.btn\n{\n  margin-top: 40px;\n}\n#cpanel-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/back2.jpg")) + ");\n  height: 60vh;\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.inp_lt\n{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.contact_lt\n{\n  margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cpanel/cpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-custom2 navbar-fixed-top\">\n  <button type=\"button\" id=\"navbarToggle\" class=\"glyph-pad navbar-toggle collapsed btn-lg\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\n                  <span class=\"fa fa-bars\" aria-hidden=\"true\" style=\"color:black;\"></span>\n\n                  </button>\n  <div class=\"container\">\n    <div class=\"navbar-header navbar-titles\">\n      <a href=\"/\" class=\"navbar-brand hidden-xs\"><span><img src=\"./assets/logo.png\" width=\"70px\"> Computer Science &amp; Engineering</span></a>\n      <a href=\"/\" class=\"navbar-brand hidden-sm hidden-md hidden-lg\"><span><img class=\"logo\" src=\"./assets/logo.png\" width=\"50px\"> Computer Science</span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li id=\"home\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/\">HOME</a></li>\n        <li id=\"about-us\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/about-us\">ABOUT US</a></li>\n        <li id=\"lab\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/laboratory\">LABORATORY</a></li>\n        <li id=\"faculty\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/faculty\">FACULTY</a></li>\n        <li id=\"students\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/students\">STUDENTS</a></li>\n        <li id=\"gallery\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/gallery\">GALLERY</a></li>\n        <li id=\"contact-us\" class=\"text-center\"><a scrollTo=\"target\" routerLink=\"/contact-us\">CONTACT US</a></li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n<header id=\"cpanel-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Control Panel</h1>\n    </div>\n  </div>\n</header>\n<section id=\"form-section\" class=\"container\">\n  <h1 class=\"text-center\" id=\"insert-title\">Insert Faculty Details</h1><hr>\n  <div class=\"form-group\">\n    <form class=\"\" method=\"POST\" enctype=\"multipart/form-data\" action=\"https://kernalsjce17.000webhostapp.com/putstaff.php\">\n      <!--<input type=\"hidden\" name=\"submitted\" value=\"true\" />-->\n      <div class=\"row\">\n\n        <div class=\"col-md-8 col-md-offset-2 contact_lt \">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" name=\"staffName\" placeholder=\"Enter Name\" class=\"form-control inp_lt\" required>\n          <label for=\"designation\">Designation</label>\n          <input type=\"text\" id=\"designation\" name=\"staffDesignation\" placeholder=\"Enter Designation\" class=\"form-control inp_lt\" required>\n          <label for=\"qualification\">Qualification</label>\n          <input type=\"text\" id=\"qualification\" name=\"staffQualification\" placeholder=\"Enter Qualification\" class=\"form-control inp_lt\" required>\n          <label for=\"gender\">Gender</label>\n          <input type='text' id=\"gender\" name=\"staffGender\" placeholder=\"Enter Gender\" class=\"form-control inp_lt\" required/>\n          <label for=\"doj\">Date of Birth</label>\n          <input type='date' id=\"dob\" name=\"staffDob\" placeholder=\"Date of Birth (DD/MM/YY)\" class=\"form-control inp_lt\" required/>\n          <label for=\"doj\">Date of Joining</label>\n          <input type='date' id=\"doj\" name=\"staffDoj\" placeholder=\"Date of Joining (DD/MM/YY)\" class=\"form-control inp_lt\" required/>\n          <label>Upload Photo</label>\n          <input type='file' id=\"img\" name=\"staffPhoto\" placeholder=\"Upload Image\" class=\"form-control inp_lt\" required/>\n          <label>Upload PDF</label>\n          <input type='file' id=\"pdf\" name=\"staffPdf\" placeholder=\"Upload PDF\" class=\"form-control inp_lt\" required/>\n          <input type=\"submit\" value=\"Submit\" name=\"submit\" class=\"btn btn-block btn-info\" />\n        </div>\n      </div>\n\n\n\n    </form>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/cpanel/cpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CpanelComponent = (function () {
    function CpanelComponent() {
    }
    CpanelComponent.prototype.ngOnInit = function () {
    };
    return CpanelComponent;
}());
CpanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cpanel',
        template: __webpack_require__("../../../../../src/app/cpanel/cpanel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cpanel/cpanel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CpanelComponent);

//# sourceMappingURL=cpanel.component.js.map

/***/ }),

/***/ "../../../../../src/app/faculty-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacultyDetailsService = (function () {
    function FacultyDetailsService(http) {
        this.http = http;
        this.baseUrl = 'https://kernalsjce17.000webhostapp.com/';
    }
    FacultyDetailsService.prototype.getAllStaff = function () {
        return this.http.get(this.baseUrl + 'getallstaff.php')
            .map(function (res) { return res.json(); });
    };
    FacultyDetailsService.prototype.getStaff = function (id) {
        return this.http.get(this.baseUrl + 'getstaff.php?id=' + id)
            .map(function (res) { return res.json(); });
    };
    return FacultyDetailsService;
}());
FacultyDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FacultyDetailsService);

var _a;
//# sourceMappingURL=faculty-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/faculty-mentors/faculty-mentors.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#faculty-mentors{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#faculty-mentors table td{\n    vertical-align: middle;\n}\n\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faculty-mentors/faculty-mentors.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Faculty Mentors</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"faculty-mentors\" class=\"container\">\n\n    <div class=\"table-responsive\">\n      <h4><b>Chair Person</b> : Dr.G. MARIAKALAVATHY</h4>\n    <table class=\"table table-bordered table-striped\">\n        <tbody>\n          <tr class=\"row1\">\n            <td class=\"column0 style3 s\">S. No</td>\n            <td class=\"column1 style3 s\">Staff Name</td>\n            <td class=\"column2 style3 s\">Designation</td>\n            <td class=\"column3 style3 s\">Batch</td>\n          </tr>\n          <tr class=\"row2\">\n            <td class=\"column0 style4 n\">1</td>\n            <td class=\"column1 style5 s\">Mr P Naveen</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n            <td class=\"column3 style6 s style6\" rowspan=\"12\">2016-2020</td>\n          </tr>\n          <tr class=\"row3\">\n            <td class=\"column0 style4 n\">2</td>\n            <td class=\"column1 style5 s\">Ms G Saranya</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row4\">\n            <td class=\"column0 style4 n\">3</td>\n            <td class=\"column1 style5 s\">Ms Jenif D Souza WS</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row5\">\n            <td class=\"column0 style4 n\">4</td>\n            <td class=\"column1 style5 s\">Ms P N Jeipratha</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row6\">\n            <td class=\"column0 style4 n\">5</td>\n            <td class=\"column1 style5 s\">Ms AAjoe Sweetlin Jeena</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row7\">\n            <td class=\"column0 style4 n\">6</td>\n            <td class=\"column1 style5 s\">Mr N Manikandan</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row8\">\n            <td class=\"column0 style4 n\">7</td>\n            <td class=\"column1 style5 s\">Dr R Hemalatha</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row9\">\n            <td class=\"column0 style4 n\">8</td>\n            <td class=\"column1 style5 s\">Dr D Rosy Salomi Victoria</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row10\">\n            <td class=\"column0 style4 n\">9</td>\n            <td class=\"column1 style5 s\">Dr K Parkavi</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row11\">\n            <td class=\"column0 style4 n\">10</td>\n            <td class=\"column1 style5 s\">Ms M Shalini</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row12\">\n            <td class=\"column0 style4 n\">11</td>\n            <td class=\"column1 style5 s\">Mr K Balaji</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row13\">\n            <td class=\"column0 style4 n\">12</td>\n            <td class=\"column1 style5 s\">Ms S Janani</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n        </tbody>\n        </table>\n          <br/>\n          <br/>\n          <h4><b>Chair Person</b> : Dr.A. CHANDRASEKAR</h4>\n          <table class=\"table table-bordered table-striped\">\n            <tbody>\n          <tr class=\"row16\">\n            <td class=\"column0 style3 s\">S. No</td>\n            <td class=\"column1 style3 s\">Staff Name</td>\n            <td class=\"column2 style3 s\">Designation</td>\n            <td class=\"column3 style3 s\">Batch</td>\n          </tr>\n          <tr class=\"row17\">\n            <td class=\"column0 style4 n\">1</td>\n            <td class=\"column1 style5 s\">Dr A Sheryl Oliver</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n            <td class=\"column3 style6 s style6\" rowspan=\"9\">2017-2021</td>\n          </tr>\n          <tr class=\"row18\">\n            <td class=\"column0 style4 n\">2</td>\n            <td class=\"column1 style5 s\">Dr Jesline</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row19\">\n            <td class=\"column0 style4 n\">3</td>\n            <td class=\"column1 style5 s\">Mr R Ranjith</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row20\">\n            <td class=\"column0 style4 n\">4</td>\n            <td class=\"column1 style5 s\">Dr S Jothi</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row21\">\n            <td class=\"column0 style4 n\">5</td>\n            <td class=\"column1 style5 s\">Dr M Anuradha</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row22\">\n            <td class=\"column0 style4 n\">6</td>\n            <td class=\"column1 style5 s\">Dr J Jean Justus</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row23\">\n            <td class=\"column0 style4 n\">7</td>\n            <td class=\"column1 style5 s\">Dr M P Rajakumar</td>\n            <td class=\"column2 style4 s\">Professor</td>\n          </tr>\n          <tr class=\"row24\">\n            <td class=\"column0 style4 n\">8</td>\n            <td class=\"column1 style5 s\">Ms S Shanthini</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row25\">\n            <td class=\"column0 style4 n\">9</td>\n            <td class=\"column1 style5 s\">Mr S Vinu</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n        </tbody>\n      </table>\n      <h4><b>Chair Person</b> : Dr.R. PUGALENTHI</h4>\n      <table class=\"table table-bordered table-striped\">\n          <tbody>\n          \n          <tr class=\"row28\">\n            <td class=\"column0 style3 s\">S. No</td>\n            <td class=\"column1 style3 s\">Staff Name</td>\n            <td class=\"column2 style3 s\">Designation</td>\n            <td class=\"column3 style3 s\">Batch</td>\n          </tr>\n          <tr class=\"row29\">\n            <td class=\"column0 style4 n\">1</td>\n            <td class=\"column1 style5 s\">Dr G Murugesan</td>\n            <td class=\"column2 style4 s\">Professor</td>\n            <td class=\"column3 style6 s style6\" rowspan=\"9\">2018-2022</td>\n          </tr>\n          <tr class=\"row30\">\n            <td class=\"column0 style4 n\">2</td>\n            <td class=\"column1 style5 s\">Dr J T Anita Rose</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row31\">\n            <td class=\"column0 style4 n\">3</td>\n            <td class=\"column1 style5 s\">Dr F Sangeetha Francelin Vinnarasi  </td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row32\">\n            <td class=\"column0 style4 n\">4</td>\n            <td class=\"column1 style5 s\">Dr J Ramya</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row33\">\n            <td class=\"column0 style4 n\">5</td>\n            <td class=\"column1 style5 s\">Dr V Anjanadevi</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row34\">\n            <td class=\"column0 style4 n\">6</td>\n            <td class=\"column1 style5 s\">Mr P Varun</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row35\">\n            <td class=\"column0 style4 n\">7</td>\n            <td class=\"column1 style5 s\">Mr A Prabhu Chakkaravarthy</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n          <tr class=\"row36\">\n            <td class=\"column0 style4 n\">8</td>\n            <td class=\"column1 style5 s\">Dr N Angel</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n          </tr>\n          <tr class=\"row37\">\n            <td class=\"column0 style4 n\">9</td>\n            <td class=\"column1 style5 s\">Ms K Sudha</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n          </tr>\n        </tbody>\n      </table>\n      <h4><b>Chair Person</b> : Dr.A. CHANDRASEKAR</h4>\n      <table class=\"table table-bordered table-striped\">\n        <tbody>\n          <tr class=\"row41\">\n            <td class=\"column0 style3 s\">S. No</td>\n            <td class=\"column1 style3 s\">Staff Name</td>\n            <td class=\"column2 style3 s\">Designation</td>\n            <td class=\"column3 style3 s\">Batch</td>\n          </tr>\n          <tr class=\"row42\">\n            <td class=\"column0 style4 n\">1</td>\n            <td class=\"column1 style5 s\">Dr R Hemalatha</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n            <td class=\"column3 style4 s\">M.E.</td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-bordered table-striped\">\n        <tbody>\n          <tr class=\"row45\">\n            <td class=\"column0 style3 s\">S. No</td>\n            <td class=\"column1 style3 s\">Staff Name</td>\n            <td class=\"column2 style3 s\">Designation</td>\n            <td class=\"column3 style3 s\">Heads</td>\n          </tr>\n          <tr class=\"row46\">\n            <td class=\"column0 style4 n\">1</td>\n            <td class=\"column1 style5 s\">Dr M P Rajakumar</td>\n            <td class=\"column2 style4 s\">Professor</td>\n            <td class=\"column3 style4 s\">Exams</td>\n          </tr>\n          <tr class=\"row47\">\n            <td class=\"column0 style4 n\">2</td>\n            <td class=\"column1 style5 s\">Dr. B. Diwan</td>\n            <td class=\"column2 style4 s\">Associate Professor</td>\n            <td class=\"column3 style4 s\">Placement</td>\n          </tr>\n          <tr class=\"row48\">\n            <td class=\"column0 style4 n\">3</td>\n            <td class=\"column1 style5 s\">Mr.K. Rajaganesh</td>\n            <td class=\"column2 style4 s\">Assistant Professor</td>\n            <td class=\"column3 style4 s\">Hostel</td>\n          </tr>\n        </tbody>\n    \n    </table>\n  </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/faculty-mentors/faculty-mentors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyMentorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacultyMentorsComponent = (function () {
    function FacultyMentorsComponent() {
    }
    FacultyMentorsComponent.prototype.ngOnInit = function () {
    };
    return FacultyMentorsComponent;
}());
FacultyMentorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-faculty-mentors',
        template: __webpack_require__("../../../../../src/app/faculty-mentors/faculty-mentors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faculty-mentors/faculty-mentors.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FacultyMentorsComponent);

//# sourceMappingURL=faculty-mentors.component.js.map

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#faculty-section, .modal\n{\n    font-family: 'Raleway',sans-serif;\n}\n#faculty-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.box-center\n{\n  margin: 0 auto;\n  width: 200px;\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.center-modal-photo{\n  margin: 0 auto;\n}\n.margin-modal-20\n{\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.margin-50\n{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#more-details\n{\n  margin-top: 20px;\n  padding: 10px;\n  color: #fff;\n  background: #43598b;\n  border: #43598b;\n  border-radius: 20px;\n}\n.modal-header\n{\n  background: #43598b;\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n}\n#faculty-section h4{\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\nli#faculty>a\n{\n  color: orange !important;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.html":
/***/ (function(module, exports) {

module.exports = "          <header id=\"faculty-back\">\n            <div class=\"container\">\n            <div class=\"jumbotron\">\n            <h1>Faculty</h1>\n            </div>\n          </div>\n          </header>\n  <section class=\"container text-center\" id=\"faculty-section\">\n    <article class=\"margin-50\" >\n      <section class=\"row\" >\n\n          <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n              <a data-toggle=\"modal\" data-target=\"#modal-open0\">\n                <img src=\"./assets/00.jpg\" class=\"img-responsive img-circle box-center\"/>\n              </a>\n                <h4>Dr. B. PARVATHA VARTHINI</h4>\n                <h6 class=\"text-muted\">Dean</h6>\n            </div>\n\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open1\">\n            <img src=\"./assets/01.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. A. CHANDRA SEKAR</h4>\n            <h6 class=\"text-muted\">Professor &amp; Head</h6>\n        </div>\n        \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open3\">\n            <img src=\"./assets/03.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. G. MARIAKALAVATHY</h4>\n            <h6 class=\"text-muted\">Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open4\">\n            <img src=\"./assets/04.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. G. MURUGESAN</h4>\n            <h6 class=\"text-muted\">Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open17\">\n            <img src=\"./assets/17.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr.M. P RAJAKUMAR</h4>\n            <h6 class=\"text-muted\">Professor</h6>\n        </div>\n      \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open5\">\n            <img src=\"./assets/05.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. D. ROSY SALOMI VICTORIA</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open6\">\n            <img src=\"./assets/06.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. R. PUGALENTHI</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open7\">\n            <img src=\"./assets/07.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. S. JOTHI</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open8\">\n            <img src=\"./assets/08.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. J.T. ANITA ROSE</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n     \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open9\">\n            <img src=\"./assets/09.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. F SANGEETHA FRANCELIN VINNARASI</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open10\">\n            <img src=\"./assets/10.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. R. HEMALATHA</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open11\">\n            <img src=\"./assets/11.png\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr.B. DIWAN</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open13\">\n            <img src=\"./assets/13.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. JESLINE</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n      \n\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open14\">\n            <img src=\"./assets/14.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. A. SHERYL OLIVER</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open15\">\n            <img src=\"./assets/15.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. M. ANURADHA</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open16\">\n            <img src=\"./assets/16.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. J. JEAN JUSTUS</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open18\">\n            <img src=\"./assets/18.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr.V. ANJANA DEVI</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n\n     \n\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open19\">\n            <img src=\"./assets/19.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. J. RAMYA</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open20\">\n            <img src=\"./assets/20.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. N. ANGEL</h4>\n            <h6 class=\"text-muted\">Associate Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n            <a data-toggle=\"modal\" data-target=\"#modal-open12\">\n              <img src=\"./assets/12.jpg\" class=\"img-responsive img-circle box-center\"/>\n            </a>\n              <h4>Ms. K. VIJAYALAKSHMI</h4>\n              <h6 class=\"text-muted\">Assistant Professor</h6>\n          </div>\n        </section>\n        <section class=\"row\" >\n          \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open21\">\n            <img src=\"./assets/21.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>DR.D. MANOHARI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n   \n\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open22\">\n            <img src=\"./assets/22.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.M. SHALINI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open23\">\n            <img src=\"./assets/23.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.A. AJOE SWEETLIN JEENA</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open24\">\n            <img src=\"./assets/24.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.P.N. JEIPRATHA</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open25\">\n            <img src=\"./assets/25.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.K. BALAJI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n    \n        \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open26\">\n            <img src=\"./assets/26.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.J.M. KAVITHA</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open27\">\n            <img src=\"./assets/27.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.N. MANIKANDAN</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open28\">\n            <img src=\"./assets/28.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.A. PRABHU CHAKKARAVARTHY</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open29\">\n            <img src=\"./assets/29.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.P. VARUN</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n     \n        \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open30\">\n            <img src=\"./assets/30.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.S. SHANTHINI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open31\">\n            <img src=\"./assets/31.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.P. NAVEEN</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open34\">\n            <img src=\"./assets/34.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.G. SARANYA</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n      </section>\n      \n      <section class=\"row\" >\n        \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open36\">\n            <img src=\"./assets/36.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.R. RANJITH</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n     \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open37\">\n            <img src=\"./assets/37.JPG\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.S. VINU</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open38\">\n            <img src=\"./assets/38.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms.K. SUDHA</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open39\">\n            <img src=\"./assets/39.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Mr.K. RAJAGANESH</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n      </section>\n      <section class=\"row\" >\n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open40\">\n            <img src=\"./assets/40.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Dr. K. PARKAVI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n     \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open41\">\n            <img src=\"./assets/41.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms. S. JANANI</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n        \n        <div class=\"col-md-3 col-sm-3 col-xs-6\"  >\n          <a data-toggle=\"modal\" data-target=\"#modal-open43\">\n            <img src=\"./assets/43.jpg\" class=\"img-responsive img-circle box-center\"/>\n          </a>\n            <h4>Ms. JENIF D SOUZA WS</h4>\n            <h6 class=\"text-muted\">Assistant Professor</h6>\n        </div>\n       \n      </section>\n      \n    </article>\n  </section>\n\n  <section id=\"modal-open0\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 0-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/00.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. B. PARVATHA VARTHINI </h2>\n              <h5 class=\"text-muted\">Dean <br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> PARVATHAVARTHINI@GMAIL.COM</p>\n              <p><b>Date of Joining:</b> 07.11.1994</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/dean.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n  <section id=\"modal-open1\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 1-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/01.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. A. CHANDRA SEKAR</h2>\n              <h5 class=\"text-muted\">Professor &amp; Head<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> drchandrucse@gmail.com</p>\n              <p><b>Date of Joining:</b> 27.05.2002</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/chandrasekar.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n  <section id=\"modal-open2\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 2-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/02.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. P. MUTHUCHELVI</h2>\n              <h5 class=\"text-muted\">Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> notfound@gmail.com</p>\n              <p><b>Date of Joining:</b> 05.06.1996</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/muthuchelvi.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open3\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 3-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/03.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. G. MARIAKALAVATHY</h2>\n              <h5 class=\"text-muted\">Professor<br>M.E., MBA., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> maria_kalavathy@yahoo.co.in</p>\n              <p><b>Date of Joining:</b> 26.05.1999</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/mariakalavathy.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open4\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 4-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/04.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. G. MURUGESAN</h2>\n              <h5 class=\"text-muted\">Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> murugesh02@gmail.com</p>\n              <p><b>Date of Joining:</b> 02.07.2007</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/murugesan.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open5\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 5-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/05.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. D. ROSY SALOMI VICTORIA</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., M.S., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> drosysalomi@gmail.com</p>\n              <p><b>Date of Joining:</b> 18.12.2000</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/rosy.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open6\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 6-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/06.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. R. PUGALENTHI</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> rpugalsir@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2002</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/pugalenthi.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open7\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 7-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/07.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. S. JOTHI</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> jothi14.baskar@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/jothi.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open8\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 7-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/08.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. J.T. ANITA ROSE</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> anita14swartz@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/anitha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open9\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 9-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/09.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. F SANGEETHA FRANCELIN VINNARASI</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.Tech., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> fsangeetha@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sangeetha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open10\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 10-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/10.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. R. HEMALATHA</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> hemes.kumar@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/hemalatha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open11\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 11-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/11.png\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr.B. DIWAN</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> diwandiwan@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.09.2005</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/diwan.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open13\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 13-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/13.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. JESLINE</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> jezline@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/jesline.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open14\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 14-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/14.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. A. SHERYL OLIVER</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.Tech., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> sherylviniba@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sheryl.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open15\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 15-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/15.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. M. ANURADHA</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> anuparini@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/anuradha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open16\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 16-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/16.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. J. JEAN JUSTUS</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.Tech., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> jeanjraj@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/jean.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open17\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 17-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/17.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr.M. P RAJAKUMAR</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> rajakumar_mp@yahoo.com</p>\n              <p><b>Date of Joining:</b> 01.06.2005</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/rajakumar.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open18\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 18-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/18.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr.V. ANJANA DEVI</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> anjanadevi.aby06@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2008</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/anjana.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open19\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 19-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/19.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. J. RAMYA</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> ramsharsha@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/ramya.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open20\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 20-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/20.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. N. ANGEL</h2>\n              <h5 class=\"text-muted\">Associate Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> angel.mcastjosephs@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/angel.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open12\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 12-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/12.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms. K. VIJAYALAKSHMI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.Tech., (Ph. D)</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> akshayviji1610@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.06.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/vijayalakshmi.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open21\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 21-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/21.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>DR.D. MANOHARI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E., Ph. D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> sanmano1973@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.10</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/manohari.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open22\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 22-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/22.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.M. SHALINI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> shalini.mathi@gmail.com</p>\n              <p><b>Date of Joining:</b> 17.08.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/shalini.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open23\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 23-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/23.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.A. AJOE SWEETLIN JEENA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> coolajoejeena@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/ajoe.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open24\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 24-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/24.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.P.N. JEIPRATHA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> guruj.25@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/jeipratha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open25\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 25-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/25.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.K. BALAJI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> balag.kk@gmail.com</p>\n              <p><b>Date of Joining:</b> 09.06.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/balaji.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open26\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 26-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/26.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.J.M. KAVITHA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> connectkavipriya@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/kavitha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open27\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 27-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/27.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.N. MANIKANDAN</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E., (Ph. D)</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> macs2005ciet@gmail.com</p>\n              <p><b>Date of Joining:</b> 17.08.2011</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/manikandan.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open28\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 28-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/28.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.A. PRABHU CHAKKARAVARTHY</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E., MBA.,( Ph. D)</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> sjce.prabhuca@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/prabhu.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open29\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 29-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/29.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.P. VARUN</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.Tech., (Ph. D)</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> varunprabhakaran@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/varun.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open30\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 30-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/30.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.S. SHANTHINI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> shanthini.shanmugam@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/shanthini.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open31\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 31-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/31.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.P. NAVEEN</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> navee4@gmail.com</p>\n              <p><b>Date of Joining:</b> 13.06.2012</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/naveen.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open32\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 32-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/32.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.E. NIVEDHA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> nivedhaelangovan24@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.08.2013</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/nivedha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open33\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 33-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/33.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.S. MONICA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> monica.me33@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.08.2013</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/monica.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open34\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 34-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/34.jpg\" width=\"200px\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.G. SARANYA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> saranya27289@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.07.2014</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/saranya.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open35\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 35-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/35.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.K. SHARMILA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> @gmail.com</p>\n              <p><b>Date of Joining:</b> 23.07.2014</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sharmila.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open36\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 36-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/36.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.R. RANJITH</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> ranjithr@hotmail.co.in</p>\n              <p><b>Date of Joining:</b> 23.07.2014</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/ranjith.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open37\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 37-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/37.JPG\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr.S. VINU</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> s.vinu1991@gmail.com</p>\n              <p><b>Date of Joining:</b> 23.07.2014</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/vinu.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n  <section id=\"modal-open38\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 38-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/38.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms.K. SUDHA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> s.vinu1991@gmail.com</p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sudha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open39\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 39-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/39.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr. K. RAJAGANESH</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.02.2010</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/rajaganesh.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open40\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 40-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/40.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Dr. K. PARKAVI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E.,Ph.D</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/parkavi.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open41\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 41-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/41.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr. S. JANANI</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/janani.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open42\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 42-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/42.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr. A.P. NARMADHA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sudha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open43\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 43-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/43.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr. JENIF D SOUZA WS</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/jenif.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open44\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 44-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/44.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Mr. C. SHANMUGA PRIYA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sudha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n  <section id=\"modal-open45\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content 45-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Faculty Details</h3>\n        </div>\n        <div class=\"modal-body text-center\">\n          <div class=\"row margin-modal-20 text-center\">\n            <div class=\"col-md-4\">\n              <img src=\"./assets/45.jpg\" class=\"img-responsive img-rounded center-modal-photo\"/>\n            </div>\n            <div class=\"col-md-8\">\n              <h2>Ms. V. LINNET PRINCY JUSTINA</h2>\n              <h5 class=\"text-muted\">Assistant Professor<br>M.E</h5>\n              <div class=\"margin-modal-20\">\n\n              <p><b>E-mail Id:</b> - </p>\n              <p><b>Date of Joining:</b> 01.06.2017</p>\n\n            </div>\n              <a class=\"btn btn-info\" id=\"more-details\" href=\"./assets/sudha.pdf\" target=\"_blank\">More Details</a>\n            </div>\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faculty_details_service__ = __webpack_require__("../../../../../src/app/faculty-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacultyComponent = (function () {
    function FacultyComponent(facultyService, progressService, http) {
        this.facultyService = facultyService;
        this.progressService = progressService;
        this.http = http;
    }
    FacultyComponent.prototype.ngOnInit = function () {
        this.getAllStaff();
    };
    FacultyComponent.prototype.getAllStaff = function () {
        var _this = this;
        this.facultyService.getAllStaff().subscribe(function (response) {
            _this.faculty = response;
            _this.photoUrl = response.photopath;
            _this.progressService.done();
            console.log(_this.faculty);
        });
    };
    return FacultyComponent;
}());
FacultyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-faculty',
        template: __webpack_require__("../../../../../src/app/faculty/faculty.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faculty/faculty.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__faculty_details_service__["a" /* FacultyDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__faculty_details_service__["a" /* FacultyDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["b" /* NgProgress */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], FacultyComponent);

var _a, _b, _c;
//# sourceMappingURL=faculty.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#gallery-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nli#gallery>a\n{\n  color: orange !important;\n}\n.pad-50{\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.pad-5{\n  padding: 5px;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"gallery-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Gallery</h1>\n    </div>\n  </div>\n</header>\n<section class=\"container pad-50\">\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/01.jpg\" data-lightbox=\"image\" data-title=\"Teacher's Day Celebration\">\n                  <img src=\"./assets/gallery/01.jpg\" class=\"img-responsive\" alt=\"\">\n                </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/02.jpg\" data-lightbox=\"image\" data-title=\"Teacher's Day Celebration\">\n                <img src=\"./assets/gallery/02.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/03.jpg\" data-lightbox=\"image\" data-title=\"Faculty\">\n\n                <img src=\"./assets/gallery/03.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/04.jpg\" data-lightbox=\"image\" data-title=\"Teacher's Day Celebration\">\n\n                <img src=\"./assets/gallery/04.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/05.jpg\" data-lightbox=\"image\" data-title=\"IEEE Program\">\n\n                <img src=\"./assets/gallery/05.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/06.jpg\" data-lightbox=\"image\" data-title=\"IEEE Program\">\n\n                <img src=\"./assets/gallery/06.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/07.jpg\" data-lightbox=\"image\" data-title=\"Hostel Day\">\n\n                <img src=\"./assets/gallery/07.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/08.jpg\" data-lightbox=\"image\" data-title=\"Faculty Development Program\">\n\n                <img src=\"./assets/gallery/08.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/09.jpg\" data-lightbox=\"image\" data-title=\"Department Orientation Day\">\n\n                <img src=\"./assets/gallery/09.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/10.jpg\" data-lightbox=\"image\" data-title=\"Department Orientation Day\">\n\n                <img src=\"./assets/gallery/10.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/11.jpg\" data-lightbox=\"image\" data-title=\"Teacher's Day Celebration\">\n\n                <img src=\"./assets/gallery/11.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/12.jpg\" data-lightbox=\"image\" data-title=\"Symposium\">\n\n                <img src=\"./assets/gallery/12.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/13.jpg\" data-lightbox=\"image\" data-title=\"Hostel Day\">\n\n                <img src=\"./assets/gallery/13.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/14.jpg\" data-lightbox=\"image\" data-title=\"Golden Tech-Bridge Program\">\n\n                <img src=\"./assets/gallery/14.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n  <div class=\"col-md-4 pad-5\">\n    <a href=\"./assets/gallery/15.jpg\" data-lightbox=\"image\" data-title=\"Computer Science Laboratory\">\n\n                <img src=\"./assets/gallery/15.jpg\" class=\"img-responsive\" alt=\"\">\n              </a>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-title\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  margin-top: -10px;\n  font-family: 'Righteous',cursive;\n}\n\n#heading\n{\n  z-index: 1;\n}\n.jumbotron\n{\n  color: white;\n  font-family: 'Righteous',cursive;\n  background: rgba(0, 0, 0,0);\n  margin: 0 auto;\n  position: relative;\n  top: 25%;\n  border-radius: 20px;\n}\n.jumbotron h1 {\n\ttext-shadow: 2px 2px #000;\n}\n\nheader\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-attachment: fixed;\n  height: 500px;\n}\nsection\n{\n  overflow-x: hidden;\n  margin: 0;\n}\n.jumbotron\n{\n  color: white;\n  font-family: 'Righteous',cursive;\n  background: rgba(0, 0, 0,0);\n  margin: 0 auto;\n  position: relative;\n  top: 25%;\n  border-radius: 20px;\n}\nbutton#button1 {\n\tpadding: 15px;\n        margin:10px;\n    border-radius: 30px;\n}\n.fix\n{\n  margin: 0 auto;\n}\narticle#fives\n{\n    background: #f1f1f1;\n    background-size: cover;\n    background-position: center;\n    padding-bottom: 100px;\n    font-family: 'Raleway',sans-serif;\n}\narticle#exp\n{\n    background:linear-gradient(rgba(253, 96, 77, 1),rgba(251, 62, 100, 1));\n    padding-bottom: 100px;\n    padding-top: 100px;\n    color: #fff;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: top;\n    background-attachment: fixed;\n    font-family: 'Raleway',sans-serif;\n}\narticle#lead\n{\n    background:#f1f1f1;\n    padding-bottom: 100px;\n    padding-top: 100px;\n    font-family: 'Raleway',sans-serif;\n}\narticle#extras\n{\n  padding-bottom: 100px;\n  padding-top: 100px;\n  font-family: 'Raleway',sans-serif;\n}\narticle#others\n{\n  background: #e76137;\n  color: #fff;\n  font-family: 'Raleway',sans-serif;\n  padding-bottom: 50px;\n}\n#vac\n{\n  background: #f9ba55;\n  color: #fff;\n  padding:25px;\n}\n#pts\n{\n  background: #f9466d;\n  color: #fff;\n  padding: 25px;\n}\n#sp\n{\n  background: #8fcbff;\n  color: #fff;\n  padding: 25px;\n}\n#es\n{\n  background: #71ea71;\n  color: #fff;\n  padding: 25px;\n}\n.justify\n{\n  font-weight: bold;\n}\narticle#fives h1\n{\n    padding-top: 100px;\n    margin: 0;\n}\ndiv#firstSec.row\n{\n  margin-top: 100px;\n}\n.margs\n{\n    margin-top: 80px;\n}\n.margs2\n{\n  margin-top: 10px;\n}\n.margs3\n{\n  margin-top: 30px;\n}\n.pads\n{\n  margin-bottom: 50px;\n}\n.pads2\n{\n  display: block;\n  margin-bottom: 30px;\n}\n.pad-btm{\n  margin-bottom: 30px;\n}\n.learnMore\n{\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background-color: transparent;\n  border: 2px solid #fff;\n  padding: 10px 20px 10px 20px;\n  border-radius: 40px;\n}\n#home>a\n{\n  //color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n          \n          <div class=\"jumbotron container\">\n            \n           \n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h1 class=\" animated zoomIn\" id=\"title\">Providing the best in Computer Education since 1995</h1>\n              <button class=\"btn btn-danger animated zoomIn\" id=\"button1\" scrollTo=\"target\" routerLink=\"/contact-us\">Contact Us</button>\n\n                </div>  \n            </div>\n            \n          </div>\n\n\n</header>\n<section >\n<article id=\"fives\">\n   \n        <h1 class=\"text-center justify\">We are a part of St. Joseph's College of Engineering</h1>\n        <h4 class=\"text-center\">We provide the best computer science &amp; engineering education in town.</h4>\n\n        <div class=\"row \" id=\"firstSec\">\n          <div class=\"col-md-2 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12 pads\">\n            <img class=\"img-responsive fix\" src=\"./assets/vision.png\">\n            <h4 class=\"text-center justify\">Our Vision</h4>\n            <p class=\"text-center\">What we always have in mind!</p>\n          </div>\n          <div class=\"col-md-2 col-xs-12 col-sm-3 pads\">\n            <img class=\"img-responsive fix\" src=\"./assets/mission.png\">\n            <h4 class=\"text-center justify\">Our Mission</h4>\n            <p class=\"text-center\">What we strive to achieve!</p>\n          </div>\n          <div class=\"col-md-2 col-xs-12 col-sm-3 pads\">\n            <img class=\"img-responsive fix\" src=\"./assets/objectives.png\">\n            <h4 class=\"text-center justify\">Program Educational Objectives (PEOs)</h4>\n            <p class=\"text-center\">Our education strategy!</p>\n          </div>\n          <div class=\"col-md-2 col-xs-12 col-sm-3 col-sm-offset-1 col-md-offset-0 pads\">\n            <img class=\"img-responsive fix\" src=\"./assets/program-outcomes.png\">\n            <h4 class=\"text-center justify\">Program Outcomes (POs)</h4>\n            <p class=\"text-center\">What you will learn!</p>\n          </div>\n          <div class=\"col-md-2 col-xs-12 col-sm-3 pads\">\n            <img class=\"img-responsive fix\" src=\"./assets/program-specific.png\">\n            <h4 class=\"text-center justify\">Program Specific Outcomes (PSOs)</h4>\n            <p class=\"text-center\">What you will be capable of doing!</p>\n          </div>\n\n        </div>\n</article>\n<article id=\"exp\">\n<h1 class=\"text-center\">More than 2 decades of Excellence</h1>\n<div class=\"row margs\">\n<div class=\"col-md-4 col-sm-4 pads\">\n  <img class=\"img-responsive fix\" src=\"./assets/mt.png\">\n  <h1 class=\"text-center\">100%</h1>\n  <h4 class=\"text-center\">Placements</h4>\n</div>\n<div class=\"col-md-4 col-sm-4 pads\">\n  <img class=\"img-responsive fix\" src=\"./assets/mt2.png\">\n  <h1 class=\"text-center\">1:20</h1>\n<h4 class=\"text-center\">Teacher to Student Ratio</h4>\n</div>\n<div class=\"col-md-4 col-sm-4 pads\">\n  <img class=\"img-responsive fix\" src=\"./assets/mt3.png\">\n  <h1 class=\"text-center\">250</h1>\n  <h4 class=\"text-center\">High performance workstations</h4>\n</div>\n</div>\n</article>\n<article id=\"lead\">\n<h1 class=\"text-center justify\">Our Lead Faculties</h1>\n<div class=\"row margs text-center\">\n  <div class=\"container\">\n  <div class=\"col-md-4 col-sm-4 pads\">\n    <img class=\"img-responsive img-circle fix\" src=\"./assets/01.jpg\">\n    <h4 class=\"justify\">Dr A Chandra Sekar</h4>\n    <p class=\"text-muted\">Professor and Head</p>\n  </div>\n  <div class=\"col-md-4 col-sm-4  pads\">\n    <img class=\"img-responsive img-circle fix\" src=\"./assets/03.jpg\">\n    <h4  class=\"justify\">Dr G Mariakalavathy</h4>\n    <p class=\"text-muted\">Professor</p>\n  </div>\n  <div class=\"col-md-4 col-sm-4  pads\">\n    <img class=\"img-responsive img-circle fix\" src=\"./assets/06.jpg\">\n    <h4  class=\"justify\">Dr R Pugalenthi</h4>\n    <p class=\"text-muted\">Associate Professor</p>\n  </div>\n</div>\n</div>\n</article>\n<article id=\"extras\">\n<div class=\"container\">\n  <h1 class=\"text-center justify\">Extras</h1>\n  <div class=\"row margs\">\n    <div class=\"col-md-6 pad-btm\">\n      <div id=\"vac\">\n      <h2 class=\"text-left pads\">Value Added Courses</h2>\n      <h4 class=\"text-left\">Enlighten your knowledge with the most sought after skills of the day in our unique courses.</h4>\n      <a href=\"./assets/vsc.pdf\" target=\"_blank\"><button class=\"learnMore margs2\"> Learn More </button></a>\n    </div>\n  </div>\n    <div class=\"col-md-6 pad-btm\">\n      <div id=\"pts\">\n      <h2 class=\"text-left pads\">Project Expo</h2>\n      <h4 class=\"text-left\">Become the most employable engineers in town wth our customized project training</h4>\n      <a href=\"./assets/pe.pdf\" target=\"_blank\"><button class=\"learnMore margs2\"> Learn More </button></a>\n    </div>\n  </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 pad-btm\">\n      <div id=\"sp\">\n      <h2 class=\"text-left pads\">Social Programs</h2>\n      <h4 class=\"text-left\">Visit NGOs every semester to keep yourself socially connected with those not so privileged.</h4>\n      <button class=\"learnMore margs2\"><a href=\"./assets/ngo.pdf\" style=\"text-decoration: none; color: #fff;\">Learn More</a></button>\n    </div>\n  </div>\n    <div class=\"col-md-6 pad-btm\">\n      <div id=\"es\">\n      <h2 class=\"text-left pads\">Excel in Sports</h2>\n      <h4 class=\"text-left\">Join the college team in 10+ sports and using these facilities to excel outdoors too.</h4>\n      <a href=\"./assets/sports.pdf\" target=\"_blank\"><button class=\"learnMore margs2\"> Learn More </button></a>\n    </div>\n  </div>\n  </div>\n</div>\n</article>\n<article id=\"others\">\n  <div class=\"container text-center\">\n  <h1 class=\"text-left\">Other Services</h1>\n  <div class=\"row margs\">\n    <div class=\"col-md-4 col-sm-4\">\n      <div class=\"row pads\">\n        <div class=\"col-md-4\">\n      <img src=\"./assets/other1.png\" class=\"img-responsive fix\">\n    </div>\n    <div class=\"col-md-8\">\n      <h3>After-College Coaching</h3>\n      <h5>Finding studies tough? We can help you out on the same.</h5>\n    </div>\n    </div>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <div class=\"row pads\">\n        <div class=\"col-md-4\">\n      <img src=\"./assets/other2.png\" class=\"img-responsive fix\">\n    </div>\n    <div class=\"col-md-8\">\n      <h3>24x7 Internet Access at Hostel</h3>\n      <h5>Staying away from home? Stay connected to the world!</h5>\n    </div>\n    </div>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n      <img src=\"./assets/other3.png\" class=\"img-responsive fix\">\n    </div>\n    <div class=\"col-md-8\">\n      <h3>Get Certified in skill sets of your choice</h3>\n      <h5>Love a particular skill set? We will help you get certified in it!</h5>\n    </div>\n    </div>\n    </div>\n</div>\n<div class=\"row margs\">\n  <div class=\"col-md-4 col-sm-4\">\n    <div class=\"row pads\">\n      <div class=\"col-md-4\">\n    <img src=\"./assets/other4.png\" class=\"img-responsive fix\">\n  </div>\n  <div class=\"col-md-8\">\n    <h3>Special Benefits for Toppers</h3>\n    <h5>Think you can ace the exams? Get scholarships if you succeed.</h5>\n  </div>\n  </div>\n  </div>\n  <div class=\"col-md-4 col-sm-4\">\n    <div class=\"row pads\">\n      <div class=\"col-md-4\">\n    <img src=\"./assets/other5.png\" class=\"img-responsive fix\">\n  </div>\n  <div class=\"col-md-8\">\n    <h3>Multi-cuisine Dining</h3>\n    <h5>Experience Continental, South Indian, North Indian, Chinese cuisines complete with starters and desserts.</h5>\n  </div>\n  </div>\n  </div>\n  <div class=\"col-md-4 col-sm-4\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n    <img src=\"./assets/other6.png\" class=\"img-responsive fix\">\n  </div>\n  <div class=\"col-md-8\">\n    <h3>Club Activities</h3>\n    <h5>Meet those with similar interests as yours; get together and do something wonderful</h5>\n  </div>\n  </div>\n  </div>\n</div>\n  </div>\n</article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            var scroll_start = 0;
            var startchange = $('#title');
            var offset = startchange.offset();
            // $(document).scroll(function()
            //   {
            //       scroll_start = $(this).scrollTop();
            //       if(scroll_start > offset.top)
            //           {
            //               $('.navbar-custom').css('background-color', 'rgba(255, 255, 255,0.98)');
            //               $('.navbar-custom').css('box-shadow','0px 0px 8px 0px #010101');
            //               $('.navbar-custom').css('padding-bottom','10px');
            //               $('.navbar-custom ul>li>a').css('color','#000');
            //               $('.navbar-title').css('color','rgba(0,0,0,0.8)');
            //               $('.nav-icon').css('color','#000');
            //               if (window.matchMedia('(max-width: 767px)').matches) {
            //               $('#bs-example-navbar-collapse-1 ul> li > a').css('color','#000');
            //             }
            //            }
            //        else
            //            {
            //                $('.navbar-custom').css('background-color', 'rgba(0, 0, 0, 0)');
            //                $('.navbar-custom ul>li>a').css('color','#fff');
            //                $('.navbar-title').css('color','#fff');
            //                $('.navbar-custom').css('box-shadow','0px 0px 0px 0px #000');
            //                $('.nav-icon').css('color','#fff');
            //                if (window.matchMedia('(max-width: 767px)').matches) {
            //                $('#bs-example-navbar-collapse-1 ul> li > a').css('color','#000');
            //              }
            //
            //           }
            //   });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#lab-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#labDetails\n{\n  padding-top:50px;\n  padding-bottom: 50px;\n}\n#labDetails table td {\n  vertical-align: middle;\n}\n.pads\n{\n  padding: 20px;\n}\n.table-grey\n{\n  background: #f1f1f1;\n}\n.table-gray\n{\n  background: #f9f9f9;\n}\n.tableBorder\n{\n  border-bottom:  0.1px solid #777;\n}\n.vertical-center\n{\n  position: relative;\n  top: 50%;\n}\n.margin-top-30\n{\n  margin-top: 30px;\n}\n.margin-top-20\n{\n  margin-top: 20px;\n}\n.padding-20\n{\n  padding: 20px;\n  padding-left: 0;\n}\n.table-orange\n{\n  background: #e76137;\n  color: white;\n}\n.table-yellow\n{\n  background: #f9b64c;\n  color: white;\n}\nli#lab>a\n{\n  color: orange !important;\n}\nh4\n{\n  font-size: 1.2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"lab-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Laboratory</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"labDetails\">\n    <div class=\"container\">\n      <h3 class=\"padding-20\"><b>COMPUTER SCIENCE LAB 1</b></h3>\n      <h4><b>ICL – Interactive Computing Lab</b></h4>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td><b>SERVER</b><br>IBM SERVER-IBM x3620 M3 Intel Xeon EE5606 4Core (2.13 Ghz,4MB 800Mhz)Processor 4GB RAM,300 GB HDD)</td>\n          <td>01</td>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP PRODESK-400 Intel Core i5-8GB Ram 500GB HDD</td>\n          <td>50</td>\n        </tr>\n        <tr>\n          <td><b>15 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n      <h4><b>ADL- Application Development Lab</b></h4>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td><b>SERVER</b><br>IBM SERVER-IBM x3620 M3 Intel Xeon EE5606 4Core (2.13 Ghz,4MB 800Mhz)Processor 4GB RAM,300 GB HDD)</td>\n          <td>01</td>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP PRODESK-400 Intel Core i5-8GB Ram 500GB HDD</td>\n          <td>50</td>\n        </tr>\n        <tr>\n          <td><b>15 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n      <h3 class=\"padding-20\"><b>COMPUTER SCIENCE LAB 2</b></h3>\n      <h4><b>PACE LAB- Programming Algorithms Compiler Education Lab (PACE)</b></h4>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td>\n            <b>SERVER</b><br> IBM SERVER-Two Socket Rack server 7979IA7:X3650 Intel Xeon E5450 (Quad Core) 3.00Ghz,2*6m L2cache 133 Mhz/4GB via 12DIMM Slots/300GB 15k SAS3.5 Hot Swap HDD\n          </td>\n          <td>01</td>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP PRO 3330 MTPC Intel Core i3-2120 Processor (3M cache,3.30Ghz)4GB Ram,500GB HDD\n          </td>\n          <td>51</td>\n        </tr>\n        <tr>\n          <td><b>15 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n      <h4><b>DISL-Database and Information System Lab </b></h4>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td><b>SERVER</b><br>IBM SERVER-Two Socket Rack server 7979IA7:X3650 Intel Xeon E5450 (Quad Core) 3.00Ghz,2*6m L2cache 133 Mhz/4GB via 12DIMM Slots/300GB 15k SAS3.5 Hot Swap HDD</td>\n          <td>01</td>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP PRODESK-400 Intel Core i5-8GB Ram 500GB HDD</td>\n          <td>50</td>\n        </tr>\n        <tr>\n          <td><b>15 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n      <h3 class=\"padding-20\"><b>PG LAB</b></h3>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP PRODESK-400 Intel Core i5-8GB Ram 500GB HDD\n          </td>\n          <td>18</td>\n        </tr>\n        <tr>\n          <td><b>5 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n      <h3 class=\"padding-20\"><b>PROJECT & RESEARCH LAB (R&amp;D)\n</b></h3>\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>\n            <h4><b>Computer with Configuration</b></h4></th>\n          <th>\n            <h4><b>Quantity</b></h4></th>\n        </tr>\n        <tr>\n          <td><b>NODES</b><br>HP ProDesk -400 Intel Core i5-8GB RAM- 500GB HDD,HP USB Keyboard & Mouse\n          </td>\n          <td>5</td>\n        </tr>\n        <tr>\n          <td><b>5 KVA UPS</b></td>\n          <td>01</td>\n        </tr>\n      </table>\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabComponent = (function () {
    function LabComponent() {
    }
    LabComponent.prototype.ngOnInit = function () {
    };
    return LabComponent;
}());
LabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-lab',
        template: __webpack_require__("../../../../../src/app/lab/lab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lab/lab.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LabComponent);

//# sourceMappingURL=lab.component.js.map

/***/ }),

/***/ "../../../../../src/app/patents/patents.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#patents{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#patents table td{\n  vertical-align: middle;\n\n}\n.upr{\n  text-transform: uppercase;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patents/patents.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Patents</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"patents\" class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered table-striped\">\n        <tr>\n          <th>S. No</th>\n          <th>Academic Year</th>\n          <th>CBR Number</th>\n          <th>Application Number</th>\n          <th>Name of Faculty</th>\n          <th>Title</th>\n          <th>Status</th>\n        </tr>\n        <tr>\n          <td rowspan=\"2\">1.</td>\n          <td rowspan=\"4\">2014-15</td>\n          <td rowspan=\"2\">14960</td>\n          <td rowspan=\"2\">3978/CHE/2014</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td rowspan=\"2\">SPECTRASOFT</td>\n          <td rowspan=\"2\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.G.S.Uthaya Kumar</td>\n        </tr>\n        <tr>\n          <td rowspan=\"2\">2.</td>\n          <td rowspan=\"2\">17721</td>\n          <td rowspan=\"2\">4696/CHE/2014</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td rowspan=\"2\">THIRD EYE</td>\n          <td rowspan=\"2\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n        </tr>\n        <tr>\n          <td rowspan=\"5\">3.</td>\n          <td rowspan=\"5\">2016-17</td>\n          <td rowspan=\"5\">29117</td>\n          <td rowspan=\"5\">201641037258</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td rowspan=\"5\">AUTOMATIC DETECTION OF HUMAN HEALTH AND\nTRANSFERRING HEALTH INFORMATION</td>\n          <td rowspan=\"5\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">M.Iswarya</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">J.Nirmala</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">M. Leena Christy</td>\n        </tr>\n        <tr>\n          <td rowspan=\"4\">4.</td>\n          <td rowspan=\"4\">2016-17</td>\n          <td rowspan=\"4\">29117</td>\n          <td rowspan=\"4\">201641037256</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td rowspan=\"4\">\nAUTOMATIC WATER SUPPLY FOR AGRICULTURE ON ANALYZING SOIL MOISTURE\n</td>\n          <td rowspan=\"4\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Rosario Gilmary</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Shirley Angel Praveena</td>\n        </tr>\n        <tr>\n          <td rowspan=\"4\">5.</td>\n          <td rowspan=\"4\">2016-17</td>\n          <td rowspan=\"4\">29117</td>\n          <td rowspan=\"4\">201641037257</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td rowspan=\"4\">  AUTOMATIC WATER MEASUREMENT USING ARDUINO AND ANDROID\n</td>\n          <td rowspan=\"4\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">J.Jancy Claret</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">D.Nandhalakshmi</td>\n        </tr>\n        <tr>\n          <td rowspan=\"4\">6.</td>\n          <td rowspan=\"4\">2016-17</td>\n          <td rowspan=\"4\">29117</td>\n          <td rowspan=\"4\">201641037259</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td rowspan=\"4\">AUTOMATIC DETECT OF GASES IN DRAINAGE USING ARDUINO AND ITS DEVICES\n</td>\n          <td rowspan=\"4\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Sowmiya S</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">I.Monica Tresa</td>\n        </tr>\n        <tr>\n          <td rowspan=\"5\">7.</td>\n          <td rowspan=\"5\">2017-18</td>\n          <td rowspan=\"5\">78195</td>\n          <td rowspan=\"5\">201741045093</td>\n          <td class=\"upr\">Dr.S.Jothi</td>\n          <td rowspan=\"5\">SEGMENTATION, DETECTION AND CLASSIFICATION\n            OF PSORIASIS SKIN INFECTION USING IMAGE\n            PROCESSING</td>\n          <td rowspan=\"5\">Applied</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Mr.A.Chandrasekar</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">M.Leena Christy</td>\n        </tr>\n      </table>\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/patents/patents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatentsComponent = (function () {
    function PatentsComponent() {
    }
    PatentsComponent.prototype.ngOnInit = function () {
    };
    return PatentsComponent;
}());
PatentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-patents',
        template: __webpack_require__("../../../../../src/app/patents/patents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/patents/patents.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PatentsComponent);

//# sourceMappingURL=patents.component.js.map

/***/ }),

/***/ "../../../../../src/app/peo-pso/peo-pso.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  //padding-top: 10px;\n  font-family: 'Righteous',cursive;\n}\n\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#peo-pso{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#peo-pso h2{\n  font-family: 'Roboto',sans-serif;\n}\n#peo-pso p{\n  font-size: 18px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/peo-pso/peo-pso.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>PEO &amp; PSO</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"peo-pso\" class=\"container\">\n    <h1>Program Educational Objectives (PEO)</h1>\n    <p>\n      <b>Profession:</b> Graduates excel in computer technology in order to pursue higher education and research, or have a successful career in industries or as entrepreneurs.<br><br>\n      <b>Technophile:</b> Graduates will have the ability and attitude to adapt emerging\n      technological changes in the field of Computer Science and Engineering.<br><br>\n      <b>Team Player:</b>  Possess an ability to collaborate as a team member and team leader to affect technical solutions for computing systems, providing improved function\n      and outcomes.\n    </p>\n    <h1>Program Specific Outcomes (PSO)</h1>\n    <p>\n      <b>Efficacy:</b> Ability to apply mathematical methodologies and foundational concepts of Computer Science and\nEngineering to solve computational tasks, model the real world problem using appropriate data structure and algorithm\nwith suitable programming languages.<br><br>\n<b>Potentiality to design:</b> Analyze, design and evaluate a computer based system by applying software engineering\nprinciples and practices for developing quality software for scientific and business applications.<br><br>\n<b>Technical Expertise:</b> Adapt to modern engineering technologies and thereby build robust, reliable, maintainable,\nscalable, innovative and efficient computing systems by considering social, environmental, economic, and security\nconstraints.\n<br><br></p>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/peo-pso/peo-pso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeoPsoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeoPsoComponent = (function () {
    function PeoPsoComponent() {
    }
    PeoPsoComponent.prototype.ngOnInit = function () {
    };
    return PeoPsoComponent;
}());
PeoPsoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-peo-pso',
        template: __webpack_require__("../../../../../src/app/peo-pso/peo-pso.component.html"),
        styles: [__webpack_require__("../../../../../src/app/peo-pso/peo-pso.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeoPsoComponent);

//# sourceMappingURL=peo-pso.component.js.map

/***/ }),

/***/ "../../../../../src/app/phd/phd.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#research{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phd/phd.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Ph.D Awarded</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"research\" class=\"container\">\n    <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <tr>\n        <th>S. No</th>\n        <th>Faculty Name</th>\n        <th>Supervisor Name</th>\n        <th>University Name</th>\n        <th>Awarded Year</th>\n      </tr>\n      <tr>\n        <td>1.</td>\n        <td>B. PARVATHA VARTHINI</td>\n        <td></td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2008</td>\n      </tr>\n      <tr>\n        <td>2.</td>\n        <td>A. CHANDRA SEKAR</td>\n        <td>Dr.V.VASUDEVAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2010</td>\n      </tr>\n      <tr>\n        <td>3.</td>\n        <td>G. MARIAKALAVATHY</td>\n        <td>Dr. P. SEETHALAKSHMI </td>\n        <td>SATHYABAMA UNIVERSITY</td>\n        <td>2011</td>\n      </tr>\n      <tr>\n        <td>4.</td>\n        <td>G. MURUGESAN</td>\n        <td>Dr C CHELLAPPAN </td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2013</td>\n      </tr>\n      <tr>\n        <td>5.</td>\n        <td>D. ROSY SALOMI VICTORIA</td>\n        <td>Dr. S. SENTHILKUMAR</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2015</td>\n\n      </tr>\n      <tr>\n        <td>6.</td>\n        <td>R. PUGALENTHI</td>\n        <td>Dr. T V GOPAL</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2015</td>\n\n      </tr>\n      <tr>\n        <td>7.</td>\n        <td>M. P .RAJAKUMAR</td>\n        <td>Dr. V. SHANTHI</td>\n        <td>SATHYABAMA UNIVERSITY</td>\n        <td>2016</td>\n      </tr>\n      <tr>\n        <td>8.</td>\n        <td>B. DIWAN</td>\n        <td>Dr. M. R. SUMALATHA</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2016</td>\n      </tr>\n      <tr>\n        <td>9.</td>\n        <td>JESLINE</td>\n        <td>Dr. K. L. SHUNMUGANATHAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2016</td>\n      </tr>\n      <tr>\n        <td>10.</td>\n        <td>V. ANJANA DEVI</td>\n        <td>Dr. R. S. BHUVANESWARAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2016</td>\n      </tr>\n\n      <tr>\n        <td>11.</td>\n        <td>F. SANGEETHA FRANCELIN VINNARASI</td>\n        <td>Dr. A. CHANDRASEKAR</td>\n        <td>MANONMANIAM SUNDARANAR UNIVERSITY</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>12.</td>\n        <td>S. JOTHI</td>\n        <td>Dr.M.CHANDRAESKARAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>13.</td>\n        <td>A. SHERYL OLIVER</td>\n        <td>Dr. N. MAHESWARI</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>14.</td>\n        <td>M. ANURADHA</td>\n        <td>Dr. G. S. ANANDHA MALA</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>15.</td>\n        <td>J. JEAN JUSTUS</td>\n        <td>Dr. A. CHANDRA SEKAR</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>16.</td>\n        <td>R. HEMALATHA</td>\n        <td>Dr. R. S. BHUVANESWARAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>17.</td>\n        <td>J. RAMYA</td>\n        <td>Dr. B. PARVATHAVARTHINI</td>\n        <td>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>18.</td>\n        <td>K .PARKAVI</td>\n        <td>Dr. P. VIVEKANANDAN</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2017</td>\n      </tr>\n      <tr>\n        <td>19.</td>\n        <td>N. Angel</td>\n        <td>Dr. A. CHANDRASEKAR</td>\n        <td>MANONMANIAM SUNDARANAR UNIVERSITY</td>\n        <td>2018</td>\n      </tr>\n      <tr>\n        <td>20.</td>\n        <td>D. MANOHARI</td>\n        <td>Dr. G. S. ANANDHA MALA</td>\n        <td>ANNA UNIVERSITY,CHENNAI</td>\n        <td>2019</td>\n      </tr>\n    </table>\n  </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/phd/phd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhdComponent = (function () {
    function PhdComponent() {
    }
    PhdComponent.prototype.ngOnInit = function () {
    };
    return PhdComponent;
}());
PhdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-phd',
        template: __webpack_require__("../../../../../src/app/phd/phd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/phd/phd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhdComponent);

//# sourceMappingURL=phd.component.js.map

/***/ }),

/***/ "../../../../../src/app/placements/placements.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.auto\n{\n  table-layout: auto;\n}\n#placements{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\na{\n  text-decoration: underline;\n}\nli{\n  list-style: none\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/placements/placements.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Placements</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"placements\" class=\"container\">\n      <ul>\n        <li><h2><a href=\"./assets/placements/10-14Placement Details 2013-2014.pdf\" target=\"_blank\">Placement Details 2010-2014</a></h2></li>\n        <li><h2><a href=\"./assets/syllabus/11-15Placement Details 2014-2015.pdf\" target=\"_blank\">Placement Details 2011-2015</a></h2></li>\n        <li><h2><a href=\"./assets/syllabus/12-16Placement Details 2015-2016.pdf\" target=\"_blank\">Placement Details 2012-2016</a></h2></li>\n        <li><h2><a href=\"./assets/syllabus/13-17Placement Details 2016-2017.pdf\" target=\"_blank\">Placement Details 2013-2017</a></h2></li>\n        <li><h2><a href=\"./assets/syllabus/14-18Placement Details 2017-2018.pdf\" target=\"_blank\">Placement Details 2014-2018</a></h2></li>\n        <li><h2><a href=\"./assets/syllabus/15-19Placement Details 2018-2019.pdf\" target=\"_blank\">Placement Details 2015-2019</a></h2></li>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/placements/placements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacementsComponent = (function () {
    function PlacementsComponent() {
    }
    PlacementsComponent.prototype.ngOnInit = function () {
    };
    return PlacementsComponent;
}());
PlacementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-placements',
        template: __webpack_require__("../../../../../src/app/placements/placements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/placements/placements.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlacementsComponent);

//# sourceMappingURL=placements.component.js.map

/***/ }),

/***/ "../../../../../src/app/po/po.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#po{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#po p{\n  font-size: 18px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/po/po.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Program Outcome</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"po\" class=\"container\">\n  <p>\n<b>Engineering knowledge:</b> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering\nspecialization to the solution of complex engineering problems.<br><br>\n<b>Problem analysis:</b> Identify, formulate, review research literature, and analyze complex engineering problems reaching\nsubstantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.<br><br>\n<b>Design/development of solutions:</b> Design solutions for complex engineering problems and design system components\nor processes that meet the specified needs with appropriate consideration for the public health and safety, and the\ncultural, Societal and environmental considerations.<br><br>\n<b>Conduct investigations of complex problems:</b> Use research-based knowledge and research methods including design\nof experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.<br><br>\n<b>Modern tool usage:</b> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools\nincluding Prediction and modeling to complex engineering activities with an understanding of the limitations.<br><br>\n<b>The engineer and society:</b> Apply reasoning informed by the contextual knowledge to assess societal, health, safety,\nlegal and Cultural issues and the consequent responsibilities relevant to the professional engineering practice.<br><br>\n<b>Environment and sustainability:</b> Understand the impact of the professional engineering solutions in societal and\nenvironmental contexts, and demonstrate the knowledge of, and need for sustainable development.<br><br>\n<b>Ethics:</b> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering\npractice.<br><br>\n<b>Individual and team work:</b> Function effectively as an individual, and as a member or leader in diverse teams, and in\nmultidisciplinary settings.<br><br>\n<b>Communication:</b> Communicate effectively on complex engineering activities with the engineering community and\nwith society at large, such as, being able to comprehend and write effective reports and design documentation, make\neffective Presentations, and give and receive clear instructions.<br><br>\n<b>Project management and finance:</b> Demonstrate knowledge and understanding of the engineering and management\nprinciples and apply these to one’s own work, as a member and leader in a team, to manage projects and in\nmultidisciplinary environments.<br><br>\n<b>Life-long learning:</b> Recognize the need for, and have the preparation and ability to engage in independent and life-long\nlearning in the broadest context of technological change.<br><br>\n</p>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/po/po.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoComponent = (function () {
    function PoComponent() {
    }
    PoComponent.prototype.ngOnInit = function () {
    };
    return PoComponent;
}());
PoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-po',
        template: __webpack_require__("../../../../../src/app/po/po.component.html"),
        styles: [__webpack_require__("../../../../../src/app/po/po.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PoComponent);

//# sourceMappingURL=po.component.js.map

/***/ }),

/***/ "../../../../../src/app/professional-activities/professional-activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.auto\n{\n  table-layout: auto;\n}\n#professional-activities{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\na{\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professional-activities/professional-activities.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Professional Activities</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"professional-activities\" class=\"container\">\n      <ul>\n        <h3><li><a href=\"./assets/ps.pdf\" target=\"_blank\">IEEE & CSI</a></li></h3>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/professional-activities/professional-activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionalActivitiesComponent = (function () {
    function ProfessionalActivitiesComponent() {
    }
    ProfessionalActivitiesComponent.prototype.ngOnInit = function () {
    };
    return ProfessionalActivitiesComponent;
}());
ProfessionalActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-professional-activities',
        template: __webpack_require__("../../../../../src/app/professional-activities/professional-activities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/professional-activities/professional-activities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfessionalActivitiesComponent);

//# sourceMappingURL=professional-activities.component.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.auto\n{\n  table-layout: auto;\n}\n#publications{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.table-center{\n  vertical-align: middle;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\na{\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Publications</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"publications\">\n    <div class=\"container\">\n      <div class=\"table-responsive\">\n      <table class=\"table table-bordered table-striped auto\">\n        <tr>\n          <th>S.No</th>\n          <th>Faculty Name</th>\n        </tr>\n        <tr>\n          <td>1.</td>\n          <td><a href=\"./assets/publications/00.pdf\" target=\"_blank\">Dr. B. PARVATHA VARTHINI</a></td>\n        </tr>\n        <tr>\n          <td>2.</td>\n          <td><a href=\"./assets/publications/01.pdf\" target=\"_blank\">Dr. A. CHANDRASEKAR</a></td>\n        </tr>\n        <tr>\n          <td>3.</td>\n          <td><a href=\"./assets/publications/03.pdf\" target=\"_blank\">Dr. G. MARIAKALAVATHY</a></td>\n        </tr>\n        <tr>\n          <td>4.</td>\n          <td><a href=\"./assets/publications/04.pdf\" target=\"_blank\">Dr. G. MURUGESAN</a></td>\n        </tr>\n        <tr>\n          <td>5.</td>\n          <td><a href=\"./assets/publications/05.pdf\" target=\"_blank\">\tDr. D. ROSY SALOMI VICTORIA</a></td>\n        </tr>\n        <tr>\n          <td>6.</td>\n          <td><a href=\"./assets/publications/06.pdf\" target=\"_blank\"> Dr. R. PUGALENTHI</a></td>\n        </tr>\n        <tr>\n          <td>7.</td>\n          <td><a href=\"./assets/publications/07.pdf\" target=\"_blank\">Dr. S. JOTHI</a></td>\n        </tr>\n        <tr>\n          <td>8.</td>\n          <td><a href=\"./assets/publications/08.pdf\" target=\"_blank\">Dr. J.T. ANITA ROSE</a></td>\n        </tr>\n        <tr>\n          <td>9.</td>\n          <td><a href=\"./assets/publications/09.pdf\" target=\"_blank\">Dr. F. SANGEETHA FRANCELIN VINNARASI</a></td>\n        </tr>\n        <tr>\n          <td>10.</td>\n          <td><a href=\"./assets/publications/10.pdf\" target=\"_blank\">Dr. R. HEMALATHA</a></td>\n        </tr>\n        <tr>\n          <td>11.</td>\n          <td><a href=\"./assets/publications/11.pdf\" target=\"_blank\">Dr. B. DIWAN</a></td>\n        </tr>\n        <tr>\n          <td>12.</td>\n          <td><a href=\"./assets/publications/12.pdf\" target=\"_blank\">\tMs. K. VIJAYALAKSHMI</a></td>\n        </tr>\n        <tr>\n          <td>13.</td>\n          <td><a href=\"./assets/publications/13.pdf\" target=\"_blank\">Dr. JESLINE</a></td>\n        </tr>\n        <tr>\n          <td>14.</td>\n          <td><a href=\"./assets/publications/14.pdf\" target=\"_blank\">\tDr. A. SHERYL OLIVER</a></td>\n        </tr>\n        <tr>\n          <td>15.</td>\n          <td><a href=\"./assets/publications/15.pdf\" target=\"_blank\">Dr. M. ANURADHA</a></td>\n        </tr>\n        <tr>\n          <td>16.</td>\n          <td><a href=\"./assets/publications/16.pdf\" target=\"_blank\">Dr. J. JEAN JUSTUS</a></td>\n        </tr>\n        <tr>\n          <td>17.</td>\n          <td><a href=\"./assets/publications/17.pdf\" target=\"_blank\">Dr. M. P RAJAKUMAR</a></td>\n        </tr>\n        <tr>\n          <td>18.</td>\n          <td><a href=\"./assets/publications/18.pdf\" target=\"_blank\">Dr. V. ANJANA DEVI</a></td>\n        </tr>\n        <tr>\n          <td>19.</td>\n          <td><a href=\"./assets/publications/19.pdf\" target=\"_blank\">Dr. J. RAMYA</a></td>\n        </tr>\n        <tr>\n          <td>20.</td>\n          <td><a href=\"./assets/publications/20.pdf\" target=\"_blank\">Dr. N. ANGEL</a></td>\n        </tr>\n        <tr>\n          <td>21.</td>\n          <td><a href=\"./assets/publications/21.pdf\" target=\"_blank\">Ms. D. MANOHARI</a></td>\n        </tr>\n        <tr>\n          <td>22.</td>\n          <td><a href=\"./assets/publications/22.pdf\" target=\"_blank\">Ms. M. SHALINI</a></td>\n        </tr>\n        <tr>\n          <td>23.</td>\n          <td><a href=\"./assets/publications/23.pdf\" target=\"_blank\">Ms. A. AJOE SWEETLIN JEENA</a></td>\n        </tr>\n        <tr>\n          <td>24.</td>\n          <td><a href=\"./assets/publications/24.pdf\" target=\"_blank\">Ms.P.N. JEIPRATHA</a></td>\n        </tr>\n        <tr>\n          <td>25.</td>\n          <td><a href=\"./assets/publications/25.pdf\" target=\"_blank\">Mr. K. BALAJI</a></td>\n        </tr>\n        <tr>\n          <td>26.</td>\n          <td><a href=\"./assets/publications/26.pdf\" target=\"_blank\">Ms.J.M. KAVITHA</a></td>\n        </tr>\n        <tr>\n          <td>27.</td>\n          <td><a href=\"./assets/publications/27.pdf\" target=\"_blank\">Mr.N. MANIKANDAN</a></td>\n        </tr>\n        <tr>\n          <td>28.</td>\n          <td><a href=\"./assets/publications/28.pdf\" target=\"_blank\">\tMr.A. PRABHU CHAKKARAVARTHY</a></td>\n        </tr>\n        <tr>\n          <td>29.</td>\n          <td><a href=\"./assets/publications/29.pdf\" target=\"_blank\">Mr.P. VARUN</a></td>\n        </tr>\n        <tr>\n          <td>30.</td>\n          <td><a href=\"./assets/publications/30.pdf\" target=\"_blank\">Ms.S. SHANTHINI</a></td>\n        </tr>\n        <tr>\n          <td>31.</td>\n          <td><a href=\"./assets/publications/31.pdf\" target=\"_blank\">Mr. P. NAVEEN</a></td>\n        </tr>\n        <tr>\n          <td>32.</td>\n          <td><a href=\"./assets/publications/32.pdf\" target=\"_blank\">Ms.G. SARANYA</a></td>\n        </tr>\n        <tr>\n          <td>33.</td>\n          <td><a href=\"./assets/publications/33.pdf\" target=\"_blank\">Mr.R. RANJITH</a></td>\n        </tr>\n        <tr>\n          <td>34.</td>\n          <td><a href=\"./assets/publications/34.pdf\" target=\"_blank\">Mr.S. VINU</a></td>\n        </tr>\n        <tr>\n          <td>35.</td>\n          <td><a href=\"./assets/publications/35.pdf\" target=\"_blank\">Ms.K. SUDHA</a></td>\n        </tr>\n        <tr>\n          <td>36.</td>\n          <td><a href=\"./assets/publications/36.pdf\" target=\"_blank\">Dr.K. PARKAVI</a></td>\n        </tr>\n        <tr>\n          <td>37.</td>\n          <td><a href=\"./assets/publications/37.pdf\" target=\"_blank\">Mr.K. RAJAGANESH</a></td>\n        </tr>\n        <tr>\n          <td>38.</td>\n          <td><a href=\"./assets/publications/38.pdf\" target=\"_blank\">Ms. JANANI</a></td>\n        </tr>\n        <tr>\n          <td>39.</td>\n          <td><a href=\"./assets/publications/39.pdf\" target=\"_blank\">Ms. JENIF D SOUZA W S</a></td>\n        </tr>\n\n\n      </table>\n    </div>\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationsComponent = (function () {
    function PublicationsComponent() {
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    return PublicationsComponent;
}());
PublicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-publications',
        template: __webpack_require__("../../../../../src/app/publications/publications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/publications/publications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublicationsComponent);

//# sourceMappingURL=publications.component.js.map

/***/ }),

/***/ "../../../../../src/app/research-projects/research-projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n.upr{\n  text-transform: uppercase;\n}\n#research-projects{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.table-center{\n  vertical-align: middle;\n}\n#research-projects table td{\n  vertical-align: middle;\n\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research-projects/research-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Research Projects</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"research-projects\" class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered table-striped\" >\n        <tr>\n          <th>S. No</th>\n          <th>Academic Year</th>\n          <th>Reference Number</th>\n          <th>Principle Investigator</th>\n          <th>Co-Principle Investigator</th>\n          <th>Title</th>\n          <th>Agency</th>\n          <th>Amount</th>\n          <th>Status</th>\n        </tr>\n        <tr>\n          <td>1.</td>\n          <td rowspan=\"2\">2014-15</td>\n          <td>2290</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td class=\"upr\">Mr.G.S.Uthaya Kumar</td>\n          <td>Nanospectra Soft</td>\n          <td>DST - Nano Mission</td>\n          <td>Rs. 24,56,000</td>\n          <td rowspan=\"9\">Applied</td>\n        </tr>\n        <tr>\n          <td>2.</td>\n          <td>17721</td>\n          <td class=\"upr\">Mr.G.S.Uthaya Kumar</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td>Fabrication of Optical Nanobiosensor</td>\n          <td>DST - Nano Mission</td>\n          <td>Rs. 1,38,28,000</td>\n        </tr>\n        <tr>\n          <td>3.</td>\n          <td rowspan=\"4\">2016-17</td>\n          <td>182016003187</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n          <td>An Assistive Text Reading Device for Visually Impaired People</td>\n          <td>DST - SERB</td>\n          <td>Rs. 19,00,000</td>\n        </tr>\n        <tr>\n          <td>4.</td>\n          <td>25478</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n          <td>A Novel Pipeline Using Galaxy Framework with Big Data for Cancer Disease by Integrating Various Omics Tools and Data</td>\n          <td>RPS - AICTE</td>\n          <td>Rs. 24,00,000</td>\n        </tr>\n        <tr>\n          <td rowspan=\"2\">5.</td>\n          <td rowspan=\"2\">22349</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td rowspan=\"2\" class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n          <td rowspan=\"2\">A Novel Pipeline Using Galaxy Framework with Big Data for Cancer Disease by Integrating Various Omics Tools and Data</td>\n          <td rowspan=\"2\">DBT</td>\n          <td rowspan=\"2\">Rs. 44,99,950</td>\n        </tr>\n        <tr>\n          <td class=\"upr\">Dr. G. Baskar</td>\n          </tr>\n        <tr>\n          <td>6.</td>\n          <td rowspan=\"3\">2017-18</td>\n          <td>29117</td>\n          <td class=\"upr\">Dr.A.Chandrasekar</td>\n          <td class=\"upr\">Mr.A.Prabhu Chakkaravarthy</td>\n          <td>Development of a Novel Pipeline Using Framework for Indian Specific Cancer Big Data Analytics by Integrating Various Omics Tools and Datasets.</td>\n          <td>DST - NRDMS</td>\n          <td>Rs. 32,82,000</td>\n        </tr>\n        <tr>\n          <td>7.</td>\n          <td>182017004710</td>\n          <td class=\"upr\">Dr.G.Maria Kalavathy</td>\n          <td class=\"upr\">Ms.Anitha Gnanaselvi J</td>\n          <td>Web Based Tool For Automated Analysis Of Various Disorders In Retinal Images</td>\n          <td>DST SERB</td>\n          <td>Rs. 9,72,000</td>\n        </tr>\n        <tr>\n          <td>8.</td>\n          <td>EEQ/2017/000472</td>\n          <td class=\"upr\">Dr.G.Murugesan</td>\n          <td>-</td>\n          <td>Third Eye: An Assistive Device for Visually Impaired People</td>\n          <td>DST SERB</td>\n          <td>Rs. 18,65,000</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-bordered\">\n        <tr>\n          <th>Total Amount</th>\n          <th>Rs. 3,12,02,950/-</th>\n        </tr>\n      </table>\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/research-projects/research-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResearchProjectsComponent = (function () {
    function ResearchProjectsComponent() {
    }
    ResearchProjectsComponent.prototype.ngOnInit = function () {
    };
    return ResearchProjectsComponent;
}());
ResearchProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-research-projects',
        template: __webpack_require__("../../../../../src/app/research-projects/research-projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/research-projects/research-projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResearchProjectsComponent);

//# sourceMappingURL=research-projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/research-scholars/research-scholars.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#research{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#research a {\n  text-decoration: underline;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research-scholars/research-scholars.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Research Scholars</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"research\" class=\"container\">\n    <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <tr>\n        <th>S. No</th>\n        <th>Supervisor Name</th>\n        <th>Reference Number</th>\n        <th>Research Area</th>\n      </tr>\n      <tr>\n        <td>1.</td>\n        <td><a href=\"./assets/research/research-0.pdf\" target=\"_blank\">Dr.B. PARVATHA VARTHINI</a></td>\n        <td>1240223</td>\n        <td>Computer Network</td>\n      </tr>\n      <tr>\n        <td>2.</td>\n        <td><a href=\"./assets/research/research-1.pdf\" target=\"_blank\">Dr.A.CHANDRA SEKAR</a></td>\n        <td>2940058</td>\n        <td>Network Security</td>\n      </tr>\n      <tr>\n        <td>3.</td>\n        <td><a href=\"./assets/research/research-2.pdf\" target=\"_blank\">Dr.G.MARIAKALAVATHY</a></td>\n        <td>2340184</td>\n        <td>Web Services, Service Oriented Architecture, Distributed Computing</td>\n\n      </tr>\n      <tr>\n        <td>4.</td>\n        <td><a href=\"./assets/research/research-3.pdf\" target=\"_blank\">Dr.B.DIWAN</a></td>\n        <td>2940108</td>\n        <td>Mobile Computing, Distributed Database</td>\n      </tr>\n    </table>\n  </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/research-scholars/research-scholars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchScholarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResearchScholarsComponent = (function () {
    function ResearchScholarsComponent() {
    }
    ResearchScholarsComponent.prototype.ngOnInit = function () {
    };
    return ResearchScholarsComponent;
}());
ResearchScholarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-research-scholars',
        template: __webpack_require__("../../../../../src/app/research-scholars/research-scholars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/research-scholars/research-scholars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResearchScholarsComponent);

//# sourceMappingURL=research-scholars.component.js.map

/***/ }),

/***/ "../../../../../src/app/students-committee/students-committee.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\na.navbar-brand\r\n{\r\n  font-size: 20px;\r\n  color: rgba(0,0,0,0.8);\r\n  font-family: 'Righteous',cursive;\r\n}\r\n.jumbotron\r\n{\r\n  background: rgba(0, 0, 0, 0);\r\n  font-family: 'Righteous',sans-serif;\r\n  color: #fff;\r\n  text-shadow: 2px 2px #000;\r\n  padding-top: 200px;\r\n}\r\n\r\n#student-committee\r\n{\r\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\r\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\r\n  background-attachment: fixed;\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\nli#students>a\r\n{\r\n  color: orange !important;\r\n}\r\n@media only screen and (max-width:768px)\r\n{\r\n  .navbar-brand{\r\n    margin-top: -10px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students-committee/students-committee.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"student-committee\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>COMMITTEE FOR STUDENTS WELFARE</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"students-committee\" class=\"container\">\n    <br/>\n    <br/>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n            <tbody>\n              <tr class=\"row\">\n                <td class=\"column0 style3 s\">S. No</td>\n                <td class=\"column1 style3 s\">Category</td>\n                <td class=\"column2 style3 s\">Name of the Staff Members</td>\n              </tr>\n              <tr class=\"row\">\n                  <td class=\"column0 style3 s\">1</td>\n                  <td class=\"column1 style3 s\">Placement Coordinators</td>\n                  <td class=\"column2 style3 s\">\t\n                      Mr.P.Varun\n                      <br/><br>\n                      Dr.R.Hemalatha\n                      <br/><br>\n                      Mr.P.Naveen\n                      <br><br>\n                      Ms.M.Shalini\n                      <br><br>\n                      Mr.R.Ranjith\n                      <br><br>\n                      Mr.S.Vinu</td>\n                </tr>\n                <tr class=\"row\">\n                    <td class=\"column0 style3 s\">2</td>\n                    <td class=\"column1 style3 s\">Higher Studies Coordinators</td>\n                    <td class=\"column2 style3 s\">\t\n                        Dr.D.RosySalomi Victoria\n                        <br/><br>\n                        Ms.G.Saranya\n                        </td>\n                  </tr>\n                  <tr class=\"row\">\n                      <td class=\"column0 style3 s\">3</td>\n                      <td class=\"column1 style3 s\">Defence Coordinators</td>\n                      <td class=\"column2 style3 s\">\t\n                          Ms.K.Sudha\n                          <br/><br>\n                          Dr.N.Angel\n                         </td>\n                    </tr>\n                    <tr class=\"row\">\n                        <td class=\"column0 style3 s\">4</td>\n                        <td class=\"column1 style3 s\">Civil Services Coordinators</td>\n                        <td class=\"column2 style3 s\">\t\n                            Ms.P.N.Jeipratha\n                            <br/><br>\n                            Ms.A.AjoeSweetlineJeena\n                           </td>\n                      </tr>\n                      <tr class=\"row\">\n                          <td class=\"column0 style3 s\">5</td>\n                          <td class=\"column1 style3 s\">Department Symposium Coordinators</td>\n                          <td class=\"column2 style3 s\">\t\n                              Mr R Ranjith\n                              <br/><br>\n                              Mr P Naveen\n                             </td>\n                        </tr>\n                        <tr class=\"row\">\n                            <td class=\"column0 style3 s\">6</td>\n                            <td class=\"column1 style3 s\">Alumni Coordinators</td>\n                            <td class=\"column2 style3 s\">\t\n                                Dr.F.SangeethaFrancelinVinnarasi\n                                <br/><br>\n                                Dr Jesline\n                               </td>\n                          </tr>\n                          <tr class=\"row\">\n                              <td class=\"column0 style3 s\">7</td>\n                              <td class=\"column1 style3 s\">Entrepreneur Development Cell Coordinators</td>\n                              <td class=\"column2 style3 s\">\t\n                                  Mr.K.Balaji\n                                  <br/><br>\n                                  Mr.N.Manikandan\n                                 </td>\n                            </tr>\n                            <tr class=\"row\">\n                                <td class=\"column0 style3 s\">8</td>\n                                <td class=\"column1 style3 s\">ICTACT Coordinators</td>\n                                <td class=\"column2 style3 s\">\t\n                                    Dr.S.Jothi\n                                    <br/><br>\n                                    Dr.M.Anuradha\n                                    <br/><br>\n                                    Ms.Jenif D Souza WS\n                                   </td>\n                              </tr>\n                              <tr class=\"row\">\n                                  <td class=\"column0 style3 s\">9</td>\n                                  <td class=\"column1 style3 s\">R & D Coordinators</td>\n                                  <td class=\"column2 style3 s\">\t\n                                      Dr.G. Murugesan\n                                      <br/><br>\n                                      Mr.A.PrabhuChakkaravarthy\n                                      <br/><br>\n                                      Dr.J.Ramya\n                                     </td>\n                                </tr>\n                                <tr class=\"row\">\n                                    <td class=\"column0 style3 s\">10</td>\n                                    <td class=\"column1 style3 s\">Industry Institute Interaction Coordinators</td>\n                                    <td class=\"column2 style3 s\">\t\n                                        Dr.J.T.Anita Rose\n                                        <br/><br>\n                                        Dr.K.Parkavi\n                                        <br/><br>\n                                        Ms.S.Shanthini\n                                       </td>\n                                  </tr>\n                                  <tr class=\"row\">\n                                      <td class=\"column0 style3 s\">11</td>\n                                      <td class=\"column1 style3 s\">NGO Coordinators</td>\n                                      <td class=\"column2 style3 s\">\t\n                                          Dr.J.Jean Justus\n                                          <br/><br>\n                                          Ms.S.Janani\n                                         </td>\n                                    </tr>\n                                    <tr class=\"row\">\n                                        <td class=\"column0 style3 s\">12</td>\n                                        <td class=\"column1 style3 s\">Students Panel -Competition</td>\n                                        <td class=\"column2 style3 s\">\t\n                                            Dr.R.Hemalatha\n                                            <br/><br>\n                                            Dr.A.Sheryl Oliver\n                                            <br/><br>\n                                            Dr.V.Anjana Devi\n                                            <br><br>\n                                            Mr.K.Balaji\n                                            <br><br>\n                                            Mr P Naveen</td>\n                                      </tr>\n            </tbody>\n            </table>\n            </div>\n    </article>\n    </section>\n    "

/***/ }),

/***/ "../../../../../src/app/students-committee/students-committee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsCommitteeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsCommitteeComponent = (function () {
    function StudentsCommitteeComponent() {
    }
    StudentsCommitteeComponent.prototype.ngOnInit = function () {
    };
    return StudentsCommitteeComponent;
}());
StudentsCommitteeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-students-committee',
        template: __webpack_require__("../../../../../src/app/students-committee/students-committee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/students-committee/students-committee.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentsCommitteeComponent);

//# sourceMappingURL=students-committee.component.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.navbar-brand\n{\n  font-size: 20px;\n  color: rgba(0,0,0,0.8);\n  font-family: 'Righteous',cursive;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n\n#student-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nli#students>a\n{\n  color: orange !important;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "        <header id=\"student-back\">\n            <div class=\"container\">\n            <div class=\"jumbotron\">\n            <h1>Academics</h1>\n            </div>\n          </div>\n          </header>\n"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-students',
        template: __webpack_require__("../../../../../src/app/students/students.component.html"),
        styles: [__webpack_require__("../../../../../src/app/students/students.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentsComponent);

//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/app/supervisors/supervisors.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#supervisors{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#syllabus h2{\n  margin-bottom: 20px;\n  font-family: 'Roboto',sans-serif;\n\n}\n#syllabus ul>li{\n  font-size: 18px;\n  text-decoration: underline;\n  margin-bottom: 20px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/supervisors/supervisors.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Supervisors</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"supervisors\" class=\"container\">\n    <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <tr>\n        <th>S. No</th>\n        <th>Supervisor Name</th>\n        <th>Reference Number</th>\n        <th>Research Area</th>\n      </tr>\n      <tr>\n        <td>1.</td>\n        <td>Dr. B. PARVATHA VARTHINI</td>\n        <td>1240223</td>\n        <td>Computer Network</td>\n      </tr>\n      <tr>\n        <td>2.</td>\n        <td>Dr. A. CHANDRA SEKAR</td>\n        <td>2940058</td>\n        <td>Network Security</td>\n      </tr>\n      <tr>\n        <td>3.</td>\n        <td>Dr. G. MARIAKALAVATHY</td>\n        <td>2340184</td>\n        <td>Web Services, Service Oriented Architecture, Distributed Computing</td>\n\n      </tr>\n      <tr>\n        <td>4.</td>\n        <td>Dr. B. DIWAN</td>\n        <td>2940108</td>\n        <td>Mobile Computing, Distributed Database</td>\n      </tr>\n    </table>\n  </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/supervisors/supervisors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorsComponent = (function () {
    function SupervisorsComponent() {
    }
    SupervisorsComponent.prototype.ngOnInit = function () {
    };
    return SupervisorsComponent;
}());
SupervisorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-supervisors',
        template: __webpack_require__("../../../../../src/app/supervisors/supervisors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/supervisors/supervisors.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SupervisorsComponent);

//# sourceMappingURL=supervisors.component.js.map

/***/ }),

/***/ "../../../../../src/app/syllabus/syllabus.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#syllabus{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#syllabus h2{\n  margin-bottom: 20px;\n  font-family: 'Roboto',sans-serif;\n\n}\n#syllabus ul>li{\n  font-size: 18px;\n  text-decoration: underline;\n  margin-bottom: 20px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/syllabus/syllabus.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Syllabus &amp; Regulations</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"syllabus\" class=\"container\">\n      <h2>Undergraduate Courses</h2>\n      <ul>\n        <li><a href=\"./assets/syllabus/R2017.pdf\" target=\"_blank\">R 2017</a></li>\n        <li><a href=\"./assets/syllabus/BE-2.pdf\" target=\"_blank\">R 2013</a></li>\n        <li><a href=\"./assets/syllabus/Curriculum.pdf\" target=\"_blank\">Curriculum</a></li>\n      </ul>\n      <h2>Postgraduate Courses</h2>\n      <ul>\n        <li><a href=\"./assets/syllabus/ME-2.pdf\" target=\"_blank\">R 2017</a></li>\n        <li><a href=\"./assets/syllabus/ME-1.pdf\" target=\"_blank\">R 2013</a></li>\n      </ul>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/syllabus/syllabus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyllabusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SyllabusComponent = (function () {
    function SyllabusComponent() {
    }
    SyllabusComponent.prototype.ngOnInit = function () {
    };
    return SyllabusComponent;
}());
SyllabusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-syllabus',
        template: __webpack_require__("../../../../../src/app/syllabus/syllabus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/syllabus/syllabus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SyllabusComponent);

//# sourceMappingURL=syllabus.component.js.map

/***/ }),

/***/ "../../../../../src/app/vision-mission/vision-mission.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#about-back\n{\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\nurl(" + escape(__webpack_require__("../../../../../src/assets/background.jpg")) + ");\n  background-attachment: fixed;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.jumbotron\n{\n  background: rgba(0, 0, 0, 0);\n  font-family: 'Righteous',sans-serif;\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  padding-top: 200px;\n}\n#vision-mission{\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n#vision-mission h2{\n  font-family: 'Roboto',sans-serif;\n}\n#vision-mission p{\n  font-size: 18px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.margsBottom\n{\n  margin-bottom: 50px;\n}\n.fix\n{\n  margin: 0 auto;\n  width: 230px;\n}\n.margs-100\n{\n  margin-top: 100px;\n}\n.margs-20\n{\n  margin-top:50px;\n}\nli#about-us>a\n{\n  color: orange !important;\n}\n@media only screen and (max-width:768px)\n{\n  .navbar-brand{\n    margin-top: -10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vision-mission/vision-mission.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"about-back\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Vison &amp; Mission</h1>\n    </div>\n  </div>\n</header>\n<section>\n  <article id=\"vision-mission\" class=\"container\">\n    <h1>Vision</h1>\n    <p>The Department of Computer Science and Engineering believes in providing quality education to students who will excel in design and development of hardware and software integrated devices through continuous learning and research activities,\nethically meeting the social needs.</p>\n<h1>Mission</h1>\n<p>\n<b>Excellence:</b> Achieve academic excellence through innovative teaching and continuous improvement thereby promoting\nresearch and development in the field of Computer Science and Engineering.<br><br>\n<b>Adaptability:</b> Inculcate team work, ethical practices and build necessary skill set in students through career development\ntraining programmes to help them adapt to the ever changing market demands.<br><br>\n<b>Service:</b> Enrich students with moral values, discipline and high integrity to serve the society and work towards its betterment.\n</p>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/vision-mission/vision-mission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionMissionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisionMissionComponent = (function () {
    function VisionMissionComponent() {
    }
    VisionMissionComponent.prototype.ngOnInit = function () {
    };
    return VisionMissionComponent;
}());
VisionMissionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-vision-mission',
        template: __webpack_require__("../../../../../src/app/vision-mission/vision-mission.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vision-mission/vision-mission.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VisionMissionComponent);

//# sourceMappingURL=vision-mission.component.js.map

/***/ }),

/***/ "../../../../../src/assets/back2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back2.7661721120541e6a31c8.jpg";

/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.f6b1bd426a5c7fd72efe.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map