import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppConfiguration, Languages } from '../app.configuration';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() data: any;
  @Input() filters: any[];
  @Input() searchType: string;
  @Input() searchTerm: string;

  @ViewChild('scroll', {static: true}) vScroller: ElementRef;

  public customerFilterSearchCtrl: FormControl = new FormControl();

  public customerFilterSearchCtrlSub: Subscription;

  public displayFilters = {
      'company': [],
      'location': [],
      'model': [],
      'revolutionVersion': [],
      'iotVersionNumber': [],
      'storeName': []
  };

  public Languages = Languages;

  // public permission = AppConfiguration.permission;

  public AppConfiguration = AppConfiguration;

  public searchterm = '';

  public machineId: string;

  public isAddressAvailable = false;
  /**
   * possibleFilterProperties will be used as a catcher
   * for the possible filter properties worth showing
   */
  public possibleFilterProperties: any = {
      'availability': [], // each array will contain the string to filter for
      'alertStatusWithoutDetails': [],
      'company': [],
      'location': [],
      'model': [],
      'revolutionVersion': [],
      'iotVersionNumber': [],
      'storeName': []
  };

  /**
   * contains all selected filters
   */
  public appliedFilters: any[] = [
      {
          name: 'availability',
          values: []
      },
      {
          name: 'alertStatusWithoutDetails',
          values: []
      },
      {
          name: 'company',
          values: []
      },
      {
          name: 'location',
          values: []
      },
      {

          name: 'model',
          values: []
      },
      {
          name: 'revolutionVersion',
          values: []
      },
      {
          name: 'iotVersionNumber',
          values: []
      },
      {
          name: 'storeName',
          values: []
      }
  ];

  selectedFilterValues = {
      'company': [],
      'location': [],
      'model': [],
      'revolutionVersion': [],
      'iotVersionNumber': [],
      'storeName': []
  };

  /**
   * abbreviation mapping for mobile view
   */
  public alertStatusAbbreviationMapping: any = {
      'Needs Attention': 'NA',
      'Problem Detected': 'PD',
      'Degrade': 'D',
      'Problem Notified': 'PN',
      'Not Connected': 'NC',
      'Good (odometer needs service)': 'G (NS)',
      'Good': 'G'
  };

  public sortModel = {
      'serialNo': 'asc',
      'revolutionVersion': 'asc',
      'iotVersionNumber': 'asc',
      'company': 'asc',
      'location': 'asc',
      'position': 'asc',
      'storeName': 'asc'
  };

  public unitData: any = {
      units: [],
      totalDocuments: null,
      offset: null
  };

  // public alertsToColorMapping: any = this.revolutionAlertsService.alertsToColorMapping;

  // public connectionStatusColorMapping: any = this.revolutionAlertsService.connectionStatusColorMapping;

  public baSortAscending = true;  // will leave this property to true, and will change when toggled

  public isSelectAll = false;

  public resultsSubscription: Subscription;

  public selectedRevolutions = [];

  public displayData: any[] = [];

  // public toLower = toLower;

  public selectedAvailability = [];

  public selectedAlertstatus = [];

  public selectedIotVersion = [];

  public revolutionsToDeploy = [];

  public isAdmin: boolean;

  public displayDataUpdated: boolean;

  public originUrl: string;

  public isNavigate = true;

  public isSuperAdmin: boolean;

  private filterSearches = {
      'company': {
          ctrl: new FormControl(),
          subscription: null
      },
      'location': {
          ctrl: new FormControl(),
          subscription: null
      },
      'model': {
          ctrl: new FormControl(),
          subscription: null
      },
      'revolutionVersion': {
          ctrl: new FormControl(),
          subscription: null
      },
      'iotVersionNumber': {
          ctrl: new FormControl(),
          subscription: null
      },
      'storeName': {
          ctrl: new FormControl(),
          subscription: null
      }
  };

  constructor(
      private router: Router,
     // private revolutionAlertsService: RevolutionAlertsService,
      public dialog: MatDialog,
      // public searchBarService: SearchBarService,
      public route: ActivatedRoute,
      // public listOperationsService: ListOperationsService,
      // public clientService: ClientService,
     // public fileUtilsService: FileUtilsService,
  //    public searchResultListService: SearchResultListService,
    //  public dialogUtilService: DialogUtilService,
     // private sessionStorageService: SessionStorageService,
  ) { }

  ngOnInit() {
      // this.dataSource.sort = this.sort;
      // this.originUrl = this.sessionStorageService.getItem('searchOrigin');
      if (this.originUrl === '/home/exec-dashboard/search-results') {
          this.isNavigate = false;
      } else {
          this.isNavigate = true;
      }
      if (this.route.queryParams) {
          this.route.queryParams.subscribe(res => {
              if (res.searchKey) {
                  this.searchTerm = res.searchKey;
              }
          });
      }
      Object.keys(this.filterSearches).forEach((key) => {
          let filterSearch = this.filterSearches[key];
          filterSearch.subscription = filterSearch.ctrl.valueChanges.subscribe(() => {
              this.updateDisplayFilters(key);
          });
      });
  
      this.addParentFilters(this.filters);
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.data && changes.data.currentValue && changes.data.currentValue.units) {
          this.buildFilters(changes.data.currentValue);
          if (changes.filters) {
              this.addParentFilters(changes.filters.currentValue);
          }
          this.updateDisplayData();
          this.displayDataUpdated = !changes.data.firstChange;
          // this.displayDataUpdated = true;
      } else if (changes.filters && !changes.filters.isFirstChange) {
          this.addParentFilters(changes.filters.currentValue);
      }
  }

  ngOnDestroy() {
      Object.keys(this.filterSearches).forEach((key) => {
          let filterSearch = this.filterSearches[key];
          if (filterSearch.subscription) {
              filterSearch.subscription.unsubscribe();
          }
      });
  }

  addParentFilters(parentFilters) {
      if (parentFilters) {
          parentFilters.forEach((filter) => {
              this.appliedFilters.forEach((appliedFilter) => {
                  if (appliedFilter.name === filter.name) {
                      appliedFilter.values = filter.values[0] === 'ALL' ? [] : filter.values;
                  }
              });
          });
          this.updateSelectedFiltersProgrammatically();
      }
  }

  applySort(col) {
      this.displayData.sort((a, b) => {
          if (a[col] === b[col]) {
              return 0;
          } else if (a[col] < b[col]) {
              return this.sortModel[col] === 'asc' ? -1 : 1;
          } else {
              return this.sortModel[col] === 'asc' ? 1 : -1;
          }
      });
      this.displayData = Object.assign([], this.displayData);
  }

  /**
   * takes the data recieved and puts it into
   * @param data ISearchResult
   */
  applyFilters(): void {
      if (this.hasFilters()) {
          const filters = this.appliedFilters;
          this.displayData = this.data.units.filter(unit => {
              return filters.reduce((acc, filter) => {
                  if (acc) {
                      if (filter && filter.values && filter.values.length) {
                          if (filter.name === 'location') {
                              return filter.values.find((val) => val === unit[filter.name]);
                              // } else if (filter.name === 'revolutionVersion') {
                              //     return filter.values.find((val) => val === (unit[filter.name]));
                              //      return filter.values.find((val) => val === (unit[filter.name]).substring(0, 4)) ? true : false;
                          } else {
                              return filter.values.find((val) => val === unit[filter.name]);
                          }
                      } else {
                          return true;
                      }
                  } else {
                      return acc;
                  }
              }, true);

          });
      } else {
          this.displayData = this.data.units;
      }
  }

  getMachineDetail(deviceId: string, serialNo: string): void {
      this.router.navigate(['/home/revolution-dashboard/', serialNo, deviceId]);
  }

  hasFilters(): boolean {
      return this.appliedFilters.reduce((hasFilters, filter) => {
          return hasFilters ? hasFilters : (filter.values.length ? true : false);
      }, false);
  }

  onFilterChange(value, filterName) {
      let updatedFilter: any = this.appliedFilters.find((filter) => filter.name === filterName);
      if (value) {
          if (value.length && value[0].text === undefined) {
              updatedFilter.values = value;
          } else {
              const filterValue = value.map((val) => val.text);
              updatedFilter.values = filterValue;
          }
          this.updateDisplayData();
      }
  }

  onRowSelectChange(isChecked, revolution: any) {
      const revObj = {
          serialNo: '',
          model: '',
          deviceId: ''
      };
      revObj.serialNo = revolution.serialNo;
      revObj.model = revolution.model;
      revObj.deviceId = revolution.deviceId;

      if (isChecked) {
          this.selectedRevolutions.push(revObj);
          this.revolutionsToDeploy.push(revObj);
          this.isSelectAll = this.selectedRevolutions.length === this.displayData.length ? true : false;
      } else {
          this.isSelectAll = false;
          this.selectedRevolutions.forEach((element, index) => {
              if (element.deviceId === revolution.deviceId) {
                  this.selectedRevolutions.splice(index, 1);
              }
          });

          this.revolutionsToDeploy.forEach((element, index) => {
              if (element.deviceId === revolution.deviceId) {
                  this.revolutionsToDeploy.splice(index, 1);
              }
          });

      }

  }

  /**
   * builds the revolution list filter toggles from the results obtained
   * @param data ISearchResult
   * this will run after the data is successfully obtained in the pipe
   */
  buildFilters(data: any): void {
      const reducer = (accum: any, current: any) => {
          if (!accum['company'].includes(current.company)) {
              accum['company'].push(current.company);
          }

          let location = current.location;

          if (typeof location === 'string') {
              location = location;
          } else {
              location = Languages.get('global.na', 'upper');
          }

          if (!accum['location'].includes(location)) {
              accum['location'].push(location);
          }

          if (!accum['model'].includes(current.model)) {
              accum['model'].push(current.model);
          }

          let appVersion = current.revolutionVersion;

          // if (appVersion && appVersion !== null) {
          //     appVersion = appVersion.substring(0, 4);
          // } else {
          //     appVersion = 'NA';
          // }
          let agentVersion = current.iotVersionNumber;
          if (!accum['revolutionVersion'].includes(appVersion)) {
              accum['revolutionVersion'].push(appVersion);
          }
          if (!accum['iotVersionNumber'].includes(agentVersion)) {
              accum['iotVersionNumber'].push(agentVersion);
          }
          let storeName = current.storeName;
          if (!accum['storeName'].includes(storeName)) {
              accum['storeName'].push(storeName);
          }

          return accum;
      };

      const starterAccum = {
          //'availability': Object.keys(this.revolutionAlertsService.connectionStatusColorMapping),
         //  'alertStatusWithoutDetails': Object.keys(this.revolutionAlertsService.alertsToColorMapping),
          'company': [],
          'location': [],
          'model': [],
          'revolutionVersion': [],
          'iotVersionNumber': [],
          'storeName': []
      };

      const catcher = data && data.units && data.units.reduce(reducer, starterAccum);
      this.possibleFilterProperties = catcher;
      Object.keys(this.possibleFilterProperties).forEach((item, index) => {
          if (this.possibleFilterProperties[item].length === 1) {
              this.appliedFilters[index].values = this.possibleFilterProperties[item];
          }
      });
      this.updateSelectedFiltersProgrammatically();
      this.displayFilters = Object.assign({}, this.possibleFilterProperties);
  }

  toggleSort(col: string) {
      this.sortModel[col] = this.sortModel[col] === 'asc' ? 'desc' : 'asc';
      this.updateDisplayData(col);
  }

  /**
   * Takes existing data, filters and sorts it based on current filter and sort values and
   * updates displayData
   * @param isSelectAll boolean
   */
  updateDisplayData(col?: string) {
      this.applyFilters();
      this.applySort(col);
  }

  updateDisplayFilters(colName) {
      let searchValue = this.filterSearches[colName].ctrl.value.toLowerCase();
      this.displayFilters[colName] = this.possibleFilterProperties[colName]
          .filter(val => (val.toLowerCase().indexOf(searchValue) !== -1) ? true : false);
  }

  /**
   * flips a boolean value used to see if sorting is ascending or desc for BA number
   */
  toggleBAAscendingSortOrder(answer: boolean, event: MouseEvent): void {
      event.stopPropagation();
      this.baSortAscending = answer;
      this.toggleSort('serialNo');
  }

  updateSelectedFiltersProgrammatically() {
      this.appliedFilters.forEach((filter) => {
          if (filter.name === 'availability') {
              this.selectedAvailability = filter.values.length ? filter.values : null;
          } else if (filter.name === 'alertStatusWithoutDetails') {
              this.selectedAlertstatus = filter.values.length ? filter.values : null;
          } else {
             this.selectedFilterValues[filter.name] = filter.values.length ? filter.values : null;
          }
      });
  }

  openScriptDialog(): void {
      // const dialogRef = this.dialog.open(DialogComponent, {
      //     width: '450px'
      // });
      // dialogRef.componentInstance.isCloseDialog = true;
      // dialogRef.componentInstance.isScript = true;
      // dialogRef.componentInstance.isSingleSelectionCheckbox = true;
      // if (this.selectedRevolutions && this.selectedRevolutions.length > 0) {
      //     dialogRef.componentInstance.revolutionList = this.selectedRevolutions;
      // }
  }

  openErrorDialog(): void {
      // const dialogRef = this.dialog.open(DialogComponent, {
      //     width: '450px'
      // });
      // dialogRef.componentInstance.isCloseDialog = true;
      // dialogRef.componentInstance.isScript = true;

  }

  isSelected(value) {
      return (this.selectedRevolutions.findIndex(revolution => revolution.deviceId === value) > -1);
      // return this.selectedRevolutions ? includes(this.selectedRevolutions, value) : false;
  }

  selectAllRevolutions(isChecked) {
      if (isChecked) {
          this.isSelectAll = true;
          this.displayData.forEach((element, index) => {
              const revObj = {
                  serialNo: element.serialNo,
                  model: element.model,
                  deviceId: element.deviceId
              };
              this.selectedRevolutions[index] = revObj;
              revObj.serialNo = element.serialNo;
              revObj.model = element.model;
              this.revolutionsToDeploy[index] = revObj;
          });
      } else {
          this.isSelectAll = false;
          this.selectedRevolutions = [];
          this.revolutionsToDeploy = [];
      }
  }

  // navigateToDeployPackage() {
  //     this.deployPackageService.selectedRevolutions = this.revolutionsToDeploy;
  //     if (this.revolutionsToDeploy.length === 0) {
  //         this.openErrorDialog();
  //     } else {
  //         this.router.navigate(['/home/revolution/deploy-package']);
  //     }

  // }

  downloadFile() {
      let fileName;
      if (this.searchTerm) {
          fileName = `${this.searchTerm}`;
      } else {
          fileName = `Export_Results`;
      }
      const headers = {
          connectionStatus: 'Connection Status',
          alertSatus: 'Alert Status',
          serialNo: 'Serial No',
          storeName: 'Store Name',
          model: 'Model',
          customer: 'Customer',
          location: 'Location',
          revolutionVersion: 'Revolution Version',
          iotVersionNumber: 'Iot Version Number'
      };
      const itemsFormatted = [];
      const downloadListItems = [];

      if (this.selectedRevolutions.length > 0) {
          this.selectedRevolutions.map((element, index) => {
              this.displayData.map((item) => {
                  if (item.serialNo === element) {
                      downloadListItems[index] = item;
                  }
              });
          });
      } else {
          // format the data
          this.displayData.map((element, index) => {
              downloadListItems[index] = element;
          });
      }

      if (downloadListItems.length > 0) {
          downloadListItems.forEach((item) => {
              itemsFormatted.push({
                  connectionStatus: (item.availability) ? this.escapsingCommas(item.availability) : '',
                  alertSatus: (item.alertStatus) ? this.escapsingCommas(item.alertStatus) : '',
                  serialNo: (item.serialNo) ? this.escapsingCommas(item.serialNo) : '',
                  storeName: (item.storeName) ? this.escapsingCommas(item.storeName) : '',
                  model: (item.model) ? this.escapsingCommas(item.model) : '',
                  customer: (item.company) ? this.escapsingCommas(item.company) : '',
                  location: (item.location) ? this.escapsingCommas(item.location) : '',
                  revolutionVersion: (item.revolutionVersion) ? this.escapsingCommas(item.revolutionVersion) : '',
                  iotVersionNumber: (item.iotVersionNumber) ? this.escapsingCommas(item.iotVersionNumber) : ''
              });
          });
      }
     // this.fileUtilsService.exportCSVFile(headers, fileName, itemsFormatted);
  }

  escapsingCommas(item) {
      return item.replace(/[, ]+/g, ' ').trim();
  }

  clearSelectedFilters(dropdownList) {
     // this.listOperationsService.clearFilters(dropdownList);
  }

  deleteResult() {
      this.deleteOnConfirm();
  }

  deleteOnConfirm(): void {
      let title;
      if (this.selectedRevolutions && this.selectedRevolutions.length <= 1) {
          title = Languages.get('global.confirmDeleteMachineTitle', 'capitalize');
      } else {
          title = Languages.get('global.confirmDeleteMachineTitles', 'capitalize');
      }
      // const confirmationDialogRef = this.dialogUtilService.openConfirmDialog(title);
      // confirmationDialogRef.componentInstance.success.subscribe(() => {
      //     const payload = this.selectedRevolutions.map(v => v.deviceId);
      //     if (payload.length) {
      //         this.searchResultListService.delete(payload).subscribe(res => {
      //             if (res) {
      //                 const dialog = this.dialogUtilService.openSuccessDialog('success');
      //                 dialog.afterClosed().subscribe(() => {
      //                     window.location.reload();
      //                 });
      //             }
      //         });
      //     }
      // });
  }

}
