myData = [
[22.599589,72.8205, 'CHARUSAT Campus, Highway, 139, Off, Nadiad - Petlad Rd, Changa, Gujarat 388421, India'],
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.0189275,31.499707, 'AUC Avenue، Road، First New Cairo, Cairo Governorate 11835, Egypt'],
[33.4532165,-112.0719833, 'Phoenix, AZ 85004, USA'],
[33.9094132,-83.4603953, '2500 Daniells Bridge Rd #300, Athens, GA 30606, USA'],
[28.3588163,75.58802039999999, 'Vidya Vihar, Pilani, Rajasthan 333031, India'],
[6.8939569,3.7187158, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9503878,77.5022224, 'Mysore Rd, Jnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5488923,-97.1130573, '1311 S 5th St, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, Bei Tai Ping Zhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[43.76908419999999,-79.4692584, '1000 Finch Ave W, North York, ON M3J 2V5, Canada'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1817955,-117.3237219, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, 'New York, NY 10027, USA'],
[52.0746136,-0.6282833, 'College Rd, Cranfield, Wharley End, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, '166 36 Prague 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3206678,-122.0454878, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.377114,7.494838999999999, 'Universitätsstraße 11, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovska oblast, Ukraine, 49000'],
[38.430691,27.13692, 'No: 144 35210, Alsancak, Cumhuriyet Blv, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.7864448,4.7641329, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.709562,2.1662264, 'CentraleSupélec, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1026877,-79.5023313, '50 Campus Drive, Elon, NC 27244, USA'],
[55.4877012,8.4469108, 'Spangsbjerg Kirkevej 103, 6700 Esbjerg, Denmark'],
[-2.1481458,-79.9644885, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.2466607,6.791998, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7233835,13.0871253, 'Urstein Süd 1, 5412 Puch bei Hallein, Austria'],
[-23.6956191,-46.5469041, 'Av. Pereira Barreto, 400 - Vila Baeta Neves - Centro, São Bernardo do Campo - SP, 09751-000, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529512,-73.4267093, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.870682,-43.9677359, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3749876,-80.10106329999999, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7789743,-72.05553929999999, '40 University Dr, Rindge, NH 03461, USA'],
[26.1543199,91.66316789999999, 'Jalukbari, Guwahati, Assam 781014, India'],
[38.8298118,-77.3073606, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.8748769,4.7077753, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.005603,105.8434525, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954004,24.6641777, 'Raja 4, 12616 Tallinn, Estonia'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4377574,12.3223297, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[40.5120479,-88.9931683, '100 N University St, Normal, IL 61761, USA'],
[23.2114604,72.6841857, 'Indian Institute of Technology, Palaj, Gujarat 382355, India'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8142953,86.44118069999999, 'Police Line Road, Main Campus IIT (ISM, IIT (ISM, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004, India'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[36.8520355,10.2103408, '2 La Charguia، تونس، Tunisia'],
[18.4880037,-69.96249499999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.4448019,78.3497604, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766643,104.2777445, 'Karl Marx St, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4988822,88.3714123, '188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4932682,78.3913929, 'Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.5402232,77.1662154, 'New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, 'Ar Ramtha 3030، Ar-Ramtha, Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[37.4900543,-77.4030348, '1106 New Market Rd, Richmond, VA 23231, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214349, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1455594,-81.33928829999999, '800 E Summit St, Kent, OH 44240, USA'],
[49.9958165,36.241777, 'Marshala Bazhanova St, 17, Kharkiv, Kharkivska oblast, Ukraine, 61000'],
[13.6494654,100.4929052, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[53.2871307,69.40444939999999, 'Kokshetau 020000, Kazakhstan'],
[50.4491699,30.4561487, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4491699,30.4561487, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4420868,30.5104023, 'Volodymyrska St, 60, Kyiv, Ukraine, 01033'],
[46.4926757,-80.9969863, '85 Elm St, Greater Sudbury, ON P3C 1T3, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.8406108,24.0225099, 'Universytetska St, 1, Lviv, Lvivska oblast, Ukraine, 79000'],
[42.701848,-84.4821719, 'Michigan, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.4222397,58.9824868, 'Prospekt Lenina, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.304073,48.8452846, 'Hamadan Province, Malayer, University Blvd, Iran'],
[39.41665649999999,-81.44993509999999, '215 5th St, Marietta, OH 45750, USA'],
[42.360091,-71.09416, '77 Massachusetts Ave, Cambridge, MA 02139, USA'],
[44.8199188,20.4587075, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, 'Michigan, USA'],
[39.88983820000001,32.780086, 'Üniversiteler, Dumlupinar Bulvari 1/6-133, 06800 Çankaya/Ankara, Turkey'],
[37.9537078,-91.7756271, '106, Parker Hall, 300 W 13th St, Rolla, MO 65409, USA'],
[-37.9105599,145.1362485, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-37.9105599,145.1362485, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-38.311211,146.429409, 'Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.6502051,37.6643098, 'Kashira Hwy, 31, Moskva, Russia, 115409'],
[55.9297243,37.5199434, 'Institutskiy Pereulok, 9, Dolgoprudny, Moskovskaya oblast, Russia, 141701'],
[55.70393490000001,37.5286696, 'Ulitsa Kolmogorova, 1, Moskva, Russia, 119991'],
[22.2533781,84.9012363, 'jindal colony, Bisra Rd, National Institute of Technology, Udit Nagar, Rourkela, Odisha 769001, India'],
[40.72951339999999,-73.9964609, 'New York, NY 10003, USA'],
[21.1468555,79.050062, 'Amravati Rd, Ram Nagar, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.395929,75.535856, 'Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.0231787,-77.04763009999999, 'Av. Tupac Amaru 210, Cercado de Lima 15333, Peru'],
[41.772663,-88.1440142, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.3398067,-71.0891717, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.67526699999999, '633 Clark St, Evanston, IL 60208, USA'],
[55.1372019,36.6064735, 'Студенческий городок, 1, Obninsk, Kaluzhskaya oblast, Russia, 249034'],
[36.8858594,-76.3057051, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.2573474,-121.7849109, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[19.4436005,-70.6843785, 'Autopista Duarte Km 1 1/2, Santiago De Los Caballeros 51000, Dominican Republic'],
[35.8012314,51.5028533, 'Tehran Province, Tehran, اتوبان ارتش کوی نفت, Nakhl St, Iran'],
[40.7982133,-77.8599084, 'State College, PA 16801, USA'],
[45.4784315,9.228342399999999, 'Piazza Leonardo da Vinci, 32, 20133 Milano MI, Italy'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.7536393,21.2251615, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0182619,79.8568461, 'Pondicherry University, Chinna Kalapet, Kalapet, Puducherry 605014, India'],
[-33.44180680000001,-70.6399544, 'Av Libertador Bernardo OHiggins 340, Santiago, Región Metropolitana, Chile'],
[45.5111471,-122.6834235, '1825 SW Broadway, Portland, OR 97201, USA'],
[39.77481909999999,-86.17764299999999, '420 University Blvd, Indianapolis, IN 46202, USA'],
[12.9237228,77.4987012, 'Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059, India'],
[42.7297628,-73.67888839999999, '110 8th St, Troy, NY 12180, USA'],
[41.0819323,-74.1758157, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0844955,-77.6749311, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285131,79.0184111, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989199, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.929491,30.2966081, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[60.0076235,30.3731954, 'Politekhnicheskaya Ulitsa, 29, Sankt-Peterburg, Russia, 195251'],
[37.7241492,-122.4799405, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.0252201,121.4337784, 'China, Shanghai Shi, Minhang Qu, 东川路 邮政编码: 200240'],
[35.703605,51.35153099999999, 'Tehran, خیابان آزادی، تهران بزرگ،، Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3395854,-122.6743811, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[39.6602386,-105.0279355, '3001 S Federal Blvd, Denver, CO 80236, USA'],
[44.4332166,26.1009718, 'Strada Ion Ghica 13, București 030045, Romania'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.45139280000001,-76.5425285, '7060 NY-104, Oswego, NY 13126, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[42.0590153,-71.0806276, '320 Washington St, North Easton, MA 02357, USA'],
[59.4387321,24.7713836, 'Narva maantee 25, 10120 Tallinn, Estonia'],
[59.3959451,24.6710596, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4498286,23.8589986, 'Korkeakoulunkatu 7 Kampusareena, 33720 Tampere, Finland'],
[30.7924391,30.9991409, 'El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate, Egypt'],
[32.7474661,-97.3278753, '1500 Houston St, Fort Worth, TX 76102, USA'],
[46.769299,23.585613, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[53.2133951,6.5608166, 'Praediniussingel 10, 9711 AG Groningen, Netherlands'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[12.9452892,80.207843, 'Velachery Main Rd, Narayanapuram, Pallikaranai, Chennai, Tamil Nadu 600100, India'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676604,28.1992624, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.0516801,-84.49334189999999, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4085371,-71.1182729, '419 Boston Ave, Medford, MA 02155, USA'],
[37.8718992,-122.2585399, 'Berkeley, CA, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[31.32576,-92.49024, '3412 England Dr, Alexandria, LA 71303, USA'],
[39.5944197,-104.9024568, '7400 E Arapahoe Rd # 10, Centennial, CO 80112, USA'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[40.785212,-77.823071, '101 Regent Ct, State College, PA 16801, USA'],
[37.6691785,-97.3860243, 'Walker W St, Wichita, KS 67213, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[10.4883502,-66.8891696, 'Caracas, Capital District, Venezuela'],
[40.4454368,-3.7299424, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[11.2234838,-74.1708905, 'Calle 30, Santa Marta, Magdalena, Colombia'],
[19.3228313,-99.18657739999999, 'University City, Coyoacán, 04510 Mexico City, CDMX, Mexico'],
[9.9986898,-84.11118979999999, 'Avenida 1, Calle 9 Heredia 86, Heredia, 3000, Costa Rica'],
[4.6381938,-74.08404639999999, 'Cra 45, Bogotá, Colombia'],
[-16.500656,-68.134299, 'Calle Colombia 154, La Paz, Bolivia'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[38.9934998,-3.9254365, 'Rectorado UCLM, Calle Altagracia, 50, 13001 Ciudad Real, Cdad. Real, Spain'],
[4.601458099999999,-74.0661334, 'Cra. 1 #18a 12, Bogotá, Cundinamarca, Colombia'],
[19.0303925,-98.1903494, 'Universidad de Oriente, Avenida 21 Oriente 1816, Zona Sin Asignación de Nombre de Col 39, Azcarate, 72501 Puebla, Pue., Mexico'],
[14.5873005,-90.55336129999999, '11 Av, Cdad. de Guatemala 01012, Guatemala'],
[41.6569271,-4.7140547, 'C/Plaza de Santa Cruz, 8, 47002 Valladolid, Spain'],
[4.864758,-74.05091800000001, 'Chía, Cundinamarca, Colombia'],
[14.603762,-90.48924799999999, '18 Avenida 11-95 Guatemala, Cdad. de Guatemala 01015, Guatemala'],
[-7.1377579,-34.8458995, 'Campus I - Lot. Cidade Universitaria, João Pessoa - PB, 58051-900, Brazil'],
[-27.6000837,-48.5194214, 'R. Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC, 88040-900, Brazil'],
[-30.0332408,-51.2207273, 'Av. Paulo Gama, 110 Secretaria de Comunicação Social - 8º andar - Reitoria - Farroupilha, Porto Alegre - RS, 90040-060, Brazil'],
[-22.8617077,-43.2234035, 'Av. Pedro Calmon, 550 - Cidade Universitária da Universidade Federal do Rio de Janeiro, Rio de Janeiro - RJ, 21941-901, Brazil'],
[38.7368192,-9.138705, 'Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal'],
[-23.5613991,-46.7307891, 'Butanta, São Paulo - State of São Paulo, Brazil'],
[41.5607319,-8.3962368, 'R. da Universidade, 4710-057 Braga, Portugal'],
[-7.7713847,110.3774998, 'Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia'],
[39.4807985,-0.3406299, 'Camí de Vera, s/n, 46022 València, Valencia, Spain'],
[50.66968749999999,4.6155909, 'Place de lUniversité 1, 1348 Ottignies-Louvain-la-Neuve, Belgium'],
[53.3067494,-6.221033599999999, 'University College Dublin, Belfield, Dublin 4, Ireland'],
[48.14966,11.5678602, 'Arcisstraße 21, 80333 München, Germany'],
[41.0770227,-81.5114462, '302 E Buchtel Ave, Akron, OH 44325, USA'],
[53.5232189,-113.5263186, '116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada'],
[52.35581819999999,4.955726299999999, '1012 WX Amsterdam, Netherlands'],
[36.0686895,-94.1748471, 'Fayetteville, AR 72701, USA'],
[37.968196,23.7786871, 'Athens 157 72, Greece'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[52.4508168,-1.9305135, 'Birmingham, UK'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[52.2042666,0.1149085, 'The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK'],
[35.657506,-97.4709491, '100 N University Dr, Edmond, OK 73034, USA'],
[41.7886079,-87.5987133, '5801 S Ellis Ave, Chicago, IL 60637, USA'],
[39.1329219,-84.51495039999999, '2600 Clifton Ave, Cincinnati, OH 45221, USA'],
[40.00758099999999,-105.2659417, 'Boulder, CO 80309, USA'],
[41.8077414,-72.2539805, 'Storrs, CT 06269, USA'],
[32.8449929,-96.9186842, '1845 E Northgate Dr, Irving, TX 75062, USA'],
[47.5536257,21.6215102, 'Debrecen, Egyetem tér 1, 4032 Hungary'],
[39.6779504,-75.7506114, 'Newark, DE 19716, USA'],
[49.5978804,11.0045507, 'Schloßplatz 4, 91054 Erlangen, Germany'],
[51.87772589999999,0.9472069000000001, 'Wivenhoe Park, Colchester CO4 3SQ, UK'],
[38.573181,-7.904595100000001, 'Largo dos Colegiais 2, 7000-803 Évora, Portugal'],
[29.6436325,-82.3549302, 'Gainesville, FL 32611, USA'],
[57.6981719,11.971878, '405 30 Gothenburg, Sweden'],
[54.0949653,13.374584, 'Domstraße 11, 17489 Greifswald, Germany'],
[53.5665641,9.984619499999999, '20146 Hamburg, Germany'],
[21.296939,-157.8171118, '2500 Campus Rd, Honolulu, HI 96822, USA'],
[60.1726348,24.9510419, 'Yliopistonkatu 4, 00100 Helsinki, Finland'],
[8.4928414,4.5962225, 'No C2, Studiopedia, Off Ministry of Health, Fate Tanke Rd, behind Lgea Primary School, Ilorin, Nigeria'],
[9.684855599999999,80.0220413, 'Sir. Pon, Ramanathan Rd, Jaffna, Sri Lanka'],
[38.9543439,-95.2557961, '1450 Jayhawk Blvd, Lawrence, KS 66045, USA'],
[8.5032375,76.9473306, 'University of Kerala Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034, India'],
[51.5229378,-0.1308206, 'Senate House, Malet St, Bloomsbury, London WC1E 7HU, UK'],
[36.7199495,-4.4161391, 'Av. de Cervantes, 2, 29016 Málaga, Spain'],
[3.1209046,101.6538414, 'Jalan Universiti, 50603 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[42.2780436,-83.7382241, '500 S State St, Ann Arbor, MI 48109, USA'],
[38.9403808,-92.32773750000001, 'Columbia, MO 65211, USA'],
[6.7951276,79.90086699999999, 'Bandaranayake Mawatha, Moratuwa 10400, Sri Lanka'],
[18.9293321,72.8310376, 'Mahatma Gandhi Road, Kolivery Village, University of Mumbai,Vidya Nagari, Kala Ghoda, Fort, Mumbai, Maharashtra 400032, India'],
[40.8201966,-96.70047629999999, '1400 R St, Lincoln, NE 68588, USA'],
[40.8201966,-96.70047629999999, '1400 R St, Lincoln, NE 68588, USA'],
[41.2907061,-72.9615183, '300 Boston Post Rd, West Haven, CT 06516, USA'],
[-33.917347,151.2312675, 'Sydney NSW 2052, Australia'],
[41.7055716,-86.2353388, 'Notre Dame, IN 46556, USA'],
[35.2058936,-97.4457137, '660 Parrington Oval, Norman, OK 73019, USA'],
[45.42310639999999,-75.68313289999999, '75 Laurier Ave. E, Ottawa, ON K1N 6N5, Canada'],
[51.7548164,-1.2543668, 'Oxford OX1 2JD, UK'],
[45.406766,11.8774462, 'Via 8 Febbraio 1848, 2, 35122 Padova PD, Italy'],
[45.186733,9.1558938, 'Corso Str. Nuova, 65, 27100 Pavia PV, Italy'],
[39.9522188,-75.1932137, 'Philadelphia, PA 19104, USA'],
[37.9415137,23.6528681, 'Karaoli ke Dimitriou 80, Pireas 185 34, Greece'],
[-25.7545492,28.2314476, 'Lynnwood Rd, Hatfield, Pretoria, 0002, South Africa'],
[40.9613376,-5.666925099999999, '37008 Salamanca, Spain'],
[-23.5613991,-46.7307891, 'Butanta, São Paulo - State of São Paulo, Brazil'],
[43.8568576,18.4189278, 'Obala Kulina bana 7/II, Sarajevo 71000, Bosnia and Herzegovina'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[58.3810843,26.7198659, 'Ülikooli 18, 50090 Tartu, Estonia'],
[35.7022192,51.39573069999999, 'Tehran Province, Tehran, Enghelab Square، Iran'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[43.6628917,-79.39565640000001, '27 Kings College Cir, Toronto, ON M5S, Canada'],
[48.5294782,9.043773999999999, 'Geschwister-Scholl-Platz, 72074 Tübingen, Germany'],
[52.2387387,6.8505927, 'Drienerlolaan 5, 7522 NB Enschede, Netherlands'],
[40.7649368,-111.8421021, '201 Presidents Cir, Salt Lake City, UT 84112, USA'],
[48.21318549999999,16.3600504, 'Universitätsring 1, 1010 Wien, Austria'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[47.65533509999999,-122.3035199, 'Seattle, WA 98195, USA'],
[47.7589,-122.1906495, '18115 Campus Way NE, Bothell, WA 98011, USA'],
[43.4722854,-80.5448576, '200 University Ave W, Waterloo, ON N2L 3G1, Canada'],
[30.5491387,-87.21858619999999, '11000 University Pkwy, Pensacola, FL 32514, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[31.47898409999999,74.2661627, 'Canal Rd, Quaid-i-Azam Campus, Lahore, Punjab, Pakistan'],
[-26.1928836,28.0304733, '1 Jan Smuts Ave, Johannesburg, 2000, South Africa'],
[54.7224678,25.3376688, 'Saulėtekio al. 11, Vilnius 10221, Lithuania'],
[54.6825757,25.2876469, 'Universiteto g. 3, Vilnius 01513, Lithuania'],
[37.5483122,-77.4526805, '907 Floyd Ave, Richmond, VA 23284, USA'],
[37.22838429999999,-80.42341669999999, 'Blacksburg, VA 24061, USA'],
[18.464077,73.867619, '666, Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037, India'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[46.7319225,-117.1542121, 'Pullman, WA, USA'],
[42.3590346,-83.07087369999999, 'Wayne State, Detroit, MI, USA'],
[41.1916133,-111.9440945, '3848 Harrison Blvd, Ogden, UT 84408, USA'],
[45.47957160000001,-73.60307829999999, '235-4823 Rue Sherbrooke Ouest, Westmount, QC H3Z 1G7, Canada'],
[40.6849285,-111.8700525, '4001 S 700 E #300, Salt Lake City, UT 84107, USA'],
[29.9641088,-90.107647, '1 Drexel Dr, New Orleans, LA 70125, USA'],
[30.5883084,31.4831937, '44519 طريق الأسماعيلية - الزقازيق، Shaibet an Nakareyah, Zagazig 2, Ash Sharqia Governorate, Egypt'],
[33.6850236,73.05474199999999, '2 Ashfaq Ahmed Rd, H-8/2 H 8/2 H-8, Islamabad, Islamabad Capital Territory 44000, Pakistan'],
[33.4532165,-112.0719833, 'Phoenix, AZ 85004, USA'],
[-18.9494274,-45.4934107, 'Gerais, Paineiras - MG, 35622-000, Brazil'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[40.4454368,-3.7299424, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[38.28923,21.785369, 'Panepistimioupoli Patron 265 04, Greece'],
[45.406766,11.8774462, 'Via 8 Febbraio 1848, 2, 35122 Padova PD, Italy']
];
