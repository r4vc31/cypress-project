@shopping-cart @regression
Feature: Shopping Functionality on DemoBlaze

  @category-selection @smoke @sanity
  Scenario: User selects a category and verifies category page
    Given I visit the DemoBlaze website
    When I select the "Phones" category
    Then the product "Samsung galaxy" is displayed

 @product-selection @smoke @sanity
  Scenario: User selects a product and views product details
    Given I visit the DemoBlaze website
    And I select the "Laptops" category
    When I select a product
    Then the product details page is displayed

    


