# Project upload-twitter-list
Scripts which add or remove Twitter list members.

Built by @kordianbruck on codementor.io

Forked and extended by @vladi_velikov / https://PluginsBlog.com :
 - PowerShell script to build an input file out of CSV with Twitter handles. Splits the handles in batches of 100 which is the API limit and ignores any invalid (non-alphanumeric) handles.
 - PowerShell script to read batches of handles from an input file and upload them to the list.
 - providing the array of user handles and the action type as parameters.
 - ability to remove an array of user handles from a twitter list.

CAUTION: Using these scripts with a large number of Twitter accounts can lead to your Twitter account being limited as per The Twitter Rules: https://help.twitter.com/en/rules-and-policies/twitter-rules

The API allows adding/removing up to 100 accounts but the current scripts execute those in a loop to consume the whole list of Twitter accounts you want to handle. This can be considered by Twitter as "spamming activity" when the Twitter list is public as it sends notifications to all users added to the list.

The exact limitations are not clearly stated by Twitter. By experiment as of 1 Jan 2019 no restrictions are imposed when handling ~1500 accounts per day but this can change. If the threshold has been crossed the account is usually limited to prevent both manual and automatic Twitter list editing for the next 24 hours.

IMPORTANT: These scripts are provided as-is and the author/contributor does not take any resposibility for their use or impact.

## Creating a file with batches of Twitter user handles from CSV.
	powershell -executionpolicy unrestricted -file .\build-twitter-list-from-csv.ps1
		-csv TWITTER_HANDLES_CSV -delimiter CSV_DELIMITER -handlecolumn TWITTER_HANDLE_CSV_COLUMN
Example:

	powershell -executionpolicy unrestricted -file .\build-twitter-list-from-csv.ps1
		-csv C:\data\twitter-handles.csv -delimiter ";" -handlecolumn "twitter_handle"

## Creating a file with batches of Twitter user handles from a text document.
This script matches anything starting with a @. In case additional filtering criteria is required (e.g. if the document contains email addresses) extend the pattern matching logic. 

	powershell -executionpolicy unrestricted -file .\build-twitter-list-from-document.ps1
		-document DOCUMENT
Example:

	powershell -executionpolicy unrestricted -file .\build-twitter-list-from-document.ps1
		-document C:\data\document.txt

## Adding a whole file with users to a Twitter list in batches.
	powershell -executionpolicy unrestricted -file .\add-twitter-members.ps1
		-handlesfile TWITTER_HANDLES_FILE -listhandle LIST_HANDLE
Example:

	powershell -executionpolicy unrestricted -file .\add-twitter-members.ps1
		-handlesfile C:\data\twitter-handles.csv-result -listhandle "my-twitter-list"

## Removing a whole file with users from a Twitter list in batches.
	powershell -executionpolicy unrestricted -file .\remove-twitter-members.ps1
		-handlesfile TWITTER_HANDLES_FILE -listhandle LIST_HANDLE
Example:

	powershell -executionpolicy unrestricted -file .\remove-twitter-members.ps1
		-handlesfile C:\data\twitter-handles.csv-result -listhandle "my-twitter-list"
 
## Adding/Removing an array of (up to 100) users to a Twitter list.

 1. Create your twitter list first.
 2. Make sure node is installed (https://nodejs.org/en/download/).
 3. Create a twitter app at https://apps.twitter.com/app/new .
 4. Download the files locally.
 5. Replace the text in the server.js file with the following variables from your twitter app: "YOUR\_CONSUMER\_KEY", "YOUR\_CONSUMER\_SECRET", "YOUR\_ACCESS\_TOKEN", "YOUR\_ACCESS\_TOKEN\_SECRET", "YOUR\_HANDLE".
 6. Go to the containing folder run the following command:
 6.1. to add the listed users

	node server.js add USER_HANDLES_ARRAY LIST_HANDLE

 6.2. to remove the listed users

	node server.js remove USER_HANDLES_ARRAY LIST_HANDLE