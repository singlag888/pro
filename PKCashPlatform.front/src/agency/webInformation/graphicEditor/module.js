angular.module('app.GraphicEditor', ['ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.GraphicEditor').config(function ($stateProvider) {

    $stateProvider
        .state('app.GraphicEditor', {
            abstract: true,
            data: {
                // title: '图文编辑'
                title: 'GraphicEditor'
            }
        })
        .state('app.GraphicEditor.Logo', {
            url: '/GraphicEditor/Logo',
            data: {
                // title: 'LOGO管理'
                title: 'LogoManagement'
            },
            views: {
                "content@app": {
                    controller: 'LogoCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Logo.html"
                }
            }
        })
        .state('app.GraphicEditor.Float', {
            url: '/GraphicEditor/Float',
            data: {
                // title: '浮动图片'
                title: 'FloatImg'
            },
            views: {
                "content@app": {
                    controller: 'FloatCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Float.html"
                }
            }
        })
        .state('app.GraphicEditor.FloatGo', {
            url: '/GraphicEditor/FloatGo?id',
            data: {
                // title: '浮动图片'
                title: 'FloatImg'
            },
            params:{float_id:null},
            views: {
                "content@app": {
                    controller: 'FloatGoCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/FloatGo.html"
                }
            }
        })
        .state('app.GraphicEditor.Notice', {
            url: '/GraphicEditor/Notice',
            data: {
                title: 'Notice'
            },
            views: {
                "content@app": {
                    controller: 'NoticesCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Notice.html"
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'vendor.ui.js'
                    ]);
                }
            }
        })
        .state('app.GraphicEditor.AddNotice', {
            url: '/GraphicEditor/AddNotice',
            data: {
                title: 'Notice'
            },
            views: {
                "content@app": {
                    controller: 'AddNoticesCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/AddNotice.html"
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.GraphicEditor.ModifyNotice', {
            url: '/GraphicEditor/ModifyNotice?id',
            data: {
                title: 'Notice'
            },
            views: {
                "content@app": {
                    controller: 'ModifyNoticesCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/ModifyNotice.html"
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'vendor.ui.js'
                    ])

                }
            }
        })
        .state('app.GraphicEditor.Advertisement', {
            url: '/GraphicEditor/Advertisement',
            data: {
                // title: '广告管理'
                title: 'Advertisement'
            },
            views: {
                "content@app": {
                    controller: 'AdvertisementCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Advertisement.html"
                }
            }
        })
        .state('app.GraphicEditor.modifyAdvertisement', {
            url: '/GraphicEditor/modifyAdvertisement?id',
            data: {
                title: 'Advertisement'
            },
            params:{id:null,index:null},
            views: {
                "content@app": {
                    controller: 'AddAdvertisementCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/modifyAdvertisement.html"
                }
            }
        })
        .state('app.GraphicEditor.GamePic', {
            url: '/GraphicEditor/GamePic',
            data: {
                title: 'GamePic'
            },
            views: {
                "content@app": {
                    controller: 'GamePicCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/GamePic.html"
                }
            }
        })
        .state('app.GraphicEditor.Swiper', {
            url: '/GraphicEditor/Swiper',
            data: {
                title: 'SwiperImg'
            },
            views: {
                "content@app": {
                    controller: 'SwiperCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Swiper.html"
                }
            }
        })
        .state('app.GraphicEditor.Upload', {
            url: '/GraphicEditor/Upload',
            data: {
                // title: '附件上传'
                title: 'Upload'
            },
            views: {
                "content@app": {
                    controller: 'UploadCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Upload.html"
                }
            }
        })
        .state('app.GraphicEditor.Attachment', {
            url: '/GraphicEditor/Attachment',
            data: {
                // title: '附件管理'
                title: 'Attachment'
            },
            views: {
                "content@app": {
                    controller: 'AttachmentCtrl',
                    templateUrl: "views/webInformation/GraphicEditor/views/Attachment.html"
                }
            }
        })

});