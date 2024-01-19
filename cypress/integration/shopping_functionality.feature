@shopping-cart @regression
Feature: Shopping Functionality on DemoBlaze

  @category-selection @smoke @sanity
  Scenario: User selects a category and verifies category page
    Given I visit the DemoBlaze website
    When I select the "Phones" category
    Then the product "Samsung galaxy" is displayed

    


