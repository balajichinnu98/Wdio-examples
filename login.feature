Feature: iPlayer website

  Scenario Outline: Navigating to the iPlayer, and clicking on the green trigger 

    Given I am on the website 
    When I login to the iplayer page 
    Then I click on the green trigger

    Examples:
      | username | password             | message                        |
      | balajichinu98@outlook.com | I98liverpool | You logged into a secure area! |
    
