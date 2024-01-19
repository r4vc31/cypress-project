class HomePage {
    visit() {
      cy.visit('/');
    }
  
    get carousel() {
      return cy.get('.carousel');
    }

    clickPreviousCarouselButton() {
        this.carousel.find('.carousel-control-prev').click();
      }
  
    clickNextCarouselButton() {
      this.carousel.find('.carousel-control-next').click();
    }
  
    getCurrentSlide() {
      return this.carousel.find('.carousel-item.active:not(.carousel-item-left):not(.carousel-item-right)');
    }

    selectCategory(categoryName) {
      cy.get('.category-list').contains(categoryName).click();
    }

  }
  
  export default new HomePage();
  