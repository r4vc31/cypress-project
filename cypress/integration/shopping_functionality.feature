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

  @cart-interactions @regression
  Scenario: User adds a product to the cart and verifies cart contents
    Given I visit the DemoBlaze website
    And I select the "Laptops" category
    Then I select a product
    When I add the product to the cart
    And I move to the product page
    Then the cart page is displayed
    And the cart contains a product

  @cart-interactions @regression
  Scenario: User removes an item from the cart
    Given I visit the DemoBlaze website
    And I select the "Phones" category
    Then I select a random product
    And I add the product to the cart
    When I move to the product page
    And I remove the added product
    Then the cart is empty



