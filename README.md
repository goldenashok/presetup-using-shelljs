# presetup-using-shelljs
The below POC is used to clone the files from the git and store it in to the specific mentioned folder
- The pre setup POC is used to clone the repository from git and store it specified folder and copy from source to destination
- The first step create the package.json file using the ```npm init -y``` this will create initall setup in the package.json without asking any question
- Then create pre-setup.js (the name is our choise) and added whatever our need.
- Add comand ```'set-up': 'node pre-setup.js'``` under the ```script``` in the package.json
- Run the comand in the cmd functionality will work. close the file from the git and store it into the source folder and then copy to public folder.
