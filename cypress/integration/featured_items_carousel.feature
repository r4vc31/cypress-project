@regression @smoke @featured-items
Feature: Featured Items Carousel

  Background:
    Given I visit the DemoBlaze website

  @carousel @regression
  Scenario: User can navigate to the next slide
    When I click the next carousel button
    Then the next slide is displayed

  @carousel @regression
  Scenario: User can navigate to the previous slide
    When I click the previous carousel button
    Then the previous slide is displayed

  @carousel @smoke
  Scenario: Carousel auto-rotates items
    Then the carousel is displayed
    And the next slide is displayed
