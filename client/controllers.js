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
//     .directive('scrollNav', function ($window) {
//   return function($scope, $element, $attrs) {
//     angular.element($window).bind("scroll", function() {
//       if (this.pageYOffset >= 50) {
//         scope.scrollDown = true;
//       } else {
//         scope.scrollDown = false;
//       }
//       scope.$apply();
//     });
//   };
// })
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
})
// .controller('RiseUp', function($window) {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//             $('#btmbtn').fadeIn(200);    // Fade in the arrow
//         } else {
//             $('#btmbtn').fadeOut(200);   // Else fade out the arrow
//         }
//     });
    // $('#btmbtn').click(function() {      // When arrow is clicked
    //     $('body,html').animate({
    //         scrollTop : 0                       // Scroll to top of body
    //     }, 500);
    // })
    // window.onscroll = function() {scrollFunction()};
    
    // function scrollFunction() {
    //     $scope.scroll(function () {
    //         if ($(this).scrollTop() > 100) {
    //             $('#btmbtn').fadeIn();
    //         } else {
    //             $('#btmbtn').fadeOut();
    //         }
    //     });
    //     // $('#btmbtn').click(function () {
        //     $("html, body").animate({ scrollTop: 0 }, 1000);
        //     return false;
// })
.controller('Popover', function ($scope, $sce) {
    // $scope.dynamicPopover = {
    //   content: 'Hello, World!',
    //   templateUrl: 'myPopoverTemplate.html',
    //   title: 'Title'
    // };
  
    $scope.placement = 'right';
    // {
    //   options: [
    //     'top',
    //     'top-left',
    //     'top-right',
    //     'bottom',
    //     'bottom-left',
    //     'bottom-right',
    //     'left',
    //     'left-top',
    //     'left-bottom',
    //     'right',
    //     'right-top',
    //     'right-bottom'
    //   ],
    //   selected: 'right'
    // };
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
            // captionText.append(attr("alt"));
        })
    })
    //   jquery translate & maybe bind or add this
        // Get the modal
    // var modal = document.getElementById('myModal');
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById('myImg');
    // var modalImg = document.getElementsByClassName("modalify");
    // var captionText = document.getElementById("caption");
    // img.onclick = function(){
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }
    
    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() { 
    //   modal.style.display = "none";
    // }
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
  });