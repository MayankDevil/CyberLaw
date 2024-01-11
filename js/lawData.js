/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/lawData.js
*/
try
{
/*
        LAW DATA :
    */
        var testData = [
            ["SECTION 3 ","AUTHENTICATION OF ELECTRONIC RECORDS BY USE OF DIGITAL SIGNATURE","Welcome to the superhere"],
            ["SECTION 3A ","ANUTHENTICATION OF ELECTRONIC RECORDS BY USE OF ELECTRONIC SIGNATURE",""],
            ["SECTION 4 ","ELECTRONIC RECORDS", " "],
            ["SECTION 5 ","LEGALRECONGNITION OF ELECTRONIC SIGNATURE","  "],
            ["SECTION 6 ","FOUNDATION OF ELETRONIC GOVERRNANCE","  "],
            ["SECTION 7 ","RETENTION OF RECORDS","  "],
            ["SECTION 8 ","PUBLICATION  OF RULE REGULATION ETC, IN ELECTRONIC GAZETTE","  "],
            ["SECTION 9","NO RIGHT TO INSIST DOCUMENT. TO BE IN ELECTRONIC FORM",""],
            ["SECTION 10","POWER TO MAKE RULES BY CENTRAL GOVERNMENT IN RESPECT OF ELECTRONIC SIGNATURE","  "],
            ["SECTION 11","ATTRIBUTION OF ELECTRONIC RECORDS","  "],
            ["SECTION 12","ACKNOWLEGDMENT OF RECEIPT","  "],
            ["SECTION 13","TIME AND PLACE OF DESPACTCH AND RECEIPT OF ELECTRONIC RECORDS","  "],
            ["SECTION 14","SECURE ELECTRONIC RECORD","  "],
            ["SECTION 15","SECURE ELECTRONIC SIGNATURE","  "],
            ["SECTION 16","SECURITY PROCEDURE","  "],
            ["SECTION 17","APPOINTMENT OF CONTROLLER AND OTHER OFFICERS","  "],
            ["SECTION 18","FUNCTIONS OF CONTROLLER","  "],
            ["SECTION 19","RECOGNITION OF FOREIGN CERTIFING AUTHORITIES","  "],
            ["SECTION 21","LICENCE TO ISSUE ELECTRONIC SIGNATURE CERTIFICATES","  "],
            ["SECTION 22","APPLICATION FOR LICENCE","  "],
            ["SECTION 25","SUSPENSION OF LICENCE","  "],
            ["SECTION 30","OBLIGATIONS OF THE CA ","  "],
            ["SECTION 35","CERTIFYING AUTHORITY TO ISSUE ELECTRONIC SIGNATURE SERTIFICATE","  "],
            ["SECTION 43","PENALTY FOR DAMAGE OF COMPUTER, COMPUTER SYSTEM, ETC","  "],
            ["SECTION 43A","COMPENSATION FOR FAILURE TO PROTECT DATA","  "],
            ["SECTION 46","POWER TO ADJUDICATE","  "],
            ["SECTION 58","PROCEDURE AND POWERS OF THE CYBER APPELLATE TRIBUNAL","  "],
            ["SECTION  62","APPEAL TO HIGH COURT","  "],
            ["SECTION 63","COMPOUNDING OF CONTRAVENTIONS","  "]    
        ];
    var CyberLawData = [
        {
            section : `43`,
            title : `Penalties and Compensation for Damage to Computer, Computer System, etc.`,
            define : (`
                <h5> Unauthorized Access </h5>

                <p> Unauthorized access refers to the act of gaining entry into a computer system or network without proper authorization or permission. </p>
                
                <h5> Compensation for Damage </h5>

                <p> If an individual or entity is found guilty of unauthorized access under Section 43, the amendment provides for the possibility of compensation. This means that the person responsible for the unauthorized access may be required to compensate the affected party for any damage caused. </p>

                <h5> Nature of Compensation </h5>

                <p> The compensation can vary based on the extent of the damage caused by the unauthorized access. It aims to provide a remedy for losses suffered by the owner or operator of the computer system as a result of the unauthorized intrusion. </p>
            `),
            amendment : true
        },
        {
            section : `65`,
            title : ` Tampering with Computer Source Code`,
            define : (`
                <h5> loading </h5>

                <ol>
                    <li>
                        <h5>Offense</h5>
                        <p>    </p>
                    </li>
                </ol>
            `),
            amendment : false
        },
        {
            section : ``,
            title : ``,
            define : (`
                <h5> loading </h5>
            `),
            amendment : false
        }
    ]
}
catch(error)
{
    console.error(` IT LAW DATA ERROR : ${error}`)
}