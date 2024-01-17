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
            section : `1`,
            title : `Short title, extent, commencement, and application`,
            define : (`
                <h5> Short Title </h5>
                <p> This section provides the official short name or title by which the Act can be referred to, making it easier for people to identify and cite. </p>
                
                <h5> Extent </h5>
                <p> It specifies the geographical scope or the areas where the provisions of the Act are applicable. This indicates the jurisdiction to which the law applies. </p> 
                
                <h5> Commencement </h5>
                <p> This part indicates the date on which the Act comes into effect, marking the beginning of its legal validity. </p>
                
                <h5> Application </h5>
                <p> It outlines the subjects or areas to which the rules and regulations of the Act are relevant. This defines the scope of the Act in terms of its practical application. </p>
            `),
            amendment : false
        },
        {
            section : `2`,
            title : `Definitions of various terms used in the Act.`,
            define : (`
                <h5> Definitions </h5>
                <p> Section 2 begins by providing definitions for key terms used throughout the Information Technology Act.

                <h5> Clarity </h5>
                <p> It aims to bring clarity to the interpretation of the Act by explaining the meanings of specific words or phrases in a legal context.</p>

                <h5> Common Terms </h5>
                <p> The definitions often cover terms commonly used in the realm of information technology, electronic communication, and cyber law.</p>

                <h5> Interpretation </h5>
                <p> This section helps in the interpretation of the Act by ensuring that everyone involved understands the intended meanings of the terms used.
            `),
            amendment : false
        },
        {
            section : `3`,
            title : ` Provides legal recognition for electronic records and digital signatures`,
            define : (`
                 <h5> Controller Appointment </h5>
                 <p> This section usually outlines the appointment of a Controller of Certifying Authorities, who is responsible for overseeing and regulating digital signatures and certification authorities.</p>

                <h5>Other Officers</h5>
                <p> Besides the Controller, the section might mention the appointment of other officers who play roles in the administration and enforcement of the Act.</p>

                <h5>Regulatory Framework</h5> 
                <p>It establishes the regulatory framework for digital signatures, aiming to ensure their validity and security in electronic transactions.</p>
            `),
            amendment : false
        },
        {
            section : `4`,
            title : `Legal recognition of electronic contracts.`,
            define : (`
                <h5> Legal Recognition</h5>
                <p>Section 4 typically states that electronic contracts are legally valid and enforceable, similar to traditional paper contracts.</p>

                <h5> Electronic Form Acceptance</h5>
                <p> It establishes that contracts formed through electronic means, such as emails or digital signatures, have the same legal standing as contracts formed through traditional, physical means.</p>

                <h5> Intent to Legalize E-Contracts</h5>
                <p> The section reflects an intent to facilitate and encourage the use of electronic communication and contracts in legal matters.</p>
            `),
            amendment : false
        },
        {
            section : `5`,
            title : `Legal recognition of electronic documents`,
            define : (`
                <h5> Legal Validity</h5>
                <p> Section 5 typically states that electronic documents are recognized as legally valid and have the same legal status as physical documents.</p>

                <h5> Electronic Form Acceptance</h5>
                <p>It establishes that information, records, or documents in electronic form are deemed acceptable in legal proceedings.</p>

                <h5>Intent to Promote E-Documentation</h5>
                <p>The section reflects an intent to encourage the use of electronic documents in various transactions and legal matters.</p>
            `),
            amendment : false
        },
        {
            section : '6',
            title : `Use of electronic records and digital signatures in Government and its agencies`,
            define : (`
                <h5> Government Recognition </h5>
                <p> Section 6 typically indicates that electronic records and digital signatures are recognized and accepted by the government for official transactions.</p>

                <h5>Digital Signatures Validity</h5>
                <p>It establishes the legal validity of digital signatures in government-related communications and documentation.</p>

                <h5>Encouragement of E-Governance</h5>
                <p>The section reflects an intent to promote the use of electronic records and digital signatures in government processes, contributing to the development of e-governance.</p>
            `),
            amendment : false
        },
        {
            section :`7`,
            title : `Retention of electronic records`,
            define : (`
                <h5>Retention Requirement</h5>
                <p>Section 7 typically outlines the obligation to retain electronic records for a certain period.</p>

                <h5>Preservation of Records</h5>
                <p>It may specify the duration for which electronic records need to be preserved, ensuring their availability for legal or regulatory purposes.</p>

                <h5>Compliance with Standards</h5>
                <p>The section may prescribe standards or procedures to be followed for the retention of electronic records.</p>
            `),
            amendment : false
        }
        ,
        {
            section : `8`,
            title : `Publication of rules, regulations, and bye-laws in electronic form`,
            define : (`
                <h5> Electronic Publication</h5>
                <p>Section 8 typically addresses the method by which rules, regulations, or bye-laws can be officially published.</p>

                <h5>Acceptance of Electronic Form</h5>
                <p>It establishes that the electronic form of publication is recognized as valid, ensuring that digital versions of official documents have legal standing.</p>

                <h5>Promotion of E-Governance</h5>
                <p>The section may align with the broader goal of promoting e-governance by encouraging the use of electronic formats for official publications.</p>
            `),
            amendment : false
        }
        ,
        {
            section : `9`,
            title : `Sections 6, 7, and 8 to apply for the purpose of the IT Act`,
            define : (`
                <h5>Scope of Application</h5>
                <p>Section 9 typically defines the areas or subjects to which the provisions of the Information Technology Act apply.</p>

                <h5>Clarification of Applicability</h5>
                <p>It may clarify the circumstances or entities covered by the Act, ensuring a clear understanding of its scope.</p>

                <h5>Consistency in Application</h5>
                <p>The section helps in providing a consistent and standardized application of the law to relevant scenarios.</p>
            `),
            amendment : false
        },
        {
            section : '10',
            title : `Power to make rules by the appropriate government`,
            define : (`
                <h5>Rule-Making Authority</h5>
                <p>Section 10 typically grants the appropriate government the authority to make rules under the Information Technology Act.</p>

                <h5>Delegated Legislation</h5>
                <p>It empowers the government to create detailed regulations or rules to supplement and implement the broader provisions of the Act.</p>

                <h5>Flexibility</h5>
                <p>The section provides flexibility for the government to adapt and specify procedural details, standards, or requirements as needed.</p>
            `),
            amendment : false
        },
        {
            section : `11`,
            title : `Power to make rules by the Central Government in respect of digital signature`,
            define : (`
                <h5>Rule-Making Authority Specific to Digital Signatures<?h5>
                <p>Section 11 typically grants the Central Government the authority to make rules specifically related to digital signatures.</p>

                <h5>Regulation of Digital Signature<h5>
                <p>It empowers the government to establish detailed regulations, standards, or procedures concerning the use, verification, and management of digital signatures.</p>

                <h5>Ensuring Security and Validity</h5>
                <p>The section aims to ensure the security and legal validity of digital signatures by providing a framework for their proper use.</p>
            `),
            amendment : false
        },
        {
            section : `12`,
            title : `Directions for interception or monitoring or decryption of information`,
            define : (`
                <h5>Government Authority</h5>
                <p>Section 12 typically outlines the authority of the government to issue directions for interception, monitoring, or decryption of electronic information.</p>

                <h5>National Security or Public Order</h5>
                <p>The section may specify that such directions can be given in the interest of national security, defense, or maintaining public order.</p>

                <h5>Lawful Process</h5>
                <p>It may outline the legal process and conditions under which these actions can be taken to ensure compliance with constitutional and legal principles.</p>
            `),
            amendment : false
        },
        {
            section : `13`,
            title : `Penalty for improper use of the unique identification feature`,
            define : (`
                <h5>Protection of Unique Identification Feature</h5>
                <p>Section 13 typically addresses the misuse or improper use of a unique identification feature.</p>

                <h5>Legal Consequences<h5>
                <p>It may specify penalties or legal consequences for individuals or entities found guilty of misusing or improperly using unique identification features defined under the Act.</p>

                <h5>Deterrence Against Misuse</h5>
                <p>The section aims to deter and penalize actions that compromise the integrity or misuse unique identification elements.</p>
            `),
            amendment : false
        },
        {
            section : `14`,
            title : `Power to delegate`,
            define : (``),
            amendment : false
        },
        {
            section : `15`,
            title : `Amendment of Act 45 of 1860`,
            define : (``),
            amendment : false
        },
        {
            section : `16`,
            title : `Act to apply for offences or contraventions committed outside India`,
            define : (``),
            amendment : false
        },
        {
            section : `17`,
            title : `Power of the Central Government to take measures to regulate public key`,
            define : (``),
            amendment : false
        },
        {
            section : `18`,
            title : `Digital Signature Certificates with Controller's approval`,
            define : (``),
            amendment : false
        },
        {
            section : `19`,
            title : `Certifying Authority to follow certain procedures`,
            define : (``),
            amendment : false
        },
        {
            section : `20`,
            title : `Controller to act as repository`,
            define : (``),
            amendment : false
        },
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
            section : `69`,
            title : `Interception or Monitoring Power`,
            define : (`
                <h5> Power to Intercept </h5>
                <p> Section 69 grants the government the power to issue directions for the interception or monitoring of information through computer resources. <p>
                
                <h5> National Security </h5>
                <p> This power is often invoked in matters of national security or to prevent certain offenses. </p>
                
                <h5> Safeguards </h5>
                <p> While allowing interception, the section also includes safeguards to ensure that the authority exercises this power lawfully, and it specifies the procedure to be followed. </p>
                
                <h5> Secrecy </h5>
                <p>  Proceedings related to interception directions are typically kept confidential. </p>
                
            `),
            amendment : true
        },
        {
            section : `72`,
            title : `Breach of Confidentiality`,
            define : (`
                <h5> Offense </h5>
                <p> Section 72 makes it an offense to breach the confidentiality of sensitive personal information. </p>
                
                <h5> Unauthorized Disclosure </h5>
                <p>  It addresses the unauthorized disclosure of personal information that one has access to by virtue of their position. </p>
            `),
            amendment : true
        },
        {
            section : `79`,
            title : `Protection for Intermediaries`,
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
