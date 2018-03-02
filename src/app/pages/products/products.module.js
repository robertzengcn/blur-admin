/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.products', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('products', {
          url: '/products',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'ProductsCtrl',
          title: 'Products',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1,
          },
        }).state('products.list', {
          url: '/list',
          templateUrl: 'app/pages/products/smart/tables.html',
          title: 'List',
          sidebarMeta: {
            order: 100,
          },
        });
         $urlRouterProvider.when('/products','/products/list');
  }

})();