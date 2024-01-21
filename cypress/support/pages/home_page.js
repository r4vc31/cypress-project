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

    get product_list() {
      return cy.get('#tbodyid > div');
    }

    getProductTitle(productName) {
      return this.product_list.contains('h4.card-title', productName);
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
      this.getProductTitle(productName).contains("a").click();
    }

    selectRandomCategory(){
      cy.fixture("categories").as("categories");
      cy.get("@categories").then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.selectCategory(data[randomIndex].name);
      });
    }

    selectRandomProduct(){
      this.product_list.then(($elements) => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements).eq(randomIndex).find('h4.card-title').find("a").click();
      });
    }

  }
  
  export default new HomePage();
  