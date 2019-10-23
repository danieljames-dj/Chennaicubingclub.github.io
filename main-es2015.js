(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md bg-light navbar-light\">\n  <a class=\"navbar-brand\" href routerLink=\"/\">\n    <img src=\"../assets/Logo/C3_Logo.png\" class=\"responsive\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/c3-cup\">C<sup>3</sup> Cup</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/competitions\">Competitions</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/resources\">Resources</a>\n      </li>    \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sponsorship\">Sponsorship</a>\n      </li>    \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/team-C3\">Team C<sup>3</sup></a>\n      </li>    \n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>    \n    </ul>\n  </div>  \n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-cup/c3-cup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-cup/c3-cup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#whatisc3cup\">What is C<sup>3</sup> Cup?</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#rulesofgame\">Rules of the game</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#results\">Previous Competition Results</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div id=\"whatisc3cup\" class=\"container tab-pane active\">\n            <br>\n            <div class=\"card\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-lg-6 col-xs-12 col-sm-6\">\n                        <img src=\"../../../assets/Logo/My-Movie.gif\" width=\"100%\" height=\"100%\" alt=\"\">\n                    </div>\n                    <div class=\"col-md-6 col-lg-6 col-xs-12 col-sm-6 text-justify list-group-item\">\n                        <p>Are you a Jack of all the WCA Speedcubing events? Well guess what; For the very first time in India, here is an exciting opportunity for you to prove that you are the King of Jacks!\n                        <br><br>\n                        Introducing the C³ Cup 2019!\n                        <br><br>\n                        For select competitions hosted by the Chennai Cubing Club in Tamilnadu throughout the year, top 10 ranks of all events will be awarded points and the person with the highest points at the end of the year wins the C³ Cup. Make sure to attend all the competitions and seize the opportunity to secure the highest points. Each C³ Cup competition will be announced in our pages.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <div class=\"jumbotron text-center\" *ngFor=\"let item of results\">\n                <h1>SCOREBOARD</h1>\n                <h4>(Until {{item.title}})</h4>\n            </div>\n            \n            <table class=\"table Well\" *ngFor=\"let item of results\">\n                <thead>\n                    <tr>\n                        <th>S.No</th>\n                        <th>Name</th>\n                        <th>Points</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let data of item.result; let i = index\">\n                    <tr>\n                        <td class=\"table-data text-center\">{{i + 1}}</td>\n                        <td class=\"table-data\">{{data.name}}</td>\n                        <td class=\"table-data\">{{data.score}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"rulesofgame\" class=\"container tab-pane\">\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h1 class=\"text-center\">Ranking</h1>\n                    <p>Each competitor starts at 0 points at the beginning of the season (before the first competition). For each event held at any competition, points are added to a competitor's tally as per the followind table:</p>\n                    <table class=\"table table-hover table-responsive text-center\">\n                        <thead>\n                            <tr>\n                                <th>Place</th>\n                                <td>1</td>\n                                <td>2</td>\n                                <td>3</td>\n                                <td>4</td>\n                                <td>5</td>\n                                <td>6</td>\n                                <td>7</td>\n                                <td>8</td>\n                                <td>9</td>\n                                <td>10</td>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th>Points</th>\n                                <td>25x</td>\n                                <td>18x</td>\n                                <td>15x</td>\n                                <td>12x</td>\n                                <td>10x</td>\n                                <td>8x</td>\n                                <td>6x</td>\n                                <td>4x</td>\n                                <td>2x</td>\n                                <td>1x</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                    <p>\n                        Places are determined from the final round of the event. No points are awarded to\n                        DNF results.\n                        Here, 'x' is a multiplier that varies as per the event and the number of competitors as so:\n                    </p>\n\n                    <table class=\"table table-hover table-responsive\">\n                        <thead>\n                            <tr>\n                                <th>Event</th>\n                                <th>x</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>222, 333, 333OH, Pyraminx, Skewb</td>\n                                <td>1.0 + y</td>\n                            </tr>\n                            <tr>\n                                <td>444, 555, 333bf, Megaminx, Square-1, 333WF, Clock, 333FM</td>\n                                <td>1.2 + y</td>\n                            </tr>\n                            <tr>\n                                <td>666, 777, 444BF, 555BF, 333MBLD</td>\n                                <td>1.4 + y</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <p class=\"text-center\">Here 'y' is (number of competitors in that event)/100. <b>The person with the most points wins the Cup.</b></p>\n                </div>\n            </div>\n        </div>\n        <div id=\"results\" class=\"container tab-pane\">\n            <br>\n           <h2 class=\"text-center card\">Will be updated soon..</h2>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-structure/c3-structure.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-structure/c3-structure.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <h1 class=\"jumbotron text-center\">Team C<sup>3</sup></h1>\n    <div class=\"card\">\n        <div class=\"card-header text-justify\">\n            <h3>\n                The C<sup>3</sup> core team is responsible for leading the organization as a whole, \n                and fulfilling all duties as lead management. The core team comprises of the following members.\n\n           </h3>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Adithyaa Anand</li>\n                    <li class=\"list-group-item\">Daniel James</li>\n                    <li class=\"list-group-item\">Sachin Arvind</li>\n                    <li class=\"list-group-item\">Saravanan Gowthaman</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/competitions/competitions.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/competitions/competitions.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12\">\n                <table class=\"table table-sm table-striped table-hover table-condensed upcoming\">\n                    <thead>\n                        <tr>\n                            <th colspan=\"5\" class=\"text-center\">Upcoming Competitions</th>\n                        </tr>\n                        <tr>\n                            <th></th>\n                            <th>Date</th>\n                            <th>Competition name</th>\n                            <th>Venue details</th>\n                            <th>Location</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let upcoming of upcoming\">\n                        <tr>\n                            <td class=\"table-data\"><i class=\"fas fa-hourglass-start\"></i></td>\n                            <td class=\"table-data\">{{upcoming.date}}</td>\n                            <td class=\"table-data\"><a class=\"text-danger\" target=\"_blank\" [href]=\"upcoming.site\">{{upcoming.name}}</a></td>\n                            <td class=\"table-data\">{{upcoming.venue}}</td>\n                            <td class=\"table-data\">{{upcoming.location}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table class=\"table table-sm table-striped table-hover table-condensed\">\n                    <thead>\n                        <tr>\n                            <th colspan=\"5\" class=\"text-center\">Past Competition Competitions</th>\n                        </tr>\n                        <tr>\n                            <th></th>\n                            <th>Date</th>\n                            <th>Competition name</th>\n                            <th>Venue details</th>\n                            <th>Location</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let past of pastcomp\">\n                        <tr>\n                            <td class=\"table-data\"><i class=\"fa fa-check-circle\"></i></td>\n                            <td class=\"table-data\">{{past.date}}</td>\n                            <td class=\"table-data\"><a class=\"text-danger\" target=\"_blank\" [href]=\"past.site\">{{past.name}}</a></td>\n                            <td class=\"table-data\">{{past.venue}}</td>\n                            <td class=\"table-data\">{{past.location}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                \n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row footer\">\n    <div class=\"col-md-12\">\n        <div class=\"row content\">\n            <div class=\"col-md-6\">\n                    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSd_iHdWF2hMxpxAcO53XRdgPUyXeNe725u8IR7zTz0LRLL_hQ/viewform?embedded=true\" width=\"100%\" class=\"iframe\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"https://www.facebook.com/pages/category/Sports-Club/Chennai-Cubing-Club-234846540543293/\">\n                            <h1 class=\"jumbotron facebook card-1\">Facebook <br><i class=\"fab fa-facebook\"></i></h1>\n                        </a>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"https://www.instagram.com/chennai_cubing_club/\">\n                            <h1 class=\"jumbotron instagram card-1\">Instagram <br><i class=\"fab fa-instagram\"></i></h1>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"mailto:chennaicubingclub@gmail.com\">\n                            <h1 class=\"jumbotron google card-1\">Google / Gmail<br><i class=\"fab fa-google\"></i></h1>\n                        </a>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"https://www.youtube.com/channel/UC2Okr1mK5R4vTeGgsPeG5vA\">\n                            <h1 class=\"jumbotron youtube card-1\">Youtube<br><i class=\"fab fa-youtube\"></i></h1>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"https://forms.gle/v6QDkTrgUnhimGC76\">\n                            <h1 class=\"jumbotron card-1\">Join us as a member</h1>\n                        </a>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <a target=\"_blank\" href=\"http://thabares.github.io\">\n                            <h1 class=\"jumbotron card-1\">Contact Developer</h1>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 col-xs-12 col-lg-6\">\n        <div class=\"card card-1\">\n            <h3 class=\"card-header bg-info text-white\">\n                A C³ Competition\n            </h3>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item list-size text-justify\">\n                        <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/8lpa1yV0mkc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-xs-12 col-lg-6 d-flex align-items-stretch\">\n            <div class=\"card card-1\">\n                <h3 class=\"card-header bg-info text-white\">\n                    Who are we?\n                </h3>\n                <div class=\"card-body\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item text-justify\">\n                            We all have heard of Rubik's Cube. The most famous puzzle invented by Professor Rubik from Hungary. \n                            There is this competitive sport built around this puzzle known as Speedcubing. \n                            A selection of these puzzles are chosen as official events of the WCA (World Cube Association). \n                            WCA approves the regional organizations to organize official competitions. \n                            We are the official regional organization for Tamil Nadu. We are the official Speedcubing club of Tamilnadu.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 col-xs-12 col-lg-6\">\n        <div class=\"card card-1\">\n            <h3 class=\"card-header bg-info text-white\">\n                Why we exist?\n            </h3>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item text-justify\">\n                        We, Chennai Cubing Club, are here to increase the number and quality of competitions by uniting all the \n                        separate organization entities and make our state the best place to attend a Speedcubing competition.\n                        We are here to share everything about this amazing mental sport of  Speedcubing to those of you who are yet to have experienced \n                        what it is like to do something that exercises both the  jock and the nerd sides that you possess!\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-xs-12 col-lg-6\">\n        <div class=\"card card-1\">\n            <h3 class=\"card-header bg-info text-white\">\n                Why should you be a part of us?\n            </h3>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item text-justify\">\n                        This is the place where you can get to know about every competition or workshop that will take place all around TamilNadu.\n                        Also, if you have just discovered about the Speedcubing movement and are exploring ways to understand and learn to solve a Rubik's Cube,\n                        Congratulations; you have reached the right place to start your Speedcubing journey! Just hang on to us, we will take care of the rest.\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-footer\">\n                <a href routerLink=\"/contact\" class=\"btn btn-dark\">Contact Us</a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1 class=\"jumbotron text-center\">Resources</h1>\n    </div>\n</div>\n\n<div class=\"row text-justify\">\n    <div class=\"col-md-3 d-flex align-items-stretch\">\n        <div class=\"card card-1\">\n            <div class=\"card-header bg-primary text-white text-center\">\n                <h3>New competitor Tutorial</h3>\n            </div>\n            <div class=\"card-body\">\n                <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/dPL3eV-A0ww\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card card-1\">\n            <div class=\"card-header bg-primary text-white text-center\">\n                <h3>WCA Regulations</h3>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                        The WCA Regulations contain the full set of Regulations that apply to all \n                        official competitions sanctioned by the World Cube Association.\n                        The WCA Regulations are also supplemented by the <a class=\"text-danger\" target=\"_blank\" href=\"https://www.worldcubeassociation.org/regulations/guidelines.html#\">WCA Guidelines</a>. \n                        The Regulations should be considered a complete document, but the Guidelines contain \n                        additional clarifications and explanations.\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-footer\">\n                <a target=\"_blank\" href=\"https://www.worldcubeassociation.org/regulations/#\" class=\"btn btn-primary\">Reach to Regulations</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 d-flex align-items-stretch\">\n        <div class=\"card card-1\">\n            <div class=\"card-header bg-primary text-white text-center\">\n                <h3>WCA Guidelines</h3>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">The WCA Guidelines supplement the <a class=\"text-danger\" target=\"_blank\" href=\"https://www.worldcubeassociation.org/regulations/#\">WCA Regulations</a>. Please see the Regulations for more information about the WCA.</li>\n                </ul>\n            </div>\n            <div class=\"card-footer\">\n                <a target=\"_blank\" href=\"https://www.worldcubeassociation.org/regulations/guidelines.html#\" class=\"btn btn-primary\">Reach to Guidelines</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3 d-flex align-items-stretch\">\n        <div class=\"card card-1\">\n            <div class=\"card-header bg-primary text-white text-center\">\n                <h3>Download our logo</h3>\n            </div>\n            <div class=\"card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                        You can view and download our logo here : <br>\n                        <a class=\"text-danger\" target=\"_blank\" href=\"https://drive.google.com/file/d/17eEhtlqCgyzBB4eRepc4aBUyfNbierxE/view?usp=sharing\">PNG Version</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sponsorship/sponsorship.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sponsorship/sponsorship.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"alert alert-danger alert-dismissible fade show\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    <strong>We cannot have donations as we aren’t registered in govt. </strong>\n</div>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\">\n<div class=\"row card-1\">\n    <div class=\"col-md-3\">\n        <i class=\"fas fa-hands-helping fa-5x\"><h1>Sponsorship</h1></i>\n    </div>\n    <div class=\"col-md-6\">\n        <p class=\"text-justify\">\n            Speedcubing competition will be a great place with minimum investment and maximum reach for Sponsors. \n            Rubik’s Cubes and Speedcubing are now more popular than ever before. More and more speedcubers are \n            regularly taking part in competitions in and outside their India. Which means that speedcubing is \n            getting more and more attention and is becoming more visible. That makes it increasingly interesting \n            for companies to sponsor competitions and/or participants. This will create great exposure and have \n            a positive influence for your company/organization.\n        </p>\n    </div>\n</div>\n</li>\n<li class=\"list-group-item\">\n<div class=\"row card-1\">\n    <div class=\"col-md-3\">\n        <strong>Who will be present in a speedcubing competition ?</strong>\n    </div>\n    <div class=\"col-md-6\">\n            Right from school going kids to college-goers to young working professionals actively compete. \n            If your business is focused on school/college students or youth, then speedcubing competitions are \n            the best places for you to be at.<br><br> A lot of parents - Doctors, Layers, Business owners, Engineers; \n            Our parents are from all walks of life. They come along with their kids and encourage them to participate. \n            If your business is focused on an older set of people than children and youth, you have got that here as well.<br><br>\n            To sum up, a speedcubing competition is a place with an amazing mixture of people from different walks \n            and stages of life, so, you find your right crowd anyway!\n\n    </div>\n</div>\n</li>\n<br>\n<li class=\"list-group-item\">\n<div class=\"row card-1\">\n    <div class=\"col-md-3\">\n        <strong>Sales position - </strong>\n    </div>\n    <div class=\"col-md-6\">\n            For most competitions, a sales stand is possible. You will get a table in a suited place for yourself. \n            Before the competition, we will inform the participants about your presence via the website and email. \n            If required, we can place a price list and your contact details on the website in advance. \n            The sponsor can distribute brochures and interact with the audience. Even a small space in a vital \n            place can grow a business like anything.\n    </div>\n</div>\n</li>\n<br>\n<li class=\"list-group-item\">\n<div class=\"row card-1\">\n    <div class=\"col-md-3\">\n        <strong>Competition sponsorship - </strong>\n    </div>\n    <div class=\"col-md-6\">\n            You can also choose to sponsor a specific competition. \n            This can be in the form of a financial contribution or prizes for the competition. \n            Or you can even think of a location to host a competition. How would it be if there were 100’s \n            of enthusiastic competitors and an audience in your business place? Epic, wouldn't it be?\n            <br><br>\n    </div>\n</div>\n</li>\n</ul>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_competitions_competitions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/competitions/competitions.component */ "./src/app/components/competitions/competitions.component.ts");
/* harmony import */ var _components_c3_structure_c3_structure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/c3-structure/c3-structure.component */ "./src/app/components/c3-structure/c3-structure.component.ts");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_sponsorship_sponsorship_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sponsorship/sponsorship.component */ "./src/app/components/sponsorship/sponsorship.component.ts");
/* harmony import */ var _components_c3_cup_c3_cup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/c3-cup/c3-cup.component */ "./src/app/components/c3-cup/c3-cup.component.ts");










const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'c3-cup',
        component: _components_c3_cup_c3_cup_component__WEBPACK_IMPORTED_MODULE_9__["C3CupComponent"]
    },
    {
        path: 'competitions',
        component: _components_competitions_competitions_component__WEBPACK_IMPORTED_MODULE_4__["CompetitionsComponent"]
    },
    {
        path: 'team-C3',
        component: _components_c3_structure_c3_structure_component__WEBPACK_IMPORTED_MODULE_5__["C3StructureComponent"]
    },
    {
        path: 'resources',
        component: _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_6__["ResourcesComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'sponsorship',
        component: _components_sponsorship_sponsorship_component__WEBPACK_IMPORTED_MODULE_8__["SponsorshipComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".responsive{\r\n    width: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'C3-V1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_competitions_competitions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/competitions/competitions.component */ "./src/app/components/competitions/competitions.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_c3_structure_c3_structure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/c3-structure/c3-structure.component */ "./src/app/components/c3-structure/c3-structure.component.ts");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resources/resources.component */ "./src/app/components/resources/resources.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_sponsorship_sponsorship_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sponsorship/sponsorship.component */ "./src/app/components/sponsorship/sponsorship.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_c3_cup_c3_cup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/c3-cup/c3-cup.component */ "./src/app/components/c3-cup/c3-cup.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_competitions_competitions_component__WEBPACK_IMPORTED_MODULE_6__["CompetitionsComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_c3_structure_c3_structure_component__WEBPACK_IMPORTED_MODULE_8__["C3StructureComponent"],
            _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_9__["ResourcesComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _components_sponsorship_sponsorship_component__WEBPACK_IMPORTED_MODULE_11__["SponsorshipComponent"],
            _components_c3_cup_c3_cup_component__WEBPACK_IMPORTED_MODULE_13__["C3CupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/c3-cup/c3-cup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/c3-cup/c3-cup.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    padding: 10px;\r\n}\r\ntable th {\r\n    text-align: center; \r\n }\r\n.table {\r\n    margin: auto;\r\n    width: 50% !important; \r\n }\r\np{\r\n     text-align: justify;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jMy1jdXAvYzMtY3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7Q0FDckI7QUFFQTtJQUNHLFlBQVk7SUFDWixxQkFBcUI7Q0FDeEI7QUFDQTtLQUNJLG1CQUFtQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYzMtY3VwL2MzLWN1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbnRhYmxlIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiB9XHJcbiBcclxuIC50YWJsZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7IFxyXG4gfVxyXG4gcHtcclxuICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/c3-cup/c3-cup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/c3-cup/c3-cup.component.ts ***!
  \*******************************************************/
/*! exports provided: C3CupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3CupComponent", function() { return C3CupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_results_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/results.service */ "./src/app/services/results.service.ts");



let C3CupComponent = class C3CupComponent {
    constructor(resultService) {
        this.resultService = resultService;
    }
    ngOnInit() {
        this.results = this.resultService.getResults();
    }
};
C3CupComponent.ctorParameters = () => [
    { type: src_app_services_results_service__WEBPACK_IMPORTED_MODULE_2__["ResultsService"] }
];
C3CupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-c3-cup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c3-cup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-cup/c3-cup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c3-cup.component.css */ "./src/app/components/c3-cup/c3-cup.component.css")).default]
    })
], C3CupComponent);



/***/ }),

/***/ "./src/app/components/c3-structure/c3-structure.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/c3-structure/c3-structure.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYzMtc3RydWN0dXJlL2MzLXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/c3-structure/c3-structure.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/c3-structure/c3-structure.component.ts ***!
  \*******************************************************************/
/*! exports provided: C3StructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3StructureComponent", function() { return C3StructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let C3StructureComponent = class C3StructureComponent {
    constructor() { }
    ngOnInit() {
    }
};
C3StructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-c3-structure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c3-structure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/c3-structure/c3-structure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c3-structure.component.css */ "./src/app/components/c3-structure/c3-structure.component.css")).default]
    })
], C3StructureComponent);



/***/ }),

/***/ "./src/app/components/competitions/competitions.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/competitions/competitions.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wZXRpdGlvbnMvY29tcGV0aXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBldGl0aW9ucy9jb21wZXRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/competitions/competitions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/competitions/competitions.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompetitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsComponent", function() { return CompetitionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_comp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comp.service */ "./src/app/services/comp.service.ts");



let CompetitionsComponent = class CompetitionsComponent {
    constructor(comp) {
        this.comp = comp;
    }
    ngOnInit() {
        this.pastcomp = this.comp.getPostComp();
        this.upcoming = this.comp.getUpcomingComp();
    }
};
CompetitionsComponent.ctorParameters = () => [
    { type: src_app_services_comp_service__WEBPACK_IMPORTED_MODULE_2__["CompService"] }
];
CompetitionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competitions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competitions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/competitions/competitions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./competitions.component.css */ "./src/app/components/competitions/competitions.component.css")).default]
    })
], CompetitionsComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".facebook{\r\n    background-color: darkblue;\r\n    color: white;\r\n}\r\n.jumbotron{\r\n    text-align: center;\r\n    border-radius: 30px;\r\n    font-size: 100%;\r\n}\r\n.instagram{\r\n    background: linear-gradient(to top, #ffd452,#f64f59,#c471ed,#f64f59);\r\n    color: white;\r\n}\r\n.google{\r\n    background: #dd4b39;\r\n    color: white;\r\n}\r\n.youtube{\r\n    background: #bb0000;\r\n    color: white;\r\n}\r\n.footer{\r\n    background: linear-gradient(#232526,#414345);\r\n    color: #fff;\r\n}\r\n.content{\r\n    padding-top: 40px;\r\n}\r\n@media(max-width: 678px){\r\n    .iframe{\r\n        height: 1250px;\r\n    }\r\n}\r\n@media(min-width:679px) and (max-width: 2024px){\r\n    .iframe{\r\n        height: 1050px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9FQUFvRTtJQUNwRSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbi5pbnN0YWdyYW17XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZkNDUyLCNmNjRmNTksI2M0NzFlZCwjZjY0ZjU5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZ29vZ2xle1xyXG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ueW91dHViZXtcclxuICAgIGJhY2tncm91bmQ6ICNiYjAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjMyNTI2LCM0MTQzNDUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjc4cHgpe1xyXG4gICAgLmlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDEyNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo2NzlweCkgYW5kIChtYXgtd2lkdGg6IDIwMjRweCl7XHJcbiAgICAuaWZyYW1le1xyXG4gICAgICAgIGhlaWdodDogMTA1MHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-size{\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qtc2l6ZXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/resources/resources.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/resources/resources.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n    margin-bottom: 2%;\r\n}\r\n.card{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvcmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/resources/resources.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResourcesComponent = class ResourcesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resources/resources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.component.css */ "./src/app/components/resources/resources.component.css")).default]
    })
], ResourcesComponent);



/***/ }),

/***/ "./src/app/components/sponsorship/sponsorship.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/sponsorship/sponsorship.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvbnNvcnNoaXAvc3BvbnNvcnNoaXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/sponsorship/sponsorship.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sponsorship/sponsorship.component.ts ***!
  \*****************************************************************/
/*! exports provided: SponsorshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorshipComponent", function() { return SponsorshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SponsorshipComponent = class SponsorshipComponent {
    constructor() { }
    ngOnInit() {
    }
};
SponsorshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponsorship',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponsorship.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sponsorship/sponsorship.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponsorship.component.css */ "./src/app/components/sponsorship/sponsorship.component.css")).default]
    })
], SponsorshipComponent);



/***/ }),

/***/ "./src/app/services/comp.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/comp.service.ts ***!
  \******************************************/
/*! exports provided: CompService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompService", function() { return CompService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompService = class CompService {
    constructor(http) {
        this.http = http;
        this.upcomingcomp = [
            {
                "date": "Nov 17, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/VSVNCubeOpen2019",
                "name": "VSVN Cube Open 2019",
                "venue": "Vellaichamy Nadar Polytechnic College",
                "location": "Virudunagar, Tamil Nadu, India"
            }
        ];
        this.pastcomp = [
            {
                "date": "Oct 19, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/SRMCubeOpen2019",
                "name": "SRM Cube Open 2019",
                "venue": "SRM University",
                "location": "Kanchipuram, Tamil Nadu, India"
            },
            {
                "date": "Sep 28, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/HLCCubeChallenge2019",
                "name": "HLC Cube Challenge 2019",
                "venue": "HLC International School",
                "location": "Chennai, Tamil Nadu, India"
            },
            {
                "date": "Aug 25, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/ChennaiCubeOpen2019",
                "name": "Chennai Cube Open 2019",
                "venue": "Santhosh & Sabari Institute for IAS Exam",
                "location": "Chennai, Tamil Nadu, India"
            },
            {
                "date": "Jul 27 - 28, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/SSNCubeOpen2019",
                "name": "SSN Cube Open 2019",
                "venue": "SSN College of Engineering",
                "location": "Kanchipuram, Tamil Nadu, India"
            },
            {
                "date": "Jun 9, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/SriRamachandraCubeOpen2019",
                "name": "Sri Ramachandra Cube Open 2019",
                "venue": "Sri Ramachandra College of Pharmacy",
                "location": "Kanchipuram, Tamil Nadu, India"
            },
            {
                "date": "Mar 2 - 3, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/CarteBlancheKubeOpen2019",
                "name": "Carte Blanche Kube Open 2019",
                "venue": "Madras Institute of Technology",
                "location": "Kanchipuram, Tamil Nadu, India"
            },
            {
                "date": "Mar 17, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/PragyanCubeOpen2019",
                "name": "Pragyan Cube Open 2019",
                "venue": "National Institute of Technology",
                "location": "Tiruchirappalli, Tamil Nadu, India"
            },
            {
                "date": "Feb 23 - 24, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/DakshCubeOpen2019",
                "name": "Daksh Cube Open 2019",
                "venue": "Saastra Deemed to be University",
                "location": "Thanjavur, Tamil Nadu, India"
            },
            {
                "date": "Jan 13, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/VDCAWinterOpen2019",
                "name": "VDCA Winter Open 2019",
                "venue": "Hanuman Wedding Hall",
                "location": "Virudunagar, Tamil Nadu, India"
            },
            {
                "date": "Jan 5 - 6, 2019",
                "site": "https://www.worldcubeassociation.org/competitions/ShaastraCubeOpen2019",
                "name": "Shaastra Cube Open 2019",
                "venue": "Community Hall, Indian institute of Technology, Madras",
                "location": "Chennai, Tamil Nadu, India"
            },
            {
                "date": "Dec 1, 2018",
                "site": "https://www.worldcubeassociation.org/competitions/PhoenixC3Open2018",
                "name": "Phoenix C3 Open 2018",
                "venue": "Phoenix Marketcity",
                "location": "Chennai, Tamil Nadu, India"
            }
        ];
    }
    getUpcomingComp() {
        return this.upcomingcomp;
    }
    getPostComp() {
        return this.pastcomp;
    }
};
CompService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompService);



/***/ }),

/***/ "./src/app/services/results.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/results.service.ts ***!
  \*********************************************/
/*! exports provided: ResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsService", function() { return ResultsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ResultsService = class ResultsService {
    constructor(http) {
        this.http = http;
        this.results = [
            {
                "title": "HLC Cube Challenge 2019",
                "result": [
                    {
                        "name": "Mohammed Aiman Koli",
                        "score": "513.99"
                    },
                    {
                        "name": "Pranav Prabhu",
                        "score": "457.05"
                    },
                    {
                        "name": "Saravanan Gowthaman",
                        "score": "456.4"
                    },
                    {
                        "name": "Nitin Nathan",
                        "score": "386.94"
                    },
                    {
                        "name": "Vijay Kishore",
                        "score": "373.16"
                    },
                    {
                        "name": "Sujai Shakthivel",
                        "score": "361.4"
                    },
                    {
                        "name": "Anirudh Sureshram",
                        "score": "319.25"
                    },
                    {
                        "name": "Sripad Sarma Katrapati",
                        "score": "318.39"
                    },
                    {
                        "name": "Vishal Mohanraju",
                        "score": "299.1"
                    },
                    {
                        "name": "Lalith Sashank",
                        "score": "293.8"
                    },
                    {
                        "name": "Anish Rajesh",
                        "score": "260.86"
                    },
                    {
                        "name": "Akash Rupela",
                        "score": "235.32"
                    },
                    {
                        "name": "Sandeep Rajaram",
                        "score": "199.88"
                    },
                    {
                        "name": "Emmanuel Rajapandian",
                        "score": "183.17"
                    },
                    {
                        "name": "Kunaal Parekh",
                        "score": "182.64"
                    },
                    {
                        "name": "Sukesh Kumar",
                        "score": "171.36"
                    },
                    {
                        "name": "Nithin Babu",
                        "score": "170.1"
                    },
                    {
                        "name": "Daniel James",
                        "score": "163.93"
                    },
                    {
                        "name": "Imruthun Meenakshisundaram",
                        "score": "135.18"
                    },
                    {
                        "name": "Bhargav Narasimhan",
                        "score": "132.79"
                    },
                    {
                        "name": "Naren Ramesh",
                        "score": "131.5"
                    },
                    {
                        "name": "Adithyaa Anand",
                        "score": "127.43"
                    },
                    {
                        "name": "Hariharan Sachidanandam",
                        "score": "121.99"
                    },
                    {
                        "name": "Aayush Sriram Bharadwaj",
                        "score": "120.98"
                    },
                    {
                        "name": "Rahul Venkatesan",
                        "score": "113.61"
                    },
                    {
                        "name": "Hari Anirudh",
                        "score": "100.86"
                    },
                    {
                        "name": "Santosh Naranapatty",
                        "score": "88.22"
                    },
                    {
                        "name": "Atharva R. Bhat",
                        "score": "82.11"
                    },
                    {
                        "name": "Naren Loganathan",
                        "score": "81.31"
                    },
                    {
                        "name": "Pritesh Lunkad",
                        "score": "75.01"
                    },
                    {
                        "name": "Vishwanath Jeyaraman",
                        "score": "74.2"
                    },
                    {
                        "name": "Athul Gokuldas",
                        "score": "72.98"
                    },
                    {
                        "name": "Rajha Sirokshan",
                        "score": "69.39"
                    },
                    {
                        "name": "Pamulapati Sai Teja",
                        "score": "67.56"
                    },
                    {
                        "name": "Santhosh Sabarinathan",
                        "score": "63.60"
                    },
                    {
                        "name": "Mohan Balaji",
                        "score": "57.87"
                    },
                    {
                        "name": "Ashwin Ramesh",
                        "score": "55.68"
                    },
                    {
                        "name": "Hemvarshan Muthukumar",
                        "score": "49.21"
                    },
                    {
                        "name": "Hrithik Ramnath",
                        "score": "48.63"
                    },
                    {
                        "name": "Nitheesh Kumar Elangovan",
                        "score": "45.24"
                    },
                    {
                        "name": "Balaji Balamurugan",
                        "score": "43.3"
                    },
                    {
                        "name": "Nithish Raju",
                        "score": "41.54"
                    },
                    {
                        "name": "Lakshimi Rajaram ",
                        "score": "40.26"
                    },
                    {
                        "name": "Vaishnav Nitesh",
                        "score": "39.88"
                    },
                    {
                        "name": "Ameya Anand Kamat",
                        "score": "29.22"
                    },
                    {
                        "name": "Mithilesh Gopalakrishnan",
                        "score": "28"
                    },
                    {
                        "name": "Arvind Tatiparti",
                        "score": "27.4"
                    },
                    {
                        "name": "Rakesh M. Vaideeswaran",
                        "score": "24.94"
                    },
                    {
                        "name": "Khavin Janarthana",
                        "score": "22.47"
                    },
                    {
                        "name": "Ritvik Raj",
                        "score": "22.47"
                    },
                    {
                        "name": "Hari Pranav",
                        "score": "21.06"
                    },
                    {
                        "name": "Akshay Keswani",
                        "score": "20.36"
                    },
                    {
                        "name": "Keshav Sundararaman",
                        "score": "19.95"
                    },
                    {
                        "name": "Daniel Koilpillai",
                        "score": "19.12"
                    },
                    {
                        "name": "Shobhan Karthish",
                        "score": "17.26"
                    },
                    {
                        "name": "Kishore Kumar",
                        "score": "15.5"
                    },
                    {
                        "name": "Adithyaa Hariharan",
                        "score": "13.75"
                    },
                    {
                        "name": "Pradhyun Naresh",
                        "score": "13.66"
                    },
                    {
                        "name": "Jagadish Muthuram",
                        "score": "12.6"
                    },
                    {
                        "name": "Vani Muthukrishnan",
                        "score": "12.34"
                    },
                    {
                        "name": "Ramanathan Venkatachalam",
                        "score": "11.35"
                    },
                    {
                        "name": "Sachin Arvind",
                        "score": "11.18"
                    },
                    {
                        "name": "Thabares Nazeer Basha",
                        "score": "10.22"
                    },
                    {
                        "name": "Akunuri Sri Abilash",
                        "score": "10.21"
                    },
                    {
                        "name": "Sree Vathsan",
                        "score": "10.08"
                    },
                    {
                        "name": "Kailash Anand",
                        "score": "9.76"
                    },
                    {
                        "name": "Sneha Koodalingam",
                        "score": "9.36"
                    },
                    {
                        "name": "Arulkumaran Balaji",
                        "score": "9.36"
                    },
                    {
                        "name": "Harihanth Kumar",
                        "score": "9.04"
                    },
                    {
                        "name": "Mohammed Rushaan",
                        "score": "8.88"
                    },
                    {
                        "name": "Karthikeyan Tamilarasan",
                        "score": "8.34"
                    },
                    {
                        "name": "Pranav R. Mallya",
                        "score": "8.34"
                    },
                    {
                        "name": "Arun Seshadhri",
                        "score": "7.8"
                    },
                    {
                        "name": "Nandha Kumar",
                        "score": "7.74"
                    },
                    {
                        "name": "Sarvesh Suryanarayan",
                        "score": "7.05"
                    },
                    {
                        "name": "Sanjeev Kumar",
                        "score": "6.4"
                    },
                    {
                        "name": "Naganesan Thirunavukarasu",
                        "score": "5.72"
                    },
                    {
                        "name": "Vikram Gopinath",
                        "score": "5.68"
                    },
                    {
                        "name": "Prashanth Swaminathan",
                        "score": "5.40"
                    },
                    {
                        "name": "Arun Krishnan",
                        "score": "5.16"
                    },
                    {
                        "name": "Rithesh Subbulakshmi Saravanakumar",
                        "score": "4.88"
                    },
                    {
                        "name": "Arjun Venkatesh",
                        "score": "3.93"
                    },
                    {
                        "name": "Anirudh Yamunan Govindarajan",
                        "score": "2.44"
                    },
                    {
                        "name": "Lakshana Satish Kumar",
                        "score": "2.34"
                    },
                    {
                        "name": "Nitin Kumar",
                        "score": "1.42"
                    },
                    {
                        "name": "Kshitij Dhara",
                        "score": "1.38"
                    },
                    {
                        "name": "Logesh Santhosh",
                        "score": "1.22"
                    },
                    {
                        "name": "Dharshana Satish Kumar",
                        "score": "1.17"
                    }
                ]
            }
        ];
    }
    getResults() {
        return this.results;
    }
};
ResultsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResultsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ResultsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thaba\Desktop\C3 Website V1\23 sep\C3-V1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map