@shopping-cart @regression
Feature: Shopping Functionality on DemoBlaze

  Background:
    Given I visit the DemoBlaze website

  @category-selection @smoke @sanity
  Scenario Outline: User selects a category and verifies category content
    When I select the "<categoryName>" category
    Then the product list is displayed
    And the product "<productName>" is present
    Examples:
      | categoryName   | productName        |
      | Phones         | Samsung galaxy s6  |
      | Laptops        | Sony vaio i7       |
      | Monitors       | ASUS Full HD       |

  @product-selection @smoke @sanity
  Scenario: User selects a product and navigates to its page
    When I select the "Laptops" category
    Then the product list is displayed
    And I select the "Sony vaio i5" product
    Then the product page is displayed

  @cart-interactions @regression
  Scenario: User adds a product to the cart and verifies cart contents
    When I select a random category
    Then the product list is displayed
    And I select a random product
    Then the product page is displayed
    And I add the product to the cart
    When I click the "Cart" link in the header
    Then the "Cart" page should be displayed
    And the cart contains a product

  @cart-interactions @regression
  Scenario: User removes an item from the cart
    When I select a random category
    Then the product list is displayed
    And I select a random product
    Then the product page is displayed
    And I add the product to the cart
    When I click the "Cart" link in the header
    Then the "Cart" page should be displayed
    And the cart contains a product
    And I remove the added product
    Then the cart is empty

  @checkout @regression
  Scenario: User completes a purchase
    When I select a random category
    Then the product list is displayed
    And I select a random product
    Then the product page is displayed
    And I add the product to the cart
    When I click the "Cart" link in the header
    Then the "Cart" page should be displayed
    And the cart contains a product
    When I proceed to checkout
    And I enter the order info
    And I confirm the order
    Then the order is successfully placed


