class HomePage {
    visit() {
      cy.visit('/');
    }
  
    get carousel() {
      return cy.get('.carousel');
    }

    get category_list() {
      return cy.get('.list-group a:not(:first-child)');
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
      this.category_list.contains(categoryName).click();
    }

    selectProduct(productName){
      cy.contains(productName).click();
    }

  }
  
  export default new HomePage();
  