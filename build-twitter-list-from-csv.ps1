param([string]$csv,[string]$delimiter,[string]$handlecolumn)
$resultfile = "$csv-result"
Import-Csv $csv -Delimiter $delimiter | select -ExpandProperty $handlecolumn | where-object { $_ -match "^[a-zA-Z0-9_]+$" } > $resultfile
(Get-Content $resultfile -ReadCount 100) | % { $_ -join "," } > $resultfile