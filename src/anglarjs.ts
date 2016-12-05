import * as angular from "angular";
import { downgradeComponent } from "@angular/upgrade/static";

import { HomeComponent } from "./app/home/home.component";
import { AppComponent } from "./app/app.component";
import { GridComponent } from "./app/ng1/grid.component";

export const ng1Component: angular.IComponentOptions = {
  bindings: {
    data: '<'
  },
  transclude: true,
  controller: ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {

    const ctrl = this;

    var today = new Date();
    var nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
      if (col.filters[0].term) {
        return 'header-filtered';
      } else {
        return '';
      }
    };

    $scope.gridOptions = {
      enableFiltering: true,
      showGridFooter: true,
      showColumnFooter: true,
      onRegisterApi: function (gridApi) {
        $scope.gridApi = gridApi;
      },
      columnDefs: [
        // default
        { field: 'name', headerCellClass: $scope.highlightFilteredHeader },
        // pre-populated search field
        {
          field: 'gender',
          headerCellClass: $scope.highlightFilteredHeader
        },
        // no filter input
        {
          field: 'company', enableFiltering: false
        },
        // specifies one of the built-in conditions
        // and a placeholder for the input
        {
          field: 'email',
          filter: {
            condition: uiGridConstants.filter.ENDS_WITH,
            placeholder: 'ends with'
          }, headerCellClass: $scope.highlightFilteredHeader
        },
        // custom condition function
        {
          field: 'phone',
          filter: {
            condition: function (searchTerm, cellValue) {
              var strippedValue = (cellValue + '').replace(/[^\d]/g, '');
              return strippedValue.indexOf(searchTerm) >= 0;
            }
          }, headerCellClass: $scope.highlightFilteredHeader
        },
        // multiple filters
        {
          field: 'age', filters: [
          {
            condition: uiGridConstants.filter.GREATER_THAN,
            placeholder: 'greater than'
          },
          {
            condition: uiGridConstants.filter.LESS_THAN,
            placeholder: 'less than'
          }
        ], headerCellClass: $scope.highlightFilteredHeader
        }
      ]
    };

    $scope.toggleFiltering = function () {
      $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
      $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
    };

    this.$onInit = function() {
      $scope.gridOptions.data = ctrl.data;
    }

  }],
  template: 'Hello, Angular from angular 1! <div ui-grid="gridOptions" ui-grid-grouping ui-grid-edit ui-grid-selection class="grid" style="width:100%;"></div>'
};

export const ng1Module = angular.module('ng1Module', ['ui.grid', 'ui.grid.grouping', 'ui.grid.edit', 'ui.grid.selection'])
  .component('ui-grid', ng1Component)
  .directive('appGrid', downgradeComponent({ component: GridComponent }));
