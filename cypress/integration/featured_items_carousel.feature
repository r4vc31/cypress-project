@regression @smoke @featured-items
Feature: Featured Items Carousel

  @sanity
  Scenario: User can navigate through carousel slides
    Given I am on the home page
    When I click the next carousel button
    Then the next slide is displayed

  @sanity
  Scenario: User can navigate to the previous slide
    Given I am on the home page
    When I click the previous carousel button
    Then the previous slide is displayed

  @sanity
  Scenario: Carousel auto-rotates items
    Given I am on the home page
    Then the carousel is displayed
    Then the next slide is displayed
