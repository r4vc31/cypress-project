@regression @smoke @header-navigation
Feature: Header Navigation

  @sanity
  Scenario: User can navigate to the Home page
    Given I am on any page
    When I click the Home link in the header
    Then the Home page is displayed

  @sanity
  Scenario: User can navigate to the About Us page
    Given I am on any page
    When I click the About Us link in the header
    Then the About Us page is displayed

  @sanity
  Scenario: User can navigate to the Contact Us page
    Given I am on any page
    When I click the Contact Us link in the header
    Then the Contact Us page is displayed
