'use strict';
 
/* Controllers */

var todoControllers = angular.module('todo', []);

todoControllers.controller('todoListCtrl', ['$scope', 
  function($scope) {

    $scope.notes = [
    {'text': 'CVS',
     'completed': true},
    {'text': 'Doctor',
     'completed': false},
    {'text': 'Detist',
     'completed': true}
  ];


$scope.newtext="";
$scope.newcompleted=false;

  function getCount(status){
    //console.log("status is completed:",status);
    if ($scope.status=='All') 
        return $scope.notes.length;
    
     var completed = ($scope.status=="Active" ? false : true);

      var count=0;
      for (var i=0; i<$scope.notes.length; i++) {
        if ((completed && $scope.notes[i].completed ) || 
            (!completed && !$scope.notes[i].completed )) { //Active
          count++; 
          //console.log($scope.notes[i].text)
        }
      }
      return count;
   }
   
   $scope.status = "All";

   $scope.statusCount = getCount($scope.status);

   /*function(){
      if ($scope.status=='All') 
        return $scope.notes.length;
      else
        return getCount($scope.status=="Active" ? false : true);
   }
   */
   //getCount($scope.status);

   function toggle(){
    $scope.statusCount = getCount($scope.status);
   }

   $scope.toggle = toggle;

  function checkEnter(e){ 
    var characterCode 
    if(e && e.which){ 
      //e = e
      characterCode = e.which 
    }
    else{
      //e = e;
      characterCode = e.keyCode 
    }
    if(characterCode == 13){ 
      return false
    }
    else{
    return true
    }
  }

  $scope.checkEnter=function(e){
    if (!checkEnter(e)){
      $scope.notes.push( 
        { 'text': $scope.newtext,'completed': false})
          //console.log(this.id);
      $scope.newtext="";
      return false;
    }
    else
      return true;
  };
  
  function setStatus(status){
    $scope.status=status;
    $scope.statusCount = getCount($scope.status);
  }

  $scope.setStatus=setStatus;

  function showNote(text,status){
    console.log('shownote status:',$scope.status, "text:",text);


    if ($scope.status=="Active" && !status)
      return text;
 
    if ($scope.status=="Completed" && status)
      return text;




    //if ($scope.status=="All")
      return 'xxxxxxxxx';





  }
  $scope.showNote=showNote;

   $scope.template = {
    "home": "partials/home.html",
    "about": "aboutus.html",
    "contact": "contactus.html"
  }
 
  }]);

