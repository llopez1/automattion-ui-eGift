# automattion-ui-eGift
Automated cud test for Amazon's eGift feature

##Installing Cypress##
###Setup and installation of the Cypress project and dependencies can be performed partially through your operating system’s GUI and CLI or entirely through the CLI (e.g, Terminal, CMD, iTerm2).

###Within the CLI program of choice, change the working directory (cd) to the prospective project folder and run this command:
`git clone git@github.com:rightsline/automation-ui-eGift.git`

##Initialization
###To install Cypress node package and dependencies, run this command from the project folder (e.g., cd automation-ui-tests.)
`npm i`

##Running Cypress
###To run Cypress GUI tools, run this command from the project folder.
`npx cypress open`

###To run Cypress headless-ly (No GUI), run this command from the project folder. With no options, this will run all Cypress Tests. This will also record the run to TestRail.
`npx cypress run`

###To run a specific the spec file headless-ly, run this command from the project folder. 
`npx cypress run -s "cypress/integration/smoke/e-gift/e-gift-card-cud.spec.ts"`

##Additional Information
###Amazon's security against fake profiles is very strong. The login credentials on this project can only be run about once or twice. From there Amazon ###will notice that the credentials are abnormal, therefore the user of the credentials will no longer be permitted to sign in. 
