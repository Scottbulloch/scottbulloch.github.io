---
custom_edit_url: null
sidebar_position: 2
---

# Common Tasks

## Authentication

Requirements:

Powershell or Python
App Registration Created in Snow Atlas with the correct permmission set for the Actions that will be performed.
API Data Region can be found under **Snow Atlas Settings > Licence Details > General Information in the Portal.**

Usage:

Authentication requires the App Registrations ClientID, Password and Region
Replace the Data with the contents from your App Registration and Region

Python Sample:

```python
import requests
import urllib
import json

#Connect to Atlas
client_id = 'XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX'
client_secret = 'XXXXXXXXXXXXXXXXXXXXXXXX' 
Region = "XXXXXXXX"

#Format URL
baseurl  = Region+".snowsoftware.io/idp/api/connect/token?"
url = "https://"+Region+".snowsoftware.io/idp/api/connect/token"
params = {'grant_type': 'client_credentials', 'client_id': client_id, 'client_secret': client_secret}
fullUri = url + urllib.parse.urlencode(params)

#Get_Token
headers = {'Content-Type': 'application/x-www-form-urlencoded'}
data = requests.post(url, params, headers)
jsondata = data.content
content = json.loads(jsondata)
token = content['access_token']
print(token)
```

Powershell Sample:

```powershell
#Connect to Atlas
    $client_id = 'XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX'
    $client_secret = 'XXXXXXXXXXXXXXXXXXXXXXX' 
    $Region = "XXXXXXXXXX"

#Get Token
    $TokenContentType = 'application/x-www-form-urlencoded' 
    $Body = @{grant_type = 'client_credentials'
            client_id = $client_id 
            client_secret = $client_secret
        } 
    $Tokenuri =  "https://$Region.snowsoftware.io/idp/api/connect/token"
    $Tokendata = Invoke-WebRequest -Uri $Tokenuri -ContentType $TokenContentType -Method Post -Body $body
    if($Tokendata.Statuscode -eq "200"){
        Write-host "Token Aquired"
        $Token = ($TokenData.Content  | ConvertFrom-Json).access_token
    }

#Print Token
    Write-host $Token    
```

## Get and Export a list of Computers

Requirements:

Powershell or PWSH
App Registration Created in Snow Atlas with the correct permmission set for the Actions that will be performed.
API Data Region can be found under **Snow Atlas Settings > Licence Details > General Information in the Portal.**

Usage:

Authentication requires the App Registrations ClientID, Password and Region
Replace the Data with the contents from your App Registration and Region
Specify the File output location.

```
#Connect to Atlas
    $client_id = 'XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX'
    $client_secret = 'XXXXXXXXXXXXXXXXXXXXXXXXX' 
    $Region = "XXXXXXXXXXXXXXX"
    $CSVPath  = "ComputerExport.csv"

#Get Token
    $TokenContentType = 'application/x-www-form-urlencoded' 
    $Body = @{grant_type = 'client_credentials'
            client_id = $client_id 
            client_secret = $client_secret
        } 
    $Tokenuri =  "https://$Region.snowsoftware.io/idp/api/connect/token"
    $Tokendata = Invoke-WebRequest -Uri $Tokenuri -ContentType $TokenContentType -Method Post -Body $body
    if($Tokendata.Statuscode -eq "200"){
        Write-host "Token Aquired"
        $Token = ($TokenData.Content  | ConvertFrom-Json).access_token
    }

    
#Get Computers (Paginated)
    $ContentType = 'application/json' 
    $headers = @{Authorization = ("Bearer {0}" -f $Token) } 
    #Paginate Starting at Page 1
    $Page = 1
    $itemnumber = 1
    $ComputerObjects = @()
    Do{
        $ComputersUri = "https://$Region.snowsoftware.io/api/sam/estate/v1/computers?page_size=100&page_number=$page"
        $ComputerData = Invoke-RestMethod $ComputersUri -Method 'GET' -Headers $headers -ContentType $ContentType
        $Content = $ComputerData.items
        $Count = $ComputerData.items.count 
    
        $Content | ForEach-Object {           
        $Comuterobject = [PSCustomObject]@{ 
            itemNumber = $itemnumber
            domain = $_.domain
            hostname = $_.hostName
            id = $_.id
            ipAddress = $_.ipAddress
            isPortable = $_.isPortable
            isServer = $_.isServer
            isVDI = $_.isVDI
            isVirtual = $_.isVirtual
            lastScanDate = $_.lastScanDate
            links = $_.links.href
            manufacturer = $_.manufacturer
            model = $_.model
            operatingSystem = $_.operatingSystem
            organizationId = $_.organizationId
            status = $_.status
        }
        $ComputerObjects += $Comuterobject
        $itemnumber++
    }
    $page++ 
    }  
    while ($Count -ge 100) 

$ComputerObjects | Export-Csv -Path $CSVPath -Force
```
