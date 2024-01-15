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
            section : `43A`,
            title : `Protection of Sensitive Personal Data`,
            define : (`
                <h5> Data Protection </h5>
                <p> Section 43A focuses on protecting sensitive personal data from unauthorized access, disclosure, or misuse.</p>
                
                <h5> Reasonable Security Practices </h5>
                <p> It mandates that entities handling sensitive personal information must implement reasonable security practices to protect the data. </p>
                
                <h5> Liability for Negligence </h5>
                <p>  If a party fails to maintain reasonable security practices and causes wrongful loss or gain, they may be liable for compensation. </p>

                <h5> Sensitive Personal Data </h5>
                <p> Refers to information such as passwords, financial data, health records, and other personal details that require special protection. </p>

                <h5> Compensation for Wrongful Loss or Gain </h5>
                <p> Entities failing to protect sensitive data may be required to compensate individuals affected by any wrongful loss or gain due to the negligence. </p>
            `),
            amendment : true
        },
        {
            section : `43B`,
            title : `Disclosure of Information Security Breaches`,
            define : (`
                <h5> Breach Notification </h5>
                <p> This section mandates entities handling sensitive personal data to disclose any significant data security breaches. </p>

                <h5> Timely Reporting </h5>
                <p> If there's a breach that compromises sensitive information, the entity must promptly report the incident to the affected individuals and the appropriate government authorities. </p>

                <h5> Nature of Information </h5>
                <p> The disclosure must include details about the nature of the information security breach and the measures taken to address the breach. </p>

                <h5> Protecting Affected Parties </h5>
                <p> The aim is to ensure affected individuals are informed about the breach promptly, allowing them to take necessary steps to protect themselves. </p>
            `),
            amendment : false
        },
        {
            section : `65`,
            title : ` Tampering with Computer Source Code`,
            define : (`
                
                <h5>Offense</h5> 
                
                <p> This section makes it an offense to tamper with or alter computer source code without authorization.</p>
            
                <h5>Computer Source Code</h5>

                <p>  Source code is the human-readable version of computer programs. Tampering with it means making unauthorized changes to the instructions that tell a computer how to function. </p>
            
                <h5>Punishment</h5>

                <p> Individuals found guilty of tampering with computer source code can face imprisonment up to three years or a fine or both. The severity of the punishment depends on the nature and impact of the tampering. </p>
            
                <h5>Intent Matters:</h5>

                <p> The law considers the intent behind the tampering. If someone deliberately alters source code to cause harm or damage, the legal consequences are more severe. </p>
            
            `),
            amendment : false
        },
        {
            section : `66`,
            title : `Unauthorized Access to Computer Systems`,
            define : (`
                <h5> Offense </h5>
                <p> It makes it an offense to gain unauthorized access to a computer system or network. </p>

                <h5> Intent Matters </h5>
                <p> The law considers the intent behind the unauthorized access, especially if it involves criminal activities such as fraud or causing damage. </p>

                <h5> Penalty </h5>
                <p>  Individuals found guilty of unauthorized access under Section 66 can face Imprisonment for a term that may extend to three years, or A fine, or Both imprisonment and a fine.</p>

                <h5> Prevention of Fraud </h5>
                <p> Section 66 is aimed at preventing and penalizing unauthorized access, particularly when it is done with the intent to commit fraud. </p>
            `),
            amendment : true
        },
        {
            section : `66B`,
            title : `Dishonestly Receiving Stolen Computer Resources`,
            define : (`
                <h5> Offense </h5>
                <p>  Section 66B makes it an offense to dishonestly receive stolen computer resources or communication devices. </p>

                <h5> Nature of Offense </h5>
                <p> This section is concerned with the act of knowingly receiving computer resources or devices that have been stolen. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 66B may face imprisonment for a term that can extend up to three years, or a fine, or both. </p>

                <h5> Intent Matters </h5>
                <p> The law considers the dishonest intent behind receiving stolen computer resources. </p>
            `),
            amendment : false
        },
        {
            section : `66C`,
            title : `Identity Theft`,
            define : (`
                <h5> Offense </h5>
                <p>  Section 66C focuses on the offense of identity theft, which involves dishonestly and fraudulently using someone else's identity. </p>

                <h5> Nature of Offense </h5>
                <p> This section deals with actions like stealing or impersonating another person's identity for wrongful gain. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 66C may face imprisonment for a term that can extend up to three years, or a fine, or both. </p>

                <h5> Intent Matters </h5>
                <p> The law considers the dishonest and fraudulent intent behind identity theft. </p>
            `),
            amendment : false
        },
        {
            section : `66D`,
            title : `Cheating by Personation Using a Computer Resource`,
            define : (`
                <h5> Offense </h5>
                <p> Section 66D focuses on the offense of cheating by personation using a computer resource. </p>

                <h5> Nature of Offense </h5>
                <p> This section deals with fraudulent activities where someone uses a computer resource to impersonate another person. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 66D may face imprisonment for a term that can extend up to three years, or a fine, or both. </p>

                <h5> Intent Matters </h5>
                <p> The law considers the intent behind cheating by personation using a computer resource. </p>
            `),
            amendment : false
        },
        {
            section : `66E`,
            title : `Voyeurism-Capturing or Publishing Private Images`,
            define : (`
                <h5> Offense </h5>
                <p>  Section 66E deals with the offense of voyeurism, specifically the unauthorized capturing, publishing, or transmission of private images. </p>

                <h5> Nature of Offense </h5>
                <p> This section is concerned with the violation of privacy through the capturing or sharing of private images without consent. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 66E may face imprisonment for a term that can extend up to three years, or a fine, or both. </p>

                <h5> Protection of Privacy </h5>
                <p> The law aims to protect individuals from unauthorized intrusion into their private lives through the misuse of technology. </p>
            `),
            amendment : false
        },
        {
            section : `66F`,
            title : `Cyber Terrorism`,
            define : (`
                <h5> Offense </h5>
                <p> Section 66F defines and addresses cyberterrorism, focusing on offenses related to unauthorized access, interception, and damaging data with the intent to threaten the unity, integrity, sovereignty, or security of the country. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 66F may face stringent penalties, including imprisonment for life. </p>

                <h6> SECTION 66F original IT Act 2000 deal with CyberTerrorism-related offenses </h6>
            `),
            amendment : false
        },
        {
            section : `67A`,
            title : `Publishing or Transmiting Sexually Explicit Content`,
            define : (`
                <h5> Offense </h5>
                <p> Section 67A makes it an offense to publish or transmit sexually explicit content in electronic form. </p>

                <h5> Nature of Offense </h5>
                <p> This section is concerned with the dissemination of sexually explicit material through electronic means, including the internet. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 67A may face imprisonment for a term that can extend up to three years, or a fine, or both. </p>

                <h5> Protection from Offensive Content </h5>
                <p> The law aims to protect individuals from the unauthorized sharing or publishing of sexually explicit content without consent. </p>
            `),
            amendment : true
        },
        {
            section : `67B`,
            title : `Punishment for Child Pornography`,
            define : (`
                <h5> Offense </h5>
                <p> Section 67B deals with the offense of publishing or transmitting sexually explicit material involving children in electronic form. </p>

                <h5> Nature of Offense </h5>
                <p> This section is specifically aimed at combating child pornography, addressing the transmission or publication of sexually explicit content involving minors. </p>

                <h5> Penalty </h5>
                <p> Individuals found guilty under Section 67B may face stringent penalties, including imprisonment for a term that may extend up to five years, or a fine, or both. </p>
                
                <h5> Child Protection </h5>
                <p> The law is designed to protect children from exploitation and abuse in the digital realm by imposing severe consequences for those involved in child pornography. </p>
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
        },
        {
            section : ``,
            title : ``,
            define : (`
                <h5> loading </h5>
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
        },
        {
            section : ``,
            title : ``,
            define : (`
                <h5> loading </h5>
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
        },
        {
            section : ``,
            title : ``,
            define : (`
                <h5> loading </h5>
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
