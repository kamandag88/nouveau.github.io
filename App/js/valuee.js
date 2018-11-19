        setup();

        var coverhead;
        var score;
        var coverheadcount;

        var getfireext;
        var getfireextcount;

        var usefireext;
        var usefireextcount;

        var firstexit;
        var firstexitcount;

        var rescueperson;
        var rescuepersoncount;

        var exitafrescue;
        var exitafrescuecount;

        var exitdidnrescue;
        var exitdidnrescuecount;

        function setup(){
        if(cpf)
            cpf.setPinMode('["resetPin"],["setPinMode", "digital", 2,"INPUT"],["setPinMode", "digital", 3,"INPUT"],["setPinMode", "digital", 4,"INPUT"],["setPinMode", "digital", 5,"INPUT"],["setPinMode", "digital", 6,"INPUT"],["setPinMode", "analog", 1,"INPUT"],["setPinMode", "analog", 2,"INPUT"]');
        }



        function loop(){

            if(cpf){

                coverhead = cpf.get("d2");
                document.getElementById("cover").innerHTML = coverhead; 

                if(coverhead == 1 && coverheadcount == 0) {
                    setbackgcover();
                    addscore();
                    addcountercover();
                }
                else{
                    setbackgback();
                }

                if(getfireext == 1 && getfireextcount == 0){
                    setbackggetfire();
                    addscore();
                    addcountergetfire();
                }

                else{
                    setbackgback();
                }

                if(usefireext == 1 && usefireextcount == 0){
                    setbackgusefire();
                    addscore();
                    addcounterusefire();
                }

                else{
                    setbackgback();
                }

                if(firstexit == 1 && firstexitcount == 0){
                    setbackgfirstexit();
                    addscore();
                    addcounterfirstexit();
                }

                else{
                    setbackgback();
                }

                if(rescueperson == 1 && rescuepersoncount == 0){
                    setbackgrescueperson();
                    addscore();
                    addcounterrescueperson();
                }

                else{
                    setbackgback();
                }

                if(exitafrescue <= 30 && exitafrescuecount == 0){
                    setbackgexitafrescue();
                    addscore();
                    addcounterexitafrescue();
                }

                else{
                    setbackgback();
                }

                if(exitdidnrescue <= 30 && exitdidnrescuecount == 0){
                    setbackgexitdidnrescue();
                    addscore();
                    addcounterexitdidnrescue();
                }

                else{
                    setbackgback();
                }

            }

                setTimeout("loop()", 1000); 
        }

        loop();

        function setbackgcover(){
            document.body.style.backgroundImage = "url('img/InsertCoverInfo.jpg')";
        }

        function setbackggetfire(){
            document.body.style.backgroundImage = "url('img/InsertGetFireInfo.jpg')";
        }

        function setbackgusefire(){
            document.body.style.backgroundImage = "url('img/InsertUseFireInfo.jpg')";
        }

        function setbackgfirstexit(){
            document.body.style.backgroundImage = "url('img/InsertFirstExitInfo.jpg')";
        }

        function setbackgrescueperson(){
            document.body.style.backgroundImage = "url('img/InsertRescuePersonInfo.jpg')";
        }

        function setbackgexitafrescue(){
            document.body.style.backgroundImage = "url('img/InsertExitAfterRescueInfo.jpg')";
        }

        function setbackgexitdidnrescue(){
            document.body.style.backgroundImage = "url('img/InsertExitDidnRescueInfo.jpg')";
        }

        function setbackgback(){
            document.body.style.backgroundImage = "url('img/6thScreen.jpg')";
        }

        function addscore(){
            score = score + 100;
            document.getElementById("totalpoint").innerHTML = score;
        }

        function addcountercover(){
            coverheadcount = coverheadcount + 1;
            document.getElementById("covercount")
        }

        function addcountergetfire(){
            getfireextcount = getfireextcount + 1;
            document.getElementById("getfirecount")
        }

        function addcounterusefire(){
            usefireextcount = usefireextcount + 1;
            document.getElementById("usefirecount")
        }

        function addcounterfirstexit(){
            firstexitcount = firstexitcount + 1;
            document.getElementById("firstexitcount")
        }

        function addcounterrescueperson(){
            rescuepersoncount = rescuepersoncount + 1;
            document.getElementById("rescuecount")
        }

        function addcounterexitafrescue(){
            exitafrescuecount = exitafrescuecount + 1;
            document.getElementById("exitafterrescuecount")
        }

        function addcounterexitdidnfrescue(){
            exitdidnrescuecount = exitdidnrescuecount + 1;
            document.getElementById("exitdidnotrescuecount")
        }