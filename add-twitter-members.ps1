param([string]$handlesfile,[string]$listhandle)
(Get-Content $handlesfile) | % { node server.js add $_ $listhandle }
