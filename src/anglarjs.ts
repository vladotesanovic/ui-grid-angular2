import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app/app.component';

export function initAngularjs() {

  const ng1Component: angular.IComponentOptions = {
    bindings: {
      data: '<',
      onUpdate: '&'
    },
    transclude: true,
    controller: ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {

      const ctrl = this;

      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);

      $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
          return 'header-filtered';
        } else {
          return '';
        }
      };

      $scope.msg = {};

      $scope.gridOptions = {
        enableFiltering: true,
        showGridFooter: true,
        showColumnFooter: true,
        enableSorting: true,
        enableColumnResizing: true,
        treeRowHeaderAlwaysVisible: true,
        enableGridMenu: true,
        onRegisterApi: function (gridApi) {

          $scope.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope, (rowEntity, colDef, newValue, oldValue) => {
            $scope.msg.lastCellEdited = `edited row id: ${rowEntity.id} Column: ${colDef.name} newValue: ${newValue} oldValue: ${oldValue}`;
            ctrl.onUpdate({
              'rowId': rowEntity.id,
              'column': colDef.name,
              'new': newValue,
              'old': oldValue
            });
            $scope.$apply();
          });
        }
      };

      $scope.toggleFiltering = function () {
        $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      };

      function makeColDefs(row) {
        const colDefs = [];
        let exist = [];

        for (let i = 0; i < row.length; i++) {

          for (const colName in row[i]) {

            if (exist.indexOf(colName) === -1) {

              colDefs.push({
                'field': colName,
                'width': 200
              });
              exist.push(colName);
            }
          }
        }
        exist = undefined;
        return colDefs;
      }

      this.$onChanges = function(obj: { data: { currentValue: Array<{}>}}) {

        if (obj.data.currentValue && obj.data.currentValue.length) {
          const colDefs = makeColDefs(obj.data.currentValue);
          $scope.gridOptions.data = obj.data.currentValue;
          $scope.gridOptions.columnDefs = colDefs;
        }

      };

      this.$onInit = function() {}

    }],
    template: 'Hello, Angular 2 from angular 1! <div ui-grid="gridOptions" ui-grid-grouping ui-grid-edit ui-grid-selection class="grid" style="width:100%;"></div> {{msg.lastCellEdited}}'
  };

  const ng1Component2: angular.IComponentOptions = {
    bindings: {
      data: '<'
    },
    transclude: true,
    controller: ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {

      const ctrl = this;

      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);

      $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
          return 'header-filtered';
        } else {
          return '';
        }
      };

      $scope.gridOptions = {
        showGridFooter: true,
        showColumnFooter: true,
        enableFiltering: true,
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
        }
      };

      $scope.toggleFiltering = function () {
        $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      };

      function makeColDefs(row) {
        const colDefs = [];
        let exist = [];

        for (let i = 0; i < row.length; i++) {

          for (const colName in row[i]) {

            if (exist.indexOf(colName) === -1) {

              colDefs.push({
                'field': colName,
                'width': 200
              });
              exist.push(colName);
            }
          }
        }
        exist = undefined;
        return colDefs;
      }

      this.$onChanges = function(obj: { data: { currentValue: Array<{}>}}) {

        if (obj.data.currentValue.length) {

          const colDefs = makeColDefs(obj.data.currentValue);
          $scope.gridOptions.data = obj.data.currentValue;
          $scope.gridOptions.columnDefs = colDefs;
        }

      };

      this.$onInit = function() {}

    }],
    template: 'Hello, Angular 2 from angular 1! <div ui-grid="gridOptions" ui-grid-grouping ui-grid-edit ui-grid-selection class="grid" style="width:100%;"></div>'
  };

  return angular.module('ng1Module', ['ui.grid', 'ui.grid.grouping', 'ui.grid.edit', 'ui.grid.selection'])
    .component('ui-grid', ng1Component)
    .component('ng1',  ng1Component2)
    .directive('appRoot', downgradeComponent({ component: AppComponent }));
}
