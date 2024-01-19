@shopping-cart @regression
Feature: Shopping Functionality on DemoBlaze

  @category-selection @smoke @sanity
  Scenario: User selects a category and verifies category page
    Given I visit the DemoBlaze website
    When I select the "Laptops" category
    Then the category page for "Laptops" is displayed


