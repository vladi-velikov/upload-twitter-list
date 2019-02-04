param([string]$document)
$resultfile = "$document-result"
select-string -Path $document -Pattern "\@[a-zA-Z0-9_ ]+" -AllMatches | % { $_.Matches } | % { $_.Value } | where-object { $_ -ne "" -and !$_.Contains(" ") } > $resultfile
(Get-Content $resultfile -ReadCount 100) | % { $_ -join "," -replace "@",""} > $resultfile
