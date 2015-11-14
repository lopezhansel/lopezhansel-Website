var app = angular.module('lopezHansel',['ngAnimate', 'ngMaterial', 'ngRoute']); 

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'mainController as main',
      templateUrl: 'views/homeView.html'
    })
    .when('/resume', {
      controller: 'mainController as main',
      templateUrl: 'views/resumeView.html'
    })
    .when('/portfolio', {
      controller: 'mainController',
      templateUrl: 'views/portfolioView.html'
    })
    .when('/social', {
      controller: 'mainController',
      templateUrl: 'views/socialView.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});


//http://mcg.mbitson.com/#/
//http://angular-md-color.com/#/
https://color.adobe.com/create/color-wheel/?base=2&rule=Monochromatic&selected=4&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.2232735100206971,0.3578887519836131,0.45294117647058824,0.012651562479450724,0.15349265268859452,0.2529411764705882,0.07539105533166396,0.1208455526178434,0.15294117647058825,0.11989978676257283,0.31510552883420156,0.45294117647058824,0.3711559647097302,0.5949319513493828,0.7529411764705882&swatchOrder=0,1,2,3,4

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('darkBlue', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': '002540', // primary
    '600': '002540',// accent
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    
                                        
    'contrastDarkColors': ['50', '100', 
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('darkBlue');
  });

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('lightBlue', {
    '50': 'ffebee',
    '100': 'ffffff',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': '002540', 
    '600': 'e53935', 
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': '5F96C0', // Secondary
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    
                                        
    'contrastDarkColors': ['50', '100', 
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    
  });
  $mdThemingProvider.theme('default')
    .accentPalette('lightBlue');
});
