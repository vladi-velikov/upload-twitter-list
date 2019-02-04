param([string]$handlesfile,[string]$listhandle)
(Get-Content $handlesfile) | % { node server.js remove $_ $listhandle }
