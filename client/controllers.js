angular.module('myApp.controllers', [])
    .controller('PagesCtrl', function ($scope, $window) {
        console.log('Page controller reporting for duty');
        // $window.location.reload();
        // function to set the height on fly
        function autoHeight() {
            $('#content').css('min-height', 0);
            $('#content').css('min-height', (
                $(document).height()
                - $('#header').height()
                - $('#footer').height()
            ));
        }
        if ($(window).width() < 960) {
            alert('Current site build is not fully supportive of mobile views. Please view from a larger screen for best experience.');
         }
         else {
            console.log('Your screen size is preferred for site build currently.');
         }
        // onDocumentReady function bind
        $(document).ready(function () {
            autoHeight();
        });

        // onResize bind of the function
        $(window).resize(function () {
            autoHeight();
        });
        // window.onload = function() {
        //     if(!window.location.hash) {
        //         window.location = window.location + '#loaded';
        //         window.location.reload();
        //     }
        // }

    })
    // .controller('MobileAlert', function($scope, $window) {
    //     if ($(window).width() < 960) {
    //         alert('Current site build is not fully supportive of mobile views. Recommend viewing on larger screen.');
    //      }
    //      else {
    //         console.log('Your screen size is preferred for site build currently.');
    //      }
    // })
    .controller('HeaderCtrl', function ($scope, $window, $location) {
        console.log("I'm here, and I'm working.")
        // $window.onload = pageSet();

        // pageSet = function () {
        //     $scope.currentPath = $location.path();
        // }
        $scope.currentPath = $location.path();
        // $(document).ready(function () {
        //     $location.reload();
        // })
        

        // window.history.back()
        // window.location.reload();
        $scope.reload = function () {
            location.reload();
        }
            // var viewId = $routeParams.id;
            
            // if(!viewId){
            //   $window.msg = '/Welcome!';
            // } else {
            //   $window.msg = '/' + viewId;
            // }
        //         $scope.reloadRoute = function() {
        //    $window.location.reload();
        // }
        // $window.location.reload();
        // $scope.myBoolean = false;

        // $scope.toggle = function() { $scope.myBoolean = !$scope.myBoolean; };

        // $scope.checkToggle = function(){
        // // replace "myBoolean" with the logic that checks the path
        //     return $scope.myBoolean;
        //   };
    })

.controller('PageUp', ['$scope', '$window', function ($scope,  $window) {
    console.log($window);
    $(window).scroll(function() {
        if ($(document).scrollTop() > 75) {
            // $('#btn').removeClass('btn-there');
            // $('#btn').addClass('btn-here');
            $('#btn').show();
        } else {
            $('#btn').hide();
            // $('#btn').removeClass('btn-here');
            // $('#btn').addClass('btn-there');
            // animate fade in later
        }
    });
    $scope.scroll = function () {
      $window.scrollTo(0, angular.element(document.getElementById('btn')).offsetTop);  
      $window.scrollTo(0, 0);  
    };
}])
.controller('NavShrink', function($window) {
    console.log("Do you see the shrinking?")
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('.navbar').addClass('shrink');
          $('.opener').addClass('shrink-p');
          $('.brand-logo').addClass('shrink-img');
        } else {
          $('.navbar').removeClass('shrink');
          $('.opener').removeClass('shrink-p');
          $('.brand-logo').removeClass('shrink-img');
        }
      });
    $scope.placement = 'right';
  })
  .controller('Modal', function($scope) {
    // $(document).ready(function () {
    //     $('img').on('click', function () {
    //         var image = $(this).attr('src');
    //         //alert(image);
    //         $('#myModal').on('show.bs.modal', function () {
    //             $(".showimage").attr("src", image);
    //         });
    //     });
    $(document).ready(function() {
        $('img').on('click', function() {
            $("#showImg").empty();
            $("#caption").empty();
            var image = $(this).attr("src");
            $("#showImg").append("<img class='img-responsive' src='" + image + "' />")
            var alt = $(this).attr("alt");
            $("#caption").append(alt);
        })
    })
  })
  .controller('DesignMenu', ['$scope', '$compile', function($scope, $compile) {
      console.log('Design Menu reporting for duty.');
      $scope.print = 'views/portfolio/nav-print.html';
    $scope.web = 'views/portfolio/nav-web.html';
    // $scope.templates =
    //   [{ name: 'nav-print.html', url: 'views/portfolio/nav-print.html'},
    //    { name: 'nav-web.html', url: 'views/portfolio/nav-web.html'}];
    //    $scope.template = $scope.templates[0];
  }])
  .controller('GalleryCtrl', function($scope){
    $(document).ready(function(){
        $('.gallery').featherlightGallery();
    });
    $.featherlightGallery.prototype.afterContent = function() {
        var caption = this.$currentTarget.find('img').attr('alt');
        this.$instance.find('.caption').remove();
        $('<div class="caption" style="margin-bottom: 10px">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
      }
      $('a.gallery').featherlightGallery({
		previousIcon: '&#9664;',     /* Code that is used as previous icon */
		nextIcon: '&#9654;',         /* Code that is used as next icon */
		galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
		galleryFadeOut: 100          /* fadeOut speed before slide is loaded */
    });
  })
.controller('ContactCtrl', ['$scope', /*'SEOService',*/ '$location', function($scope, /*$SEOService,*/ $location) {
    console.log("I'm here");
    var myform = $("form#myform");
    myform.submit(function(event){
        event.preventDefault();
    
      // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "template_cPjrhCwn";
    
      myform.find("button").text("Sending...");
      emailjs.sendForm(service_id,template_id,"myform")
          .then(function(){ 
            alert("Sent!");
            console.log("I'm working");
           myform.find("button").text("Send");
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
           console.log("I'm not working");
        });
      return false;
      console.log("I'm not sure");
    });
//     SEOService.setSEO({
//         title: 'Contact Me',
//         image: 'http://' + $location.host() + '/images/contact-icon-b.svg',
//         url: $location.url(),
//         description: 'Please contact me if you would like to talk, conect, or discuss working together.'
// });
}]);