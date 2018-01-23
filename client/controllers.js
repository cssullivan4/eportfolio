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
        // if ($(window).width() < 960) {
        //     alert('Current site build is not fully supportive of mobile views. Please view from a larger screen for best experience.');
        //  }
        //  else {
        //     console.log('Your screen size is preferred for site build currently.');
        //  }
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
    $scope.currentPath = $location.path();
    $scope.reload = function () {
        location.reload();
        console.log("I'm here, and I'm working.");
    }
        $('.dropdown-toggle').dropdown();
        console.log("My album, 'My Album is Dropping' is dropping.");
})
.controller('ScrollCtrl', function($scope) {
    $(function scrollTo() {
        $('a[href*=\\#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
      });
      console.log("Test scroll");
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
.controller('PageBack', ['$scope', '$window', function ($scope,  $window) {
    console.log("I am here to navigate back to portfolio.");
    $(window).scroll(function() {
        if ($(document).scrollTop() > 75) {
            // $('#btn').removeClass('btn-there');
            // $('#btn').addClass('btn-here');
            $('#btn-back').show();
        } else {
            $('#btn-back').hide();
            // $('#btn').removeClass('btn-here');
            // $('#btn').addClass('btn-there');
            // animate fade in later
        }
    })
}])
.controller('NavShrink', function($scope, $window) {
    console.log("Do you see the shrinking?")
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('.navbar').addClass('shrink');
          $('.opener').addClass('shrink-p');
          $('.dropbtn').addClass('shrink-btn');
          $('.opener-b').addClass('opener-b-shrink');
          $('.brand-logo').addClass('shrink-img');
        } else {
          $('.navbar').removeClass('shrink');
          $('.opener').removeClass('shrink-p');
          $('.dropbtn').removeClass('shrink-btn');
          $('.opener-b').removeClass('opener-b-shrink');
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
    .controller('NavMenu', ['$scope', '$compile', function($scope, $compile) {
        console.log('Nav is a go, captian.');
        $scope.nav = 'views/nav/nav-welcome.html';
        $scope.print = 'views/nav/nav-print.html';
        $scope.web = 'views/nav/nav-web.html';
        $scope.stu = 'views/nav/nav-stu.html';
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

  .controller('DevPopulation',function($scope){
    $scope.images  = [
        "/images/projects/smw-app/pg-1.png",
        "/images/projects/smw-app/pg-2.png",
        "/images/projects/smw-app/pg-3.png",
        "/images/projects/smw-app/pg-4.png"
    ];
    $scope.projects = [
        {
            'id': 1,
            'caption': 'Splash introduction',
            'image': '/images/projects/smw-app/pg-1.png'
        },
        {
            'id': 2,
            'caption': 'Services',
            'image': '/images/projects/smw-app/pg-2.png'
        },
        {
            'id': 3,
            'caption': 'Splash resume',
            'image': '/images/projects/smw-app/pg-3.png'
        },
        {
            'id': 4,
            'caption': 'Resume item: Virginia Coordinated Campaign',
            'image': '/images/projects/smw-app/pg-3-a.png'
        },
        {
            'id': 5,
            'caption': 'Resume item: Megan Barry for Mayor',
            'image': '/images/projects/smw-app/pg-3-b.png'
        },
        {
            'id': 6,
            'caption': 'Resume item: Arkansas Coordinated Campaign',
            'image': '/images/projects/smw-app/pg-3-c.png'
        },
        {
            'id': 7,
            'caption': 'Contact',
            'image': '/images/projects/smw-app/pg-4.png'
        }
    ];
})
.controller('TilePopulation', function($scope) {
    $scope.aspirations = [
        {
            'id': 1,
            'title': 'Spoken',
            'date': '2017-2018',
            'anchor': '#spoken',
            'image': '/images/se-grid/spoken.png'
        },
        {
            'id': 2,
            'title': "She's the First",
            'date': "2012-2017",
            'anchor': '#STF',
            'image': '/images/se-grid/stf-bw.svg'
        },
        {
            'id': 3,
            'title': 'Center for Civic Engagement',
            'date': '2012-2017',
            'anchor': '#CCE',
            'image': '/images/se-grid/ymca-cce-bw.svg'
        },
        {
            'id': 4,
            'title': 'Creative Discovery Museum',
            'date': '2014-2017',
            'anchor': '#CDM',
            'image': '/images/se-grid/cdm-bw.svg'
        },
        {
            'id': 5,
            'title': 'ArtsBuild',
            'date': '2015-2016',
            'anchor': '#ArtsBuild',
            'image': '/images/se-grid/artsbuild-bw.svg'
        },
        {
            'id': 6,
            'title': 'Cultural Attractions Committee',
            'date': '2011-2013',
            'anchor': '#CAC',
            'image': '/images/se-grid/utk-cac-bw.svg'
        },
        {
            'id': 7,
            'title': 'Haiti Outreach Program of Knoxville',
            'date': '2011-2013',
            'anchor': '#HOPOK',
            'image': '/images/se-grid/hopok-bw.svg'
        },
        {
            'id': 8,
            'title': 'Chattanooga Theatre Centre',
            'date': '2008-2015',
            'anchor': '#CTC',
            'image': '/images/se-grid/cha-theatre-centre-bw.svg'
        },
        {
            'id': 9,
            'title': 'McKamey Animal Center',
            'date': '2011, 2017',
            'anchor': '#MAS',
            'image': '/images/se-grid/mckamey-bw.svg'
        }
    ]
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
//         title :'Contact Me',
//         image: 'http://' + $location.host() + '/images/contact-icon-b.svg',
//         url: $location.url(),
//         description: 'Please contact me if you would like to talk, conect, or discuss working together.'
// });

}]);