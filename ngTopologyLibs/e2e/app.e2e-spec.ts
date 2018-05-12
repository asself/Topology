import { NgTopologyLibsPage } from './app.po';

describe('ng-topology-libs App', function() {
  let page: NgTopologyLibsPage;

  beforeEach(() => {
    page = new NgTopologyLibsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
