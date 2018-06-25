angular.module('myApp', ['myApp.controllers', /*'myApp.services',*/ /*'myApp.directives',*/ 'ngRoute', /*'ngResource'*/ /*, 'ui.bootstrap', 'ngAnimate', 'ngTouch'*/])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); //rids of hash-bang routing
    $routeProvider
        .when('/', {
            templateUrl: 'views/portal.html',
            controller: 'PagesCtrl'
        })
        .when('/welcomes_you', {
            templateUrl: 'views/welcome.html',
            controller: 'PagesCtrl'
        })
        .when('/a_social_entrepreneur', {
            templateUrl: 'views/entrepreneur.html',
            controller: 'PagesCtrl',
            controllerAs: 'label'
        })
        .when('/a_scientist', {
            templateUrl: 'views/scientist.html',
            controller: 'PagesCtrl'
        })
        .when('/a_politi', {
            templateUrl: 'views/politi.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer', {
            templateUrl: 'views/designer.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer', {
            templateUrl: 'views/developer.html',
            controller: 'PagesCtrl'
        })
        .when('/reaching_out', {
            templateUrl: 'views/contact.html',
            controller: 'PagesCtrl'
        })
        // -------------------------------------------------
        //               DEVELOPER SECTION
        // -------------------------------------------------
        .when('/a_developer/presenting_project/mckamey_volunteer_portal', {
            templateUrl: 'views/portfolio/projects/proj-mvp.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/covalence_store', {
            templateUrl: 'views/portfolio/projects/proj-cov-store.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_work/Sean_Wright', {
            templateUrl: 'views/portfolio/projects/proj-sean.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_work/ePortfolio', {
            templateUrl: 'views/portfolio/projects/eport.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/student_work', {
            templateUrl: 'views/portfolio/projects/proj-stu.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/student_work/type', {
            templateUrl: 'views/portfolio/projects/proj-stu-type.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/student_work/shape', {
            templateUrl: 'views/portfolio/projects/proj-stu-shape.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/student_work/dice', {
            templateUrl: 'views/portfolio/projects/proj-stu-dice.html',
            controller: 'PagesCtrl'
        })
        .when('/a_developer/presenting_project/student_work/chirper', {
            templateUrl: 'views/portfolio/projects/proj-stu-chirp.html',
            controller: 'PagesCtrl'
        })
        // -------------------------------------------------
        //                DESIGNER SECTION
        // -------------------------------------------------
        .when('/a_designer/showing/branding', {
            templateUrl: 'views/portfolio/brand.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/makerism', {
            templateUrl: 'views/portfolio/maker.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print', {
            templateUrl: 'views/portfolio/print.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/book_series', {
            templateUrl: 'views/portfolio/print/book.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/emoji_series', {
            templateUrl: 'views/portfolio/print/emoji.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/woodland_series', {
            templateUrl: 'views/portfolio/print/forest.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/sphere_trio_series', {
            templateUrl: 'views/portfolio/print/trio.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/instrument_series', {
            templateUrl: 'views/portfolio/print/instrument.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/relief', {
            templateUrl: 'views/portfolio/relief.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/animals', {
            templateUrl: 'views/portfolio/relief/groundhog.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/portrait', {
            templateUrl: 'views/portfolio/print/portrait.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/print/watercolor', {
            templateUrl: 'views/portfolio/print/watercolor.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web', {
            templateUrl: 'views/portfolio/web.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/tablet_doodles', {
            templateUrl: 'views/portfolio/web/doodles.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/icons_from_csamandme', {
            templateUrl: 'views/portfolio/web/csam-icons.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/mmorpg/country', {
            templateUrl: 'views/portfolio/web/game-country.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/mmorpg/ocean', {
            templateUrl: 'views/portfolio/web/game-ocean.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/mmorpg/misc', {
            templateUrl: 'views/portfolio/web/game-misc.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/mmorpg/characters', {
            templateUrl: 'views/portfolio/web/game-characters.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/mmorpg/alpha', {
            templateUrl: 'views/portfolio/web/game-alpha.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/portfolio', {
            templateUrl: 'views/portfolio/web/portfolio.html',
            controller: 'PagesCtrl'
        })
        .when('/a_designer/showing/web/misc_designs', {
            templateUrl: 'views/portfolio/web/designs.html',
            controller: 'PagesCtrl'
        })
        // -------------------------------------------------
        //                  WORK (DEV) SECTION
        // -------------------------------------------------
        .when('/welcomes_you_to_work', {
            templateUrl: 'views/work/welcome.html',
            controller: 'PagesCtrl'
        })
        .when('/a_design_selection', {
            templateUrl: 'views/work/design.html',
            controller: 'PagesCtrl'
        })
        .when('/a_development_selection', {
            templateUrl: 'views/work/dev.html',
            controller: 'PagesCtrl'
        })
        .when('/resume_at_scroll', {
            templateUrl: 'views/work/cards.html',
            controller: 'PagesCtrl'
        })
        // -------------------------------------------------
        //                  WORK (COPYWRITE) SECTION
        // -------------------------------------------------
        .when('/hire_him_vaynermedia', {
            templateUrl: 'views/copy/welcome.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_collegiate_examples', {
            templateUrl: 'views/copy/collegiate.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_collegiate_examples/STF_UTK', {
            templateUrl: 'views/copy/collegiate/stf_utk.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_collegiate_examples/give_haiti_hope', {
            templateUrl: 'views/copy/collegiate/ghh.html',
            controller: 'PagesCtrl',
        })
        .when('/here_are_collegiate_examples/TN_council', {
            templateUrl: 'views/copy/collegiate/tncouncil.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_collegiate_examples', {
            templateUrl: 'views/copy/collegiate/IDOG.html',
            controller: 'PagesCtrl',
        })
        .when('/here_are_sorted_examples', {
            templateUrl: 'views/copy/sorted.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_sorted_examples/melody_shekari_for_congress', {
            templateUrl: 'views/copy/sorted/melody.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/hakeem_for_house', {
            templateUrl: 'views/copy/sorted/hakeem.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/katie_king_law', {
            templateUrl: 'views/copy/sorted/katie.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/writing_on_the_wall', {
            templateUrl: 'views/copy/sorted/writing.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/stfaa', {
            templateUrl: 'views/copy/sorted/stfaa.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/hire_sean_wright', {
            templateUrl: 'views/copy/sorted/sean.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/spotme', {
            templateUrl: 'views/copy/sorted/spotme.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/mayors_council_for_women', {
            templateUrl: 'views/copy/sorted/mcw.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/artsbuild', {
            templateUrl: 'views/copy/sorted/artsbuild.html',
            controller: 'PagesCtrl'
        })
        .when('here_are_sorted_examples/velo', {
            templateUrl: 'views/copy/sorted/velo.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works', {
            templateUrl: 'views/copy/projects.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/localize_it', {
            templateUrl: 'views/copy/projects/localize.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/chatt_tv', {
            templateUrl: 'views/copy/projects/chatttv.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/tn_woodworks', {
            templateUrl: 'views/copy/projects/tnwoodworks.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/mckamey_volunteer_portal', {
            templateUrl: 'views/copy/projects/mvp.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/c_grimey', {
            templateUrl: 'views/copy/projects/cgrimey.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/cool_food_story', {
            templateUrl: 'views/copy/projects/coolfoodstory.html',
            controller: 'PagesCtrl'
        })
        .when('/here_are_projects_in_the_works/bessie_smith_cultural_center', {
            templateUrl: 'views/copy/projects/bessie.html',
            controller: 'PagesCtrl'
        })
        .otherwise('/404', {
            redirectTo: '404.html',
            controller: 'PagesCtrl'
        });
}]);
