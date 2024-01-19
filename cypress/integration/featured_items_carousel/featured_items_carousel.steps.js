import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../support/pages/base_page';
import HomePage from '../../support/pages/home_page';

Given('I am on the home page', () => {
  BasePage.visit();
});

When('I click the next carousel button', () => {
  HomePage.clickNextCarouselButton();
});

Then('the next slide is displayed', () => {
  
  HomePage.getCurrentSlide().should('be.visible'); // Espera a que la diapositiva sea visible

  const currentSlideBefore = HomePage.getCurrentSlide();
  HomePage.clickNextCarouselButton();
  const currentSlideAfter = HomePage.getCurrentSlide();
  currentSlideBefore.should('not.equal', currentSlideAfter);
});



When('I click the previous carousel button', () => {
  HomePage.clickPreviousCarouselButton();
});

Then('the previous slide is displayed', () => {
  HomePage.getCurrentSlide().should('be.visible'); // Espera a que la diapositiva sea visible

  const currentSlideBefore = HomePage.getCurrentSlide();
  HomePage.clickPreviousCarouselButton();
  const currentSlideAfter = HomePage.getCurrentSlide();
  currentSlideBefore.should('not.equal', currentSlideAfter);
});


Then('the carousel is displayed', () => {
  HomePage.carousel.should('be.visible'); // Espera a que el carrusel sea visible
});

Then('the next slide is displayed', () => {
  const currentSlideBefore = HomePage.getCurrentSlide();
  cy.wait(5000); // Adjust wait time based on carousel rotation speed
  const currentSlideAfter = HomePage.getCurrentSlide();
  cy.wrap(currentSlideBefore).should('not.equal', currentSlideAfter);
});

