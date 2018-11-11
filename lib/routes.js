Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  layoutTemplate: 'MasterLayout',
  template:"Home",
   yieldRegions: {
        topNavigationBar: {to : "topnNav"}
    }
});

