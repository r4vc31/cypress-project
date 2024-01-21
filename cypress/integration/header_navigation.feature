@regression @smoke @header-navigation
Feature: Header Links Navigation on DemoBlaze

  Background:
    Given I visit the DemoBlaze website

  @header @smoke
  Scenario: Navigate to Home page
    When I click the "Home" link in the header
    Then the "Home" page should be displayed

  @header @regression
  Scenario: Navigate to About Us page
    When I click the "About us" link in the header
    Then the "About us" page should be displayed

  @header @regression
  Scenario: Navigate to Contact page
    When I click the "Contact" link in the header
    Then the "Contact" page should be displayed

  @header @regression @data-driven
  Scenario Outline: Navigate to pages
    When I click the "<linkName>" link in the header
    Then the "<linkName>" page should be displayed

    Examples:
      | linkName       |
      | Home           |
      | Contact        |
      | About us       |
      | Cart           |
      | Log in         |
      | Sign up        |
