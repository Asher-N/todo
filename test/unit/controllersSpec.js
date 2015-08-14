
describe('todoListCtrl', function(){

  beforeEach(module('todo'));
  
  it('should create "notes" model with 4 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('todoListCtrl', {$scope:scope});

    expect(scope.notes.length).toBe(4);
  }));
  

});

