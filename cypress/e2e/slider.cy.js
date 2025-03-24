describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Navigation Buttons Test', function () {
  it('Allows user to navigate slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');

    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'London');

    cy.get('.swiper-button-next').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'Paris');

    cy.get('.swiper-button-prev').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'London');

    cy.get('.swiper-button-prev').click();
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Slide Content Test', function () {
  it('Verifies title and description for each slide', function () {
    cy.visit('http://localhost:3000');
    cy.wait(500);
    cy.get('.swiper-slide').eq(0).should('contain', 'Rome').and('contain', 'Italy');
    cy.get('.swiper-slide').eq(1).should('contain', 'London').and('contain', 'United Kingdom');
    cy.get('.swiper-slide').eq(2).should('contain', 'Paris').and('contain', 'France');
  });
});

describe('Swiper Responsiveness Test', function () {
  const viewports = ['macbook-13', 'ipad-2', 'iphone-6'];

  viewports.forEach((viewport) => {
    it(`Swiper layout adapts correctly on ${viewport}`, function () {
      cy.viewport(viewport);
      cy.visit('http://localhost:3000');
      cy.wait(500);
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('not.contain', 'Rome');
    });
  });
});

describe('Swiper Visibility Test', function () {
  it('Checks if gallery and controls are properly visible', function () {
    cy.visit('http://localhost:3000');
    cy.wait(500);
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(500);
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(500);
  });
});
