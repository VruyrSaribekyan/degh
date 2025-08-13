FOR WORK INSTALL NODE 13 
npm run dev 

### Upload to server

1. Connect to server
2. Go to `/var/www/html/actual_front`
3. `screen -S unit -X quit;`
4. `git pull`
5. `npm i`
6. `npx next build`
7. `screen -dmS unit npx next start -p 3000`
