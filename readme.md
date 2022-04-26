# Active Directory Passoword Changer API
## Linux Servers ONLY
## **sudo apt install samba-common-bin**
## /change 
```json
{   
    "oldPass" : "UserOldPassword",
    "newPass" : "UserNewPassword",
    "user" : "ad-username"
}
```
Set Server IP on .env, use .env.model as base </br>
If script fails, run 
```bash
sudo chmod 777 src/utils/change.sh
```