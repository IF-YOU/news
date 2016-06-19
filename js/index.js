var jrtt = angular.module('jrtt',['ngAnimate','ngRoute','ngTouch'])
jrtt.controller('indexCtrl',['$scope','$x',function($scope,$x){
	$scope.showActions = false;
	$scope.title="刷新";
	if(localStorage.cun){
		$scope.isFirstOpen = false;
	}else{
		$scope.isFirstOpen = true;
	}
	$scope.bian = function(){
		localStorage.cun = true;
		$scope.isFirstOpen = false;
	}
	 $scope.shuju=$x.pddata
 }])
jrtt.factory('$x',[function(){
	return{
		pddata:[
		{name:'推荐',state:true},
		{name:'房产',state:true},
		{name:'电影',state:true},
		{name:'育儿',state:true},
		{name:'养生',state:true},
		{name:'星座',state:true},
		{name:'情感',state:true},
		{name:'家居',state:true},
		{name:'娱乐',state:true},
		{name:'精选',state:false},
		{name:'政务',state:false},
		{name:'历史',state:false},
		{name:'探索',state:false},
		{name:'美文',state:false},
		{name:'搞笑',state:false},
		{name:'星座',state:false},
		{name:'精选',state:false}
		]
	}
}])
jrtt.directive('jrYindao',[function(){
	return{
		replace:true,
		restrict:"E",
		templateUrl:'views/directive/yindao.html',
		link:function($scope,el){
           $(function(){
               var mySwiper = new Swiper ('.swiper-container', {
               	 pagination: '.swiper-pagination',
               })
           })
		}
	}
}]).directive('jrTop',[function(){
	return{
		replace:true,
		restrict:"E",
		templateUrl:'views/directive/top.html'
	}
}]).directive('jrBottom',[function(){
	return{
		replace:true,
		restrict:"E",
		templateUrl:'views/directive/bottom.html'
	}
}])
jrtt.controller('shuaxinCtrl',['$scope','$x',function($scope,$x){

}]) 
jrtt.controller('shipinCtrl',['$scope',function($scope){

}]) 
jrtt.controller('guanxinCtrl',['$scope',function($scope){
     $scope.guanxin = [
     {touxiang:'./images/guanxin1.png',biaoti:'飞机',neirong:'62.2万人关心',state:false,guanzhu:'取消关心',guanxin:'关心'},
     {touxiang:'./images/guanxin2.png',biaoti:'升学考试',neirong:'2.2万人关心',state:false,guanzhu:'取消关心',guanxin:'关心'},
     {touxiang:'./images/guanxin3.png',biaoti:'手机',neirong:'32.2万人关心',state:false,guanzhu:'取消关心',guanxin:'关心'},
     {touxiang:'./images/guanxin4.png',biaoti:'奇葩',neirong:'48.8万人关心',state:false,guanzhu:'取消关心',guanxin:'关心'}
     ]
     $scope.xiaoshi = true;
     $scope.shanchu =function(v){
     	v.state = !v.state
     	 $scope.xiaoshi = false;
     }
}])
jrtt.controller('wodeCtrl',['$scope',function($scope){

}])  
jrtt.controller('dingyueCtrl',['$scope','$x',function($scope,$x){
     $scope.shuju=$x.pddata
     $scope.shanchu =function(v){
     	v.state = !v.state
     }
}])
jrtt.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'indexCtrl',
    templateUrl:'views/template/shuaxin.html',
  }).when('/shuaxin',{
    controller:'shuaxinCtrl',
    templateUrl:'views/template/shuaxin.html',
  }).when('/shipin',{
    controller:'shipinCtrl',
    templateUrl:'views/template/shipin.html',
  }).when('/guanxin',{
    controller:'guanxinCtrl',
    templateUrl:'views/template/guanxin.html',
  }).when('/wode',{
    controller:'wodeCtrl',
    templateUrl:'views/template/wode.html',
  }).when('/dingyue',{
  	controller:'dingyueCtrl',
  	templateUrl:'views/template/dingyue.html',
  }).otherwise({
    redirectTo:'/',
  })
}])



