import * as _ from 'lodash';
import { environment } from '../environments/environment';

type CaseConversion = 'upper' | 'toUpper' | 'toUpperCase' |
    'lower' | 'toLower' | 'toLowerCase' |
    'capitalize' | 'sentence' |
    'start' | 'startCase' | 'capitalizeEach' |
    'capitalizeFirst';

const cashFlowInnovation = 'reliability tree';

export abstract class AppConfiguration {
    public static readonly env = environment;
    public static readonly global = {
        colors: {
            axis: '#e0e0e0',
            threshold: '#2979ff',
            average: '#808080',
            aboveTarget: '#ef4a20',
            belowTarget: '#02b53b',
            defaultBar: '#1e88e5',
            aggregateValueBad: '#c62828',
            aggregateValueNeutral: '#1565c0',
            aggregateValueGood: '#2e7d32',
            warningColor: '#ff8f00',
            alertColor: '#f44336',
            normalColor: '#4caf50',
            donutTitleColor: '#0067A5'
        },
        refreshIntervalFast: 10000,
        refreshIntervalFastPeriod: 300000,
        refreshIntervalNormal: 300000,
        apiTimeFormat: ['MM/DD/YYYY', 'DD-MMM-YYYY', 'YYYYMM', 'MMM-YYYY', 'YYYY-MM-DD'],
        displayTimeFormat: 'll',
        fullDateAndTimeFormat: 'hh:mm A, LL',
        fullDateAndTimeWithSecondsFormat: 'hh:mm:ss A, LL',
        utcDateFormat: 'YYYY-MM-DD HH:mm:ss',
        register: 'Register',
        password: 'Password',
        confirmPassword: 'confirmpassword',
        lastUpdatedTimeInView: 'lastupdatedtimeinview',
        kpiChart: {
            resolution: {
                desktop: {
                    width: 900,
                    height: 420,
                    padding: 0.4,
                    fontSize: 10
                },
                tablet: {
                    width: 660,
                    height: 400,
                    padding: 0.3,
                    fontSize: 9
                },
                phone: {
                    width: 500,
                    height: 300,
                    padding: 0.2,
                    fontSize: 8
                }
            }
        },
        reportChart: {
            resolution: {
                desktop: {
                    width: 1200,
                    height: 200,
                    padding: 0.4,
                    fontSize: 10
                },
                tablet: {
                    width: 660,
                    height: 200,
                    padding: 0.3,
                    fontSize: 9
                },
                phone: {
                    width: 500,
                    height: 200,
                    padding: 0.2,
                    fontSize: 8
                }
            }
        },
        api: {
            maxRetries: 0,
            timeOut: 180
        },
        // Added by Lakshit Rawat for new image urls.
        revolutionImageUrl: 'https://rrsimages.azureedge.net/models',
        locale: navigator && (navigator.language || 'en-US'),
        isOldBrowser: navigator && navigator.appVersion.match(/Edge\/16/),
        showServerErrorMessage: 'snackbar',
        resolution: {
            tablet: 768,
            phone: 480,
            desktop: 1024
        },
        periods: {
            values: ['pasttwelvemonths', 'pastsixmonths', 'pastthirtydays', 'pastsevendays'],
            days: ['12 months', '6 months', '30 days', '7 days'],
            frequency: ['monthly', 'weekly', 'daily', 'daily'],
            newFrequencyMapping: ['monthly', 'weekly', '30', '7'],
            reportFrequency: ['365', '180', '30', '7'],
            titles: ['showingLastTwelveMonthData', 'showingLastSixMonthData', 'showingLastMonthData', 'showingSevenDaysData'],
            default: 2,
            labelMapper: {
                'pasttwelvemonths': 'past twelve months',
                'pastsixmonths': 'past six months',
                'pastthirtydays': 'past thirty days',
                'pastsevendays': 'past seven days',
            }
        },
        filter: {
            disablePeriodsOnRoutes: [
                '/home/dashboard/alerts-dashboard',
                '/home/daily-dashboard'
            ],
            disableFilterOnRoutes: [
                '/login',
                '/home/index',
                '/home/role/user-profile',
                '/home/role/user',
                '/home/role/user-list',
                '/home/role/password',
                '/home/role/user-edit'
            ],
            // defaultFiler: { customer: ['ALL'], model: ['ALL'], period: 'pastthirtydays', location: ['ALL'] }
            defaultFiler: {
                customer: ['ALL'],
                model: ['ALL'],
                period: 'pastthirtydays',
                location: ['ALL'],
                dateRange: { start: null, end: null }
            }
        },
        homeChild: [
            '/home/exec-dashboard',
            '/home/dashboard/customer',
            '/home/dashboard/connected-health',
            '/home/unit-life',
            '/home/dashboard/alerts-dashboard',
            '/home/daily-dashboard',
            '/home/dashboard',
            '/home/user-exp'
        ],
        // Please edit the menuActiveMap if menu is edited.
        menu: [
            {
                item: 'home',
                icon: '../../../assets/images/menu-dashboard_dark.png',
                selectedIcon: '../../../assets/images/menu-dashboard_light.png',
                route: '/home/dashboard/connected-health',
                isSelected: false,
                childRoute: [
                    {
                        item: 'connectedHealth',
                        route: '/home/dashboard/connected-health',
                        pinned: false
                    },
                    {
                        item: 'customerDashboard',
                        route: '/home/dashboard/customer',
                        pinned: false
                    },
                    // {
                    //     item: 'machineDashboard',
                    //     route: '/home/dashboard/cp-search-results',
                    //     permissionId: UserPermission.alwaysShow,
                    //     pinned: false
                    // },
                    {
                        item: 'alert',
                        route: '/home/dashboard/alerts-dashboard',
                        pinned: false
                    },
                    // {
                    //     item: 'dashboard',
                    //     route: '/home/daily-dashboard',
                    //     permissionId: UserPermission.enableDailyDashboard,
                    //     pinned: false
                    // },
                    {
                        item: 'userExperience',
                        route: '/home/user-exp',
                        pinned: false
                    },
                    {
                        item: 'cashFlowInnovation',
                        route: '/home/exec-dashboard/report/reliabilityTree',
                        pinned: false
                    },
                ]
            },
            {
                item: 'package',
                icon: '../../../assets/images/menu-packages_dark.png',
                selectedIcon: '../../../assets/images/menu-packages_light.png',
                route: '/home/packages/packages-list-view',
                isSelected: false
            },
            {
                item: 'adminPanel',
                icon: '../../../assets/images/menu-admin_dark.png',
                selectedIcon: '../../../assets/images/menu-admin_light.png',
                route: '/home/user/admin-panel',
                isSelected: false
            },
            {
                item: 'profile',
                icon: '../../../assets/images/menu-profile_dark.png',
                selectedIcon: '../../../assets/images/menu-profile_light.png',
                route: '/home/user/user-profile',
                isSelected: false
            },
        ],
        threshold: [
            { label: 'high', value: 'HIGH' },
            { label: 'medium', value: 'MED' },
            { label: 'low', value: 'LOW' }
        ],
        gaugeLimit: 26000,
        donutChartDataForZeroValue: [{
            name: '',
            count: 100,
            color: '#efefef',
        }],
        // Added by Jonathan Ahrens for tab state management through queryParameters
        // relation component to queryParameter used
        tabsToQueryParameters: {
            'scriptsTab': 'st',
            'alertCardSection': 'ac',
            'recentActivity': 'ra'
        },
    };

    /**
     * Menu active map of app configuration. Added for applying the selected class for each menu item.
     * @author: Lakshit Rawat
     */
    public static readonly menuActiveMap = {
        home: '/home/exec-dashboard',
        customerDashboard: '/home/dashboard/customer',
        executiveDashboard: '/home/exec-dashboard',
        connectedHealth: '/home/dashboard/connected-health',
        aboutUs: '/home/index',
        alert: '/home/dashboard/alerts-dashboard',
        dashboard: '/home/daily-dashboard',
        machineDashboard: '/home/unit-life',
        userExperience: '/home/user-exp',
        profile: '/home/role/user-profile',
        package: '/home/packages/packages-list-view',
        adminPanel: '/home/revolution/admin-panel'
    };

    public static readonly operators = {
        text: [
            {
                displayName: 'contains',
                value: 'contains'
            },
            {
                displayName: 'matches',
                value: 'matches'
            }],
        number: [
            {
                displayName: '==',
                value: 'eq'
            },
            {
                displayName: '>',
                value: 'gt'
            },
            {
                displayName: '<',
                value: 'lt'
            },
            {
                displayName: '>=',
                value: 'gte'
            },
            {
                displayName: '<=',
                value: 'lte'
            },
            {
                displayName: '!=',
                value: 'neq'
            }
        ],
        deploymentType: [
            {
                displayName: '==',
                value: 'eq'
            },
            {
                displayName: '>',
                value: 'gt'
            },
            {
                displayName: '<',
                value: 'lt'
            },
            {
                displayName: '>=',
                value: 'gte'
            },
            {
                displayName: '<=',
                value: 'lte'
            },
            {
                displayName: '!=',
                value: 'neq'
            },
            {
                displayName: 'in-between',
                value: 'in-between'
            }],
        default: []
    };

    public static readonly averageHours = {
        colors: {
            target: AppConfiguration.global.colors.threshold,
            average: AppConfiguration.global.colors.average
        },
        target: 2
    };

    public static readonly onSiteTime = {
        colors: {
            target: AppConfiguration.global.colors.threshold,
            average: AppConfiguration.global.colors.average
        },
        timePeriods: [
            { key: 'zeroToTwoHours', slot: '0-2hrs', color: '#a4f461' },
            { key: 'twoToFourHours', slot: '2-4hrs', color: '#f4a73a' },
            { key: 'fourToTwelveHours', slot: '4-12hrs', color: '#fc8a8a' },
            { key: 'twelveToTwentyFourHours', slot: '12-24hrs', color: '#a30b0b' }
        ],
        cases: ['number', 'percentage'],
        warningCardColor: AppConfiguration.global.colors.warningColor
    };

    public static readonly casesByArea = {
        areas: [
            { name: 'bcr', averageTarget: 20, apiKey: 'BCR' },
            { name: 'bnr', averageTarget: 20, apiKey: 'BNR' },
            { name: 'bnr2', averageTarget: 20, apiKey: 'BNR2' },
            { name: 'vault', averageTarget: 20, apiKey: 'VAULT' },
            { name: 'other', averageTarget: 20, apiKey: 'OTHER' }
        ],
        cases: ['number', 'percentage'],
        colorSlots: {
            bcr: [
                { key: 'inScope', slot: 'inScope', color: '#fc4c87' },
                { key: 'outScope', slot: 'outScope', color: '#e32061' },
                { key: 'phoneFix', slot: 'phoneFix', color: '#b38f9a' }
            ],
            bnr: [
                { key: 'inScope', slot: 'inScope', color: '#4cbcfc' },
                { key: 'outScope', slot: 'outScope', color: '#219FE4' },
                { key: 'phoneFix', slot: 'phoneFix', color: '#8fa5b3' }
            ],
            bnr2: [
                { key: 'inScope', slot: 'inScope', color: '#4cbcfc' },
                { key: 'outScope', slot: 'outScope', color: '#219FE4' },
                { key: 'phoneFix', slot: 'phoneFix', color: '#8fa5b3' }
            ],
            vault: [
                { key: 'inScope', slot: 'inScope', color: '#fcd64c' },
                { key: 'outScope', slot: 'outScope', color: '#e3b920' },
                { key: 'phoneFix', slot: 'phoneFix', color: '#b3ab8f' }
            ],
            other: [
                { key: 'inScope', slot: 'inScope', color: '#9b4cfc' },
                { key: 'outScope', slot: 'outScope', color: '#7420e3' },
                { key: 'phoneFix', slot: 'phoneFix', color: '#9c8fb3' }
            ],
            all: [
                { key: 'bcr', slot: 'bcr', color: '#ff3377' },
                { key: 'bnr', slot: 'bnr', color: '#33b8ff' },
                { key: 'bn2', slot: 'bn2', color: '#33b8ff' },
                { key: 'vault', slot: 'vault', color: '#ffcf33' },
                { key: 'other', slot: 'other', color: '#8f33ff' }
            ],
            inScope: [
                { key: 'inScope', slot: 'inScope', color: '#4cbcfc' }
            ],
            outScope: [
                { key: 'outScope', slot: 'outScope', color: '#219FE4' }
            ],
            phoneFix: [
                { key: 'phoneFix', slot: 'phoneFix', color: '#8fa5b3' }
            ],
            dispatch: [
                { key: 'inScope', slot: 'inScope', color: '#4cbcfc' },
                { key: 'outScope', slot: 'outScope', color: '#219FE4' }
            ],
        },
        caseTypes: {
            keys: ['inScope', 'outScope', 'phoneFix']
        },
        dispatchCaseType: {
            keys: ['inScope', 'outScope']
        },
    };

    public static readonly casesByHour = {
        days: [
            { name: 'monday', apiKey: 'MONDAY' },
            { name: 'tuesday', apiKey: 'TUESDAY' },
            { name: 'wednesday', apiKey: 'WEDNESDAY' },
            { name: 'thursday', apiKey: 'THURSDAY' },
            { name: 'friday', apiKey: 'FRIDAY' },
            { name: 'saturday', apiKey: 'SATURDAY' },
            { name: 'sunday', apiKey: 'SUNDAY' }
        ],
        caseTypes: [
            { key: 'phoneFix', slot: 'phoneFix', color: '#92D963' },
            { key: 'dispatch', slot: 'dispatch', color: '#4A4A4A' }
        ]
    };

    public static readonly casesByZones = {
        zones: [
            { name: 'Zone 1', averageTarget: 93, key: 'zone1', apiKey: 'Zone1', hourLimit: '4 hr' },
            { name: 'Zone 2-3', averageTarget: 93, key: 'zone2-3', apiKey: 'Zone2-3', hourLimit: '6 hr' },
            { name: 'Zone 4-5', averageTarget: 93, key: 'zone4-5', apiKey: 'Zone4-5', hourLimit: '24 hr' }
        ],
        cases: ['number', 'percentage'],
        colorSlots: {
            Zone1: [
                { key: 'inTime', slot: 'inTime', color: '#2FBC55' },
                { key: 'outTime', slot: 'outTime', color: '#FFACAF' }
            ],
            'Zone2-3': [
                { key: 'inTime', slot: 'inTime', color: '#229FE4' },
                { key: 'outTime', slot: 'outTime', color: '#FFACAF' }
            ],
            'Zone4-5': [
                { key: 'inTime', slot: 'inTime', color: '#A166EA' },
                { key: 'outTime', slot: 'outTime', color: '#FFACAF' }
            ],
            all: [
                { key: 'zone1', slot: 'zone1', color: '#2FBC55' },
                { key: 'zone2-3', slot: 'zone2-3', color: '#229FE4' },
                { key: 'zone4-5', slot: 'zone4-5', color: '#A166EA' }
            ]
        },
        slaTime: [
            { key: 'inTime', slot: 'made' },
            { key: 'outTime', slot: 'outTime' }
        ]
    };

    public static readonly firstTimeFix = {
        alertTarget: 95,
        cases: ['number', 'percentage'],
        colorSlots: {
            phonefix: [
                { key: 'phoneFix', slot: 'phoneFix', color: '#42BD41' },
                { key: 'linked', slot: 'linked', color: '#F973A2' }
            ],
            dispatch: [
                { key: 'dispatch', slot: 'dispatch', color: '#58B3F3' },
                { key: 'linked', slot: 'linked', color: '#F973A2' }
            ],
            all: [
                { key: 'phoneFix', slot: 'phoneFix', color: '#42BD41' },
                { key: 'dispatch', slot: 'dispatch', color: '#58B3F3' },
                { key: 'linked', slot: 'linked', color: '#F973A2' }
            ]
        },
        caseTypes: [
            {
                key: 'phoneFix',
                value: 'phone_fix'
            },
            {
                key: 'dispatch',
                value: 'dispatch'
            }
        ]
    };

    public static readonly reportList = [
        {
            label: 'userExperience',
            route: 'user-exp'
        },
        {
            label: 'interventionDriver',
            route: 'intervention'
        },
        {
            label: 'upTime',
            route: 'up-time'
        }
    ];
    public static readonly oAuth = {
        // authServer: `${AppConfiguration.authUrl}/oauth/authorize`,
        clientId: 'ui', // 'ui' for dev, qa and prod
        // clientId: 'local-ui', // 'local-ui' for local
        // logoutUrl: `${AppConfiguration.authUrl}/logout`,
        // redirectUrl: 'http://rrs-api.techolution.qa/callback',
        // tokenEndpoint: `${AppConfiguration.authUrl}/oauth/token/`
    };

    public static readonly kpiList = [
        {
            'name': 'Average Number Of Hours Spent On Site',
            'apiKey': 'averageHoursSpentOnsite',
            'timeStampKey': 'DAILY_AVERAGE_ONSITE_HOURS'
        },
        {
            'name': 'Onsite time spent (Hours)',
            'apiKey': 'casesByOnsiteHours',
            'timeStampKey': 'CASES_BY_ONSITE_HOURS'
        },
        {
            'name': 'Cases By Area',
            'apiKey': 'casesByArea',
            'timeStampKey': 'DAILY_CASES_BY_AREA'
        },
        {
            'name': 'Service Level Agreement (Zone)',
            'apiKey': 'serviceLevelAgreement',
            'timeStampKey': 'SLA_SUCCESS_RATE_DAILY'
        },
        {
            'name': 'High Frequency Dispatch Stores',
            'apiKey': 'highFrequencyDispatch',
            'timeStampKey': 'HIGH_FREQUENCY_DISPATCH_STORES_7DAYS'
        },
        {
            'name': 'Number Of Cases Created Hourly',
            'apiKey': 'casesByHour',
            'timeStampKey': 'CASES_CREATED_BY_HOURS'
        },
        {
            'name': 'Cash Flow Innovation',
            'apiKey': 'cashFlowInnovation',
            'timeStampKey': ''
        },
        {
            'name': 'First Time Fix',
            'apiKey': 'firstTimeFix',
            'timeStampKey': 'FIRST_TIME_FIX_DAILY'
        },
        {
            'name': 'Unit Life Data',
            'apiKey': 'unitLifeData',
            'timeStampKey': 'UNIT_LIFE_DATA'
        },
        {
            'name': 'User Experience',
            'apiKey': 'userExperience',
            'timeStampKey': 'USER_EXPERIENCE'
        },
        {
            'name': 'Intervention Driver',
            'apiKey': 'interventionDriver',
            'timeStampKey': 'INTERVENTIONS_DRIVER_DAILY'
        }
    ];


    /**
     * Remote connection status messages of app configuration for remote desktop connection
     * @author: Lakshit Rawat
     */
    public static readonly remoteConnectionStatusMessages = {
        '0': 'Connection Idle',
        '1': 'Connecting',
        '2': 'Establishing Connection',
        '3': 'Connected',
        '4': 'Disconnecting',
        '5': 'Disconnected / Password might be incorrect'
    };

    public static readonly downloadType = {
        blob: 'blob-content',
        link: 'url'
    };
}

export class Languages {
    public static readonly locales = {
        'en-US': {
            global: {
                autoDisconnectMessage: 'Would you like your connection to remain in effect after 1 minute of idle time?',
                autoDisconnectWarning: 'Are you still working?',
                average: 'average',
                total: 'total',
                ofAllCases: 'of all cases',
                noCaseAvailable: 'no case available',
                noLinkedCaseAvailable: 'no linked cases available',
                target: 'target',
                hrs: 'hrs',
                hr: 'hr',
                hour: 'hour',
                hours: 'hours',
                byWeekLastMonth: 'by week for last 1 month',
                showingLastMonthData: 'showing last 30 days data',
                showingSevenDaysData: 'showing last 7 days data',
                showingLastSixMonthData: 'showing last 6 months data',
                showingLastTwelveMonthData: 'showing last 12 months data',
                showingDateRangeData: 'showing data as per selected date range',
                case: 'case',
                technician: 'technician',
                error: 'error',
                noData: 'no data available',
                noTimeStamp: 'Timestamp not available',
                notAnImage: 'not an image',
                cancel: 'cancel',
                apply: 'apply',
                close: 'close',
                lastUpdated: 'last updated',
                cases: 'cases',
                fromAverageOf: 'from average of',
                refresh: 'refresh',
                tryAgain: 'try again',
                serverError: 'server error',
                problemLoadingData: 'please try again',
                ok: 'ok',
                na: 'n/a',
                back: 'back',
                on: 'on',
                of: 'of',
                from: 'from',
                stores: 'stores',
                noAlerts: 'no alerts',
                showDashboard: 'show dashboard',
                inscope: 'inscope',
                outscope: 'outscope',
                phoneFix: 'phone fix',
                dispatch: 'dispatch',
                linked: 'linked',
                noMachineAvailable: 'no machine available',
                noMatchesAvailable: 'no match found',
                noMatchMessage: 'please check the global filters',
                noFilterMatch: 'please check filters',
                barsPerPage: 'bars per page:',
                itemsPerPage: 'items per page:',
                page: 'page',
                inTime: 'In Time',
                outTime: 'Out Time',
                jobType: 'Job Type',
                jobDesc: 'Job Desc',
                model: 'model',
                zone: 'zone',
                durationToArrive: 'duration to arrive',
                confirmTitle: 'are you sure you want to save changes?',
                confirmDeleteTitle: 'are you sure you want to delete this user?',
                confirmDeleteNoteTitle: 'Are you sure want to delete this note ?',
                confirmDeletePackageTitle: 'Are you sure you want to delete this package',
                confirmDeleteMachineTitle: 'Are you sure you want to delete this machine',
                confirmDeleteMachineTitles: 'are you sure you want to delete this machines',
                confirmDeleteSavedSearchTitle: 'are you sure you want to delete this saved search',
                confrimDeleteResult: 'are you sure you want to delete the selected result',
                successTitle: 'great!',
                failTitle: 'sorry!',
                signUpSuccessMessage: 'Thanks for registering with REACH Portal.',
                emailSuccessMessage: 'email sent successfully to ',
                emailFailMessage: 'we could not send email to ',
                emailAlreadySentMessage: 'we have already sent email to ',
                changePassword: 'change password',
                changePasswordMessage: 'your password has been changed successfully. please sign in to continue',
                forgotPasswordSuccessMessage: 'we’ve sent you an email to reset your password.',
                resetPasswordSuccessMessage: 'your password has been reset successfully. ',
                signInMessage: 'please sign in to continue.',
                successEditProfile: 'the profile changes are done successfully',
                customerInviteTitle: 'invite new customer?',
                customerInviteContent: 'you can invite new customer by entering their email below',
                inviteTitle: 'invite new user?',
                inviteContent: 'you can invite new user by entering their email below',
                successRatioBy: 'Success Ratio by ',
                successRatio: 'success ratio',
                downtimeRatio: 'downtime ratio',
                interventionRatioTitle: 'intervention ratio',
                store: 'store',
                interventionCountBy: 'intervention count by ',
                interventionRatio: 'intervention ratio by ',
                user: 'user',
                transDetails: 'transaction detail',
                details: 'details',
                alerts: 'daily alerts',
                dailyStatus: 'daily status',
                dashboard: 'dashboard',
                analysis: 'analysis',
                intervention: 'intervention ratio',
                caseHistory: 'Case History',
                locations: 'locations',
                location: 'location',
                revolutions: 'revolutions',
                users: 'users',
                dispatches: 'dispatches',
                dispatchCases: 'dispatch cases',
                unitLifeSummary: 'unit life summary',
                locationsInRange: 'locations in range',
                locationsOutRange: 'locations out range',
                interventionOnly: 'intervention',
                selectNote: 'Select High/Low Performers From Filter*',
                averageDailyNoteVolume: 'Average daily note volume',
                nothingToShow: 'No data to display',
                sla: 'sla',
                allZone: 'all zones',
                alreadyRegistered: 'the email address is already registered',
                successRegister: 'the email address has been registered successfully',
                successGetAccess: 'the request has been successfully sent.',
                failGetAccess: 'please try again.',
                pieChartTitle: 'closed dispatch cases after qa',
                made: 'made',
                missed: 'missed',
                dailyDashboard: 'daily dashboard',
                notAvailable: 'na',
                storeNumber: 'store number',
                storeDetails: 'store details',
                count: 'count',
                interventionCount: 'intervention count',
                financialTransactions: 'financial transaction',
                incidentDay: 'incident day',
                status: 'status',
                customer: 'customer',
                ofIntervention: 'of intervention',
                transactionDetail: 'transaction detail',
                averageHours: 'average hours',
                caseDate: 'case date',
                noOfCases: 'no of cases',
                noOfInScope: 'no of in scope',
                noOfOutOfScope: 'no of out of scope',
                noOfPhoneFix: 'no of phone fix',
                registerNotification: 'has accepted and registered to RRS Customer Portal',
                inviteNotification: 'Invitation link has been expired for ',
                revolutionAlert: 'revolution alerts',
                revolutionAvailability: 'revolution availability',
                online: 'online',
                history: 'history',
                installationDate: 'Installation Date',
                appVersion: 'app version',
                searchAppVersion: 'search app version',
                agentVersion: 'agent version',
                searchAgentVersion: 'search agent version',
                noMatchFound: 'no matches found',
                searchModelNumber: 'search model numbers',
                searchCustomer: 'search customer',
                searchLocation: 'search location',
                searchAlertStatus: 'search alert status',
                remoteAccess: 'Remote Access',
                fast: 'fast',
                fileTransfer: 'file transfer',
                openFtp: 'open ftp',
                lockScreen: 'lock screen',
                chat: 'chat',
                disconnect: 'disconnect',
                color: 'color',
                direction: 'direction',
                sendCtrlAltDelete: 'Ctrl+Alt+Del',
                disconnectRemote: ' Are you sure you want to exit the remote desktop session?',
                successMessage: 'Successfully Created',
                successEditMessage: 'successfully edited',
                createPackageInfo: 'Enter the information that describes this package',
                packageName: 'package name',
                version: 'version',
                createDate: 'create date',
                description: 'description',
                continue: 'continue',
                schedule: 'schedule',
                now: 'now',
                later: 'later',
                expiry: 'expiry',
                never: 'never',
                inCaseError: 'In case of error',
                completion: 'Completion',
                notifying: 'Notifying',
                deploymentType: 'deployment type',
                deploymentDate: 'deployment date',
                expiration: 'expiration',
                dependencies: 'Dependencies',
                operator: 'Operator',
                noDependencies: 'no dependencies available',
                instructions: 'Instructions',
                noInstructions: 'no Instructions available',
                rollBackInstructions: 'RollBack Instructions',
                rollBack: 'roll back',
                noRollBackInstructions: 'no rollback instructions available',
                deploy: 'deploy',
                requestApproval: 'request approval',
                notification: 'notification',
                successful: 'successful',
                failed: 'failed',
                inprogess: 'inprogess',
                roleFunctionsAccess: 'role functions access',
                selectGroup: 'select group',
                save: 'save',
                showDefault: 'show default',
                reach: 'reach',
                emailAddress: 'email address',
                adminRights: 'admin rights',
                makeAdmin: 'make admin',
                invite: 'invite',
                userAdministration: 'user administration',
                infrastructureOperations: 'infrastructure operations',
                applicationOperations: 'application operations',
                dataItem: 'data item',
                value: 'value',
                text: 'text',
                actionTaken: 'action taken',
                date: 'date',
                time: 'time',
                welcomeReachPortal: 'Welcome to REACH Portal',
                reachMessage: 'Please register with us to continue',
                organisation: 'organization',
                alreadyUser: ' already user?',
                emailid: 'email id',
                firstname: 'first name',
                lastname: 'last name',
                confirmpassword: 'confirm password',
                userAlreadyRegistered: 'This user is already registered.',
                linkExpired: 'This link has been expired.',
                invalidLink: 'This is an invalid link.',
                createdBy: 'created by',
                sendingInvites: 'sending invites ',
                actionTakenOn: 'action taken on',
                packageDetails: 'package details',
                userDirectory: ' user directory',
                clear: 'clear',
                filter: 'filter',
                employees: 'employees',
                customers: 'customers',
                partners: 'partners',
                manufacturers: 'manufacturers',
                copySettings: 'copy settings',
                copyPermissions: 'copy permissions',
                paste: 'paste',
                pasteFailed: 'paste failed',
                remove: 'remove',
                search: 'search',
                searchName: 'search name',
                enterEmailId: ' enter email id',
                scriptName: 'script name',
                package: 'package',
                packageDefinition: ' package definition',
                name: 'name*',
                group: 'group',
                enableRetries: 'enable retries',
                enterPassword: 'enter password',
                remoteDesktopLogin: 'remote desktop login',
                login: 'login',
                forbidden: 'forbidden',
                created: 'created',
                run: 'run',
                transfer: 'transfer',
                transferred: 'transferred',
                transferTo: 'transfer to',
                transferFrom: 'transfer from',
                transferSuccess: 'file transferred successfully!',
                transferFail: 'file transferred failed.',
                transferType: 'transfer type?',
                filePath: 'file path',
                fileName: 'file name',
                application: 'application',
                arguments: 'arguments',
                add: 'add',
                instruction: 'instruction',
                destinationDirectory: 'destination directory',
                selectDependency: 'select dependency',
                selectPackage: 'select package',
                usersNotified: 'users notified',
                totalRevolutions: 'total revolutions',
                selectAll: 'select all',
                baNumber: 'BA Number',
                modelNo: 'model no.',
                serialNo: 'serial no.',
                deployDate: 'deploy date',
                packageStatus: 'package status (o.s.m.a)',
                reason: 'reason',
                deploymentStatus: 'deployment status',
                exportCsv: 'export CSV',
                runAction: 'run action',
                runScript: 'Run Script',
                deployPackage: 'deploy package',
                connectionStatus: 'connection status',
                serialNumber: 'serial number',
                revAppVersion: 'rev. app version',
                scripts: 'scripts',
                reports: 'reports',
                packages: 'packages',
                notes: 'notes',
                viewAll: 'view all',
                viewLess: 'view less',
                searchPackage: 'search deployed packages',
                task: 'task',
                edit: 'edit',
                delete: 'delete',
                create: 'create',
                transferingFiles: 'transferring files',
                filesTransferred: 'File Transferred to the device',
                addFile: 'add more files',
                transferFiles: 'transfer files',
                browseFile: 'browse file',
                selectFileMessage: 'Select a file from your system',
                userAdmin: 'userAdmin',
                applicationOperation: 'applicationOperation',
                success: 'success',
                pleaseTryAgain: 'Please Try Again',
                userActivity: 'user activity',
                listOfActivity: 'list of activities performed by this user',
                csvFile: 'CSV File',
                dropFile: 'drop file here',
                dragCsvFile: 'drag csv file',
                withOutPackage: 'without package',
                withOutDataItem: 'Without this data Item',
                advancedSearch: 'advanced search',
                clearSearch: 'clear search',
                saveSearch: 'save search',
                inValidEmail: 'please check invalid emails',
                addCustomers: 'add customers',
                searchCustomers: 'search customers or state',
                searchModels: 'search models',
                searchLocations: 'search locations',
                searchStores: 'search stores',
                searchByBANumber: 'Search by Serial No. or Store name',
                asset: 'asset',
                companyName: 'company name',
                state: 'state',
                city: 'city',
                machines: 'machines',
                zipCode: 'zipcode',
                condition: 'condition',
                pullFileErrTitle: 'This instruction will Pull a file or files from the asset to IoT Platform',
                pushFileErrTitle: `Click Browse to select the file that you want to download to assets.
                Then, click Push to transfer the file from your computer to the Platform server.`,
                restartErrTitle: 'This instruction will execute a command on the asset.',
                unRegisterErrTitle: 'This instruction will have the agent to unregister the specified script.',
                runScriptErrTitle: 'This instruction will have the agent to run the specified script.',
                errTitle: 'This instruction will execute a command on the asset.',
                customQuery: 'custom query',
                scopeOfWork: 'scope of work',
                addCustomMetrics: 'add custom metrics',
                customerList: 'customer list',
                selectCustomersMessage: 'Select the customers that you want to assign to this user',
                organizationDomains: 'organization domains ',
                clickOrganization: 'click on organization names to add their domains.',
                searchOrganization: 'search organization',
                enterDomainName: 'enter domain name',
                switchUser: 'switch user',
                searchRevolution: 'search revolution',
                all: 'all',
                packageList: 'package list',
                approvalRequest: 'approval request',
                approvalStatus: 'approval status',
                approver: 'approver',
                next: 'next',
                levelOfApproval: 'level of approval',
                requestedBy: 'requested by',
                approvalLevel: 'approval level',
                comments: 'comments',
                reject: 'reject',
                level: 'level',
                approve: 'approve',
                directorApprover: 'director approver',
                vpApprover: 'VP Approver',
                searchParameters: 'search parameters',
                searchResults: 'search results',
                use: 'use',
                searchSaveSearches: 'search saved searches',
                savedSearches: 'saved search',
                makePublic: 'make public',
                proceed: 'proceed',
                searchResultName: 'search results name',
                uploadScript: 'upload script',
                path: 'path',
                addComment: 'add comments',
                noComments: 'no comments added',
                pkgDepRequest: 'package deployment request',
                selectAnyOneForApprove: 'select any one device for deployment',
                note: 'Note:',
                pkgRejectionMsg: 'this package has been rejected ',
                rejectionComment: 'please add comment for the rejection below.',
                comment: 'comment',
                results: 'results',
                done: 'done',
                deploymentMessage: 'has request for approval of the package',
                push: 'push',
                browse: 'browse',
                approver1: 'approver 1',
                approver2: 'approver 2',
                totalRev: 'total rev',
                addCommentsMsg: 'comment is required',
                commentsMsg: 'add valid comment',
                none: 'none',
                pushSucessMessage: 'push successful.',
                fileTypeValidationRegisterScript: 'please upload files having extensions: .exe , .bat only',
                fileTpeValidationReleaseNote: 'please upload files having extensions: .pdf only',
                pushFailErrorMessage: 'Push Failed. Please try again.',
                selectUser: 'select user',
                superAdminPermissions: `can't remove admin permissions for super-admin`,
                avgNoteVolume: 'avg. note volume',
                lastPreventiveMaintenance: 'last preventive maintenance',
                nextPreventiveMaintenance: 'next preventive maintenance',
                stop: 'stop',
                idleTime: 'idle time',
                storeName: 'store #',
                appNumber: 'app number',
                totalCases: 'total cases',
                selectAtleastOne: 'please select atleast one revolution from the list.',
                atleastOneCustomer: 'user should have atleast one Customer',
                reset: 'reset',
                searchByCsv: 'Search By CSV File',
                searchBasedOnCSV: 'search for machines based on your CSV file.Just Drag and drop the file here.',
                dropFileHere: 'drop file here',
                upTimeBy: 'uptime by',
                upTimeRatio: 'uptime ratio',
                potentialOutageMinutes: 'potential outage minutes',
                potentialStoreMinutes: 'potential store minutes',
                ratioResult: 'ratio result',
                noItems: 'no items found',
                interventionRatioBy: 'intervention ratio by',
                percentageOfIntervention: '% of intervention',
                storeChart: 'storeChart',
                userChart: 'userChart',
                transactionBartChart: 'transactionBartChart',
                totalUpTimeBy: 'total up time percentage over ',
                reliabilityTree: 'reliability tree',
                overallReliability: 'overall reliability',
                incidents: 'incidents',
                incidentsWithPartsReplaced: 'incidents with parts replaced',
                clearAll: 'clear all',
                clearDates: 'clear dates',
                startDate: 'start date',
                endDate: 'end date',
                noAlertsAvailable: 'no alerts available',
                enablePeriod: 'enable period',
                yes: 'yes',
                no: 'no'
            },
            menu: {
                home: 'home',
                alert: 'daily alerts dashboard',
                dashboard: 'daily dashboard',
                executiveDashboard: 'executive dashboard',
                connectedHealth: 'connected health',
                customerDashboard: 'customer dashboard',
                predictiveAnalytics: 'predictive analytics',
                volumeDashboard: 'volume dashboard',
                machineDashboard: 'machine dashboard',
                userExperience: 'user experience',
                profile: 'profile',
                viewProfile: 'view profile',
                changePassword: 'change password',
                logout: 'logout',
                adminPanel: 'admin panel',
                package: 'packages',
                studentData: ' student data',
                aboutUs: 'about us',
                searchByEmail: 'search by email',
                enterNameOrEmail: 'Enter Name or Email ID',
                ratioResult: 'ratio result'
            },
            revolutionDashboard: {
                errorLogsDesc: 'displaying the latest 20 error log files. click on the Run button to refresh the list',
                alertData: 'alert data',
                alertStatus: 'alert status',
                alertIndicators: 'alert indicators',
                needMaintenance: 'needs maintenance',
                errorCode: 'error code',
                acceptor: 'acceptor',
                dispensor: 'dispensor',
                odometers: 'odometers',
                revolutionUptime: 'revolution uptime',
                systemStatus: 'system status',
                systemErrorCode: 'system error code',
                systemErrorCodeDescription: 'system error code description',
                errorWatchList: 'error watchlist',
                totalDenominations: 'total denominations',
                totalAcceptance: 'total acceptance',
                totalDispenses: 'total dispenses',
                cpuUsage: 'CPU Usage',
                diskFree: 'disk free',
                fileNameError: 'please remove spaces from the file name.',
                uploadFailed: 'file upload failed. Please try again',
                newNote: 'new note',
                inProgressConfirmation:
                    'Your upload(s) are still in progress. The progress will be lost on leaving the page. Do you want to continue?',
                errorLogRunSuccess: 'error log will take 2 minutes to load, click refresh or fast button after that to return Error Logs.',
                errorLogRunFail: 'run command failed',

            },
            information: {
                packageScheduleTime: 'the scheduled deploy time is based on the time zone in which the asset is located.',
                packageExpiryTime: 'The expiration time is based on the server time zone.'
            },
            filter: {
                percent: 'percent',
                percentage: 'percentage',
                number: 'number',
                all: 'all',
                '0-2hrs': '0 - 2 Hrs',
                '2-4hrs': '2 - 4 Hrs',
                '4-12hrs': '4 - 12 Hrs',
                '12-24hrs': '12 - 24 Hrs',
                casesBy: 'cases by',
                caseType: 'case type',
                area: 'area',
                onSiteTime: 'on-site time',
                filterBy: 'filter by',
                customers: 'customers',
                allCustomers: 'all customers',
                models: 'models',
                allModels: 'all models',
                allLocations: 'all locations',
                period: 'period',
                dateRange: 'date range',
                dateRangeApplied: 'date range applied',
                bnr: 'BNR',
                bnr2: 'BNR2',
                bcr: 'BCR',
                vault: 'vault',
                other: 'other',
                phoneFix: 'phone fix',
                inScope: 'in scope',
                outScope: 'out of scope',
                dispatch: 'dispatch',
                linked: 'linked',
                jobArea: 'job area',
                allTypes: 'all types',
                allDays: 'all days',
                weekDay: 'weekday',
                zone1: 'Zone 1(4 hr)',
                'zone2-3': 'Zone 2 & 3 (6 hr)',
                'zone4-5': 'Zone 4 & 5 (24 hr)',
                slazone: 'SLA zone',
                slaTime: 'SLA Time',
                inTime: 'made',
                outTime: 'missed',
                reportType: 'report type',
                userExperience: 'user experience',
                interventionDriver: 'intervention drivers',
                upTime: 'uptime'
            },
            periods: {
                pasttwelvemonths: 'last 12 months',
                pastsixmonths: 'last 6 months',
                pastthirtydays: 'last 30 days',
                pastsevendays: 'last 7 days'
            },
            periodList: {
                pasttwelvemonths: '365',
                pastsixmonths: '182',
                pastthirtydays: '30',
                pastsevendays: '6'
            },
            areas: {
                bcr: 'BCR',
                bnr: 'BNR',
                bnr2: 'BNR2',
                vault: 'VAULT',
                other: 'OTHER',
                all: 'ALL'
            },
            caseTypes: {
                phoneFix: 'phone fix',
                inScope: 'in scope',
                outOfScope: 'out of scope',
                dispatch: 'dispatch',
                all: 'all',
            },
            days: {
                monday: 'monday',
                tuesday: 'tuesday',
                wednesday: 'wednesday',
                thursday: 'thursday',
                friday: 'friday',
                saturday: 'saturday',
                sunday: 'sunday'
            },
            shortDays: {
                mon: 'mon',
                tue: 'tue',
                wed: 'wed',
                thu: 'thu',
                fri: 'fri',
                sat: 'sat',
                sun: 'sun'
            },
            kpi: {
                casesByOnSiteHours: 'cases by on-site hours',
                averageNumberOfHoursOnSite: 'average number of hours spent on site',
                averageNumberOfHoursOnSiteSubtitle: 'hours spent on site',
                onSiteTimeSpent: 'on-site time spent',
                casesByArea: 'cases by area',
                numberOfCases: 'number of cases by',
                highFrequencyDispatch: 'High Frequency Dispatch Stores',
                numberOfCasesHourly: 'number of cases created hourly',
                casesByHour: 'number of cases by hour in 24hrs period',
                cashFlowInnovation: cashFlowInnovation,
                serviceLevelAgreement: 'service level agreement',
                slaAllZone: 'SLA All Zones',
                onsiteAll: 'on site time - all',
                firstTimeFix: 'first time fix rate',
                upTime: 'up time',
                userExperience: 'user experience',
                interventionDriver: 'intervention driver'
            },
            errorMessage: {
                required: 'this is a required field.',
                firstName: 'first name is required.',
                lastName: 'last name is required.',
                emailId: 'email id is required.',
                invalidEmailId: 'invalid email id.',
                jobTitle: 'job title is required.',
                invalidForm: 'please fill required fields',
                contactNumber: {
                    required: 'phone number is required.',
                    length: 'phone number should contain 10 digits.',
                    invalid: 'Please provide a valid phone number.'
                },
                location: 'location is required.',
                password: 'password is required.',
                passwordMatch: 'password does not match',
                storeNumber: 'store number is required.',
                departmentName: 'department name is required.',
                userType: 'user type is required.',
                wrongPassword: 'please enter correct old password ',
                invalidPassword: 'Password should contain minimum 8 Characters long '
                    + 'with combination of 1 Upper case, 1 Lower case, Special Character & Alpha Numeric',
                errorStore: 'Please enter valid store numbers',
                organisation: 'organization is required',
                company: 'company is required',
                scheduleExpiryDates: 'Expiry cannot be before Schedule',
                passwordMightBeWrong: 'password you entered might be wrong.',
                scheduleDates: 'schedule time should be greater than current time',
                activeCustomerError: 'please add a customer for updating.',
                noActiveCustomer: 'please add a customer for the user.'
            },
            machineDashboard: {
                unitLife: {
                    heading: 'Unit Life and PM Rolling 365 Days',
                    sortThreshold: 'sort threshold',
                    installDate: 'install date',
                    preventativeMaintenance: 'preventative maintenance(s)',
                    lastPreventativeMaintenance: 'last preventative maintenance',
                    nextPreventativeMaintenance: 'next preventative maintenance',
                    fromLastPreventativeMaintenance: 'from last preventative maintenance',
                    lifeTimeCount: 'life time count',
                    volumeLimit: 'volume limit : ',
                    dispatchCases: 'dispatch cases',
                    dispatchCasesInScope: 'dispatch cases - in scope',
                    dispatchCasesOutScope: 'dispatch cases - out-scope',
                    phoneFix: 'Phone Fix',
                    notesCount: 'Last PM Notes Count',
                    coinsCount: 'Last PM Coins Count',
                    execHeading: 'unit life and PM rolling 365 days',
                }
            },
            thresholdList: {
                low: 'low',
                high: 'high',
                medium: 'medium'
            },
            homePage: {
                title: 'RRS Customer Portal',
                customerPortal: 'customer portal',
                goToDashboard: 'go to dashboard',
                signIn: 'sign in',
                getAccess: 'get access',
                comingSoon: 'future feature...',
                signinSection: {
                    title: 'introducing your Revolution Retail Systems',
                    heading: 'revolution enhanced analytics &',
                    subHeading: 'connected health',
                    description: 'Available at your Fingertips through Revolution Customer Portal'
                },
                customerSection: {
                    why: 'why',
                    heading: 'customer portal?',
                    description: 'The RRS Customer Portal is a user friendly state of the art enterprise'
                        + ' software application designed to drive performance management and enhance '
                        + 'visibility into key business drivers which enable Executives,'
                        + ' Business Unit Managers and Functional Staff the ability to review, analyze, '
                        + 'and make informed business operations decisions in near real-time. '
                },
                executiveDashboard: {
                    heading: 'executive dashboard',
                    description: 'The Executive Dashboard provides Company Executives high level '
                        + 'business insights into business operations which enables Executives to make '
                        + 'informed business decisions.  Additionally, the Executive Dashboard saves '
                        + 'Executives time by displaying key measures and performance data of their business'
                        + ' in near real-time all in one centrally located portal.'
                },
                realTimeAnalytics: {
                    heading: 'timely analytics',
                    description: `Drill down into your business's daily, weekly, monthly and yearly data`
                        + ` to review, analyze and forecast business needs and goals for the future.`
                },
                alertsByMetrics: {
                    heading: 'alerts by metrics',
                    description: 'The Alerts by Metrics provides Company Executives high level business '
                        + 'insights into business operations which enables Executives to make informed '
                        + 'business decisions.  Additionally, the Alerts by Metrics saves Executives time by'
                        + ' displaying key measures and performance data of their business in near real-time '
                        + 'all in one centrally located portal.'
                },
                predictiveAnalytics: {
                    heading: 'predictive analytics',
                    description: 'The Predictive Analytics section of the Customer Portal provides '
                        + 'advanced analytics of RRS Revolution Cash Management Machines.  Predictive '
                        + 'Analytics goes beyond knowing what happened and presents the likelihood of future '
                        + 'events happening.  For example, predictive analytics enables Customer '
                        + 'Organizations the ability to forecast when components of the Revolution may expire '
                        + 'earlier than the factory and supplier date. '
                },
                mobileApplication: {
                    heading: 'Mobile Application',
                    description: `Have your Revolution at your finger tips at all times, on the go, so`
                        + ` you can keep a close eye on your business as you're managing your teams and projects or away from the office.`,
                    extendedDescription: 'Customer Portal is both Mobile and Web responsive and supports iOS, Android & Windows'
                },
                ourCustomers: {
                    heading: 'Our Customers',
                    description: 'Join the Revolution to manage your Reports, Analytics & Data'
                },
                getAccessSection: {
                    heading: 'get access',
                    description: 'contact us with the below details'
                },
                footer: {
                    copyRight: '© revolution retail systems, 2018. all rights reserved.',
                    menuList: {
                        about: 'about',
                        solutions: 'solutions',
                        customers: 'customers',
                        contact: 'contact'
                    }
                }
            },
            custDashboard: {
                heading: {
                    modelNoAvgNoteVolume: 'avg. note volume',
                    customerStoreLocations: 'customer store locations',
                    customerStats: 'customer status'
                }
            },
            predictiveAnalytics: {
                heading: {
                    predictiveAnalyticsHeading: 'predictive analytics',
                    monthsForecasting: '12 month forecast',
                },
                body: {
                    inRange: 'in range',
                    outRange: 'out range'
                }
            },
            customerStats: {
                heading: {
                    customerStats: 'customer stats'
                },
                body: {
                    locations: 'locations',
                    units: 'units',
                    caseCounts: 'case counts',
                    dispatches: 'dispatches'
                }
            },
            caseHistory: {
                heading: {
                    caseHistory: 'case history'
                },
                body: {
                    caseNo: 'case no. #',
                    incidentDay: 'incident day',
                    phoneFix: 'phone fix',
                    scopeToWork: 'scope to work',
                    jobType: 'job type',
                    jobDesc: 'job desc',
                    status: 'status'
                }
            },
            caseHistoryMetaData: {
                body: {
                    location: 'location',
                    customer: 'customer',
                    installationDate: 'installation date',
                    phoneFixes: 'phone fixes',
                    dispatchCases: 'dispatch cases',
                    dispatchInScope: 'dispatch (In-Scope)',
                    dispatchOutScope: 'dispatch (Out-Scope)',
                    AvgMonthlyNoteVolume: 'avg. monthly note volume',
                }
            }
        }
    };

    static get average(): string {
        return Languages.get('global.average');
    }

    static get target(): string {
        return Languages.get('global.target');
    }

    static get(key: string, toCase?: CaseConversion, locale?: string) {
        let value: string;
        locale = _.has(this.locales, `[${locale}]`) ? locale : AppConfiguration.global.locale;
        value = _.get(this.locales, `['${locale}'].${key}`, _.get(this.locales, `['en-US'].${key}`, ''));
        switch (toCase) {
            case 'upper':
            case 'toUpper':
            case 'toUpperCase':
                value = _.toUpper(value);
                break;
            case 'lower':
            case 'toLower':
            case 'toLowerCase':
                value = _.toLower(value);
                break;
            case 'capitalize':
            case 'sentence':
                value = _.capitalize(value);
                break;
            case 'start':
            case 'startCase':
            case 'capitalizeEach':
                value = value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                break;
            case 'capitalizeFirst':
                value = value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
                break;
        }
        return value;
    }
}

export abstract class SvgImages {
    public static readonly images = {
        filterIcon:
            `data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQ
            WRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0
            +CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94
            bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIH
            N0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIy
            NHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MTAuMDc4LDM1LjUwOWMtMy4zODgtNy4zMDQtMTAuNzA5LTExLj
            k3Ny0xOC43NjEtMTEuOTc3SDIwLjY4MmMtOC4wNTEsMC0xNS4zNzIsNC42NzItMTguNzYxLDExLjk3NyAgICBzLTIuMjMsMTUuOTExLDIu
            OTY5LDIyLjA2bDE4My4zNjQsMjE2LjgyOHYxNDYuMzI0YzAsNy44MzMsNC40MjYsMTQuOTk1LDExLjQzMywxOC40OTlsOTQuMTI3LDQ3Lj
            A2MyAgICBjMi45MTksMS40Niw2LjA4OCwyLjE4Myw5LjI0OSwyLjE4M2MzLjc4MiwwLDcuNTUyLTEuMDM2LDEwLjg3NC0zLjA4OWM2LjA5
            Ny0zLjc2OSw5LjgwOS0xMC40MjYsOS44MDktMTcuNTk0VjI3NC4zOTcgICAgTDUwNy4xMSw1Ny41NjlDNTEyLjMwOSw1MS40Miw1MTMuND
            Y2LDQyLjgxMyw1MTAuMDc4LDM1LjUwOXogTTI4Ny4yNywyNTMuNDY5Yy0zLjE1NywzLjczNC00Ljg4OSw4LjQ2Ni00Ljg4OSwxMy4zNTVW
            NDM0LjMyICAgIGwtNTIuNzYzLTI2LjM4MVYyNjYuODI1YzAtNC44OS0xLjczMy05LjYyMS00Ljg5LTEzLjM1NUw2NS4yNTksNjQuODk2aD
            M4MS40ODJMMjg3LjI3LDI1My40Njl6IiBmaWxsPSIjMDA2NWE0Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4K
            PGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz
            4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==`,
        notificationBlue:
            `data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvc
        jogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFl
        QRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZC
        I+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc
        2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0
        eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0ibm90aWZpY
        2F0aW9ucy1ub25lIj4KCQk8cGF0aCBkPSJNMjU1LDUxMGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxSDIwNEMyMDQsNDg3LjA1LDIyNi45NSw1MTAsMjU1LDUxM
        HogTTQyMC43NSwzNTdWMjE2Ljc1ICAgIGMwLTc5LjA1LTUzLjU1LTE0Mi44LTEyNy41LTE2MC42NVYzOC4yNUMyOTMuMjUsMTcuODUsMjc1LjQsMCwyNTUsM
        GMtMjAuNCwwLTM4LjI1LDE3Ljg1LTM4LjI1LDM4LjI1VjU2LjEgICAgYy03My45NSwxNy44NS0xMjcuNSw4MS42LTEyNy41LDE2MC42NVYzNTdsLTUxLDUxd
        jI1LjVoNDMzLjVWNDA4TDQyMC43NSwzNTd6IE0zNjkuNzUsMzgyLjVoLTIyOS41VjIxNi43NSAgICBDMTQwLjI1LDE1MywxOTEuMjUsMTAyLDI1NSwxMDJzM
        TE0Ljc1LDUxLDExNC43NSwxMTQuNzVWMzgyLjV6IiBmaWxsPSIjMDA2NWE0Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+C
        jwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+C
        jwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==`,
        notificationWhite:
            `data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxs
        dXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0
        MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub
        3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIg
        d2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3Bh
        Y2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0ibm90aWZpY2F0aW9ucy1ub25lIj4KCQk8cGF0aCBkPSJNMjU1LDUxMGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxSDIwNEMyMDQ
        sNDg3LjA1LDIyNi45NSw1MTAsMjU1LDUxMHogTTQyMC43NSwzNTdWMjE2Ljc1ICAgIGMwLTc5LjA1LTUzLjU1LTE0Mi44LTEyNy41LTE2MC42NVYzOC4yNUMyOTMuMjUsMT
        cuODUsMjc1LjQsMCwyNTUsMGMtMjAuNCwwLTM4LjI1LDE3Ljg1LTM4LjI1LDM4LjI1VjU2LjEgICAgYy03My45NSwxNy44NS0xMjcuNSw4MS42LTEyNy41LDE2MC42NVYzN
        TdsLTUxLDUxdjI1LjVoNDMzLjVWNDA4TDQyMC43NSwzNTd6IE0zNjkuNzUsMzgyLjVoLTIyOS41VjIxNi43NSAgICBDMTQwLjI1LDE1MywxOTEuMjUsMTAyLDI1NSwxMDJz
        MTE0Ljc1LDUxLDExNC43NSwxMTQuNzVWMzgyLjV6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc
        +CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC
        9zdmc+Cg==`
    };
}

enum PeriodValue {
    'pasttwelvemonths' = 0,
    'pastsixmonths' = 1,
    'pastthirtydays' = 2,
    'pastsevendays' = 3
}
export const metricsData = [
    {
        displayName: 'Alert code',
        value: 'alert',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'Needs maintenance code',
        value: 'needsMaintenance',
        disabled: false,
        conditionType: 'number',
    },
    {
        displayName: 'BCR Error Code',
        value: 'BCRErrorCode',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'BNR Error Code',
        value: 'BNRErrorCode',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'Last Sync Time',
        value: 'lastSyncTime',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'Revolution Up Time',
        value: 'revolutionUpTime',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'Alert Status',
        value: 'alertStatus',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Alert Indicators',
        value: 'alertIndicators',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Maintenance Details',
        value: 'maintenanceDetails',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BCR Status',
        value: 'BCRStatus',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BCR Error Code Description',
        value: 'BCRErrorCodeDesc',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BNR Error Code Description',
        value: 'BNRErrorCodeDesc',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BNR Status',
        value: 'BNRStatus',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BCR Odometers',
        value: 'BCROdometers',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'BNR Odometers',
        value: 'BNROdometers',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'System Error Code',
        value: 'systemErrorCode',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'System Error Code Description',
        value: 'systemErrorCodeDesc',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'System Status',
        value: 'systemStatus',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Error Watch List',
        value: 'errorWatchList',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Total Denominations',
        value: 'totalDenominations',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Total Acceptance',
        value: 'totalAcceptance',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'Total Dispenses',
        value: 'totalDispenses',
        conditionType: 'text',
        disabled: false
    },
    {
        displayName: 'CPU Usage',
        value: 'CPUUsage',
        conditionType: 'number',
        disabled: false
    },
    {
        displayName: 'Disk Free',
        value: 'diskFree',
        conditionType: 'number',
        disabled: false
    },
];

export const DataItemMetricsMapper = {
    'Alert code': 'alert',
    'Needs maintenance code': 'needsMaintenance',
    'BCR Error Code': 'BCRErrorCode',
    'BNR Error Code': 'BNRErrorCode',
    'Last Sync Time': 'lastSyncTime',
    'Revolution Up Time': 'revolutionUpTime',
    'Alert Status': 'alertStatus',
    'Alert Indicators': 'alertIndicators',
    'Maintenance Details': 'maintenanceDetails',
    'BCR Status': 'BCRStatus',
    'BCR Error Code Description': 'BCRErrorCodeDesc',
    'BNR Error Code Description': 'BNRErrorCodeDesc',
    'BNR Status': 'BNRStatus',
    'BNR Error Code 2': 'BNRErrorCode2',
    'BNR Error Code Description 2': 'BNRErrorCodeDesc2',
    'BNR Status 2': 'BNRStatus2',
    'BNR Odometers 2': 'BNROdometers2',
    'BCR Odometers': 'BCROdometers',
    'BNR Odometers': 'BNROdometers',
    'System Error Code': 'systemErrorCode',
    'System Error Code Description': 'systemErrorCodeDesc',
    'System Status': 'systemStatus',
    'Error Watch List': 'errorWatchList',
    'Total Denominations': 'totalDenominations',
    'Total Acceptance': 'totalAcceptance',
    'Total Dispenses': 'totalDispenses',
    'CPU Usage': 'CPUUsage',
    'Disk Free': 'diskFree',
    'Revolution Version': 'revolutionVersion',
    'Agent Version': 'agentVersion'
};
